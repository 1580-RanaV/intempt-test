import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { siteContent } from "../content/siteContent";
import Image from "next/image";
import { AskInteractive } from "./AskInteractive";

export function AskBluSection({
  blu,
}: {
  blu: (typeof siteContent)["blu"];
}) {
  return (
    <section className="py-24" id="growthos">
      <Container>
        <div className="mx-auto max-w-4xl">
          <AnimateIn>
            <div className="space-y-4 text-center sm:space-y-5">
              <div className="inline-flex items-center gap-2 rounded-sm bg-[#0382ff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
                Blu: Your AI Co-Marketer
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">
                  {blu.ask.title}
                </div>
                <div className="relative h-18 w-18 rotate-6 sm:h-18 sm:w-18">
                  <Image
                    src="/mascot.png"
                    alt="Ask Blu mascot"
                    fill
                    className="object-contain"
                    sizes="68px"
                    priority={false}
                  />
                </div>
              </div>
              <div className="mx-auto max-w-3xl text-lg font-normal leading-8 text-black sm:text-xl">
                {blu.ask.subtitle}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delayMs={90}>
            <div className="mt-10">
              <AskInteractive prompts={blu.ask.prompts} />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}

