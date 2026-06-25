import { ChevronDown } from "lucide-react";

import { siteConfig } from "@/config/site";

import { ActionLink } from "../ui/ActionLink";
import { SectionHeading } from "../ui/SectionHeading";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { WaveAccent } from "../ui/WaveAccent";
import { containerClass, sectionClass } from "./layout";

export function FaqSection() {
  return (
    <section
      id="faq"
      className={`wave-surface relative isolate overflow-hidden bg-primary-soft/45 ${sectionClass}`}
    >
      <WaveAccent className="-left-[30%] bottom-0 -z-10 h-56 w-[110%] text-primary-light" />
      <div className={`${containerClass} grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20`}>
        <div>
          <SectionHeading
            eyebrow={siteConfig.faq.eyebrow}
            title={siteConfig.faq.title}
            description={siteConfig.faq.description}
            align="left"
          />
          <ActionLink href={siteConfig.links.whatsapp} variant="outline" className="mt-7">
            <WhatsAppIcon className="size-5" />
            Ainda tenho uma dúvida
          </ActionLink>
        </div>

        <div className="space-y-3">
          {siteConfig.faq.items.map((item) => (
            <details
              key={item.question}
              className="faq-item group rounded-2xl border border-white bg-white shadow-soft"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 font-semibold text-primary-deep sm:px-6">
                {item.question}
                <ChevronDown
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 pr-12 text-[15px] leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:pr-16">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
