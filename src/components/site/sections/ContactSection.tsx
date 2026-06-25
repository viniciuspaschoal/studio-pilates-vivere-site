import { Clock, ExternalLink, Instagram, MapPin } from "lucide-react";

import { siteConfig } from "@/config/site";

import { ActionLink } from "../ui/ActionLink";
import { SectionHeading } from "../ui/SectionHeading";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { containerClass, sectionClass } from "./layout";

export function ContactSection() {
  return (
    <section id="contato" className={sectionClass}>
      <div className={containerClass}>
        <div className="overflow-hidden rounded-[2.5rem] border border-border/70 bg-white shadow-card">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-7 sm:p-11 lg:p-14">
              <SectionHeading
                eyebrow={siteConfig.contactIntro.eyebrow}
                title={siteConfig.contactIntro.title}
                description={siteConfig.contactIntro.description}
                align="left"
              />
              <ul className="mt-7 space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{siteConfig.contact.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{siteConfig.contact.schedule}</span>
                </li>
              </ul>
              <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
                <ActionLink href={siteConfig.links.whatsapp} variant="whatsapp" className="px-5">
                  <WhatsAppIcon className="size-5" />
                  Agendar pelo WhatsApp
                </ActionLink>
                <ActionLink
                  href={siteConfig.links.instagram}
                  variant="outline"
                  aria-label="Instagram do Studio Pilates Vivere"
                  className="px-5"
                >
                  <Instagram className="size-5" aria-hidden="true" />
                  <span className="sm:sr-only">Instagram</span>
                </ActionLink>
              </div>
            </div>

            <div className="relative min-h-72 overflow-hidden border-t border-border bg-primary-soft lg:min-h-[520px] lg:border-l lg:border-t-0">
              <a
                href={siteConfig.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 z-10 inline-flex min-h-10 items-center gap-2 rounded-full border border-primary-light/25 bg-white/95 px-4 py-2 text-sm font-semibold text-primary-deep shadow-soft backdrop-blur-sm transition-colors hover:bg-primary-soft sm:bottom-5 sm:left-5"
              >
                Abrir no Maps
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
              <iframe
                title="Mapa do Studio Pilates Vivere"
                src={siteConfig.contact.mapEmbedUrl}
                className="absolute inset-0 size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
