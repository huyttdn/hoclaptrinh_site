-- ============================================================================
--  Migration 0003 — Ảnh đại diện cho tài khoản quản trị
--  Chạy file này nếu bạn ĐÃ tạo bảng registration / bucket "avatars" trước đó.
--  (Nếu chưa, chỉ cần chạy supabase/schema.sql là đủ.)
--  Dán toàn bộ file này vào Supabase → SQL Editor → New query → Run.
-- ============================================================================

-- 1. Bỏ cột ảnh đại diện của từng học viên (không còn sử dụng) ----------------
alter table public.registration
  drop column if exists avatar_path;

-- 2. Đảm bảo bucket "avatars" tồn tại (nay dùng cho ảnh đại diện quản trị) ----
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  false,
  2097152,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
  set public             = excluded.public,
      file_size_limit    = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- 3. Chính sách Storage: chỉ tài khoản đã đăng nhập (admin) -------------------
drop policy if exists "avatars_select_admin" on storage.objects;
create policy "avatars_select_admin"
  on storage.objects
  for select
  to authenticated
  using (bucket_id = 'avatars');

drop policy if exists "avatars_insert_admin" on storage.objects;
create policy "avatars_insert_admin"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'avatars');

drop policy if exists "avatars_update_admin" on storage.objects;
create policy "avatars_update_admin"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'avatars')
  with check (bucket_id = 'avatars');

drop policy if exists "avatars_delete_admin" on storage.objects;
create policy "avatars_delete_admin"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'avatars');
