import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { createRegistration, isValidPhone } from "../lib/registrations";
import { isSupabaseConfigured } from "../lib/supabase";
import { ArrowRight, CheckCircle, Phone } from "./icons";
import { buttonClass } from "./ui";

type FormValues = {
  fullName: string;
  phone: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { fullName: "", phone: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Vui lòng nhập họ và tên của bạn.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Vui lòng nhập số điện thoại.";
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng số 0.";
  }

  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-slate-500 focus:ring-4";
const fieldNormal =
  "border-slate-300 focus:border-brand-500 focus:ring-brand-500/10";
const fieldInvalid =
  "border-rose-400 focus:border-rose-500 focus:ring-rose-500/10";

export function RegistrationForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    const field = name as keyof FormValues;
    const raw = event.target.value;
    const value =
      field === "phone" ? raw.replace(/\D/g, "").slice(0, 10) : raw;

    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }

    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!isSupabaseConfigured) {
      setStatus("error");
      setErrorMessage(
        "Hệ thống đăng ký chưa được cấu hình. Vui lòng liên hệ quản trị viên.",
      );
      return;
    }

    setStatus("submitting");

    try {
      await createRegistration({
        fullName: values.fullName,
        phone: values.phone,
      });
      setSubmittedName(values.fullName.trim().split(" ").slice(-1)[0] ?? "");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Không thể gửi đăng ký. Vui lòng thử lại.",
      );
    }
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setSubmittedName("");
    setErrorMessage("");
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-[30rem] flex-col justify-center rounded-[2rem] border border-slate-200 bg-surface p-8 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.7)] sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <CheckCircle className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Đăng ký thành công{submittedName ? `, ${submittedName}` : ""}!
        </h2>
        <p className="mt-4 max-w-xl text-pretty leading-7 text-slate-600">
          Chúng tôi đã nhận được thông tin của bạn. Trong vòng 24 giờ, đội ngũ
          sẽ liên hệ qua <span className="font-semibold text-ink">Zalo</span> để
          gửi lộ trình và hướng dẫn bắt đầu.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className={buttonClass("secondary", "md", "mt-8 w-fit")}
        >
          Đăng ký thêm
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-200 bg-surface p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.7)] sm:p-8 lg:p-10"
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="reg-name"
            className="flex items-center gap-1 text-sm font-semibold text-slate-800"
          >
            Họ và tên <span className="text-rose-500">*</span>
          </label>
          <input
            id="reg-name"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            value={values.fullName}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "reg-name-error" : undefined}
            className={`mt-2 ${fieldBase} ${
              errors.fullName ? fieldInvalid : fieldNormal
            }`}
          />
          {errors.fullName ? (
            <p
              id="reg-name-error"
              className="mt-1.5 text-xs font-medium text-rose-600"
            >
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="reg-phone"
            className="flex items-center gap-1 text-sm font-semibold text-slate-800"
          >
            Số điện thoại (Zalo) <span className="text-rose-500">*</span>
          </label>
          <div className="relative mt-2">
            <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              id="reg-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              placeholder="Enter your phone number"
              value={values.phone}
              onChange={handleChange}
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "reg-phone-error" : "reg-phone-hint"
              }
              className={`${fieldBase} pl-10 ${
                errors.phone ? fieldInvalid : fieldNormal
              }`}
            />
          </div>
          {errors.phone ? (
            <p
              id="reg-phone-error"
              className="mt-1.5 text-xs font-medium text-rose-600"
            >
              {errors.phone}
            </p>
          ) : (
            <p id="reg-phone-hint" className="mt-1.5 text-xs text-slate-500">
              Gồm 10 chữ số và bắt đầu bằng 0. Số này cần đăng ký Zalo để chúng
              tôi liên hệ.
            </p>
          )}
        </div>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-300"
        >
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500">
          Chúng tôi chỉ dùng thông tin này để liên hệ và gửi tài liệu học. Không
          chia sẻ cho bên thứ ba.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
          className={buttonClass("primary", "md", "group/button shrink-0")}
        >
          {status === "submitting" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Đang gửi...
            </>
          ) : (
            <>
              Đăng ký ngay
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
