import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { budgets, projectTypes, site } from "../data/site";
import { ArrowRight, CheckCircle } from "./icons";
import { buttonClass } from "./ui";

type FormValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.projectType) {
    errors.projectType = "Please choose the type of project.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Please share at least 20 characters about your project.";
  }

  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-slate-500 focus:ring-4";
const fieldNormal =
  "border-slate-300 focus:border-brand-500 focus:ring-brand-500/10";
const fieldInvalid =
  "border-rose-400 focus:border-rose-500 focus:ring-rose-500/10";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submittedName, setSubmittedName] = useState("");

  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    const field = name as keyof FormValues;

    setValues((current) => ({ ...current, [name]: value }));

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

    setStatus("submitting");

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 650));
      }

      setSubmittedName(values.name.trim().split(" ")[0] ?? "");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setSubmittedName("");
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-[34rem] flex-col justify-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.4)] sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Thanks{submittedName ? `, ${submittedName}` : ""}. Your message is in.
        </h2>
        <p className="mt-4 max-w-xl text-pretty leading-7 text-slate-600">
          We read every message ourselves and will reply within one business
          day. In the meantime, feel free to email us directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-800"
          >
            {site.email}
          </a>
          .
        </p>
        {!endpoint ? (
          <p className="mt-5 max-w-xl rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
            Static demo: this message was not transmitted. Set{" "}
            <code className="font-semibold">VITE_CONTACT_ENDPOINT</code> to
            connect your form service before launch.
          </p>
        ) : null}
        <button
          type="button"
          onClick={resetForm}
          className={buttonClass("secondary", "md", "mt-8 w-fit")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.4)] sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="flex items-center gap-1 text-sm font-semibold text-slate-800"
          >
            Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Alex Morgan"
            value={values.name}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`mt-2 ${fieldBase} ${errors.name ? fieldInvalid : fieldNormal}`}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-xs font-medium text-rose-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="flex items-center gap-1 text-sm font-semibold text-slate-800"
          >
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="alex@company.com"
            value={values.email}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`mt-2 ${fieldBase} ${errors.email ? fieldInvalid : fieldNormal}`}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-xs font-medium text-rose-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="flex items-center gap-2 text-sm font-semibold text-slate-800"
          >
            Company
            <span className="text-xs font-normal text-slate-500">Optional</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            value={values.company}
            onChange={handleChange}
            className={`mt-2 ${fieldBase} ${fieldNormal}`}
          />
        </div>

        <div>
          <label
            htmlFor="contact-budget"
            className="flex items-center gap-2 text-sm font-semibold text-slate-800"
          >
            Budget range
            <span className="text-xs font-normal text-slate-500">Optional</span>
          </label>
          <select
            id="contact-budget"
            name="budget"
            value={values.budget}
            onChange={handleChange}
            className={`mt-2 ${fieldBase} ${fieldNormal}`}
          >
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-project-type"
            className="flex items-center gap-1 text-sm font-semibold text-slate-800"
          >
            Project type <span className="text-rose-500">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            value={values.projectType}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "contact-project-type-error" : undefined
            }
            className={`mt-2 ${fieldBase} ${
              errors.projectType ? fieldInvalid : fieldNormal
            }`}
          >
            <option value="">What can we help with?</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p
              id="contact-project-type-error"
              className="mt-1.5 text-xs font-medium text-rose-600"
            >
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="flex items-center gap-1 text-sm font-semibold text-slate-800"
          >
            Tell us about the project <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="What are you building, who is it for, and what does success look like?"
            value={values.message}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : "contact-message-hint"
            }
            className={`mt-2 resize-y ${fieldBase} ${
              errors.message ? fieldInvalid : fieldNormal
            }`}
          />
          <div className="mt-1.5 flex items-start justify-between gap-4">
            {errors.message ? (
              <p id="contact-message-error" className="text-xs font-medium text-rose-600">
                {errors.message}
              </p>
            ) : (
              <p id="contact-message-hint" className="text-xs text-slate-500">
                A short paragraph is plenty.
              </p>
            )}
            <p className="shrink-0 text-xs text-slate-500">
              {values.message.trim().length}/20 min
            </p>
          </div>
        </div>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
        >
          Something went wrong while sending your message. Please try again or
          email us at{" "}
          <a className="font-semibold underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500">
          By sending this form you agree to be contacted about your project. No
          newsletters unless you ask.
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
              Sending...
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
