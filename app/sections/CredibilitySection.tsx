import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { SectionHeading } from "../components/SectionHeading";
import { siteContent } from "../content/siteContent";

export function CredibilitySection({
  proof,
}: {
  proof: (typeof siteContent)["proof"];
}) {
  return (
    <section className="pt-24 pb-12">
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="CREDIBILITY"
            title={proof.title}
            subtitle="Intempt is built to handle massive event volumes and lifecycle complexity — without sacrificing speed."
          />
        </AnimateIn>

        <AnimateIn delayMs={80}>
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="grid gap-y-8 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-4">
              {proof.impact.map((m, idx) => (
                <div
                  key={m.label}
                  className={[
                    "text-center md:px-6",
                    idx !== 0 ? "md:border-l md:border-black/10" : "",
                  ].join(" ")}
                >
                  <div className="text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                    {m.value}
                  </div>
                  <div className="mx-auto mt-3 max-w-[16ch] text-sm font-normal leading-6 text-black">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}

