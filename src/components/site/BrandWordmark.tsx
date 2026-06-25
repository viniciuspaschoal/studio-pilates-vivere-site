import { siteConfig } from "@/config/site";

export function BrandWordmark({
  className = "",
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <div
      className={`font-brand text-center uppercase tracking-wide ${className}`}
      aria-label={decorative ? undefined : siteConfig.name}
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : "img"}
    >
      <span className="block text-[clamp(1rem,3vw,1.65rem)] font-bold leading-[1.3] tracking-[0.26em] text-primary-light">
        Studio
      </span>
      <span className="mt-1 block whitespace-nowrap text-[clamp(1.55rem,5vw,3rem)] font-extrabold leading-none tracking-[0.045em] text-primary-deep">
        Pilates Vivere
      </span>
    </div>
  );
}
