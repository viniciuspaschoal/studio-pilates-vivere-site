import { ArrowUpRight, Instagram } from "lucide-react";

import { siteConfig } from "@/config/site";

import { ActionLink } from "../ui/ActionLink";
import { containerClass, sectionClass } from "./layout";

export function InstagramSection() {
  return (
    <section id="instagram" className={`bg-primary-deep text-white ${sectionClass}`}>
      <div
        className={`${containerClass} grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20`}
      >
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
            <Instagram className="size-4" aria-hidden="true" />
            {siteConfig.instagram.eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {siteConfig.instagram.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
            {siteConfig.instagram.description}
          </p>
          <ActionLink href={siteConfig.links.instagram} variant="light" className="mt-8">
            <Instagram className="size-5" aria-hidden="true" />
            {siteConfig.instagram.action}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </ActionLink>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-4" aria-label="Prévia visual do Instagram">
          {siteConfig.gallery.slice(0, 3).map((image, index) => (
            <a
              key={image.src}
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver Instagram — imagem ${index + 1}`}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 shadow-card ${index === 1 ? "translate-y-7" : ""}`}
            >
              <img
                src={image.src}
                alt=""
                loading="lazy"
                width={480}
                height={600}
                className="aspect-[4/5] size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 grid place-items-center bg-primary-deep/0 text-white opacity-0 transition-[background-color,opacity] group-hover:bg-primary-deep/35 group-hover:opacity-100">
                <Instagram className="size-7" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
