import { Link } from "react-router";
import type { Route } from "./+types/home";
import { CtaBand } from "../components/cta-band";
import { HeroVisual } from "../components/hero-visual";
import {
  ArrowRight,
  Check,
  Code,
  Compass,
  Heart,
  Layers,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "../components/icons";
import { TestimonialCarousel } from "../components/testimonial-carousel";
import {
  Avatar,
  ButtonLink,
  Container,
  Eyebrow,
  SectionHeading,
  Stars,
} from "../components/ui";
import {
  clients,
  services,
  site,
  stats,
  testimonials,
  values,
  whyChooseUs,
} from "../data/site";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Digital product studio",
    description: site.description,
  });
}

const serviceIcons = {
  strategy: Compass,
  design: Layers,
  engineering: Code,
  growth: TrendingUp,
} as const;

const featureIcons = {
  users: Users,
  clarity: Target,
  shield: ShieldCheck,
  spark: Sparkles,
} as const;

const valueIcons = {
  compass: Compass,
  layers: Layers,
  heart: Heart,
} as const;

export default function Home() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <ServicesSection />
      <WhyNorthline />
      <StatsBand />
      <AboutPreview />
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

      <Container className="relative grid items-center gap-16 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-28">
        <div>
          <Eyebrow>Independent digital studio</Eyebrow>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
            Digital products that make complex ideas feel{" "}
            <span className="font-serif italic tracking-normal text-brand-700">
              simple
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600">
            Northline is a senior design and engineering studio. We help
            ambitious teams shape, build, and launch websites and products that
            are clear, fast, and built to last.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink to="/contact" size="lg">
              Start a project
            </ButtonLink>
            <ButtonLink to="/services" variant="secondary" size="lg">
              Explore services
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
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
                <Stars className="text-amber-400" label="Rated 4.9 out of 5 by clients" />
                <span className="text-sm font-semibold text-ink">4.9/5</span>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                From 60+ engagements with ambitious teams.
              </p>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {[
              "Strategy-led",
              "Design and build under one roof",
              "Accessible by default",
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}

function ClientStrip() {
  return (
    <section
      aria-label="Selected clients"
      className="border-y border-slate-900/5 bg-white/50"
    >
      <Container className="py-8 sm:py-10">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Trusted by teams at
        </p>
        <ul className="mt-5 grid grid-cols-2 items-center gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <li
              key={client}
              className="text-center text-sm font-semibold tracking-tight text-slate-500 transition-colors hover:text-slate-600 sm:text-base"
            >
              {client}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                One team from first idea to{" "}
                <span className="font-serif italic text-brand-700">
                  final launch
                </span>
                .
              </>
            }
            description="We connect strategy, design, and engineering so the thinking survives the build — and the result works as well as it looks."
          />
          <ButtonLink
            to="/services"
            variant="secondary"
            className="shrink-0"
          >
            All services
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article
                key={service.slug}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-[0_30px_70px_-50px_rgba(15,23,42,0.55)] sm:p-8"
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
                    <span className="text-xs font-semibold tabular-nums text-slate-500">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {service.summary}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-500"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/services#${service.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all hover:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                  >
                    Explore {service.title.toLowerCase()}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function WhyNorthline() {
  return (
    <section className="relative overflow-hidden border-y border-slate-900/5 bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why Northline"
            title={
              <>
                Senior attention, without the{" "}
                <span className="font-serif italic text-brand-700">
                  agency theatre
                </span>
                .
              </>
            }
            description="You get a small, experienced team that stays close to the work. No layers, no handoffs, and no surprises about who is actually doing it."
          />
          <ButtonLink to="/about" variant="secondary" className="mt-8">
            More about us
          </ButtonLink>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item) => {
            const Icon = featureIcons[item.icon];

            return (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-paper/70 p-6 transition-colors hover:border-slate-300 hover:bg-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm ring-1 ring-slate-200">
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
    <section className="bg-white">
      <Container>
        <dl className="grid grid-cols-2 gap-8 border-b border-slate-200 py-12 sm:grid-cols-4 sm:py-14">
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

function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-[0_40px_100px_-60px_rgba(15,23,42,0.8)] sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl"
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  Our point of view
                </p>
                <p className="mt-6 font-serif text-3xl leading-[1.12] sm:text-4xl">
                  “The best digital work feels inevitable in hindsight. Getting
                  there takes curiosity, candour, and a lot of editing.”
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <Avatar
                    initials="AM"
                    accent="from-brand-400 to-cyan-300"
                    size="md"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">Alex Morgan</p>
                    <p className="text-sm text-slate-400">
                      Founder & Creative Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)] sm:-right-6">
              <p className="text-2xl font-semibold tracking-tight text-ink">
                12 yrs
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                making complex things clear
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Northline"
              title={
                <>
                  A small studio with a{" "}
                  <span className="font-serif italic text-brand-700">
                    clear point of view
                  </span>
                  .
                </>
              }
              description="We started Northline because we kept seeing the same problem: good ideas losing their shape between strategy, design, and engineering. So we built a studio where those disciplines never leave the same room."
            />

            <ul className="mt-8 space-y-4">
              {values.map((value) => {
                const Icon = valueIcons[value.icon];

                return (
                  <li key={value.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {value.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {value.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <ButtonLink to="/about" variant="secondary" className="mt-8">
              Meet the team
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="border-t border-slate-900/5 bg-white/50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Client stories"
            title={
              <>
                Good work. Better{" "}
                <span className="font-serif italic text-brand-700">
                  partnerships
                </span>
                .
              </>
            }
            description="We measure success by what happens after launch — and by whether our clients would happily work with us again."
          />
          <div className="flex shrink-0 items-center gap-2 text-sm text-slate-500">
            <Stars className="text-amber-400" label="Rated 4.9 out of 5 by clients" />
            <span className="font-semibold text-ink">4.9</span> average across
            60+ engagements
          </div>
        </div>

        <div className="mt-12">
          <TestimonialCarousel />
        </div>
      </Container>
    </section>
  );
}
