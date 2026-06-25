import { Clock, Code2, Instagram, MapPin } from "lucide-react";

import { siteConfig } from "@/config/site";

import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Footer() {
  const developerBadge = (
    <>
      <span className="grid size-9 place-items-center rounded-xl bg-primary/20 text-primary-light">
        <Code2 className="size-4" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
          Dev by
        </span>
        <span className="font-display text-base font-semibold tracking-wide text-primary-light">
          {siteConfig.developer.name}
        </span>
      </span>
    </>
  );

  return (
    <footer className="bg-primary-deep text-white/85">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={siteConfig.brand.logoUrl}
              alt={siteConfig.name}
              className="h-16 w-auto brightness-0 invert"
              width={220}
              height={120}
            />
            <p className="mt-4 max-w-sm text-sm text-white/70">{siteConfig.footer.tagline}</p>
          </div>

          <nav aria-label="Menu do rodapé">
            <h2 className="font-display text-lg text-white">Navegação</h2>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a className="text-white/75 hover:text-primary-light" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg text-white">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-light" aria-hidden="true" />
                <span className="text-white/80">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary-light" aria-hidden="true" />
                <span className="text-white/80">{siteConfig.contact.schedule}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Studio Pilates Vivere"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>

          {siteConfig.developer.url ? (
            <a
              href={siteConfig.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.developer.label}
              className="developer-badge"
            >
              {developerBadge}
            </a>
          ) : (
            <div className="developer-badge" aria-label={siteConfig.developer.label}>
              {developerBadge}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com o Studio Pilates Vivere pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex size-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-whatsapp transition-transform hover:scale-105 sm:size-[68px]"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
