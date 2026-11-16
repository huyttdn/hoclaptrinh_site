# Học Code — Website học lập trình cho người mới

Website giới thiệu và đăng ký học lập trình dành cho người mới bắt đầu, giao
diện tiếng Việt, responsive. Người dùng điền họ tên và số điện thoại Zalo, dữ
liệu được lưu vào Supabase. Quản trị viên đăng nhập để xem danh sách, phân
trang, xóa từng bản ghi hoặc xóa tất cả và xuất ra file Excel.

## Công nghệ sử dụng

- React 19 + React Router 8 (framework mode, `ssr: false`)
- TypeScript
- Tailwind CSS 4
- Supabase (database, authentication)
- ExcelJS (xuất file `.xlsx`)
- Vitest, Testing Library, jsdom

## Bắt đầu

```bash
npm install
npm run dev
```

Dev server chạy tại `http://localhost:5173`.

> Để chức năng đăng ký hoạt động, bạn cần cấu hình Supabase (xem bên dưới).

## Cấu hình Supabase

### 1. Tạo bảng và phân quyền

Mở Supabase → **SQL Editor** → **New query**, dán toàn bộ nội dung file
[`supabase/schema.sql`](./supabase/schema.sql) và bấm **Run**.

File này tạo bảng `registration`, bật Row Level Security và thiết lập chính sách:

| Hành động | Ai được phép |
| --- | --- |
| `INSERT` (gửi đăng ký) | Tất cả mọi người (form công khai) |
| `SELECT` (xem danh sách) | Chỉ người đã đăng nhập |
| `DELETE` (xóa) | Chỉ người đã đăng nhập |

### 2. Tạo tài khoản quản trị

Supabase → **Authentication** → **Users** → **Add user** → nhập email và mật
khẩu cho quản trị viên (đánh dấu **Auto Confirm User**).

Sau đó vào **Authentication** → **Sign In / Providers** → tắt **Allow new users
to sign up** để không ai tự tạo được tài khoản.

### 3. Lấy khóa API

Supabase → **Project Settings** → **API**:

- **Project URL** → `VITE_SUPABASE_URL`
- **Publishable key** (hoặc anon key) → `VITE_SUPABASE_ANON_KEY`

Khóa publishable/anon được thiết kế để dùng ở trình duyệt, an toàn khi công
khai. **Tuyệt đối không** đưa `service_role` key lên frontend.

### 4. Biến môi trường

Tạo file `.env.local` ở thư mục gốc (đã được bỏ qua trong git):

```bash
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<publishable-key>
```

Khi deploy trên Vercel, thêm hai biến này trong **Settings → Environment
Variables** rồi deploy lại.

## Sử dụng trang quản trị

1. Truy cập `/admin`.
2. Đăng nhập bằng tài khoản quản trị đã tạo ở bước trên.
3. Tại đây bạn có thể:
   - Xem danh sách học viên đã đăng ký (10 bản ghi mỗi trang)
   - Phân trang, làm mới dữ liệu
   - Xóa từng bản ghi (có xác nhận)
   - Xóa toàn bộ danh sách (có hộp thoại xác nhận)
   - Xuất toàn bộ danh sách ra file Excel (`.xlsx`)

## Scripts

| Lệnh | Mô tả |
| --- | --- |
| `npm run dev` | Chạy dev server (HMR) |
| `npm run build` | Build site tĩnh vào `build/client` |
| `npm run start` | Xem thử bản production đã build |
| `npm run typecheck` | Sinh type route và kiểm tra TypeScript |
| `npm test` | Chạy test một lần |
| `npm run test:watch` | Chạy test ở chế độ watch |

## Render tĩnh

`react-router.config.ts` dùng `ssr: false` với danh sách `prerender` cho `/`,
`/lo-trinh`, `/gioi-thieu`, `/dang-ky`. Trang `/admin` được render phía client
(vì cần đăng nhập), đi qua `__spa-fallback.html`.

## Deploy

### Vercel

- Build command: `npm run build`
- Output directory: `build/client`
- Thêm biến môi trường `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

### Docker

```bash
docker build -t hoc-code .
docker run -p 8080:80 hoc-code
```

## Tùy chỉnh nội dung

- **Nội dung và điều hướng:** `app/data/site.ts` — tên thương hiệu, chủ đề học,
  lộ trình, đội ngũ, đánh giá, câu hỏi thường gặp.
- **Màu sắc, font:** `app/app.css`.
- **Routes:** `app/routes.ts` và các file trong `app/routes/`.
- **Thành phần dùng chung:** `app/components/`.
- **Truy cập Supabase:** `app/lib/supabase.ts`, `app/lib/registrations.ts`.
- **Xuất Excel:** `app/lib/export-excel.ts`.
- **Schema database:** `supabase/schema.sql`.
- **Tên miền:** cập nhật URL placeholder `hoccode.vn` trong `public/robots.txt`
  và `public/sitemap.xml`.

## Kiểm tra chất lượng

```bash
npm run typecheck
npm test
npm run build
```

## Cấu trúc thư mục

```text
app/
├── components/          UI dùng chung, header, footer, form đăng ký, icons
├── data/site.ts         Toàn bộ nội dung có thể chỉnh sửa
├── lib/
│   ├── supabase.ts      Khởi tạo Supabase client
│   ├── registrations.ts Truy vấn bảng registration
│   ├── export-excel.ts  Xuất file Excel
│   └── seo.ts           Helper metadata
├── routes/              Trang chủ, lộ trình, giới thiệu, đăng ký, admin, 404
├── test/                Cấu hình Vitest
├── app.css              Theme Tailwind và style toàn cục
├── root.tsx             Khung tài liệu, header, footer, error boundary
└── routes.ts            Cấu hình route
public/                  Tài nguyên tĩnh và cấu hình hosting
supabase/schema.sql      Schema database + RLS
scripts/serve.mjs        Server xem thử bản build tĩnh
```
