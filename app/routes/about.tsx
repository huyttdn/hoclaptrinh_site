import type { Route } from "./+types/about";
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
    title: "About",
    description:
      "Northline is a small, senior design and engineering studio in San Francisco. Meet the team and the principles behind the work.",
  });
}

const valueIcons = {
  compass: Compass,
  layers: Layers,
  heart: Heart,
} as const;

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Northline"
        title={
          <>
            A small studio with a simple belief:{" "}
            <span className="font-serif italic text-brand-700">
              clarity wins
            </span>
            .
          </>
        }
        description="We are designers, strategists, and engineers who like difficult problems and dislike unnecessary complexity. For over a decade we have helped ambitious teams turn good ideas into clear, useful digital products."
      >
        <ButtonLink to="/contact" size="lg">
          Work with us
        </ButtonLink>
        <ButtonLink to="/services" variant="secondary" size="lg">
          See our services
        </ButtonLink>
      </PageHero>

      <StorySection />
      <ValuesSection />
      <TeamSection />

      <CtaBand
        title="We would love to hear what you are working on."
        description="Whether the idea is early or the redesign is overdue, a short conversation is usually the fastest way to find out if we are a good fit."
        primaryLabel="Say hello"
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
              eyebrow="Our story"
              title="Built to keep good ideas intact."
            />
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Northline started in 2014 with a simple frustration: the best
                ideas were getting lost between strategy, design, and
                engineering. Each team was talented. The handoffs were not.
              </p>
              <p>
                So we built a studio where those disciplines sit at the same
                table from day one. Today we are a team of four senior
                practitioners, working with a small number of clients at a
                time, on work that matters to them.
              </p>
              <p>
                We are deliberately independent and deliberately small. That
                means the person you meet is the person doing the work, and the
                decisions stay close to the detail.
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
                  “We are not trying to be the biggest studio. We are trying to
                  be the one you call when the problem actually matters.”
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <Avatar
                    initials="AM"
                    accent="from-brand-500 to-cyan-400"
                    size="md"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Alex Morgan
                    </p>
                    <p className="text-sm text-slate-500">
                      Founder & Creative Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-semibold tracking-tight text-ink">
                  2014
                </p>
                <p className="mt-1 text-xs text-slate-500">Studio founded</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-semibold tracking-tight text-ink">
                  4
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Senior practitioners
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
          eyebrow="What we believe"
          title="Three principles we keep coming back to."
          description="They shape how we scope work, how we run projects, and how we make decisions when there is no obvious right answer."
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
            eyebrow="The team"
            title="Senior people, close to the work."
            description="No account managers, no handoffs, no juniors learning on your budget. You work directly with the people making the decisions."
          />
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            We keep the team intentionally small so we can stay hands-on. For
            larger builds, we bring in a trusted network of specialists we have
            worked with for years.
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
                aria-label={`Email Northline about ${member.name}`}
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
