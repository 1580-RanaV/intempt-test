import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { siteContent } from "../content/siteContent";
import Image from "next/image";

export function FixSection({
  why,
}: {
  why: (typeof siteContent)["why"];
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%),radial-gradient(45%_40%_at_0%_35%,rgba(124,58,237,0.08)_0%,rgba(124,58,237,0)_65%),radial-gradient(45%_40%_at_100%_40%,rgba(3,130,255,0.06)_0%,rgba(3,130,255,0)_60%)]"
      />
      <Container>
        <AnimateIn delayMs={160}>
          {/* THE FIX Section - Prominent Hero Style */}
          <div className="mx-auto max-w-6xl">
            <div className="relative rounded-2xl bg-[white] p-8 sm:p-12">
              <div className="mx-auto max-w-4xl space-y-6 text-center">
                <div className="inline-block rounded-sm bg-[#0382ff]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
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
                <div className="mx-auto mt-6 max-w-4xl">
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0382ff]/10">
                        <svg className="h-4 w-4 text-[#0382ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-base font-medium text-black/80 sm:text-lg">Built on data</span>
                    </div>
                    <div className="hidden h-6 w-px bg-gradient-to-b from-transparent via-[#0382ff]/40 to-transparent sm:block" />
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0382ff]/10">
                        <svg className="h-4 w-4 text-[#0382ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-base font-medium text-black/80 sm:text-lg">powered by AI & agent automation</span>
                    </div>
                    <div className="hidden h-6 w-px bg-gradient-to-b from-transparent via-[#0382ff]/40 to-transparent sm:block" />
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0382ff]/10">
                        <svg className="h-4 w-4 text-[#0382ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-base font-medium text-black/80 sm:text-lg">used by modern teams</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}

