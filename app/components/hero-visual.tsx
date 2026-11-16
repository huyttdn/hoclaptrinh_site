import { Check, GraduationCap, Sparkles } from "./icons";

const codeLines = [
  { text: "# Bài 1: Chương trình đầu tiên", tone: "text-slate-500" },
  { text: 'ten = "Minh Anh"', tone: "text-sky-300" },
  { text: 'print("Xin chào,", ten)', tone: "text-emerald-300" },
];

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-brand-200/70 via-white/10 to-cyan-200/60 blur-2xl sm:-inset-10" />

      <div className="relative rotate-[1.5deg] rounded-[2rem] border border-line bg-surface/60 p-2.5 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.75)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[1.55rem] bg-night">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="ml-1 flex-1 rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-slate-400">
              hoccode.vn / bai-hoc-dau-tien.py
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
                    Bài học hôm nay
                  </p>
                  <p className="mt-2 max-w-[15rem] text-lg font-semibold leading-tight text-white sm:text-xl">
                    Chương trình Python đầu tiên của bạn.
                  </p>
                </div>
                <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Đang học
                </span>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-[#0d1526] p-4 font-mono text-[12px] leading-6 sm:text-[13px]">
                {codeLines.map((line, index) => (
                  <div key={line.text} className="flex gap-3">
                    <span className="w-3 shrink-0 select-none text-right text-slate-600">
                      {index + 1}
                    </span>
                    <span className={line.tone}>{line.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-medium text-slate-400">
                    Kết quả chạy chương trình
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-300">
                    <Check className="h-3 w-3" />
                    Thành công
                  </span>
                </div>
                <p className="mt-2 font-mono text-[12px] text-emerald-300">
                  Xin chào, Minh Anh
                </p>
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-400/15 text-brand-300">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-medium text-white">
                    Lộ trình cơ bản
                  </p>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-brand-400 to-cyan-300" />
                  </div>
                </div>
                <span className="text-[9px] font-semibold text-slate-400">
                  12/120
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-3 top-[18%] rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur animate-float sm:-left-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Không cần kinh nghiệm
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight text-ink">
          Bắt đầu từ số 0
        </p>
      </div>

      <div className="absolute -right-2 bottom-[12%] rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur animate-float-delayed sm:-right-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
            <GraduationCap className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Học viên
            </p>
            <p className="text-lg font-semibold leading-none tracking-tight text-ink">
              5.000<span className="text-xs font-medium text-slate-400">+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
