import { Link } from "react-router";
import { navLinks, services, site } from "../data/site";
import {
  Dribbble,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  XSocial,
} from "./icons";
import { Logo } from "./logo";
import { NewsletterForm } from "./newsletter-form";
import { Container } from "./ui";

const socialIcons = {
  linkedin: Linkedin,
  x: XSocial,
  dribbble: Dribbble,
  instagram: Instagram,
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-slate-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(33,134,245,0.16),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(20,184,166,0.1),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"
      />

      <Container className="relative">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.6fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              {site.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.icon];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${site.name} on ${social.label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Studio notes
            </p>
            <NewsletterForm />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Get in touch</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className=" inline-flex items-start gap-3 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-start gap-3 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span className="whitespace-pre-line leading-6">
                  {site.address}
                </span>
              </li>
            </ul>
            <p className="mt-5 text-xs text-slate-400">{site.hours}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline">Made in San Francisco</span>
            <a
              href="#top"
              className="font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Back to top
            </a>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-0 select-none text-[19vw] font-semibold leading-none tracking-tighter text-white/[0.025]"
      >
        {site.name}
      </div>
    </footer>
  );
}
