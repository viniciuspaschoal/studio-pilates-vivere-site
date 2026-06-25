import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Dumbbell,
  HandHeart,
  Leaf,
  MoveHorizontal,
  RotateCw,
  Scale,
  Smile,
} from "lucide-react";

import { siteConfig, type BenefitIcon } from "@/config/site";

import { SectionHeading } from "../ui/SectionHeading";
import { containerClass, sectionClass } from "./layout";

const benefitIcons: Record<BenefitIcon, LucideIcon> = {
  activity: Activity,
  balance: Scale,
  brain: Leaf,
  flexibility: MoveHorizontal,
  heart: HandHeart,
  mobility: RotateCw,
  shield: Dumbbell,
  smile: Smile,
};

export function BenefitsSection() {
  return (
    <section id="beneficios" className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow={siteConfig.benefitsIntro.eyebrow}
          title={siteConfig.benefitsIntro.title}
          description={siteConfig.benefitsIntro.description}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.benefits.map((benefit, index) => {
            const Icon = benefitIcons[benefit.icon];

            return (
              <li
                key={benefit.title}
                className={`benefit-card group relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-1.5 hover:border-primary-light hover:shadow-card ${index === 0 || index === 5 ? "lg:-translate-y-3 lg:hover:-translate-y-5" : ""}`}
              >
                <span
                  className="absolute -right-8 -top-8 size-24 rounded-full bg-primary-soft transition-transform duration-500 group-hover:scale-125"
                  aria-hidden="true"
                />
                <div className="relative grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="relative mt-5 text-xl font-semibold text-primary-deep">
                  {benefit.title}
                </h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
