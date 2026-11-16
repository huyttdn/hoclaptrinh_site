import type { Route } from "./+types/gioi-thieu";
import { CtaBand } from "../components/cta-band";
import { Compass, Heart, Layers, Mail } from "../components/icons";
import {
  Avatar,
  ButtonLink,
  Container,
  PageHero,
  SectionHeading,
} from "../components/ui";
import { site, stats, team, values } from "../data/site";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Giới thiệu",
    description:
      "Học Code là nền tảng học lập trình cho người mới bắt đầu, với lộ trình rõ ràng, bài giảng tiếng Việt và đội ngũ giảng viên tận tâm.",
  });
}

const valueIcons = {
  compass: Compass,
  layers: Layers,
  heart: Heart,
} as const;

export default function GioiThieu() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title={
          <>
            Chúng tôi giúp người mới bắt đầu{" "}
            <span className="font-serif italic text-brand-700">đúng cách</span>
            .
          </>
        }
        description="Học Code được tạo ra bởi những người từng chật vật khi tự học lập trình. Chúng tôi gom lại mọi thứ người mới cần — và bỏ đi những thứ chỉ khiến bạn rối."
      >
        <ButtonLink to="/dang-ky" size="lg">
          Đăng ký học
        </ButtonLink>
        <ButtonLink to="/lo-trinh" variant="secondary" size="lg">
          Xem lộ trình
        </ButtonLink>
      </PageHero>

      <StorySection />
      <ValuesSection />
      <TeamSection />

      <CtaBand
        title="Chúng tôi rất vui được đồng hành cùng bạn."
        description="Dù bạn mới bắt đầu hay đang tìm cách học lại từ đầu, một buổi trò chuyện ngắn thường là điểm khởi đầu tốt nhất."
        primaryLabel="Đăng ký ngay"
      />
    </>
  );
}

function StorySection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Câu chuyện"
              title="Bắt đầu từ một chỗ học tử tế."
            />
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Học Code ra đời năm 2020 với một điều đơn giản: người mới học
                lập trình cần một lộ trình rõ ràng và một người đồng hành kiên
                nhẫn. Quá nhiều tài liệu rời rạc khiến việc học trở nên đáng sợ.
              </p>
              <p>
                Vì vậy chúng tôi xây dựng nền tảng này theo hướng ngược lại —
                ít hơn nhưng chắc hơn. Mỗi bài giảng chỉ dạy một điều, kèm bài
                tập và dự án để bạn hiểu bằng cách làm.
              </p>
              <p>
                Chúng tôi giữ nội dung hoàn toàn bằng tiếng Việt, giải thích mọi
                thuật ngữ từ đầu, để bạn không phải vừa học lập trình vừa học
                một ngôn ngữ mới.
              </p>
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm text-slate-600">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.5)] sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-100/80 blur-3xl"
              />
              <div className="relative">
                <p className="font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
                  “Chúng tôi không cố dạy thật nhiều. Chúng tôi cố dạy thật rõ,
                  để bạn không bao giờ cảm thấy lạc lõng.”
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <Avatar
                    initials="QB"
                    accent="from-brand-500 to-cyan-400"
                    size="md"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Trần Quốc Bảo
                    </p>
                    <p className="text-sm text-slate-500">
                      Người sáng lập & Giảng viên chính
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-semibold tracking-tight text-ink">
                  2020
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Nền tảng được thành lập
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-semibold tracking-tight text-ink">
                  4
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Giảng viên & cố vấn
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="border-y border-slate-900/5 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Điều chúng tôi theo đuổi"
          title="Ba nguyên tắc trong mọi bài giảng."
          description="Chúng định hình cách chúng tôi viết nội dung, đặt bài tập và phản hồi cho học viên."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = valueIcons[value.icon];

            return (
              <div
                key={value.title}
                className="rounded-[1.75rem] border border-slate-200 bg-paper/70 p-6 transition-colors hover:border-slate-300 hover:bg-white sm:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm ring-1 ring-slate-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Đội ngũ"
            title="Người đồng hành cùng bạn."
            description="Chúng tôi là những người đã từng bắt đầu từ số 0. Bạn sẽ học với giảng viên trực tiếp viết bài giảng, không qua trung gian."
          />
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Đội ngũ được giữ nhỏ để mỗi học viên đều nhận được sự quan tâm. Khi
            cần, chúng tôi mời thêm cộng tác viên đã gắn bó nhiều năm.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]"
            >
              <Avatar
                initials={member.initials}
                accent={member.accent}
                size="lg"
              />
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-brand-700">
                {member.role}
              </p>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {member.bio}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                aria-label={`Gửi email cho ${member.name}`}
              >
                <Mail className="h-4 w-4" />
                Liên hệ
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
