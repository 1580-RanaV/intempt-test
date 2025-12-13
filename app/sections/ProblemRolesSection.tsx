import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { SectionHeading } from "../components/SectionHeading";
import { siteContent } from "../content/siteContent";

export function ProblemRolesSection({
  why,
  roles,
}: {
  why: (typeof siteContent)["why"];
  roles: (typeof siteContent)["roles"];
}) {
  const visibleRoles = roles.items.filter((role) => role.role !== "Merchandisers");

  return (
    <section className="relative overflow-hidden pt-16 pb-24" id="solutions">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%),radial-gradient(45%_40%_at_0%_35%,rgba(124,58,237,0.08)_0%,rgba(124,58,237,0)_65%),radial-gradient(45%_40%_at_100%_40%,rgba(3,130,255,0.06)_0%,rgba(3,130,255,0)_60%)]"
      />
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="THE PROBLEM"
            title={why.title}
            subtitle={why.subtitle}
          />
        </AnimateIn>

        <AnimateIn delayMs={80}>
          <div className="mx-auto mt-10 max-w-5xl text-center">
            <div className="text-xs font-semibold tracking-wide text-black/50">
              THE STITCHED STACK
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              Too many tools. Too many handoffs.
            </h3>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-black/65">
              You don&apos;t need an army of marketers. You need one GrowthOS that
              aligns every team on the same customer truth.
            </p>

            <div className="mx-auto mt-10 grid max-w-4xl gap-10 text-left sm:grid-cols-3 sm:text-center">
              {why.stacks.map((stack) => (
                <div key={stack.category}>
                  <div className="text-sm font-semibold text-black/70">
                    {stack.category}
                  </div>
                  <div className="mx-auto mt-4 grid max-w-[18rem] gap-2">
                    {stack.tools.map((tool) => (
                      <div
                        key={tool}
                        className="flex items-center gap-2 text-sm font-semibold text-black/40 line-through decoration-black/15 sm:justify-center"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delayMs={160}>
          <div className="mx-auto mt-16 max-w-5xl space-y-10 text-center sm:space-y-12">
            <div className="space-y-3 sm:space-y-4">
              <div className="text-xs font-semibold tracking-wide text-black/50">
                THE FIX
              </div>
              <div className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">
                The fix?
              </div>
            </div>
            <div className="mx-auto max-w-4xl text-2xl font-semibold tracking-tight text-black sm:text-4xl">
              <span className="bg-gradient-to-r from-[#0382ff] to-violet-600 bg-clip-text text-transparent">
                {why.fix.title}
              </span>
            </div>
            <div className="mx-auto max-w-3xl text-lg leading-8 text-black/65">
              {why.fix.subtitle}
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="text-xs font-semibold tracking-wide text-black/50">
                ROLE-BASED VALUE
              </div>
              <div className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Built for every GTM role.
              </div>
              <div className="mx-auto max-w-3xl text-lg leading-8 text-black/65">
                Everyone sees the same truth - and acts faster with Blu.
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
              {visibleRoles.map((role) => (
                <div key={role.role} className="text-center">
                  <div className="inline-flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0382ff] to-violet-600" />
                    <div className="text-xl font-semibold tracking-tight text-black">
                      {role.role}
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-black/55">
                    {role.value}
                  </div>
                  <div className="mt-4 text-base font-semibold text-black/70">
                    {role.bullets.join(" | ")}
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
