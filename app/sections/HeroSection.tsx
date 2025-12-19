import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { siteContent } from "../content/siteContent";
import { VideoCard } from "../components/VideoCard";
import SplitText from "../components/SplitText";

export function HeroSection({
  hero,
}: {
  hero: (typeof siteContent)["hero"];
}) {
  const productVideoUrl = "https://www.youtube.com/watch?v=ffYlWeh-CbM&t=5s";

  return (
    <section className="w-full pt-16 sm:pt-24">
      <Container>
        <AnimateIn>
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0382ff]/10 px-4 py-2 text-xs font-semibold text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
              GrowthOS™ + Blu (AI Co‑Marketer)
            </div>

            <SplitText
              tag="h1"
              text={hero.headline}
              splitType="words, chars"
              delay={18}
              duration={0.6}
              ease="power3.out"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-120px"
              textAlign="center"
              className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-7xl"
            />
            <p className="mx-auto mt-6 max-w-3xl text-lg font-normal leading-8 text-black sm:text-xl">
              {hero.subhead}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
              <ButtonLink variant="secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>

            <VideoCard
              label={hero.mediaLabel}
              caption="Sid Chaudhary, Founder"
              youtubeUrl={productVideoUrl}
              thumbnailSrc="/thumbnail.png"
            />
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
