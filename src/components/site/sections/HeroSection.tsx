import { CheckCircle2, Instagram, UsersRound } from "lucide-react";

import { siteConfig } from "@/config/site";

import { BrandWordmark } from "../BrandWordmark";
import { ActionLink } from "../ui/ActionLink";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { WaveAccent } from "../ui/WaveAccent";
import { containerClass } from "./layout";

const heroHighlights = [
  { label: siteConfig.hero.cards[0], Icon: CheckCircle2 },
  { label: siteConfig.hero.cards[1], Icon: UsersRound },
] as const;

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-wave-surface wave-surface relative isolate overflow-hidden bg-hero pb-14 pt-28 sm:pb-20 sm:pt-36 lg:flex lg:min-h-180 lg:items-center lg:pb-24 lg:pt-32"
    >
      <WaveAccent className="-bottom-12 left-[-18%] h-44 w-[136%] text-primary-light sm:h-56" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />
      <div className="hero-orb hero-orb-left" aria-hidden="true" />

      <div
        className={`${containerClass} relative grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 xl:gap-16`}
      >
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-primary-light/40 bg-white/35 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.19em] text-primary backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-primary-light" aria-hidden="true" />
            {siteConfig.hero.eyebrow}
          </span>

          <h1 className="mx-auto mt-7 max-w-[10.5em] text-balance text-[2.55rem] font-medium leading-[1.07] tracking-tight text-primary-deep sm:text-[3.3rem] lg:mx-0 lg:text-[3.45rem] xl:text-[3.65rem]">
            <span className="sr-only">{siteConfig.name} — </span>
            <span className="block">{siteConfig.hero.title}</span>
            <span className="mt-[0.08em] block font-normal text-primary">
              {siteConfig.hero.titleHighlight}
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-136 text-pretty text-base leading-[1.8] text-muted-foreground sm:text-lg sm:leading-[1.75] lg:mx-0 lg:max-w-lg">
            {siteConfig.hero.description}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ActionLink
              href={siteConfig.links.whatsapp}
              variant="whatsapp"
              fullWidth
              className="hero-primary-action"
              aria-label="Agendar uma aula pelo WhatsApp"
            >
              <WhatsAppIcon className="size-5" />
              Agendar pelo WhatsApp
            </ActionLink>
            <ActionLink
              href={siteConfig.links.instagram}
              variant="outline"
              fullWidth
              className="hero-secondary-action"
              aria-label="Visitar o Instagram do Studio Pilates Vivere"
            >
              <Instagram className="size-4.5" aria-hidden="true" />
              Ver Instagram
            </ActionLink>
          </div>
        </div>

        <div className="hero-visual relative mx-auto w-full max-w-137.5 lg:-translate-y-8 lg:translate-x-4 xl:translate-x-7">
          <div className="hero-brand-ring" aria-hidden="true" />

          <div className="relative z-1 flex min-h-75 flex-col items-center justify-center px-4 pb-8 pt-3 sm:min-h-97.5 sm:px-8 sm:pb-12 lg:min-h-105">
            <div className="w-full max-w-93.75 sm:max-w-107.5 lg:max-w-116.25">
              <img
                src={siteConfig.brand.symbolUrl}
                alt="Símbolo do Studio Pilates Vivere: pessoa praticando pilates sob um arco azul"
                className="h-auto w-full"
                width={546}
                height={240}
                fetchPriority="high"
              />
              <BrandWordmark decorative className="mt-1 w-full opacity-95" />
            </div>
          </div>

          <ul className="relative z-10 -mt-5 grid grid-cols-2 gap-2 sm:-mt-9 sm:gap-3 lg:absolute lg:inset-x-0 lg:bottom-4 lg:mt-0">
            {heroHighlights.map(({ label, Icon }, index) => (
              <li
                key={label}
                className={`hero-highlight flex min-h-13 items-center gap-2.5 rounded-2xl border border-white/65 bg-white/55 px-3 py-2.5 text-left text-xs font-medium leading-snug text-primary-deep backdrop-blur-md sm:min-h-14 sm:gap-3 sm:px-4 sm:text-[0.82rem] ${index === 0 ? "lg:mr-auto" : "lg:ml-auto lg:translate-y-6"}`}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary-soft/80 text-primary sm:size-9">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
