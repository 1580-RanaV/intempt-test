import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { SectionHeading } from "../components/SectionHeading";
import { siteContent } from "../content/siteContent";
import { AnimatedToolStrike } from "../components/AnimatedToolStrike";
import { AnimatedSubtitle } from "../components/AnimatedSubtitle";
import Image from "next/image";

export function ProblemRolesSection({
  why,
  roles,
}: {
  why: (typeof siteContent)["why"];
  roles: (typeof siteContent)["roles"];
}) {
  // Combine all tools from all categories into one array
  const allTools = why.stacks.flatMap((stack) => stack.tools);

  return (
    <section className="relative overflow-hidden pt-16 pb-24" id="solutions">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%),radial-gradient(45%_40%_at_0%_35%,rgba(124,58,237,0.08)_0%,rgba(124,58,237,0)_65%),radial-gradient(45%_40%_at_100%_40%,rgba(3,130,255,0.06)_0%,rgba(3,130,255,0)_60%)]"
      />
      <Container>
        <AnimateIn>
          <div className="mx-auto max-w-2xl space-y-3 text-center sm:space-y-4">
            <div className="text-xs font-semibold tracking-wide text-black/50">
              THE PROBLEM
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-5xl">
              {why.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-8 text-black">
              {why.subtitle}{" "}
              <span className="bg-[#0382ff] text-white px-1.5 py-0.5 rounded-sm">Too many tools. Too many handoffs.</span>
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delayMs={80}>
          <div className="mx-auto mt-10 max-w-5xl text-center">
            <div className="mx-auto mt-10 max-w-4xl flex justify-center">
              <AnimatedToolStrike
                tools={allTools}
                typingSpeed={80}
                strikeDelay={1200}
                nextToolDelay={600}
              />
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delayMs={160}>
          {/* THE FIX Section - Prominent Hero Style */}
          <div className="mx-auto mt-20 max-w-6xl">
            <div className="relative rounded-2xl bg-[#f5f5f5] p-8 sm:p-12">
              <div className="mx-auto max-w-4xl space-y-6 text-center">
                <div className="inline-block rounded-full bg-black/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-black/60">
                  THE FIX
                </div>
                <h3 className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">
                  The fix?
                </h3>
                <div className="mx-auto mt-8 max-w-6xl">
                  <div className="relative w-full">
                    <Image
                      src="/gr2.png"
                      alt="The fix"
                      width={1600}
                      height={800}
                      className="w-full h-auto rounded-2xl"
                      priority={false}
                    />
                  </div>
                </div>
                <div className="mx-auto max-w-3xl">
                  <div className="text-3xl font-semibold tracking-tight sm:text-5xl">
                    <span className="bg-gradient-to-r from-[#0382ff] via-violet-500 to-[#0382ff] bg-clip-text text-transparent">
                      {why.fix.title}
                    </span>
                  </div>
                </div>
                <AnimatedSubtitle />
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
