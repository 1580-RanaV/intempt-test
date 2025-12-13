import type { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-black/10 bg-[#fffff3] p-6 shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
