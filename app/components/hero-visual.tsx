import { Check, Sparkles, TrendingUp } from "./icons";

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-brand-200/70 via-white/10 to-cyan-200/60 blur-2xl sm:-inset-10" />

      <div className="relative rotate-[1.5deg] rounded-[2rem] border border-white/70 bg-white/60 p-2.5 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.55)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[1.55rem] bg-ink">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="ml-1 flex-1 rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-slate-400">
              northline.studio / client-portal
            </div>
            <Sparkles className="h-3.5 w-3.5 text-brand-300" />
          </div>

          <div className="relative overflow-hidden p-4 sm:p-5">
            <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300">
                    Launch overview
                  </p>
                  <p className="mt-2 max-w-[15rem] text-lg font-semibold leading-tight text-white sm:text-xl">
                    A clearer way to launch your next product.
                  </p>
                </div>
                <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  On track
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  ["Visitors", "24.8k"],
                  ["Conversion", "6.4%"],
                  ["NPS", "72"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5"
                  >
                    <p className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-medium text-slate-400">
                    Weekly growth
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-300">
                    <TrendingUp className="h-3 w-3" />
                    +18.2%
                  </span>
                </div>
                <svg
                  viewBox="0 0 240 64"
                  className="mt-2 h-16 w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4aa8ff" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#4aa8ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 52 C20 48 30 40 48 42 S75 30 92 33 120 22 138 25 168 14 186 18 220 6 240 9 V64 H0 Z"
                    fill="url(#chart-fill)"
                  />
                  <path
                    d="M0 52 C20 48 30 40 48 42 S75 30 92 33 120 22 138 25 168 14 186 18 220 6 240 9"
                    fill="none"
                    stroke="#84c6ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-medium text-white">
                    Design system handover
                  </p>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-400 to-cyan-300" />
                  </div>
                </div>
                <span className="text-[9px] font-semibold text-slate-400">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-3 top-[18%] rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.4)] backdrop-blur animate-float sm:-left-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Discovery to launch
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight text-ink">6 weeks</p>
      </div>

      <div className="absolute -right-2 bottom-[12%] rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.4)] backdrop-blur animate-float-delayed sm:-right-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
            <TrendingUp className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Lighthouse
            </p>
            <p className="text-lg font-semibold leading-none tracking-tight text-ink">
              98<span className="text-xs font-medium text-slate-400">/100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
