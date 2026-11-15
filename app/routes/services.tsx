import type { Route } from "./+types/services";
import { CtaBand } from "../components/cta-band";
import {
  ArrowRight,
  Check,
  Code,
  Compass,
  Layers,
  TrendingUp,
} from "../components/icons";
import {
  ButtonLink,
  Container,
  PageHero,
  SectionHeading,
} from "../components/ui";
import { engagements, process, services } from "../data/site";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Services",
    description:
      "Brand strategy, product design, web development, and growth services from Northline — one senior team from first idea to launch.",
  });
}

const serviceIcons = {
  strategy: Compass,
  design: Layers,
  engineering: Code,
  growth: TrendingUp,
} as const;

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Strategy, design, and engineering{" "}
            <span className="font-serif italic text-brand-700">
              under one roof
            </span>
            .
          </>
        }
        description="We are a small senior team that can take a project from a difficult question to a finished product. Pick the piece you need, or bring us in for the whole journey."
      >
        <ButtonLink to="/contact" size="lg">
          Start a project
        </ButtonLink>
        <ButtonLink to="#process" variant="secondary" size="lg">
          See our process
        </ButtonLink>
      </PageHero>

      <ServiceDetails />
      <ProcessSection />
      <EngagementSection />

      <CtaBand
        title="Not sure which service you need?"
        description="Tell us what is changing, what is stuck, or what you are trying to prove. We will help you find the right starting point."
        primaryLabel="Book an intro call"
      />
    </>
  );
}

function ServiceDetails() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Four ways we can help."
          description="Each engagement is scoped around a real outcome. The work below is a starting point, not a rigid package — we shape it around your team and timeline."
        />

        <div className="mt-14 space-y-5">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.35)] sm:p-8 lg:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-sm font-semibold tabular-nums text-slate-500">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 font-serif text-xl italic text-brand-700">
                      {service.tagline}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-paper/80 p-4 text-sm leading-6 text-slate-600">
                      <span className="font-semibold text-ink">Best for:</span>{" "}
                      {service.bestFor}
                    </div>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        What is included
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {service.features.map((feature) => (
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
                        Typical deliverables
                      </h4>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable) => (
                          <li
                            key={deliverable}
                            className="rounded-full border border-slate-200 bg-paper px-3 py-1.5 text-xs font-medium text-slate-600"
                          >
                            {deliverable}
                          </li>
                        ))}
                      </ul>

                      <ButtonLink
                        to="/contact"
                        variant="secondary"
                        size="sm"
                        className="mt-6"
                      >
                        Discuss this service
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
      id="process"
      className="scroll-mt-28 border-y border-slate-900/5 bg-white py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A calm, deliberate process."
          description="No mystery, no black boxes. You will always know what we are doing, why it matters, and what comes next."
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
          Most projects run in weekly milestones, with a working session every
          step of the way.
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
          eyebrow="Ways to work together"
          title="Start where it makes sense."
          description="Every team is at a different stage. These are the three shapes our engagements usually take."
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
                  to="/contact"
                  variant={featured ? "light" : "secondary"}
                  size="sm"
                  className="mt-7 w-fit"
                >
                  Enquire
                </ButtonLink>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
