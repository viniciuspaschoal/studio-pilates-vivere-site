import { Clock, MapPin } from "lucide-react";

import { siteConfig } from "@/config/site";

import { ActionLink } from "../ui/ActionLink";
import { SectionHeading } from "../ui/SectionHeading";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { WaveAccent } from "../ui/WaveAccent";
import { containerClass, sectionClass } from "./layout";

export function StudioSection() {
  return (
    <section
      id="estrutura"
      className={`wave-surface relative isolate overflow-hidden bg-primary-soft/70 ${sectionClass}`}
    >
      <WaveAccent className="-left-[30%] top-2 -z-10 h-48 w-[110%] text-primary-light" />
      <div className={containerClass}>
        <SectionHeading
          eyebrow={siteConfig.studio.eyebrow}
          title={siteConfig.studio.title}
          description={siteConfig.studio.description}
        />
        <article className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2.25rem] border border-white bg-white shadow-card">
          <div className="grid lg:grid-cols-[1.12fr_.88fr]">
            <div className="relative min-h-72 overflow-hidden sm:min-h-96 lg:min-h-[470px]">
              <img
                src={siteConfig.studio.image}
                alt={siteConfig.studio.imageAlt}
                loading="lazy"
                width={1280}
                height={896}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-deep/35 to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="w-fit rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {siteConfig.studio.unitLabel}
              </span>
              <h3 className="mt-5 text-3xl font-semibold text-primary-deep">{siteConfig.name}</h3>
              <div className="mt-7 space-y-4">
                <p className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="pt-1.5">{siteConfig.contact.address}</span>
                </p>
                <p className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <span className="pt-1.5">{siteConfig.contact.schedule}</span>
                </p>
              </div>
              <div className="mt-8 grid gap-3">
                <ActionLink
                  href={siteConfig.links.whatsapp}
                  variant="whatsapp"
                  className="px-5 text-sm"
                >
                  <WhatsAppIcon className="size-4" />
                  Falar pelo WhatsApp
                </ActionLink>
                <ActionLink
                  href={siteConfig.contact.mapUrl}
                  variant="outline"
                  className="px-5 text-sm"
                >
                  <MapPin className="size-4" aria-hidden="true" />
                  Ver no mapa
                </ActionLink>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
