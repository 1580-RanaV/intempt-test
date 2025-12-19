import Image from "next/image";
import { AnimateIn } from "../components/AnimateIn";
import { Container } from "../components/Container";
import { siteContent } from "../content/siteContent";

function StatCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-black/10 bg-[#f5f5f5]/90 p-6 shadow-sm backdrop-blur",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="text-sm font-medium text-black">{title}</div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function MiniBars({
  values,
  colorClass = "bg-[#0382ff]",
}: {
  values: number[];
  colorClass?: string;
}) {
  const max = Math.max(...values, 1);
  return (
    <div className="flex items-end gap-2">
      {values.map((v, idx) => (
        <div
          key={idx}
          className="flex w-6 flex-col justify-end rounded-xl bg-black/[0.03] ring-1 ring-inset ring-black/10"
          style={{ height: 112 }}
        >
          <div
            className={[
              "w-full rounded-xl transition-all duration-300",
              colorClass,
            ].join(" ")}
            style={{ height: `${Math.max(8, (v / max) * 112)}px` }}
          />
        </div>
      ))}
    </div>
  );
}

function RetentionBars() {
  const rows = [
    { label: "Loyal", width: "86%", color: "bg-[#0382ff]" },
    { label: "Hibernating", width: "68%", color: "bg-[#7ab7ff]" },
    { label: "At risk", width: "52%", color: "bg-black/20" },
    { label: "Churned", width: "38%", color: "bg-black/10" },
  ];

  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.label} className="space-y-2">
          <div className="flex items-center justify-between text-xs font-normal text-black">
            <span>{r.label}</span>
            <span>{r.width}</span>
          </div>
          <div className="h-3 w-full rounded-full bg-black/[0.04] ring-1 ring-inset ring-black/10">
            <div
              className={["h-3 rounded-full", r.color].join(" ")}
              style={{ width: r.width }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function GrowthGauge({ value = 72 }: { value?: number }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="text-sm font-semibold text-white/80">Growth %</div>
      <div className="relative grid h-20 w-20 place-items-center">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#0382ff 0 ${value * 3.6}deg, rgba(255,255,255,0.14) ${value * 3.6}deg 360deg)`,
          }}
        />
        <div className="absolute inset-2 rounded-full bg-black ring-1 ring-inset ring-white/10" />
        <div className="relative text-lg font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}

function CenterMark() {
  return (
    <div className="relative grid place-items-center">
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="h-[260px] w-[260px] rounded-full bg-[#0382ff]/10" />
      </div>
      <div className="relative grid place-items-center">
        <div className="relative grid h-[280px] w-[280px] place-items-center">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 140deg, #0382ff 0 65%, rgba(3,130,255,0.25) 65% 100%)",
              maskImage:
                "radial-gradient(transparent 55%, #000 56%), repeating-conic-gradient(#000 0 18deg, transparent 18deg 26deg)",
              WebkitMaskImage:
                "radial-gradient(transparent 55%, #000 56%), repeating-conic-gradient(#000 0 18deg, transparent 18deg 26deg)",
            }}
          />
          <div className="absolute inset-10 rounded-full bg-[#f5f5f5] ring-1 ring-inset ring-black/10" />
          <div className="relative grid h-24 w-24 place-items-center rounded-3xl bg-[#f5f5f5] ring-1 ring-inset ring-black/10 shadow-sm">
            <Image
              src="/logo.png"
              alt="Intempt"
              width={56}
              height={56}
              className="h-14 w-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function GrowSection({
  grow,
}: {
  grow: (typeof siteContent)["grow"];
}) {
  return (
    <section className="py-24" id="grow">
      <Container>
        <AnimateIn>
          <div className="text-center">
            <div className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">
              {grow.title}
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-lg font-normal leading-8 text-black sm:text-xl">
              {grow.subtitle}
            </p>
          </div>
        </AnimateIn>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[radial-gradient(35%_45%_at_10%_10%,rgba(3,130,255,0.12),transparent_60%),radial-gradient(35%_45%_at_90%_20%,rgba(3,130,255,0.10),transparent_60%)]" />

          <div className="relative grid gap-6 md:grid-cols-2">
            <AnimateIn delayMs={60}>
              <StatCard title="Average Order Value">
                <div className="flex items-end justify-between gap-4">
                  <div className="text-6xl font-semibold tracking-tight text-black sm:text-7xl">
                    89.98
                  </div>
                  <div className="rounded-full bg-[#0382ff]/10 px-3 py-1 text-xs font-semibold text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
                    Overall
                  </div>
                </div>
              </StatCard>
            </AnimateIn>

            <AnimateIn delayMs={120}>
              <StatCard title="Retention %">
                <RetentionBars />
              </StatCard>
            </AnimateIn>

            <AnimateIn className="md:col-span-1" delayMs={140}>
              <div className="rounded-3xl bg-black p-6 shadow-sm">
                <GrowthGauge value={72} />
                <div className="mt-5 text-xs font-semibold text-white/60">
                  Always-on orchestration.
                </div>
              </div>
            </AnimateIn>

            <AnimateIn className="md:col-span-1" delayMs={160}>
              <div className="grid h-full place-items-center rounded-3xl border border-black/10 bg-[#f5f5f5]/90 p-6 shadow-sm backdrop-blur">
                <CenterMark />
              </div>
            </AnimateIn>

            <AnimateIn className="md:col-span-2" delayMs={180}>
              <StatCard title="Conversion %">
                <div className="flex items-end justify-between gap-4">
                  <div className="text-4xl font-semibold tracking-tight text-black">
                    +18%
                  </div>
                  <div className="text-xs font-semibold text-black/50">
                    last 30 days
                  </div>
                </div>
                <div className="mt-5">
                  <MiniBars values={[18, 28, 46, 34, 40, 31, 36, 44]} />
                </div>
              </StatCard>
            </AnimateIn>

            <AnimateIn className="md:col-span-2" delayMs={200}>
              <StatCard title="Customer Lifetime Value">
                <div className="flex items-end justify-between gap-4">
                  <div className="text-4xl font-semibold tracking-tight text-black">
                    $2,941
                  </div>
                  <div className="text-xs font-semibold text-black/50">
                    blended
                  </div>
                </div>
                <div className="mt-5">
                  <MiniBars
                    values={[72, 58, 44, 38, 31, 24]}
                    colorClass="bg-[#7ab7ff]"
                  />
                </div>
              </StatCard>
            </AnimateIn>

            <AnimateIn className="md:col-span-2" delayMs={220}>
              <div className="rounded-3xl border border-black/10 bg-[#f5f5f5]/90 p-8 shadow-sm backdrop-blur">
                <div className="text-sm font-medium text-black">
                  Key metrics that compound growth
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {grow.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-full bg-[#0382ff]/5 px-3 py-1.5 text-xs font-semibold text-black/70 ring-1 ring-inset ring-[#0382ff]/15"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-sm font-normal leading-7 text-black">
                  Insights flow directly into journeys, experiments, and
                  personalizations—so every improvement becomes the next best
                  action.
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
