import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { ButtonLink } from "../components/Button";
import { siteContent } from "../content/siteContent";
import Image from "next/image";
import { AskInteractive } from "./AskInteractive";

export function BluSection({
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

          <AnimateIn delayMs={140}>
            <div className="mt-20 space-y-4 text-center sm:space-y-5">
              <div className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">
                {blu.do.title}
              </div>
              <div className="mx-auto max-w-3xl text-lg font-normal leading-8 text-black sm:text-xl">
                {blu.do.subtitle}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delayMs={180}>
            <div className="mx-auto mt-10 max-w-9xl">
              <div className="relative aspect-auto">
                <Image
                  src="/do-section-final.png"
                  alt="Do section"
                  width={1600}
                  height={800}
                  className="w-full h-auto"
                  priority={false}
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
