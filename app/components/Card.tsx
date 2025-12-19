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
        "rounded-sm border border-black/10 bg-[white] p-6 shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
