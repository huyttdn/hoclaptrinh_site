import { useId } from "react";
import { Link } from "react-router";
import { site } from "../data/site";

export function LogoMark({ className = "" }: { className?: string }) {
  const gradientId = `logo-gradient-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label={`${site.name} logo`}
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="4" x2="28" y2="28">
          <stop stopColor="#2186f5" />
          <stop offset="1" stopColor="#0f53b0" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
      <path
        d="M9 23V9l14 14V9"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} home`}
      className={`group inline-flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500 ${className}`}
    >
      <LogoMark className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-6" />
      <span
        className={`text-lg font-semibold tracking-tight ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
