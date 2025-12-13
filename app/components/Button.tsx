import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0382ff] text-white hover:bg-[#0273e6] focus-visible:outline-[#0382ff]",
  secondary:
    "bg-[#fffff3] text-zinc-900 ring-1 ring-inset ring-black/10 hover:bg-black/[0.02] focus-visible:outline-[#0382ff]",
  ghost:
    "text-zinc-700 hover:text-zinc-900 hover:bg-black/[0.03] focus-visible:outline-[#0382ff]",
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <a
      className={[
        "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
