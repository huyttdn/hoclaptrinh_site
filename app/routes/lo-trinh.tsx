import type { Route } from "./+types/lo-trinh";
import { CtaBand } from "../components/cta-band";
import {
  ArrowRight,
  Check,
  Code,
  Compass,
  Database,
  Layers,
  Rocket,
  Terminal,
} from "../components/icons";
import {
  ButtonLink,
  Container,
  PageHero,
  SectionHeading,
} from "../components/ui";
import { engagements, process, topics } from "../data/site";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Lộ trình học",
    description:
      "Lộ trình học lập trình cho người mới: từ tư duy lập trình, ngôn ngữ đầu tiên, cấu trúc dữ liệu, lập trình web đến cơ sở dữ liệu và dự án thực hành.",
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

export default function LoTrinh() {
  return (
    <>
      <PageHero
        eyebrow="Lộ trình"
        title={
          <>
            Một lộ trình liền mạch từ{" "}
            <span className="font-serif italic text-brand-700">
              người mới
            </span>{" "}
            đến có sản phẩm.
          </>
        }
        description="Sáu chủ đề được sắp xếp theo thứ tự bạn nên học. Bạn có thể học tuần tự từ đầu, hoặc bắt đầu ở phần phù hợp với mình."
      >
        <ButtonLink to="/dang-ky" size="lg">
          Đăng ký học
        </ButtonLink>
        <ButtonLink to="#quy-trinh" variant="secondary" size="lg">
          Xem quy trình
        </ButtonLink>
      </PageHero>

      <TopicDetails />
      <ProcessSection />
      <EngagementSection />

      <CtaBand
        title="Chưa biết nên bắt đầu từ đâu?"
        description="Đăng ký để được gợi ý điểm xuất phát phù hợp với trình độ và mục tiêu của bạn."
        primaryLabel="Đăng ký tư vấn"
      />
    </>
  );
}

function TopicDetails() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Các chủ đề"
          title="Sáu bước xây nền tảng."
          description="Mỗi chủ đề đều có bài giảng, bài tập và một phần dự án nhỏ để bạn áp dụng ngay những gì vừa học."
        />

        <div className="mt-14 space-y-5">
          {topics.map((topic) => {
            const Icon = topicIcons[topic.icon];

            return (
              <article
                key={topic.slug}
                id={topic.slug}
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.35)] sm:p-8 lg:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-sm font-semibold tabular-nums text-slate-500">
                        {topic.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {topic.title}
                    </h3>
                    <p className="mt-2 font-serif text-xl italic text-brand-700">
                      {topic.tagline}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                      {topic.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-paper/80 p-4 text-sm leading-6 text-slate-600">
                      <span className="font-semibold text-ink">Phù hợp với:</span>{" "}
                      {topic.bestFor}
                    </div>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Bạn sẽ học
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {topic.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Sau chủ đề này
                      </h4>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {topic.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="rounded-full border border-slate-200 bg-paper px-3 py-1.5 text-xs font-medium text-slate-600"
                          >
                            {outcome}
                          </li>
                        ))}
                      </ul>

                      <ButtonLink
                        to="/dang-ky"
                        variant="secondary"
                        size="sm"
                        className="mt-6"
                      >
                        Học chủ đề này
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ProcessSection() {
  return (
    <section
      id="quy-trinh"
      className="scroll-mt-28 border-y border-slate-900/5 bg-white py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Cách học"
          title="Bốn giai đoạn, đi từng bước."
          description="Bạn không cần học hết mọi thứ cùng lúc. Chỉ cần đi lần lượt qua từng giai đoạn và làm đủ bài tập."
        />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-paper/70 p-6"
            >
              <span className="text-xs font-semibold tabular-nums text-brand-700">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex items-center gap-2 text-sm text-slate-500">
          <ArrowRight className="h-4 w-4 text-brand-600" />
          Mỗi tuần khoảng 5–7 giờ là đủ để theo kịp lộ trình.
        </div>
      </Container>
    </section>
  );
}

function EngagementSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Hình thức học"
          title="Chọn cách học phù hợp."
          description="Dù bạn muốn tự học hay cần người kèm cặp, đều có một lựa chọn dành cho bạn."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {engagements.map((engagement, index) => {
            const featured = index === 1;

            return (
              <div
                key={engagement.title}
                className={`flex flex-col rounded-[2rem] border p-7 ${
                  featured
                    ? "border-ink bg-ink text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.8)]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    featured ? "text-brand-300" : "text-slate-500"
                  }`}
                >
                  {engagement.duration}
                </p>
                <h3
                  className={`mt-3 text-xl font-semibold tracking-tight ${
                    featured ? "text-white" : "text-ink"
                  }`}
                >
                  {engagement.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    featured ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {engagement.description}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {engagement.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-sm ${
                        featured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          featured ? "text-brand-300" : "text-brand-600"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  to="/dang-ky"
                  variant={featured ? "light" : "secondary"}
                  size="sm"
                  className="mt-7 w-fit"
                >
                  Đăng ký
                </ButtonLink>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
