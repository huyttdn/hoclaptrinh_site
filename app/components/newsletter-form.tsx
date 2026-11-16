import { useId, useState } from "react";
import type { FormEvent } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!emailPattern.test(email.trim())) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
  }

  return (
    <form className="mt-6 max-w-md" onSubmit={handleSubmit} noValidate>
      <label htmlFor={inputId} className="sr-only">
        Email nhận bài học mới
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={inputId}
          name="newsletter-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="Email của bạn"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby={`${inputId}-help`}
          className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-400/10 aria-[invalid=true]:border-rose-400/70"
        />
        <button
          type="submit"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Đăng ký
        </button>
      </div>
      <p
        id={`${inputId}-help`}
        className={`mt-2 text-xs ${
          status === "error"
            ? "text-rose-300"
            : status === "success"
              ? "text-emerald-300"
              : "text-slate-400"
        }`}
        role={status === "error" ? "alert" : status === "success" ? "status" : undefined}
      >
        {status === "error"
          ? "Vui lòng nhập địa chỉ email hợp lệ."
          : status === "success"
            ? "Đã đăng ký. Hẹn gặp bạn ở bài học tiếp theo!"
            : "Bài học và mẹo lập trình, gửi không thường xuyên. Không spam."}
      </p>
    </form>
  );
}
