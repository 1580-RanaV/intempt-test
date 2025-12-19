import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: "intempt-vs-customerio",
    title: "Intempt vs Customer.io (2025): In-Depth Comparison",
    description:
      "Customer journeys are most effective when they evolve with user behavior. But most automation tools still rely on static flows that remain unchanged until a marketer updates them manually. Customer.io delivers strong messaging automation and excellent segmentation. It can move users in and out of segments in real time based on events, attributes, and behavior, which makes targeting very powerful.",
    image: "/blog-photos/1.png",
  },
  {
    id: "intempt-vs-clerkio",
    title: "Intempt v/s Clerk.io (2025): In-Depth Comparison",
    description:
      "Every marketer knows the frustration: you work hard to acquire a customer… and then generic journeys send them straight to a competitor. A recommendation engine alone isn't enough anymore. Clerk.io has long been one of the most popular tools for smart product recommendations, search, and on-site personalization. But in 2025, teams want more than a recommendation engine that reacts.",
    image: "/blog-photos/2.png",
  },
  {
    id: "intempt-vs-klaviyo",
    title: "Intempt v/s Klaviyo (2025): In-Depth Comparison",
    description:
      "Marketers want seamless customer journeys, not a maze of rules and manual triggers. If the system feels like work, it's not automation, it's stress in a shiny UI. Klaviyo has long been the go-to for e-commerce platforms, powering email, SMS, and now even WhatsApp automation. But 2025 teams want more than AI that writes better subject lines; they want an AI comarketer that thinks ahead.",
    image: "/blog-photos/3.png",
  },
  {
    id: "intempt-vs-vwo",
    title: "Intempt vs VWO (2025): In-Depth Comparison",
    description:
      "Marketers don't just want to test ideas; they want to turn those ideas into real customer experiences. Simple A/B tests and standard conversion lifts were once the gold standard, but now they have become the ghost of the past, because in 2025, growth teams demand more. They want to personalize in real time, orchestrate intelligently, and connect experiment results to revenue outcomes.",
    image: "/blog-photos/4.png",
  },
  {
    id: "intempt-vs-mixpanel",
    title: "Intempt vs Mixpanel (2025): In-Depth Comparison",
    description:
      "Marketers and product teams thrive on data, and let's be honest, they hate it when it's scattered across 2-3 different tools, buried in dashboards, and takes a ton of their time just to get a half-answer. Mixpanel has long been the gold standard for analytics, but 2025 teams want more than charts and funnels; they want action.",
    image: "/blog-photos/5.png",
  },
  {
    id: "best-tools-capture-user-events",
    title: "Best Tools to Capture User Events Across Web and Mobile Platforms",
    description:
      "Every click tells a story. Every swipe, tap, or hover is a clue to what your users want, how they behave, and why they buy (or don't). But here's the catch! Unless you capture those user events properly across web and mobile, those stories remain unread.",
    image: "/blog-photos/6.png",
  },
  {
    id: "best-real-time-segmentation-tools",
    title: "Best Real-Time Customer Segmentation Tools in 2025",
    description:
      "Feeling like your audience lists are stuck in the past instead of driving growth? You're definitely not the only one. With customer data evolving faster than ever and personalization becoming the secret to real growth, real-time segmentation isn't just a nice-to-have anymore; it's essential.",
    image: "/blog-photos/7.png",
  },
  {
    id: "best-mixpanel-alternatives",
    title: "Best Mixpanel Alternatives in 2025 (How to Choose One)",
    description:
      "Feeling boxed in by Mixpanel? You're not alone. Many SaaS and e-commerce teams find Mixpanel's pricing, setup, and limited activation capabilities to be out of sync with today's growth needs. Guess what? 2025 is bringing some brilliant, all-in-one analytics platforms like Intempt, Amplitude, Heap, PostHog, and Pendo.",
    image: "/blog-photos/8.png",
  },
  {
    id: "best-analytics-tools-saas",
    title: "5 Best Analytics Tools for SaaS in 2025 & How To Choose One",
    description:
      "Analytics tools are the backbone of every successful SaaS company; they not only tell you about what users do, but also about why they do it. Whether it's about tracking product engagement, customer retention, or revenue attribution, the right analytics platform turns your valuable data into an ultimate growth engine.",
    image: "/blog-photos/9.png",
  },
  {
    id: "best-klaviyo-alternatives",
    title: "7 Best Klaviyo Alternatives in 2025: Features, Pricing, and Comparisons",
    description:
      "Klaviyo is a proven email and SMS marketing platform - especially for ecommerce brands that live and breathe segmentation, product feeds, and multi-step flows. But many teams tell us they can't justify the cost, don't need the full power, or struggle with the learning curve.",
    image: "/blog-photos/10.png",
  },
  {
    id: "product-recommendations-first-purchase",
    title: "How to Use Product Recommendations That Drive First Purchase",
    description:
      "Most first-time visitors are actively comparing, not committing. They bounce between PDPs, size/fit charts, shipping/returns, and discount pages, and leave without giving you an email or cookie you can rely on. Treating your product recommendations as an 'afterthought carousel' means you miss the exact micro-moments when guided discovery would tip them into the cart.",
    image: "/blog-photos/11.png",
  },
  {
    id: "slack-user-onboarding",
    title: "How Slack Nails User Onboarding (and How You Can, Too)",
    description:
      "Have you ever been through Slack onboarding? If you've then you just know that they have it spot on. Slack shortens time-to-value by designing the first 10 minutes around one outcome. In this case study, we break down the moments that matter in Slack's onboarding and show exactly how to implement the same playbook in your PLG SaaS.",
    image: "/blog-photos/12.png",
  },
  {
    id: "best-ab-testing-tools",
    title: "7 Best A/B Testing Tools & Software in 2025",
    description:
      "A/B testing tools help you validate ideas with real users - so you ship what actually works, not what wins an internal debate. This guide walks through how to pick (and use) the right A/B testing platform for your team.",
    image: "/blog-photos/13.png",
  },
  {
    id: "optimizing-user-onboarding",
    title: "Optimizing User Onboarding and Activation: Effective Guide for Product-led Companies",
    description:
      "Imagine pouring tons of effort into acquiring new users, only to watch most of them fade away without ever using your product's best features. It's a common scenario: a user signs up for a free trial, pokes around a bit, and then disappears. Why? Often, because they never experienced the 'Aha' moment, they didn't reach the value your product offers.",
    image: "/blog-photos/14.png",
  },
  {
    id: "omnichannel-personalization",
    title: "Omnichannel Personalization in eCommerce: Unifying Website, Catalog, Email & SMS",
    description:
      "Marketers know that winning customer hearts (and wallets) takes more than a one-time ad or a standard promo email. It's about creating a smooth, personalized journey across every touchpoint, from browsing your website to the products you recommend, to the emails and SMS messages that follow up.",
    image: "/blog-photos/15.png",
  },
  {
    id: "reduce-churn-ai-retention",
    title: "How to Reduce Churn with AI-Powered User Retention Strategies?",
    description:
      "Your app is doing well, with users actively exploring features and making regular purchases. But then you start noticing subtle changes. A previously engaged user logs in less frequently. Their in-app purchases decrease. They interact with fewer features each week.",
    image: "/blog-photos/16.png",
  },
  {
    id: "ai-stop-cart-abandonment",
    title: "How AI Can Stop Cart Abandonment Before It Happens?",
    description:
      "Cart abandonment has long been one of the most persistent challenges in e-commerce. Most businesses have tried to tackle it with reactive approaches like post-abandonment emails and SMS or a retargeting ad campaign. However, these methods often reach customers with 'too little, too late,' - they've already moved on.",
    image: "/blog-photos/17.png",
  },
  {
    id: "personalized-landing-pages",
    title: "How to Boost Conversions & Lower Costs with Personalized Landing Pages",
    description:
      "Imagine your customers landing on a page that feels generic and out-of-touch, whether it's during a product launch, customer onboarding, or a seasonal promotion. That initial disconnect not only wastes your budget but also leaves your visitors feeling like just another number.",
    image: "/blog-photos/18.png",
  },
  {
    id: "pqls-eqls-dual-scoring",
    title: "Understanding PQLs, EQLs, and the Power of Dual Scoring in Lead Qualification",
    description:
      "Remember when qualifying leads was simple? Marketing would hand over MQLs to sales, and sales would work their magic to convert them into SQLs. Those days are gone! The rise of product-led growth (the strategy lets users try your product for free before they make a financial commitment) in SaaS has changed everything about how we identify and qualify potential customers.",
    image: "/blog-photos/19.png",
  },
  {
    id: "music-app-profitability",
    title: "Music App's Road to Profitability: Key Lessons from the Journey",
    description:
      "A Comprehensive Approach to Boosting User Acquisition, Retention, and Monetization Through AI-Driven Insights and Personalized Marketing",
    image: "/blog-photos/20.png",
  },
  {
    id: "saas-growth-journey",
    title: "SaaS Growth Journey: Key Takeaways from a Scaling Success Story",
    description:
      "Discover how Otto - a SaaS company offering banking software uses product-led growth and AI-driven marketing to improve customer acquisition, retention, and expansion.",
    image: "/blog-photos/21.png",
  },
  {
    id: "post-holiday-sales",
    title: "Post-Holiday Sales Challenge: Turning One-Time Buyers into Repeat Customers",
    description:
      "This case study explains how a multi-category online store uses an AI-driven solution to lower customer acquisition costs, boost conversion rates, and increase customer lifetime value after the busy fall holiday season. Even when organic traffic and sales drop by as much as 60-70%, the right strategies can keep your store growing.",
    image: "/blog-photos/22.png",
  },
  {
    id: "product-led-sales",
    title: "What is Product-Led Sales? Exploring Its Role in the Future of SaaS",
    description:
      "The B2B SaaS landscape is experiencing a fundamental shift in how companies sell and grow. Gone are the days when aggressive sales teams alone could drive sustainable growth. Today's buyers want",
    image: "/blog-photos/23.png",
  },
];

export default function BlogPage() {
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
                  The Full Stack Marketer Blog
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

        {/* Blog Posts Grid */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                  <AnimateIn key={post.id} delayMs={index * 50}>
                    <Link
                      href={`/blog/${post.id}`}
                      className="group flex flex-col h-full rounded-2xl border border-black/10 bg-white overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-black/5 shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col grow">
                        <h2 className="text-xl font-semibold text-black mb-3 line-clamp-2 group-hover:text-[#0382ff] transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm font-normal text-black line-clamp-3 grow">
                          {post.description}
                        </p>
                      </div>
                    </Link>
                  </AnimateIn>
                ))}
              </div>
            </div>
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

