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
    image: "/growth-plays-photos/1.png",
  },
  {
    id: "purchase-propensity-abandonment",
    title: "Purchase propensity & abandonment",
    description:
      "Accurately predict purchase propensity in real-time and automate interventions with on-page experiences and messaging actions in journeys.",
    image: "/growth-plays-photos/2.png",
  },
  {
    id: "in-session-recommender",
    title: "In-session recommender",
    description:
      "Decide which product features to highlight for each user as they browse, based on their adoption patterns and preferences.",
    image: "/growth-plays-photos/3.png",
  },
  {
    id: "drive-revenue-upsells",
    title: "Drive more revenue with tailored upsells",
    description:
      "Predict the categories that will maximize upsell opportunities for each user based on their previous usage and current behavior.",
    image: "/growth-plays-photos/4.png",
  },
  {
    id: "personalized-in-app-offers",
    title: "Personalized in-app offers",
    description:
      "Present the most compelling in-app purchase promotions based on the user's behavior, demographics, and geo location to maximize conversion opportunities.",
    image: "/growth-plays-photos/5.png",
  },
  {
    id: "website-navigation-content",
    title: "Website navigation & content display",
    description:
      "Change the content of the homepage based on the user activity to create an immediate sense of relevance. Adjust the navigation menu to highlight categories or pages the user has shown interest in.",
    image: "/growth-plays-photos/6.png",
  },
  {
    id: "in-app-onboarding",
    title: "In-app onboarding",
    description:
      "Streamline the onboarding experience to help users reach A-ha moments faster, adopt sticky features, and enable shortcuts based on the features the user interacts with the most.",
    image: "/growth-plays-photos/7.png",
  },
  {
    id: "personalize-landing-pages",
    title: "Personalize landing pages at scale",
    description:
      "Turn any web page into a winning PPC landing page: No need to build 100s of separate landing pages - use Intempt to personalize any page on your website to match the copy in each ad campaign.",
    image: "/growth-plays-photos/8.png",
  },
  {
    id: "dynamic-testimonials",
    title: "Dynamic testimonials",
    description:
      "Showcase relevant case studies or testimonials that resonate with the user's industry or use case to demonstrate value and build trust.",
    image: "/growth-plays-photos/9.png",
  },
  {
    id: "reverse-trials-paywalls",
    title: "Reverse trials & paywalls",
    description:
      "Optimize the timing to nudge users toward subscribing to a paid plan. Automatically offer power users a premium experience trial to help them build a habit and consider upgrading to a premium plan.",
    image: "/growth-plays-photos/10.png",
  },
  {
    id: "automated-outbound-apollo-clay",
    title: "Automated Outbound with Apollo, Clay & Intempt",
    description:
      "Automate sales email flows with Journeys by combining lead lists sourced from Apollo and Clay.",
    image: "/growth-plays-photos/11.png",
  },
  {
    id: "welcome-feature-adoption",
    title: "Welcome & feature adoption",
    description:
      "Combine the welcome messages with educational content about key features to quickly engage new users and encourage feature adoption.",
    image: "/growth-plays-photos/12.png",
  },
  {
    id: "abandonment-recovery",
    title: "Abandonment recovery",
    description:
      "Merge previous browsing behavior and a cart abandonment action into a comprehensive recovery flow that includes tailored messaging to maximize revenue recovery.",
    image: "/growth-plays-photos/13.png",
  },
  {
    id: "proactive-churn-prevention",
    title: "Proactive Churn Prevention",
    description:
      "Turn classic churn prevention methods into a proactive retention strategy that engages customers based on their interaction patterns to prevent churn.",
    image: "/growth-plays-photos/14.png",
  },
  {
    id: "checkout-flow-optimization",
    title: "Checkout flow optimization",
    description:
      "Compare multi-step vs. single-page checkout processes to identify what reduces abandonment and optimize the final steps of your funnel.",
    image: "/growth-plays-photos/15.png",
  },
  {
    id: "keep-loyal-customers-engaged",
    title: "Keep Loyal Customers Engaged and Renewing",
    description:
      "Combine renewal campaigns with retention flows and special recognition for VIP customers, ensuring continuous engagement and appreciation.",
    image: "/growth-plays-photos/16.png",
  },
  {
    id: "discover-feature-adoption-cohorts",
    title: "Discover Feature Adoption Cohorts for Your Product",
    description:
      "Analyze which product features drive activation and long-term value, then use that insight to personalize onboarding and retention.",
    image: "/growth-plays-photos/17.png",
  },
  {
    id: "fix-dropoffs-cart-purchase",
    title: "Fix Dropoffs Between Cart and Purchase",
    description:
      "Visualize and recover revenue-losing dropoff points in your ecommerce checkout flow using real-time funnel insights.",
    image: "/growth-plays-photos/18.png",
  },
  {
    id: "encourage-upgrades-user-behavior",
    title: "Encourage Upgrades Based on What Users Do",
    description:
      "Adjust CTA buttons or messages on the website and in-app based on the user's lifecycle stage, encouraging them to take the next step in their journey.",
    image: "/growth-plays-photos/19.png",
  },
  {
    id: "best-performing-pricing-strategy",
    title: "Find Your Best-Performing Pricing Strategy",
    description:
      "Test different pricing and packaging options to drive more upgrades from your current users and attract new segments.",
    image: "/growth-plays-photos/20.png",
  },
  {
    id: "signals-to-pipeline",
    title: "How to get from signals to pipeline without the scramble",
    description:
      "Focus on the right accounts at the right moment, with enough context to start a real conversation.",
    image: "/growth-plays-photos/21.png",
  },
  {
    id: "intent-to-action-ltv",
    title: "How to turn intent into action and actions into lifetime value",
    description:
      "Identify key user moments, automate targeted actions, and optimize every stage of the lifecycle- from activation to expansion.",
    image: "/growth-plays-photos/22.png",
  },
  {
    id: "product-complexity-personal-moments",
    title: "How to turn product complexity into personal moments",
    description:
      "Increase your customer's basket size and order volume with personalized recommendations.",
    image: "/growth-plays-photos/23.png",
  },
  {
    id: "insight-to-impact",
    title: "How to go from insight to impact without report sprawl",
    description:
      "Turn analysis into action with profiles you trust, core reports, one dashboard, and quick journeys or experiences to fix issues and prove what worked.",
    image: "/growth-plays-photos/24.png",
  },
  {
    id: "experiment-personalize-dev-queue",
    title: "How to experiment, find winners and personalize without the dev queue",
    description:
      "Deliver web and mobile experiences that learn fast and feel personal.",
    image: "/growth-plays-photos/25.png",
  },
  {
    id: "route-enrich-leads",
    title: "How to Route and Enrich Inbound and Outbound Leads",
    description:
      "This play explains why routing matters, how teams typically do it, and how to run a clean lead routing system in Intempt that balances speed, fairness, and relevance.",
    image: "/growth-plays-photos/26.png",
  },
  {
    id: "reddit-agent-find-customers",
    title: "How to Build a Reddit Agent That Finds Customers for You",
    description:
      "This Growth Play shows how to use Intempt to listen for the right conversations, generate on-voice drafts, keep a human in the loop, and turn Reddit coverage into durable AI-SEO benefits that bring ICP traffic long after the day you post.",
    image: "/growth-plays-photos/27.png",
  },
  {
    id: "customer-qualification-scoring",
    title: "Customer qualification scoring",
    description:
      "Build custom Fit & Activity scores using any data point to provide foundational insights on potential customer engagement and conversion likelihood.",
    image: "/growth-plays-photos/28.png",
  },
  {
    id: "segment-customers-lifecycle",
    title: "Segment Customers by Lifecycle Stage",
    description:
      "Employ Recency, Frequency, and Monetary analysis to segment customers based on their purchase behavior and target them accordingly.",
    image: "/growth-plays-photos/29.png",
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
        <section className="relative overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  The Full Stack Marketer Growth Plays
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-7 text-black sm:text-lg">
                  Zero theory or mindset discussions here; just actionable
                  marketing tactics that will grow revenue today.
                </p>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Email Subscription Section */}
        <section className="pb-8">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-md">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your email address"
                    className="flex-1 rounded-sm border border-black/10 bg-white px-4 py-2.5 text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#0382ff]/50 focus:outline-none text-sm"
                  />
                  <button
                    type="submit"
                    className="rounded-sm bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#0382ff]/50"
                  >
                    Subscribe
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
                      className="group flex flex-col h-full rounded-sm border border-black/10 bg-white overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-black/5 shrink-0">
                        <Image
                          src={play.image}
                          alt={play.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col grow">
                        <h2 className="text-xl font-semibold text-black mb-3 line-clamp-2 group-hover:text-[#0382ff] transition-colors">
                          {play.title}
                        </h2>
                        <p className="text-sm font-normal text-black line-clamp-3 grow">
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
                <p className="font-normal text-black mb-6">
                  Zero theory or mindset discussions here; just actionable
                  marketing tactics that will grow revenue today.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 rounded-sm border border-black/10 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#0382ff]/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-sm bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#0382ff]/50"
                  >
                    Subscribe
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

