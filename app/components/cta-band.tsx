import { site } from "../data/site";
import { ArrowUpRight } from "./icons";
import { ButtonLink, Container, Eyebrow } from "./ui";

export function CtaBand({
  title = "Sẵn sàng bắt đầu học lập trình?",
  description = "Đăng ký để nhận lộ trình học, tài liệu và buổi hướng dẫn dành riêng cho người mới bắt đầu.",
  primaryLabel = "Đăng ký ngay",
  primaryTo = "/dang-ky",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
}) {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(33,134,245,0.35),transparent_45%),radial-gradient(circle_at_85%_100%,rgba(20,184,166,0.22),transparent_45%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <Eyebrow tone="dark">Bước tiếp theo</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink to={primaryTo} variant="light" size="lg">
                {primaryLabel}
              </ButtonLink>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
              >
                {site.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
