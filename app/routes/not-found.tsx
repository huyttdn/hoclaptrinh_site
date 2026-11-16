import type { Route } from "./+types/not-found";
import { ButtonLink, Container } from "../components/ui";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Không tìm thấy trang",
    description: "Trang bạn tìm không tồn tại hoặc đã được di chuyển.",
  });
}

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(33,134,245,0.12),transparent_50%)]"
      />
      <Container className="max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
          404
        </p>
        <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Trang này đã đi{" "}
          <span className="font-serif italic text-brand-700">lạc đường</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-8 text-slate-600">
          Trang bạn tìm không tồn tại, đã được di chuyển hoặc đang được xây
          dựng. Hãy quay lại một nơi hữu ích hơn.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/" size="lg">
            Về trang chủ
          </ButtonLink>
          <ButtonLink to="/#dang-ky" variant="secondary" size="lg">
            Đăng ký học
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
