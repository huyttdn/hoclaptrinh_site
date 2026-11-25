import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, Star } from "./icons";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-brand-300" : "text-brand-700"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${
          tone === "dark" ? "text-white" : "text-ink"
        } ${eyebrow ? "mt-4" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-pretty text-base leading-7 sm:text-lg sm:leading-8 ${
            tone === "dark" ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "accent" | "secondary" | "light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-night text-white shadow-[0_14px_34px_-18px_rgba(0,0,0,0.9)] hover:bg-white/10",
  accent:
    "bg-brand-500 text-white ring-1 ring-white/20 shadow-[0_18px_42px_-16px_rgba(33,134,245,0.9)] hover:bg-brand-400 focus-visible:outline-white",
  secondary:
    "border border-slate-300 bg-surface/70 text-ink backdrop-blur hover:border-slate-400 hover:bg-surface-2",
  light: "bg-surface text-ink hover:bg-surface-2",
  ghost: "text-ink hover:bg-slate-900/5",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-sm sm:text-base",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className = "",
) {
  return [
    "group/button inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-60",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  ].join(" ");
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = true,
}: {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <Link to={to} className={buttonClass(variant, size, className)}>
      {children}
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-0.5" />
      ) : null}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-900/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(33,134,245,0.12),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(20,184,166,0.1),transparent_40%)]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
            {description}
          </p>
          {children ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export function Avatar({
  initials,
  accent,
  size = "md",
  className = "",
}: {
  initials: string;
  accent: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-10 w-10 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-lg",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} ${sizes[size]} font-semibold tracking-wide text-white shadow-inner ${className}`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

export function Stars({
  count = 5,
  label = "5 trên 5 sao",
  className = "",
}: {
  count?: number;
  label?: string;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-flex items-center gap-1 ${className}`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="h-4 w-4" />
      ))}
    </span>
  );
}
