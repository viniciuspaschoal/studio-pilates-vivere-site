import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";

import { ActionLink } from "../ui/ActionLink";
import { WaveAccent } from "../ui/WaveAccent";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { containerClass } from "./layout";

export function CtaSection() {
  return (
    <section className="px-5 py-8 sm:px-7 sm:py-12" aria-labelledby="cta-title">
      <div
        className={`${containerClass} wave-surface relative isolate overflow-hidden rounded-[2.5rem] bg-primary-deep px-6 py-12 text-white shadow-card sm:px-12 lg:px-16 lg:py-16`}
      >
        <WaveAccent className="-right-[28%] -top-6 -z-10 h-60 w-[110%] text-primary-light" />
        <div
          className="absolute -bottom-24 -left-20 -z-10 size-72 rounded-full bg-primary/45 blur-3xl"
          aria-hidden="true"
        />
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              {siteConfig.cta.eyebrow}
            </span>
            <h2
              id="cta-title"
              className="mt-3 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {siteConfig.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
              {siteConfig.cta.description}
            </p>
          </div>
          <ActionLink
            href={siteConfig.links.whatsappExperimental}
            variant="light"
            className="w-full lg:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            {siteConfig.cta.action}
            <ArrowRight className="size-4" aria-hidden="true" />
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
