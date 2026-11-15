import type { Route } from "./+types/contact";
import { ContactForm } from "../components/contact-form";
import {
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "../components/icons";
import { Container, PageHero, SectionHeading } from "../components/ui";
import { faqs, site } from "../data/site";
import { pageMeta } from "../lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Contact",
    description:
      "Start a project with Northline or ask a question. Tell us what you are building and we will reply within one business day.",
  });
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s make something{" "}
            <span className="font-serif italic text-brand-700">clear</span>.
          </>
        }
        description="Tell us what you are building, what is stuck, or what you are trying to prove. We read every message ourselves and reply within one business day."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            <div>
              <ContactForm />
              <p className="mt-4 px-2 text-xs leading-5 text-slate-600">
                Prefer email? Write to us directly at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-brand-700"
                >
                  {site.email}
                </a>
                . We do not use your details for anything else.
              </p>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="text-lg font-semibold tracking-tight text-ink">
                  Contact details
                </h2>
                <ul className="mt-6 space-y-6 text-sm">
                  <li className="flex gap-3">
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
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">Phone</p>
                      <a
                        href={`tel:${site.phoneHref}`}
                        className="mt-1 block text-slate-600 transition-colors hover:text-brand-700"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">Studio</p>
                      <p className="mt-1 whitespace-pre-line leading-6 text-slate-600">
                        {site.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">Hours</p>
                      <p className="mt-1 leading-6 text-slate-600">
                        {site.hours}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-ink p-6 text-white sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/25 blur-3xl"
                />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                    What happens next
                  </p>
                  <ol className="mt-5 space-y-5">
                    {[
                      "We read your note and reply within one business day.",
                      "If it looks like a fit, we book a 30-minute intro call.",
                      "You get a clear proposal with scope, timeline, and fee.",
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

              <p className="px-2 text-xs leading-5 text-slate-600">
                {site.responseTime} No sales sequence, no automated follow-ups.
              </p>
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
          eyebrow="FAQ"
          title="Questions, answered."
          description="A few things people usually ask before we start. If yours is not here, just ask — we are happy to talk it through."
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
