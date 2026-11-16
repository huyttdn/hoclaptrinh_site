import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Session } from "@supabase/supabase-js";
import type { Route } from "./+types/admin";
import {
  Download,
  Lock,
  LogOut,
  Picture,
  RefreshCw,
  Search,
  Trash,
  Upload,
  UsersPlus,
} from "../components/icons";
import { Container } from "../components/ui";
import { formatDateTime, exportRegistrationsToExcel } from "../lib/export-excel";
import {
  deleteAllRegistrations,
  deleteRegistration,
  listAllRegistrations,
  listRegistrations,
  updateRegistrationAvatar,
  type Registration,
} from "../lib/registrations";
import {
  createAvatarUrlMap,
  removeAvatars,
  uploadAvatar,
  validateAvatarFile,
} from "../lib/storage";
import { getSupabase, isSupabaseConfigured } from "../lib/supabase";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Quản trị",
    description: "Trang quản trị danh sách học viên đăng ký.",
  });
}

const PAGE_SIZE = 10;

export default function Admin() {
  if (!isSupabaseConfigured) {
    return <ConfigNotice />;
  }

  return <AdminGate />;
}

function ConfigNotice() {
  return (
    <Container className="max-w-xl py-24">
      <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
          <Lock className="h-6 w-6" />
        </span>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
          Chưa cấu hình Supabase
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Hãy thêm <code className="font-semibold">VITE_SUPABASE_URL</code> và{" "}
          <code className="font-semibold">VITE_SUPABASE_ANON_KEY</code> vào biến
          môi trường rồi tải lại trang.
        </p>
      </div>
    </Container>
  );
}

function AdminGate() {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      setChecking(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        setSession(nextSession);
      },
    );

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  if (checking) {
    return (
      <Container className="max-w-xl py-24">
        <div className="flex items-center justify-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-brand-500" />
          Đang kiểm tra đăng nhập...
        </div>
      </Container>
    );
  }

  return session ? <Dashboard session={session} /> : <LoginForm />;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const { error: signInError } = await getSupabase().auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      setError("Email hoặc mật khẩu không đúng.");
      setStatus("idle");
      return;
    }

    setStatus("idle");
  }

  const field =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10";

  return (
    <Container className="max-w-md py-16 sm:py-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.4)] sm:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          <Lock className="h-6 w-6" />
        </span>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
          Đăng nhập quản trị
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Chỉ tài khoản quản trị viên được cấp mới truy cập được danh sách đăng
          ký.
        </p>

        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="admin-email"
              className="text-sm font-semibold text-slate-800"
            >
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className={`mt-2 ${field}`}
              placeholder="admin@hoccode.vn"
            />
          </div>
          <div>
            <label
              htmlFor="admin-password"
              className="text-sm font-semibold text-slate-800"
            >
              Mật khẩu
            </label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className={`mt-2 ${field}`}
              placeholder="••••••••"
            />
          </div>

          {error ? (
            <p
              role="alert"
              className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-60"
          >
            {status === "submitting" ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ) : null}
            Đăng nhập
          </button>
        </form>
      </div>
    </Container>
  );
}

function Dashboard({ session }: { session: Session }) {
  const [rows, setRows] = useState<Registration[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [confirmAll, setConfirmAll] = useState(false);
  const [deletingAll, setDeletingAll] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [avatarUrls, setAvatarUrls] = useState<Record<string, string>>({});
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [uploadTargetId, setUploadTargetId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));

  const load = useCallback(async (targetPage: number) => {
    setLoading(true);
    setError("");
    try {
      const result = await listRegistrations({
        page: targetPage,
        pageSize: PAGE_SIZE,
      });
      setRows(result.rows);
      setCount(result.count);
      try {
        setAvatarUrls(await createAvatarUrlMap(result.rows));
      } catch {
        setAvatarUrls({});
      }
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Không thể tải danh sách.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load(page);
  }, [load, page]);

  useEffect(() => {
    if (!loading && rows.length === 0 && page > 1) {
      setPage((current) => Math.max(1, current - 1));
    }
  }, [loading, rows.length, page]);

  async function handleDelete(id: string) {
    setBusyId(id);
    try {
      const target = rows.find((row) => row.id === id);
      if (target?.avatar_path) {
        await removeAvatars([target.avatar_path]).catch(() => undefined);
      }
      await deleteRegistration(id);
      setConfirmId(null);
      await load(page);
    } catch (deleteError) {
      setError(
        deleteError instanceof Error
          ? deleteError.message
          : "Không thể xóa đăng ký.",
      );
    } finally {
      setBusyId(null);
    }
  }

  async function handleDeleteAll() {
    setDeletingAll(true);
    setError("");
    try {
      const all = await listAllRegistrations();
      const paths = all
        .map((row) => row.avatar_path)
        .filter((path): path is string => Boolean(path));
      await removeAvatars(paths).catch(() => undefined);
      await deleteAllRegistrations();
      setConfirmAll(false);
      setPage(1);
      await load(1);
    } catch (deleteError) {
      setError(
        deleteError instanceof Error
          ? deleteError.message
          : "Không thể xóa tất cả.",
      );
    } finally {
      setDeletingAll(false);
    }
  }

  function handleAvatarPick(id: string) {
    setUploadTargetId(id);
    fileInputRef.current?.click();
  }

  async function handleAvatarChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    const id = uploadTargetId;
    if (!file || !id) return;

    const validationError = validateAvatarFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    const target = rows.find((row) => row.id === id);
    setUploadingId(id);
    setError("");
    try {
      const path = await uploadAvatar(id, file);
      await updateRegistrationAvatar(id, path);
      if (target?.avatar_path) {
        await removeAvatars([target.avatar_path]).catch(() => undefined);
      }
      await load(page);
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Không thể tải ảnh lên.",
      );
    } finally {
      setUploadingId(null);
      setUploadTargetId(null);
    }
  }

  async function handleAvatarRemove(row: Registration) {
    if (!row.avatar_path) return;
    setBusyId(row.id);
    setError("");
    try {
      await updateRegistrationAvatar(row.id, null);
      await removeAvatars([row.avatar_path]).catch(() => undefined);
      await load(page);
    } catch (removeError) {
      setError(
        removeError instanceof Error
          ? removeError.message
          : "Không thể xóa ảnh.",
      );
    } finally {
      setBusyId(null);
    }
  }

  async function handleExport() {
    setExporting(true);
    setError("");
    try {
      const all = await listAllRegistrations();
      if (all.length === 0) {
        setError("Chưa có dữ liệu để xuất.");
        return;
      }
      const stamp = new Date().toISOString().slice(0, 10);
      await exportRegistrationsToExcel(all, `dang-ky-${stamp}.xlsx`);
    } catch (exportError) {
      setError(
        exportError instanceof Error
          ? exportError.message
          : "Không thể xuất file.",
      );
    } finally {
      setExporting(false);
    }
  }

  async function handleSignOut() {
    await getSupabase().auth.signOut();
  }

  return (
    <Container className="py-10 sm:py-14">
      <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Quản trị
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Danh sách đăng ký
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Đăng nhập với{" "}
            <span className="font-medium text-ink">{session.user.email}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => void handleExport()}
            disabled={exporting || count === 0}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-slate-50 disabled:opacity-60"
          >
            {exporting ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-brand-500" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            Xuất Excel
          </button>
          <button
            type="button"
            onClick={() => setConfirmAll(true)}
            disabled={count === 0}
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-700 transition-colors hover:bg-rose-100 disabled:opacity-60"
          >
            <Trash className="h-4 w-4" />
            Xóa tất cả
          </button>
          <button
            type="button"
            onClick={() => void handleSignOut()}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <StatCard
          icon={<UsersPlus className="h-5 w-5" />}
          label="Tổng đăng ký"
          value={count.toLocaleString("vi-VN")}
        />
        <StatCard
          icon={<Search className="h-5 w-5" />}
          label="Trang hiện tại"
          value={`${page} / ${totalPages}`}
        />
        <StatCard
          icon={<RefreshCw className="h-5 w-5" />}
          label="Hiển thị mỗi trang"
          value={`${PAGE_SIZE} bản ghi`}
        />
      </div>

      {error ? (
        <p
          role="alert"
          className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
        >
          {error}
          <button
            type="button"
            onClick={() => void load(page)}
            className="shrink-0 font-semibold underline"
          >
            Thử lại
          </button>
        </p>
      ) : null}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={(event) => void handleAvatarChange(event)}
      />

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[52rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <th className="w-16 px-4 py-3 font-semibold">STT</th>
                <th className="w-24 px-4 py-3 font-semibold">Ảnh</th>
                <th className="px-4 py-3 font-semibold">Họ và tên</th>
                <th className="px-4 py-3 font-semibold">Số điện thoại (Zalo)</th>
                <th className="px-4 py-3 font-semibold">Thời gian đăng ký</th>
                <th className="w-44 px-4 py-3 text-right font-semibold">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-brand-500" />
                      Đang tải danh sách...
                    </span>
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center text-slate-500">
                    Chưa có học viên nào đăng ký.
                  </td>
                </tr>
              ) : (
                rows.map((row, index) => (
                  <tr key={row.id} className="hover:bg-slate-50/70">
                    <td className="px-4 py-3 tabular-nums text-slate-500">
                      {(page - 1) * PAGE_SIZE + index + 1}
                    </td>
                    <td className="px-4 py-3">
                      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-50 text-slate-400">
                        {uploadingId === row.id ? (
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-brand-500" />
                        ) : avatarUrls[row.id] ? (
                          <img
                            src={avatarUrls[row.id]}
                            alt={`Ảnh đại diện của ${row.full_name}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <Picture className="h-5 w-5" />
                        )}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-ink">
                      {row.full_name}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`https://zalo.me/${row.phone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-brand-700 hover:underline"
                      >
                        {row.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {formatDateTime(row.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      {confirmId === row.id ? (
                        <span className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => void handleDelete(row.id)}
                            disabled={busyId === row.id}
                            className="rounded-full bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-rose-700 disabled:opacity-60"
                          >
                            {busyId === row.id ? "Đang xóa..." : "Xác nhận"}
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmId(null)}
                            className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100"
                          >
                            Hủy
                          </button>
                        </span>
                      ) : (
                        <span className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleAvatarPick(row.id)}
                            disabled={uploadingId === row.id}
                            aria-label={`Tải ảnh đại diện cho ${row.full_name}`}
                            title={row.avatar_path ? "Thay ảnh" : "Tải ảnh"}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 disabled:opacity-50"
                          >
                            <Upload className="h-4 w-4" />
                          </button>
                          {row.avatar_path ? (
                            <button
                              type="button"
                              onClick={() => void handleAvatarRemove(row)}
                              disabled={busyId === row.id}
                              aria-label={`Xóa ảnh đại diện của ${row.full_name}`}
                              title="Xóa ảnh"
                              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700 disabled:opacity-50"
                            >
                              <Picture className="h-4 w-4" />
                            </button>
                          ) : null}
                          <button
                            type="button"
                            onClick={() => setConfirmId(row.id)}
                            aria-label={`Xóa đăng ký của ${row.full_name}`}
                            title="Xóa đăng ký"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
        disabled={loading}
      />

      {confirmAll ? (
        <ConfirmDialog
          title="Xóa tất cả đăng ký?"
          description={`Hành động này sẽ xóa vĩnh viễn ${count.toLocaleString(
            "vi-VN",
          )} bản ghi và không thể hoàn tác.`}
          confirmLabel={deletingAll ? "Đang xóa..." : "Xóa tất cả"}
          busy={deletingAll}
          onConfirm={() => void handleDeleteAll()}
          onCancel={() => setConfirmAll(false)}
        />
      ) : null}
    </Container>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
        {icon}
      </span>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-ink">
        {value}
      </p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  onChange,
  disabled,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  disabled: boolean;
}) {
  const pages = useMemo(() => buildPageList(page, totalPages), [page, totalPages]);

  if (totalPages <= 1) return null;

  const base =
    "inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors disabled:opacity-50";

  return (
    <nav
      aria-label="Phân trang"
      className="mt-6 flex flex-wrap items-center justify-between gap-3"
    >
      <p className="text-sm text-slate-500">
        Trang <span className="font-semibold text-ink">{page}</span> /{" "}
        {totalPages}
      </p>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onChange(page - 1)}
          disabled={disabled || page <= 1}
          className={`${base} border border-slate-300 text-slate-600 hover:bg-slate-100`}
        >
          Trước
        </button>
        {pages.map((item, index) =>
          item === "..." ? (
            <span key={`gap-${index}`} className="px-1.5 text-slate-400">
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onChange(item)}
              disabled={disabled}
              aria-current={item === page ? "page" : undefined}
              className={`${base} ${
                item === page
                  ? "bg-ink text-white"
                  : "border border-slate-300 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ),
        )}
        <button
          type="button"
          onClick={() => onChange(page + 1)}
          disabled={disabled || page >= totalPages}
          className={`${base} border border-slate-300 text-slate-600 hover:bg-slate-100`}
        >
          Sau
        </button>
      </div>
    </nav>
  );
}

function buildPageList(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const items: (number | "...")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) items.push("...");
  for (let index = start; index <= end; index += 1) items.push(index);
  if (end < total - 1) items.push("...");
  items.push(total);

  return items;
}

function ConfirmDialog({
  title,
  description,
  confirmLabel,
  busy,
  onConfirm,
  onCancel,
}: {
  title: string;
  description: string;
  confirmLabel: string;
  busy: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 px-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.6)]">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-600">
          <Trash className="h-5 w-5" />
        </span>
        <h2 className="mt-5 text-xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        <div className="mt-7 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={busy}
            className="rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-60"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={busy}
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-700 disabled:opacity-60"
          >
            {busy ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ) : null}
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
