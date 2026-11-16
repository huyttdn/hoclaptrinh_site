-- ============================================================================
--  Website lập trình cho người mới — Supabase schema
--  Dán toàn bộ file này vào Supabase → SQL Editor → New query → Run.
-- ============================================================================

-- 1. Bảng lưu đăng ký ---------------------------------------------------------
create table if not exists public.registration (
  id          uuid primary key default gen_random_uuid(),
  full_name   text        not null check (char_length(btrim(full_name)) >= 2),
  phone       text        not null check (phone ~ '^0[0-9]{9}$'),
  created_at  timestamptz not null default now()
);

comment on table  public.registration is 'Danh sách học viên đăng ký nhận thông tin.';
comment on column public.registration.phone is 'Số điện thoại Zalo: 10 chữ số, bắt đầu bằng 0.';

create index if not exists registration_created_at_idx
  on public.registration (created_at desc);

-- 2. Bật Row Level Security --------------------------------------------------
alter table public.registration enable row level security;

-- Quyền ở mức bảng (RLS bên dưới mới là lớp kiểm soát thực sự).
grant usage on schema public to anon, authenticated;
grant select, insert, delete on public.registration to anon, authenticated;

-- 3. Chính sách truy cập -----------------------------------------------------
-- Ai cũng có thể gửi đăng ký (form công khai).
drop policy if exists "registration_insert_public" on public.registration;
create policy "registration_insert_public"
  on public.registration
  for insert
  to anon, authenticated
  with check (true);

-- Chỉ người đã đăng nhập (admin) được xem danh sách.
drop policy if exists "registration_select_admin" on public.registration;
create policy "registration_select_admin"
  on public.registration
  for select
  to authenticated
  using (true);

-- Chỉ người đã đăng nhập (admin) được xóa.
drop policy if exists "registration_delete_admin" on public.registration;
create policy "registration_delete_admin"
  on public.registration
  for delete
  to authenticated
  using (true);

-- 4. Bucket lưu ảnh đại diện quản trị (Supabase Storage) ---------------------
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
