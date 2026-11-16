import { useState } from "react";
import { testimonials } from "../data/site";
import { ChevronLeft, ChevronRight, Quote } from "./icons";
import { Avatar, Stars } from "./ui";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  function go(direction: number) {
    setIndex(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.5)] sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-brand-100/70 blur-3xl"
        />
        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <Stars className="text-amber-400" />
            <Quote className="h-9 w-9 text-brand-200" />
          </div>

          <div key={active.name} className="animate-fade-up">
            <blockquote
              className="mt-7 min-h-[10rem] text-pretty text-2xl font-medium leading-snug tracking-tight text-ink sm:min-h-[9rem] sm:text-3xl"
              aria-live="polite"
            >
              “{active.quote}”
            </blockquote>

            <div className="mt-8 flex items-center gap-3">
              <Avatar
                initials={active.initials}
                accent={active.accent}
                size="md"
              />
              <div>
                <p className="text-sm font-semibold text-ink">{active.name}</p>
                <p className="text-sm text-slate-500">
                  {active.role}, {active.company}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
            <p className="text-xs font-medium tabular-nums text-slate-500">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Đánh giá trước"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Đánh giá tiếp theo"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {testimonials.map((testimonial, itemIndex) => {
          const isActive = itemIndex === index;

          return (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(itemIndex)}
              aria-current={isActive ? "true" : undefined}
              className={`group flex flex-1 items-center gap-3 rounded-2xl border p-4 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                isActive
                  ? "border-brand-200 bg-brand-50/70 shadow-sm"
                  : "border-slate-200 bg-white/60 hover:border-slate-300 hover:bg-white"
              }`}
            >
              <Avatar
                initials={testimonial.initials}
                accent={testimonial.accent}
                size="sm"
              />
              <span className="min-w-0 flex-1">
                <span
                  className={`block truncate text-sm font-semibold ${
                    isActive ? "text-brand-800" : "text-ink"
                  }`}
                >
                  {testimonial.name}
                </span>
                <span className="mt-0.5 block truncate text-xs text-slate-600">
                  {testimonial.company}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                  isActive ? "bg-brand-500" : "bg-slate-200 group-hover:bg-slate-300"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
