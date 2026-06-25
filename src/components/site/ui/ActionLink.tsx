import type { ComponentProps, ReactNode } from "react";

type ActionLinkProps = ComponentProps<"a"> & {
  children: ReactNode;
  variant?: "light" | "outline" | "primary" | "whatsapp";
  fullWidth?: boolean;
};

const actionVariants = {
  light: "bg-white text-primary-deep shadow-card hover:bg-primary-soft",
  outline:
    "border border-primary/30 bg-white/70 text-primary-deep hover:border-primary hover:bg-primary-soft",
  primary: "bg-primary text-white shadow-card hover:bg-primary-dark",
  whatsapp: "bg-whatsapp text-white shadow-card hover:bg-whatsapp-dark",
} as const;

export function ActionLink({
  children,
  className = "",
  fullWidth = false,
  href = "#",
  variant = "primary",
  ...props
}: ActionLinkProps) {
  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition-[background-color,border-color,color,box-shadow,transform] hover:-translate-y-0.5 ${actionVariants[variant]} ${fullWidth ? "w-full sm:w-auto" : ""} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
