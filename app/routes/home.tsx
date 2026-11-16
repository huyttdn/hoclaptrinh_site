import type { Route } from "./+types/home";
import { CtaBand } from "../components/cta-band";
import {
  Check,
  Code,
  Compass,
  Database,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Users,
} from "../components/icons";
import { RegistrationForm } from "../components/registration-form";
import { TestimonialCarousel } from "../components/testimonial-carousel";
import {
  Avatar,
  Container,
  Eyebrow,
  SectionHeading,
  Stars,
} from "../components/ui";
import { site, stats, testimonials, topics, whyChooseUs } from "../data/site";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Học lập trình cho người mới",
    description: site.description,
  });
}

const topicIcons = {
  thinking: Compass,
  language: Code,
  data: Layers,
  web: Terminal,
  database: Database,
  project: Rocket,
} as const;

const featureIcons = {
  users: Users,
  clarity: Target,
  shield: ShieldCheck,
  spark: Sparkles,
} as const;

export default function Home() {
  return (
    <>
      <Hero />
      <TopicsSection />
      <WhyUs />
      <StatsBand />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_5%,rgba(33,134,245,0.14),transparent_42%),radial-gradient(circle_at_88%_18%,rgba(20,184,166,0.12),transparent_38%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <Container className="relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="min-w-0">
          <Eyebrow>Lập trình cho người mới bắt đầu</Eyebrow>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl lg:text-6xl">
            Học lập trình từ{" "}
            <span className="font-serif italic tracking-normal text-brand-700">
              con số 0
            </span>{" "}
            theo một lộ trình rõ ràng.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Học Code giúp bạn xây nền tảng lập trình vững chắc bằng bài giảng
            tiếng Việt dễ hiểu, bài tập thực hành và các dự án thật — dành cho
            người chưa từng viết một dòng code nào.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {[
              "Miễn phí cho người mới",
              "Bài giảng tiếng Việt",
              "Học qua dự án thực tế",
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((testimonial) => (
                <Avatar
                  key={testimonial.name}
                  initials={testimonial.initials}
                  accent={testimonial.accent}
                  size="sm"
                  className="ring-2 ring-paper"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Stars
                  className="text-amber-400"
                  label="Học viên đánh giá 4.8 trên 5"
                />
                <span className="text-sm font-semibold text-ink">4.8/5</span>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Từ hơn 1.200 đánh giá của học viên.
              </p>
            </div>
          </div>
        </div>

        <div id="dang-ky" className="min-w-0 scroll-mt-24">
          <div className="mb-4">
            <p className="text-sm font-semibold text-brand-700">
              Đăng ký miễn phí
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
              Nhận lộ trình học qua Zalo
            </h2>
          </div>
          <RegistrationForm />
        </div>
      </Container>
    </section>
  );
}

function TopicsSection() {
  return (
    <section
      id="noi-dung"
      className="scroll-mt-24 border-t border-slate-900/5 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Nội dung học"
          align="center"
          className="mx-auto"
          title={
            <>
              Sáu chủ đề đưa bạn từ số 0 đến{" "}
              <span className="font-serif italic text-brand-700">
                có sản phẩm
              </span>
              .
            </>
          }
          description="Mỗi chủ đề xây dựng trên chủ đề trước đó, giúp bạn tiến bộ liên tục mà không bị hổng kiến thức nền tảng."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topicIcons[topic.icon];

            return (
              <article
                key={topic.slug}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_70px_-50px_rgba(0,0,0,0.7)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-100/0 blur-3xl transition-colors duration-300 group-hover:bg-brand-100/70"
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-semibold tabular-nums text-slate-400">
                      {topic.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {topic.summary}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {topic.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-500"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function WhyUs() {
  return (
    <section
      id="vi-sao"
      className="scroll-mt-24 border-y border-slate-900/5 bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Vì sao chọn Học Code"
            title={
              <>
                Học đúng cách ngay từ{" "}
                <span className="font-serif italic text-brand-700">
                  những bước đầu
                </span>
                .
              </>
            }
            description="Người mới thường bỏ cuộc vì lộ trình rối rắm và thiếu người đồng hành. Chúng tôi thiết kế mọi thứ để bạn đi từng bước thật chắc."
          />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item) => {
            const Icon = featureIcons[item.icon];

            return (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-paper/70 p-6 transition-colors hover:border-slate-300 hover:bg-surface-2"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-brand-700 shadow-sm ring-1 ring-slate-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="bg-surface">
      <Container>
        <dl className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 sm:py-14">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-sm text-slate-500">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section
      id="danh-gia"
      className="scroll-mt-24 border-t border-slate-900/5 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Học viên nói gì"
            title={
              <>
                Những bước tiến{" "}
                <span className="font-serif italic text-brand-700">
                  đầu tiên
                </span>
                .
              </>
            }
            description="Chúng tôi đo thành công bằng việc học viên có thể tự tay làm ra sản phẩm và tiếp tục học mà không cần ai dẫn đường."
          />
          <div className="flex shrink-0 items-center gap-2 text-sm text-slate-500">
            <Stars
              className="text-amber-400"
              label="Học viên đánh giá 4.8 trên 5"
            />
            <span className="font-semibold text-ink">4.8</span> điểm trung bình
            từ hơn 1.200 đánh giá
          </div>
        </div>

        <div className="mt-12">
          <TestimonialCarousel />
        </div>
      </Container>
    </section>
  );
}
