-- ============================================================================
--  Migration 0002 — Ảnh đại diện (Supabase Storage bucket "avatars")
--  Chạy file này nếu bạn ĐÃ tạo bảng registration trước đó.
--  (Nếu chưa, chỉ cần chạy supabase/schema.sql là đủ.)
--  Dán toàn bộ file này vào Supabase → SQL Editor → New query → Run.
-- ============================================================================

-- 1. Thêm cột lưu đường dẫn ảnh vào bảng đăng ký ------------------------------
alter table public.registration
  add column if not exists avatar_path text;

comment on column public.registration.avatar_path is
  'Đường dẫn ảnh đại diện trong bucket "avatars" (có thể null).';

-- 2. Tạo bucket riêng tư cho ảnh đại diện -------------------------------------
-- Bucket riêng tư: chỉ admin (đã đăng nhập) đọc/ghi, hiển thị qua signed URL.
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

-- 3. Chính sách truy cập Storage: chỉ tài khoản đã đăng nhập (admin) ----------
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
