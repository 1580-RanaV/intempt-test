import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
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

export function IntegrationsSection({
  integrations,
}: {
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
                      <span className="text-lg font-normal text-black">
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
                fadeOutColor="white"
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

