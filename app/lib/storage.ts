import { getSupabase } from "./supabase";

export const AVATARS_BUCKET = "avatars";
export const MAX_AVATAR_BYTES = 2 * 1024 * 1024;
export const AVATAR_URL_TTL_SECONDS = 60 * 60;

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

function message(error: unknown, fallback: string) {
  if (error && typeof error === "object" && "message" in error) {
    const text = String((error as { message: unknown }).message);
    if (text) return text;
  }
  return fallback;
}

export function validateAvatarFile(file: File): string | null {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return "Chỉ chấp nhận ảnh JPG, PNG, WEBP hoặc GIF.";
  }
  if (file.size > MAX_AVATAR_BYTES) {
    return "Ảnh không được vượt quá 2MB.";
  }
  return null;
}

function extensionOf(file: File): string {
  const fromName = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (/^[a-z0-9]{2,5}$/.test(fromName)) return fromName;
  return file.type.split("/").pop() ?? "jpg";
}

export async function uploadAvatar(
  registrationId: string,
  file: File,
): Promise<string> {
  const path = `${registrationId}/${Date.now()}.${extensionOf(file)}`;

  const { error } = await getSupabase()
    .storage.from(AVATARS_BUCKET)
    .upload(path, file, {
      cacheControl: String(AVATAR_URL_TTL_SECONDS),
      contentType: file.type,
      upsert: false,
    });

  if (error) throw new Error(message(error, "Không thể tải ảnh lên."));
  return path;
}

export async function removeAvatars(paths: string[]): Promise<void> {
  const targets = paths.filter((path): path is string => Boolean(path));
  if (targets.length === 0) return;

  const { error } = await getSupabase()
    .storage.from(AVATARS_BUCKET)
    .remove(targets);

  if (error) throw new Error(message(error, "Không thể xóa ảnh."));
}

export async function createAvatarUrlMap(
  entries: { id: string; avatar_path: string | null }[],
): Promise<Record<string, string>> {
  const withPath = entries.filter(
    (entry): entry is { id: string; avatar_path: string } =>
      Boolean(entry.avatar_path),
  );
  if (withPath.length === 0) return {};

  const { data, error } = await getSupabase()
    .storage.from(AVATARS_BUCKET)
    .createSignedUrls(
      withPath.map((entry) => entry.avatar_path),
      AVATAR_URL_TTL_SECONDS,
    );

  if (error) throw new Error(message(error, "Không thể tải ảnh."));

  const byPath = new Map(
    (data ?? []).map((item) => [item.path, item.signedUrl] as const),
  );

  const map: Record<string, string> = {};
  for (const entry of withPath) {
    const url = byPath.get(entry.avatar_path);
    if (url) map[entry.id] = url;
  }
  return map;
}
