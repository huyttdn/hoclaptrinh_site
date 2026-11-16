-- ============================================================================
--  Website lập trình cho người mới — Supabase schema
--  Dán toàn bộ file này vào Supabase → SQL Editor → New query → Run.
-- ============================================================================

-- 1. Bảng lưu đăng ký ---------------------------------------------------------
create table if not exists public.registration (
  id         uuid primary key default gen_random_uuid(),
  full_name  text        not null check (char_length(btrim(full_name)) >= 2),
  phone      text        not null check (phone ~ '^0[0-9]{9}$'),
  created_at timestamptz not null default now()
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
