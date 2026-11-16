import type { Route } from "./+types/dang-ky";
import { RegistrationForm } from "../components/registration-form";
import { Check, ChevronRight, Clock, Mail } from "../components/icons";
import { Container, PageHero, SectionHeading } from "../components/ui";
import { faqs, site } from "../data/site";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Đăng ký học",
    description:
      "Đăng ký nhận lộ trình học lập trình miễn phí cho người mới bắt đầu. Chỉ cần họ và tên cùng số điện thoại Zalo.",
  });
}

const benefits = [
  "Lộ trình học chi tiết theo từng bước",
  "Bài giảng và bài tập tiếng Việt miễn phí",
  "Hướng dẫn cài đặt và bắt đầu từ số 0",
  "Hỗ trợ giải đáp qua Zalo và cộng đồng",
];

export default function DangKy() {
  return (
    <>
      <PageHero
        eyebrow="Đăng ký"
        title={
          <>
            Đăng ký nhận{" "}
            <span className="font-serif italic text-brand-700">lộ trình</span>{" "}
            học miễn phí.
          </>
        }
        description="Điền họ tên và số điện thoại Zalo để chúng tôi gửi lộ trình, tài liệu và hướng dẫn bắt đầu. Chỉ mất chưa đến một phút."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            <div>
              <RegistrationForm />
              <p className="mt-4 px-2 text-xs leading-5 text-slate-600">
                Bạn có thắc mắc trước khi đăng ký? Gửi email cho chúng tôi tại{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-brand-700"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="text-lg font-semibold tracking-tight text-ink">
                  Bạn sẽ nhận được
                </h2>
                <ul className="mt-6 space-y-3.5 text-sm">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="leading-6 text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-ink p-6 text-white sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/25 blur-3xl"
                />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                    Sau khi đăng ký
                  </p>
                  <ol className="mt-5 space-y-5">
                    {[
                      "Chúng tôi nhận thông tin và xác nhận qua Zalo.",
                      "Bạn nhận lộ trình cùng tài liệu bắt đầu.",
                      "Bạn học thử và được gợi ý bước tiếp theo.",
                    ].map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-[11px] font-semibold text-brand-300">
                          {index + 1}
                        </span>
                        <span className="text-sm leading-6 text-slate-300">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-sm sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Thời gian hỗ trợ</p>
                    <p className="mt-1 leading-6 text-slate-600">
                      {site.hours}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block text-slate-600 transition-colors hover:text-brand-700"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FaqSection />
    </>
  );
}

function FaqSection() {
  return (
    <section className="border-t border-slate-900/5 bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="Câu hỏi thường gặp"
          title="Giải đáp trước khi bạn bắt đầu."
          description="Một vài điều người mới thường hỏi. Nếu câu hỏi của bạn chưa có ở đây, cứ gửi email cho chúng tôi."
        />

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <p className="mt-3 max-w-2xl pr-6 text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
