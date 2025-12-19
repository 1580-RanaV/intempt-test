import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import Image from "next/image";

export default function CompanyPage() {
  const values = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Customer Obsession",
      description: "Start with the underserved customer and work backwards. Work vigorously to earn and keep customer trust.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Ownership",
      description: "Think long-term. Don't sacrifice long-term value for short-term results. Act on behalf of the entire company, beyond just your own area. Never feel, \"that's not my job.\"",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Invent and Simplify",
      description: "Expect and require innovation and always find ways to simplify complex problems using first principles. Look for new ideas from everywhere and challenge your own.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Be Curious, Get Feedback and Learn",
      description: "We are never done learning and always seek to improve ourselves. Be curious about new ways of doing things and explore the possibilities.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Insist on the Highest Standards",
      description: "We have relentlessly high standards — many people may think these standards are unreasonably high.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
      title: "Think Big and Bold, Act in Small Steps",
      description: "Thinking \"small\" (when building a company) isn't natural. We create and communicate a bold direction that inspires results.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Bias for Action",
      description: "Speed matters in business. Many decisions and actions are reversible and do not need extensive study.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Earn Trust",
      description: "We listen attentively, speak candidly and treat others respectfully. We are vocally self-critical, even when doing so is awkward or embarrassing.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Disagree and Commit",
      description: "We are obligated to respectfully challenge decisions when we disagree, even when doing so is uncomfortable or exhausting. We have conviction, and we are tenacious.",
    },
  ];

  return (
    <div className="bg-[white] text-black">
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
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0382ff]/10 px-4 py-2 text-xs font-semibold text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
                Company
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                Welcome to the world&apos;s first GrowthOS
              </h1>
            </div>
          </Container>
        </section>

        {/* CEO Profile Section */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center gap-8 rounded-2xl bg-[white] p-8 sm:flex-row sm:items-start">
                <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/founder-photo.jpg"
                    alt="Sid Chaudhary"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl font-semibold text-black">Sid Chaudhary</h2>
                  <p className="mt-2 text-lg font-medium text-black/70">Founder & CEO</p>
                  <blockquote className="mt-6 text-base italic leading-7 text-black">
                    &quot;Intempt helps companies grow their customer throughout their journey with your brand. We&apos;ll use Audience AI to analyze, segment and engage with your target Companies and Users. Simple as that.&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-semibold text-black">Our Mission</h2>
              <div className="rounded-2xl bg-[white] p-8">
                <p className="text-lg leading-8 text-black">
                  &quot;Our mission is to transform your sprawling customer data into a connected workspace, enabling marketers to amplify LTV for every user. Through remarkable trust, insight, and ease of use, powered by our Audience AI, we aspire to fuel your growth and profitability.&quot;
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl space-y-6 text-base leading-7 text-black">
              <p>
                The root cause of missed opportunity is that your customer data isn&apos;t insightful and therefore isn&apos;t actionable.
              </p>
              <p>
                Some of it is in CRM but most of what is actionable is sitting in the variety of SaaS apps a business uses today to run their Product, Marketing and Sales teams.
              </p>
              <p>
                On one hand you&apos;re being sold a &quot;modern data stack&quot; that requires you to build complex data integration, warehousing and analytics stack and on the other hand you&apos;ve got inflexible &quot;marketing clouds&quot; that do not integrate/interoperate with where the data natively resides.
              </p>
              <p>
                Businesses struggle to make sense of it all. Marketing brings fewer customers in and your website/sales closes/up-sells fewer deals.
              </p>
              <p>
                <strong>GrowthOS solves this problem</strong> by purpose-building for Marketing & Sales teams looking to use Customer Lifecycle AI to grow their business with several tools - CDP, Audience Intelligence, Journeys, Experiments, Playbooks, & Insights built into one Connected Workspace for Marketing & RevOps to smoothly operate.
              </p>
              <p>
                What should be a data driven sales and marketing process ends up being one that is data rich but insight poor and teams operate largely on instinct, not fact.
              </p>
              <p>
                <strong>Enter Audience AI.</strong>
              </p>
              <p>
                We at Intempt aim to consolidate this fragmented customer data landscape To give marketers and RevOps professionals a single convenient place to sell and market with trust, insight and ease of use.
              </p>
              <p>
                Our team has been fortunate enough to go through not one, but several iterations of next generation customer data software. We&apos;ve celebrated the highs and survived the lows, together.
              </p>
              <p>
                Now, we combine a decade of experience building Audience Intelligence AI to make it easy to run a data driven sales and marketing organization. To help companies proactively grow their customer throughout their lifecycle. Simple as that. We&apos;ll help you analyze, target and communicate with your target Companies and Users.
              </p>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-semibold text-black">Our Values</h2>
                <p className="mt-4 text-lg text-black/70">
                  Work hard, never stop learning, create remarkable things, help others and always stop to enjoy the moment.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="rounded-sm border border-black/10 bg-white/50 p-6 transition-shadow hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0382ff]/10 text-[#0382ff]">
                      {value.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-black">{value.title}</h3>
                    <p className="text-sm leading-6 text-black/70">{value.description}</p>
                  </div>
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

