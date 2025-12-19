import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { siteContent } from "../content/siteContent";
import Image from "next/image";

export function DoSection({
  blu,
}: {
  blu: (typeof siteContent)["blu"];
}) {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <AnimateIn delayMs={140}>
            <div className="space-y-4 text-center sm:space-y-5">
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

