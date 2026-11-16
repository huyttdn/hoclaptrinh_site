import { getSupabase } from "./supabase";

export const PHONE_PATTERN = /^0\d{9}$/;

export type Registration = {
  id: string;
  full_name: string;
  phone: string;
  created_at: string;
};

export function isValidPhone(phone: string) {
  return PHONE_PATTERN.test(phone.trim());
}

function message(error: unknown, fallback: string) {
  if (error && typeof error === "object" && "message" in error) {
    const text = String((error as { message: unknown }).message);
    if (text) return text;
  }
  return fallback;
}

export async function createRegistration(input: {
  fullName: string;
  phone: string;
}): Promise<void> {
  const { error } = await getSupabase()
    .from("registration")
    .insert({ full_name: input.fullName.trim(), phone: input.phone.trim() });

  if (error) throw new Error(message(error, "Không thể lưu đăng ký."));
}

export async function listRegistrations(options: {
  page: number;
  pageSize: number;
}): Promise<{ rows: Registration[]; count: number }> {
  const from = (options.page - 1) * options.pageSize;
  const to = from + options.pageSize - 1;

  const { data, error, count } = await getSupabase()
    .from("registration")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw new Error(message(error, "Không thể tải danh sách."));
  return { rows: (data ?? []) as Registration[], count: count ?? 0 };
}

export async function listAllRegistrations(): Promise<Registration[]> {
  const pageSize = 1000;
  const all: Registration[] = [];

  for (let page = 0; ; page += 1) {
    const from = page * pageSize;
    const to = from + pageSize - 1;

    const { data, error } = await getSupabase()
      .from("registration")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) throw new Error(message(error, "Không thể tải danh sách."));

    const rows = (data ?? []) as Registration[];
    all.push(...rows);
    if (rows.length < pageSize) break;
  }

  return all;
}

export async function countRegistrations(): Promise<number> {
  const { count, error } = await getSupabase()
    .from("registration")
    .select("id", { count: "exact", head: true });

  if (error) throw new Error(message(error, "Không thể đếm đăng ký."));
  return count ?? 0;
}

export async function deleteRegistration(id: string): Promise<void> {
  const { error } = await getSupabase()
    .from("registration")
    .delete()
    .eq("id", id);

  if (error) throw new Error(message(error, "Không thể xóa đăng ký."));
}

export async function deleteAllRegistrations(): Promise<void> {
  const { error } = await getSupabase()
    .from("registration")
    .delete()
    .not("id", "is", null);

  if (error) throw new Error(message(error, "Không thể xóa tất cả đăng ký."));
}
