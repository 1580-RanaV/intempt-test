import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { SectionHeading } from "../components/SectionHeading";
import { siteContent } from "../content/siteContent";
import LogoLoop from "../components/LogoLoop";
import {
  SiApple,
  SiHubspot,
  SiNodedotjs,
  SiSendgrid,
  SiShopify,
  SiSlack,
  SiStripe,
  SiTwilio,
} from "react-icons/si";

export function ScaleSection({
  proof,
  integrations,
}: {
  proof: (typeof siteContent)["proof"];
  integrations: (typeof siteContent)["integrations"];
}) {
  const logos = [
    { node: <SiTwilio />, title: "Twilio", href: "https://www.twilio.com" },
    { node: <SiShopify />, title: "Shopify", href: "https://www.shopify.com" },
    { node: <SiApple />, title: "iOS", href: "https://developer.apple.com/ios/" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiSendgrid />, title: "SendGrid", href: "https://sendgrid.com" },
    { node: <SiHubspot />, title: "HubSpot", href: "https://www.hubspot.com" },
    { node: <SiStripe />, title: "Stripe", href: "https://stripe.com" },
    { node: <SiSlack />, title: "Slack", href: "https://slack.com" },
  ] as const;

  return (
    <section className="pt-24 pb-12" id="integrations">
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
                  <div className="mx-auto mt-3 max-w-[16ch] text-sm font-semibold leading-6 text-black/55">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delayMs={160}>
          <div className="mx-auto mt-10 max-w-4xl text-center">
            <div className="text-xs font-semibold tracking-wide text-black/50">
              INTEGRATIONS
            </div>
            <div className="mt-3 text-2xl font-semibold text-black">
              {integrations.title}
            </div>

            <div className="relative mx-auto mt-6 h-[176px] max-w-4xl overflow-hidden bg-transparent">
              <LogoLoop
                logos={logos.map((l) => ({
                  ...l,
                  node: (
                    <span className="inline-flex items-center gap-3 text-black/60">
                      <span className="text-[64px] leading-none">{l.node}</span>
                      <span className="text-lg font-semibold text-black/70">
                        {l.title}
                      </span>
                    </span>
                  ),
                }))}
                speed={90}
                direction="left"
                logoHeight={68}
                gap={64}
                hoverSpeed={15}
                scaleOnHover
                fadeOut
                fadeOutColor="#fffff3"
                ariaLabel="Integration partner logos"
                className="h-full"
              />
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
