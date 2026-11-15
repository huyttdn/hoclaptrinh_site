import type { Route } from "./+types/not-found";
import { ButtonLink, Container } from "../components/ui";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Page not found",
    description: "The page you are looking for does not exist or has moved.",
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
          This page took a{" "}
          <span className="font-serif italic text-brand-700">wrong turn</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-8 text-slate-600">
          The page you are looking for does not exist, has moved, or is still
          being built. Let&apos;s get you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink to="/services" variant="secondary" size="lg">
            View services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
