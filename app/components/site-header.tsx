import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { navLinks } from "../data/site";
import { ArrowRight, Close, Menu } from "./icons";
import { Logo } from "./logo";
import { buttonClass, Container } from "./ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const showSolid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        showSolid
          ? "border-b border-slate-900/10 bg-paper/85 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Chính" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                    isActive
                      ? "bg-slate-900/[0.06] text-ink"
                      : "text-slate-600 hover:bg-slate-900/[0.04] hover:text-ink",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/dang-ky"
              className={buttonClass("primary", "sm", "group/button")}
            >
              Đăng ký học
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-slate-900/10 bg-paper/95 backdrop-blur-xl lg:hidden"
      >
        <Container className="py-4">
          <nav aria-label="Di động" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                    isActive
                      ? "bg-slate-900/[0.06] text-ink"
                      : "text-slate-600 hover:bg-slate-900/[0.04] hover:text-ink",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/dang-ky"
              className={buttonClass("primary", "md", "mt-3 w-full")}
              onClick={() => setOpen(false)}
            >
              Đăng ký học
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
