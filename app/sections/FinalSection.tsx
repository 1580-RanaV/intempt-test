import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { Footer } from "../components/Footer";
import { siteContent } from "../content/siteContent";

export function FinalSection({
  brand,
  finalCtas,
  footer,
}: {
  brand: (typeof siteContent)["brand"];
  finalCtas: (typeof siteContent)["finalCtas"];
  footer: (typeof siteContent)["footer"];
}) {
  return (
    <>
      <section className="bg-black py-24 text-white" id="get-started">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-4xl text-center">
              <div className="text-xs font-semibold tracking-wide text-white/60">
                FINAL PUSH
              </div>
              <div className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                From idea to execution — instantly.
              </div>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
                You don’t need an army of marketers. You need GrowthOS — and Blu,
                your AI Co‑Marketer.
              </p>
              <div
                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
                id="book-demo"
              >
                <ButtonLink href="https://app.intempt.com/">Start Free Trial</ButtonLink>
                <ButtonLink
                  href="https://calendly.com/sidchaudhary/meet-sid?month=2025-12"
                  variant="secondary"
                  className="!bg-[#f5f5f5] !text-black hover:!bg-[#e5e5e5] hover:!text-black !ring-black/10"
                >
                  Book a 15-min demo
                </ButtonLink>
              </div>
            </div>
          </AnimateIn>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {finalCtas.items.map((c, idx) => (
              <AnimateIn key={c.title} delayMs={idx * 80}>
                <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-inset ring-[#0382ff]/25">
                  <div className="text-lg font-semibold">{c.title}</div>
                  <div className="mt-3 text-base leading-7 text-white/80">
                    {c.description}
                  </div>
                  <a
                    href={c.cta.href}
                    className="mt-6 inline-flex text-sm font-semibold text-[#7ab7ff] underline underline-offset-4 transition-colors hover:text-white"
                  >
                    {c.cta.label}
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <div id="resources" />
      <div id="partners" />
      <div id="pricing" />
      <div id="login" />

      <Footer brand={brand} contact={footer.contact} columns={footer.columns} />
    </>
  );
}
