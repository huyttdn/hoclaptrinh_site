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

export function getAdminAvatarPath(
  user: { user_metadata?: Record<string, unknown> } | null | undefined,
): string | null {
  const value = user?.user_metadata?.avatar_path;
  return typeof value === "string" && value.length > 0 ? value : null;
}

async function uploadObject(path: string, file: File): Promise<void> {
  const { error } = await getSupabase()
    .storage.from(AVATARS_BUCKET)
    .upload(path, file, {
      cacheControl: String(AVATAR_URL_TTL_SECONDS),
      contentType: file.type,
      upsert: false,
    });

  if (error) throw new Error(message(error, "Không thể tải ảnh lên."));
}

async function removeObject(path: string | null | undefined): Promise<void> {
  if (!path) return;

  const { error } = await getSupabase()
    .storage.from(AVATARS_BUCKET)
    .remove([path]);

  if (error) throw new Error(message(error, "Không thể xóa ảnh."));
}

export async function createAvatarUrl(path: string): Promise<string> {
  const { data, error } = await getSupabase()
    .storage.from(AVATARS_BUCKET)
    .createSignedUrl(path, AVATAR_URL_TTL_SECONDS);

  if (error || !data) throw new Error(message(error, "Không thể tải ảnh."));
  return data.signedUrl;
}

export async function updateAdminAvatar(file: File): Promise<string> {
  const { data, error } = await getSupabase().auth.getUser();
  if (error || !data.user) throw new Error("Phiên đăng nhập đã hết hạn.");

  const previous = getAdminAvatarPath(data.user);
  const path = `${data.user.id}/${Date.now()}.${extensionOf(file)}`;

  await uploadObject(path, file);

  const { error: saveError } = await getSupabase().auth.updateUser({
    data: { avatar_path: path },
  });

  if (saveError) {
    await removeObject(path).catch(() => undefined);
    throw new Error(message(saveError, "Không thể lưu ảnh đại diện."));
  }

  if (previous && previous !== path) {
    await removeObject(previous).catch(() => undefined);
  }

  return path;
}

export async function deleteAdminAvatar(): Promise<void> {
  const { data } = await getSupabase().auth.getUser();
  const previous = getAdminAvatarPath(data.user);

  const { error } = await getSupabase().auth.updateUser({
    data: { avatar_path: null },
  });

  if (error) throw new Error(message(error, "Không thể xóa ảnh đại diện."));

  await removeObject(previous).catch(() => undefined);
}
