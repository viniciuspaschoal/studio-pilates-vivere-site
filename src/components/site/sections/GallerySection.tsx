import { siteConfig } from "@/config/site";

import { SectionHeading } from "../ui/SectionHeading";
import { WaveAccent } from "../ui/WaveAccent";
import { containerClass, sectionClass } from "./layout";

const galleryLayout = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1 md:col-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
] as const;

export function GallerySection() {
  return (
    <section
      id="galeria"
      className={`wave-surface relative isolate overflow-hidden ${sectionClass}`}
    >
      <WaveAccent className="-right-[28%] bottom-3 -z-10 h-52 w-[105%] text-primary-light" />
      <div className={containerClass}>
        <SectionHeading
          eyebrow={siteConfig.galleryIntro.eyebrow}
          title={siteConfig.galleryIntro.title}
          description={siteConfig.galleryIntro.description}
        />
        <div className="mt-12 grid auto-rows-[145px] grid-cols-2 gap-3 sm:auto-rows-[205px] sm:gap-4 md:grid-cols-4">
          {siteConfig.gallery.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-primary-soft shadow-soft ${galleryLayout[index] ?? ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={index === 0 ? 1280 : 720}
                height={index === 0 ? 896 : 720}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-primary-deep/15 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
