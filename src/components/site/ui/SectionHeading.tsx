import { Sparkles } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <Sparkles className="size-3.5" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        id={titleId}
        className="mt-4 text-balance text-3xl font-semibold leading-tight text-primary-deep sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
