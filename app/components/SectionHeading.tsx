export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl space-y-3 text-center sm:space-y-4">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-sm bg-[#0382ff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-lg font-medium leading-8 text-black">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
