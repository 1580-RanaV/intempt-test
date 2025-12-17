import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import Image from "next/image";
import Link from "next/link";

const growthPlays = [
  {
    id: "churn-risk-prevention",
    title: "Churn risk & prevention",
    description:
      "Utilize predictive analytics to identify users at risk of disengaging or churning. Implement tailored retention strategies to maintain their interest and loyalty.",
    image: "/growthplays/churn-risk.jpg",
  },
  {
    id: "purchase-propensity-abandonment",
    title: "Purchase propensity & abandonment",
    description:
      "Accurately predict purchase propensity in real-time and automate interventions with on-page experiences and messaging actions in journeys.",
    image: "/growthplays/purchase-propensity.jpg",
  },
  {
    id: "in-session-recommender",
    title: "In-session recommender",
    description:
      "Decide which product features to highlight for each user as they browse, based on their adoption patterns and preferences.",
    image: "/growthplays/in-session.jpg",
  },
  {
    id: "drive-revenue-upsells",
    title: "Drive more revenue with tailored upsells",
    description:
      "Predict the categories that will maximize upsell opportunities for each user based on their previous usage and current behavior.",
    image: "/growthplays/upsells.jpg",
  },
  {
    id: "personalized-in-app-offers",
    title: "Personalized in-app offers",
    description:
      "Present the most compelling in-app purchase promotions based on the user's behavior, demographics, and geo location to maximize conversion opportunities.",
    image: "/growthplays/in-app-offers.jpg",
  },
  {
    id: "website-navigation-content",
    title: "Website navigation & content display",
    description:
      "Change the content of the homepage based on the user activity to create an immediate sense of relevance. Adjust the navigation menu to highlight categories or pages the user has shown interest in.",
    image: "/growthplays/navigation.jpg",
  },
  {
    id: "in-app-onboarding",
    title: "In-app onboarding",
    description:
      "Streamline the onboarding experience to help users reach A-ha moments faster, adopt sticky features, and enable shortcuts based on the features the user interacts with the most.",
    image: "/growthplays/onboarding.jpg",
  },
  {
    id: "personalize-landing-pages",
    title: "Personalize landing pages at scale",
    description:
      "Turn any web page into a winning PPC landing page: No need to build 100s of separate landing pages - use Intempt to personalize any page on your website to match the copy in each ad campaign.",
    image: "/growthplays/landing-pages.jpg",
  },
  {
    id: "dynamic-testimonials",
    title: "Dynamic testimonials",
    description:
      "Showcase relevant case studies or testimonials that resonate with the user's industry or use case to demonstrate value and build trust.",
    image: "/growthplays/testimonials.jpg",
  },
  {
    id: "reverse-trials-paywalls",
    title: "Reverse trials & paywalls",
    description:
      "Optimize the timing to nudge users toward subscribing to a paid plan. Automatically offer power users a premium experience trial to help them build a habit and consider upgrading to a premium plan.",
    image: "/growthplays/trials.jpg",
  },
  {
    id: "automated-outbound-apollo-clay",
    title: "Automated Outbound with Apollo, Clay & Intempt",
    description:
      "Automate sales email flows with Journeys by combining lead lists sourced from Apollo and Clay.",
    image: "/growthplays/outbound.jpg",
  },
  {
    id: "welcome-feature-adoption",
    title: "Welcome & feature adoption",
    description:
      "Combine the welcome messages with educational content about key features to quickly engage new users and encourage feature adoption.",
    image: "/growthplays/welcome.jpg",
  },
  {
    id: "abandonment-recovery",
    title: "Abandonment recovery",
    description:
      "Merge previous browsing behavior and a cart abandonment action into a comprehensive recovery flow that includes tailored messaging to maximize revenue recovery.",
    image: "/growthplays/abandonment.jpg",
  },
  {
    id: "proactive-churn-prevention",
    title: "Proactive Churn Prevention",
    description:
      "Turn classic churn prevention methods into a proactive retention strategy that engages customers based on their interaction patterns to prevent churn.",
    image: "/growthplays/proactive-churn.jpg",
  },
  {
    id: "checkout-flow-optimization",
    title: "Checkout flow optimization",
    description:
      "Compare multi-step vs. single-page checkout processes to identify what reduces abandonment and optimize the final steps of your funnel.",
    image: "/growthplays/checkout.jpg",
  },
  {
    id: "keep-loyal-customers-engaged",
    title: "Keep Loyal Customers Engaged and Renewing",
    description:
      "Combine renewal campaigns with retention flows and special recognition for VIP customers, ensuring continuous engagement and appreciation.",
    image: "/growthplays/loyal-customers.jpg",
  },
  {
    id: "discover-feature-adoption-cohorts",
    title: "Discover Feature Adoption Cohorts for Your Product",
    description:
      "Analyze which product features drive activation and long-term value, then use that insight to personalize onboarding and retention.",
    image: "/growthplays/feature-cohorts.jpg",
  },
  {
    id: "fix-dropoffs-cart-purchase",
    title: "Fix Dropoffs Between Cart and Purchase",
    description:
      "Visualize and recover revenue-losing dropoff points in your ecommerce checkout flow using real-time funnel insights.",
    image: "/growthplays/dropoffs.jpg",
  },
  {
    id: "encourage-upgrades-user-behavior",
    title: "Encourage Upgrades Based on What Users Do",
    description:
      "Adjust CTA buttons or messages on the website and in-app based on the user's lifecycle stage, encouraging them to take the next step in their journey.",
    image: "/growthplays/upgrades.jpg",
  },
  {
    id: "best-performing-pricing-strategy",
    title: "Find Your Best-Performing Pricing Strategy",
    description:
      "Test different pricing and packaging options to drive more upgrades from your current users and attract new segments.",
    image: "/growthplays/pricing.jpg",
  },
  {
    id: "signals-to-pipeline",
    title: "How to get from signals to pipeline without the scramble",
    description:
      "Focus on the right accounts at the right moment, with enough context to start a real conversation.",
    image: "/growthplays/signals.jpg",
  },
  {
    id: "intent-to-action-ltv",
    title: "How to turn intent into action and actions into lifetime value",
    description:
      "Identify key user moments, automate targeted actions, and optimize every stage of the lifecycle- from activation to expansion.",
    image: "/growthplays/intent.jpg",
  },
  {
    id: "product-complexity-personal-moments",
    title: "How to turn product complexity into personal moments",
    description:
      "Increase your customer's basket size and order volume with personalized recommendations.",
    image: "/growthplays/complexity.jpg",
  },
  {
    id: "insight-to-impact",
    title: "How to go from insight to impact without report sprawl",
    description:
      "Turn analysis into action with profiles you trust, core reports, one dashboard, and quick journeys or experiences to fix issues and prove what worked.",
    image: "/growthplays/insight.jpg",
  },
  {
    id: "experiment-personalize-dev-queue",
    title: "How to experiment, find winners and personalize without the dev queue",
    description:
      "Deliver web and mobile experiences that learn fast and feel personal.",
    image: "/growthplays/experiment.jpg",
  },
  {
    id: "route-enrich-leads",
    title: "How to Route and Enrich Inbound and Outbound Leads",
    description:
      "This play explains why routing matters, how teams typically do it, and how to run a clean lead routing system in Intempt that balances speed, fairness, and relevance.",
    image: "/growthplays/routing.jpg",
  },
  {
    id: "reddit-agent-find-customers",
    title: "How to Build a Reddit Agent That Finds Customers for You",
    description:
      "This Growth Play shows how to use Intempt to listen for the right conversations, generate on-voice drafts, keep a human in the loop, and turn Reddit coverage into durable AI-SEO benefits that bring ICP traffic long after the day you post.",
    image: "/growthplays/reddit.jpg",
  },
  {
    id: "customer-qualification-scoring",
    title: "Customer qualification scoring",
    description:
      "Build custom Fit & Activity scores using any data point to provide foundational insights on potential customer engagement and conversion likelihood.",
    image: "/growthplays/qualification.jpg",
  },
  {
    id: "segment-customers-lifecycle",
    title: "Segment Customers by Lifecycle Stage",
    description:
      "Employ Recency, Frequency, and Monetary analysis to segment customers based on their purchase behavior and target them accordingly.",
    image: "/growthplays/segmentation.jpg",
  },
];

export default function GrowthPlaysPage() {
  return (
    <div className="bg-white text-black">
      <HeaderSection
        brand={siteContent.brand}
        navItems={siteContent.nav.items}
        actions={siteContent.nav.actions}
      />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  The Full Stack Marketer Growth Plays
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  Zero theory or mindset discussions here; just actionable
                  marketing tactics that will grow revenue today.
                </p>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Email Subscription Section */}
        <section className="py-8 border-b border-black/10">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-2xl">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#0382ff]/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#0382ff]/50"
                  >
                    send more!
                  </button>
                </form>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Growth Plays Grid */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {growthPlays.map((play, index) => (
                  <AnimateIn key={play.id} delayMs={index * 50}>
                    <Link
                      href={`/growthplays/${play.id}`}
                      className="group block rounded-2xl border border-black/10 bg-white overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-black/5">
                        <Image
                          src={play.image}
                          alt={play.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold text-black mb-3 line-clamp-2 group-hover:text-[#0382ff] transition-colors">
                          {play.title}
                        </h2>
                        <p className="text-sm text-black/70 line-clamp-3">
                          {play.description}
                        </p>
                      </div>
                    </Link>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Email Subscription Section - Bottom */}
        <section className="py-16 border-t border-black/10">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-semibold text-black mb-4">
                  Join The Full Stack Marketer
                </h2>
                <p className="text-black/70 mb-6">
                  Zero theory or mindset discussions here; just actionable
                  marketing tactics that will grow revenue today.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#0382ff]/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#0382ff]/50"
                  >
                    send more!
                  </button>
                </form>
              </div>
            </AnimateIn>
          </Container>
        </section>
      </main>

      <Footer
        brand={siteContent.brand}
        contact={siteContent.footer.contact}
        columns={siteContent.footer.columns}
      />
    </div>
  );
}

