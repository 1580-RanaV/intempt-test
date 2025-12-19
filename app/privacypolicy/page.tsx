import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

export default function PrivacyPolicyPage() {
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
                Legal
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                Privacy Policy
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                Last Updated: October 10, 2025
              </p>
            </div>
          </Container>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt Technologies LLC (&quot;Intempt,&quot; &quot;we,&quot; &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process Personal Data when you visit our websites (including <a href="https://www.intempt.com" className="text-[#0382ff] hover:underline">www.intempt.com</a>), use our applications (including dashboards, APIs, SDKs, and tracking technologies), and interact with us (collectively, the &quot;Services&quot;).
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Personal Data means information that relates to an identified or identifiable individual.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  How Intempt Processes Data (Controller vs. Processor)
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Intempt may act in different roles depending on the context.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Intempt as a Controller (Website and Business Operations)
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We act as a controller of Personal Data when you visit our websites, request a demo, sign up for an account, communicate with us, attend events, or otherwise interact with Intempt directly.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Intempt as a Processor (Customer Data in the Platform)
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Intempt is a processor when our customers use Intempt&apos;s customer data platform and related features, such as tracking, identity resolution, segmentation, journeys and automation, messaging, experimentation, personalization, analytics, session replay, heatmaps, keystroke capture, and AI features, to collect and process data about their end users or contacts (&quot;Customer Data&quot;).
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  In this role, our customers determine the purposes and means of processing and are responsible for providing required notices and obtaining required consents.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Intempt as a Controller for Limited Platform Data
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may act as a controller for certain platform-level data processed for our own purposes, including platform security, fraud and abuse prevention, product analytics, and compliance.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If you are an end user interacting with an Intempt customer and wish to exercise rights relating to Customer Data, you should contact that customer directly. Intempt also provides in-product tools to help customers fulfill such requests.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  What Information We Collect and Process
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  1.1 Information You Provide to Intempt
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We collect Personal Data you provide directly, including contact and professional information such as name, email address, phone number, company, and job title; account information such as username, authentication details, and preferences; support and communications content; billing and subscription administration information; and event or marketing information such as webinar registrations and survey responses.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  1.2 Customer Data We Process on Behalf of Customers
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Customers may upload, send, or collect Customer Data using Intempt through web tracking pixels, mobile SDKs, identity resolution using deterministic identifiers, messaging orchestration across email, SMS, WhatsApp, and push notifications, and session replay, heatmaps, and keystroke capture.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Session replay and keystroke capture are enabled by default in the Services. Customers are responsible for configuring masking, exclusions, consent gating, and any other compliance requirements, as well as for providing required notices and obtaining required consents under applicable laws.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Customer Data may include identifiers, behavioral and event data, profile attributes, preferences, and communications content. We process Customer Data according to customer instructions and applicable agreements.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  1.3 Information We Collect Automatically
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We may automatically collect device and log data such as IP address, browser type, device type, operating system, timestamps, language, and referring URLs; usage data such as feature usage, configuration changes, and API activity; and cookies and similar technologies as described below.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  1.4 Information We Collect From Other Sources
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may receive Personal Data from service providers supporting our operations, partners involved in co-marketing or referrals, and enrichment partners that provide professional or business contact data. Where enrichment partners support deletion or opt-out, individuals may request removal through the partner process, and we will facilitate routing where applicable.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  How We Use Personal Data
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We use Personal Data to provide and operate the Services, communicate with you, respond to inquiries, deliver service notices, improve and develop our products, ensure security and prevent fraud or abuse, and comply with legal obligations.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Where permitted by law, we may use Personal Data for marketing and advertising, including email marketing, retargeting via third-party platforms, and enhanced conversions using hashed identifiers.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We may support call recording and transcription through tools such as Google Meet or telephony providers like Twilio, where enabled. Customers are responsible for providing required notices and obtaining consents.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Intempt provides AI and agent features that may process Personal Data or Customer Data to generate outputs such as insights, segmentation assistance, or content generation. We do not use Customer Data to train our own models. Where enabled, prompts and relevant data may be sent to third-party AI providers such as OpenAI and Anthropic under contractual restrictions.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Where EU, UK, or Swiss law applies, legal bases may include performance of a contract, legitimate interests, consent, and legal obligations.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  How We Share Personal Data
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We share Personal Data with service providers that help us operate the Services, such as AWS for hosting, Intercom for customer support, and Stripe for billing. Additional vendors may support analytics, security, messaging, session replay, deliverability, and AI features. These providers are authorized to process Personal Data only as necessary and must protect it.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Where customers use messaging features, delivery may occur through providers such as SendGrid, Twilio, WhatsApp Business API, Firebase Cloud Messaging, or Apple Push Notification service.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may disclose Personal Data to comply with law, protect rights and safety, prevent fraud and abuse, enforce agreements, or as part of a business transaction such as a merger or acquisition.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  International Data Transfers
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Intempt is based in the United States, and Personal Data is primarily processed and stored in the United States. Where required, we rely on appropriate safeguards such as Standard Contractual Clauses.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We currently support US data residency and do not offer EU data residency.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Data Storage, Security, and Retention
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We maintain administrative, technical, and organizational measures designed to protect Personal Data. Additional security information is available at <a href="https://intempt.trustshare.com/" className="text-[#0382ff] hover:underline">https://intempt.trustshare.com/</a>.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Unless otherwise required by law or agreement, we retain website logs for three years, product audit logs for three years, Customer Data for three years (subject to customer-controlled deletion tools), and backups for three years.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Where required by law or contract, we notify customers of personal data breaches within 72 hours of confirmation, where feasible.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Cookies and Similar Technologies
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We use cookies and similar technologies for authentication, security, analytics, site performance, and marketing or advertising where enabled. We provide a cookie banner and preference center for EU and UK visitors, and you may also control cookies through browser settings.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  At this time, Intempt does not respond to Global Privacy Control signals.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Your Privacy Rights and Choices
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You may opt out of Intempt marketing emails using the unsubscribe link in our emails. You may manage cookies through our cookie tools or browser settings.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Depending on your location, you may have rights to access, correct, delete, restrict, object to processing, or receive a copy of your Personal Data. Requests can be sent to <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a>, and we verify identity using the email associated with the request.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  For Customer Data processed on behalf of a customer, requests should be directed to the customer or handled through Intempt&apos;s in-product tools.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  California Privacy Rights (CCPA and CPRA)
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  For California residents, Intempt may collect identifiers, internet or network activity, professional information, and commercial information related to subscriptions. These may be disclosed to service providers for business purposes.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Certain targeted advertising activities may be considered a &quot;sale&quot; or &quot;sharing&quot; under California law. You may opt out by emailing <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a> with the subject line &quot;California Opt-Out&quot; and including the relevant email or identifier.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We do not knowingly sell or share Personal Information of children under 16.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Other Important Information
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Our Services are not directed to children, and we do not knowingly collect Personal Data from children.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The Services may link to or integrate with third-party services. Their privacy practices are governed by their own policies, and customers are responsible for what they enable.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Contact Us
                </h2>

                <div className="mb-8 space-y-2 text-base leading-7 text-black/80">
                  <p>
                    <strong>Email:</strong> <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a>
                  </p>
                  <p>
                    <strong>Mail:</strong> Intempt Technologies LLC, 1101 W 34th St, #595, Austin, TX 78705, United States (Attn: Legal)
                  </p>
                </div>
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

