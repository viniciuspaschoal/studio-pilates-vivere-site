import { Quote, Star } from "lucide-react";

import { siteConfig } from "@/config/site";

import { SectionHeading } from "../ui/SectionHeading";
import { containerClass, sectionClass } from "./layout";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className={`${sectionClass} relative isolate overflow-hidden bg-gradient-to-b from-white via-primary-soft/45 to-white`}
      aria-labelledby="testimonials-title"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-14 -z-10 size-72 -translate-x-1/2 rounded-full bg-primary-light/10 blur-3xl"
        aria-hidden="true"
      />

      <div className={containerClass}>
        <SectionHeading
          eyebrow={siteConfig.testimonialsIntro.eyebrow}
          title={siteConfig.testimonialsIntro.title}
          description={siteConfig.testimonialsIntro.description}
          titleId="testimonials-title"
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {siteConfig.testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="relative overflow-hidden rounded-[1.75rem] border border-primary-light/20 bg-white/85 p-6 shadow-[0_18px_45px_rgb(0_72_104/0.07)] backdrop-blur-sm sm:p-7"
            >
              <Quote
                className="absolute right-6 top-6 size-9 text-primary-light/25"
                aria-hidden="true"
              />

              <div className="flex gap-1 text-primary-light" aria-label="Avaliação positiva">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3.5 fill-current" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="mt-5">
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  “{testimonial.text}”
                </p>
              </blockquote>

              <p className="mt-6 font-semibold text-primary-deep">{testimonial.name}</p>
              <p className="mt-1 text-sm text-primary/75">Aluna do Studio</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
