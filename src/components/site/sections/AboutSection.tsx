import { HeartHandshake, ShieldCheck } from "lucide-react";

import { siteConfig } from "@/config/site";

import { SectionHeading } from "../ui/SectionHeading";
import { WaveAccent } from "../ui/WaveAccent";
import { containerClass, sectionClass } from "./layout";

export function AboutSection() {
  return (
    <section id="sobre" className={`wave-surface relative isolate overflow-hidden ${sectionClass}`}>
      <WaveAccent className="-right-[35%] top-8 -z-10 h-52 w-[105%] text-primary-light" />
      <div
        className={`${containerClass} grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20`}
      >
        <div className="relative mx-auto w-full max-w-xl">
          <div
            className="absolute -bottom-5 -left-5 h-[76%] w-[78%] rounded-[2.25rem] bg-primary-soft"
            aria-hidden="true"
          />
          <div
            className="absolute -right-5 -top-5 size-28 rounded-full border border-primary-light/50"
            aria-hidden="true"
          />
          <img
            src={siteConfig.about.image}
            alt={siteConfig.about.imageAlt}
            loading="lazy"
            width={1280}
            height={896}
            className="relative aspect-[4/3] w-full rounded-[2.25rem] object-cover shadow-card"
          />
          <div className="absolute -bottom-7 right-4 flex max-w-[245px] items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 text-sm font-semibold text-primary-deep shadow-card sm:right-8">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
              <HeartHandshake className="size-5" aria-hidden="true" />
            </span>
            Seu ritmo vem sempre em primeiro lugar
          </div>
        </div>

        <div className="pt-5 lg:pt-0">
          <SectionHeading
            eyebrow={siteConfig.about.eyebrow}
            title={siteConfig.about.title}
            description={siteConfig.about.description}
            align="left"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {siteConfig.about.highlights.map((highlight) => (
              <li
                key={highlight}
                className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-white px-4 py-3.5 shadow-soft transition-[border-color,transform] hover:-translate-y-0.5 hover:border-primary-light"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <ShieldCheck className="size-4.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-primary-deep sm:text-base">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
