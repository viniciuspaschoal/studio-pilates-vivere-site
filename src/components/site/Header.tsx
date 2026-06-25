import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";

import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(
    siteConfig.navigation[0]?.href ?? "#inicio",
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = siteConfig.navigation
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-32% 0px -52% 0px",
        threshold: [0.08, 0.18, 0.32, 0.48],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] ${
        scrolled
          ? "border-border bg-background/95 shadow-soft backdrop-blur-md"
          : "border-transparent bg-background/75 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a
          href="#inicio"
          className="rounded-md"
          aria-label={`${siteConfig.name} — início`}
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={siteConfig.brand.symbolUrl}
            alt=""
            aria-hidden="true"
            className="h-11 w-auto sm:hidden"
            width={548}
            height={248}
          />
          <img
            src={siteConfig.brand.logoUrl}
            alt=""
            aria-hidden="true"
            className="hidden h-14 w-auto sm:block"
            width={620}
            height={359}
          />
        </a>

        <nav aria-label="Menu principal" className="hidden xl:block">
          <ul className="flex items-center gap-5">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={activeSection === item.href ? "page" : undefined}
                  className={`relative inline-flex py-2 text-sm font-medium transition-colors after:absolute after:inset-x-1 after:bottom-0 after:h-px after:origin-center after:rounded-full after:bg-primary-light after:transition-transform after:duration-300 hover:text-primary ${
                    activeSection === item.href
                      ? "text-primary after:scale-x-100"
                      : "text-foreground/80 after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-whatsapp-dark sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-primary-soft xl:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Menu mobile"
          className="border-t border-border bg-background xl:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeSection === item.href ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-primary-soft hover:text-primary ${
                    activeSection === item.href
                      ? "bg-primary-soft/80 text-primary"
                      : "text-foreground/90"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 sm:hidden">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-base font-semibold text-white"
              >
                <WhatsAppIcon className="size-5" />
                Agendar pelo WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
