import { Link } from "react-router";
import { navLinks, site } from "../data/site";
import { Facebook, Github, Youtube } from "./icons";
import { Logo } from "./logo";
import { Container } from "./ui";

const socialIcons = {
  facebook: Facebook,
  youtube: Youtube,
  github: Github,
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-night text-slate-400">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(33,134,245,0.16),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(20,184,166,0.1),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"
      />

      <Container className="relative">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.6fr_0.9fr_1fr]">
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
                    aria-label={`${site.name} trên ${social.label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Khám phá</h2>
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
              <li>
                <Link
                  to="/#dang-ky"
                  className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Đăng ký học
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <p className="max-w-xs text-lg font-semibold leading-8 text-white">
              {site.tagline}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#top"
              className="font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Lên đầu trang
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
