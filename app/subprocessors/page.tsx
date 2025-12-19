import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

export default function SubProcessorsPage() {
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
                Sub-Processors
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                Updated October 10, 2025
              </p>
            </div>
          </Container>
        </section>

        {/* SubProcessors Content */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This Intempt Sub-Processors Page is incorporated into the Intempt Data Processing Addendum (&quot;DPA&quot;) and the Agreement. This page explains how Intempt engages Sub-Processors to process Customer Data in connection with the Intempt services (the &quot;Services&quot;).
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Contents
                </h2>

                <ul className="mb-8 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>Infrastructure Sub-Processors</li>
                  <li>Feature-Specific Sub-Processors</li>
                  <li>Intempt Affiliate Sub-Processors</li>
                  <li>Updates to Sub-Processor Page</li>
                  <li>Questions / Contact</li>
                </ul>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  1. INFRASTRUCTURE SUB-PROCESSORS
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  To help Intempt deliver the Services, we engage Sub-Processors to support our infrastructure. By agreeing to the DPA, you agree these Sub-Processors may process Customer Data to the extent necessary to provide their services.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Current hosting / data center region: United States (Intempt currently operates US-only data residency.)
                </p>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-black/20">
                    <thead>
                      <tr className="bg-black/5">
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Sub-Processor</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Purpose</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Applicable Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Amazon Web Services, Inc.</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Hosting & infrastructure</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Core Intempt platform hosting (compute, storage, networking), including Amazon S3 (file storage/uploads) and other AWS infrastructure services used by Intempt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Notes
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Vault (secrets management): Intempt uses Vault for secrets management. If Vault is self-hosted by Intempt on AWS, it is not a separate Sub-Processor (AWS remains the infrastructure Sub-Processor). If Intempt later uses HashiCorp-managed Vault/HCP, HashiCorp would be added here.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  No Cloudflare: Intempt does not use Cloudflare as a Sub-Processor at this time.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  2. FEATURE-SPECIFIC SUB-PROCESSORS
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Some features and integrations require additional Sub-Processors. Some Sub-Processors apply by default, and some apply only if and when you enable a feature or install an integration. In either case, you may choose not to use the applicable feature or integration.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Where feasible, Intempt will inform you before you enable a feature or integration that requires an opt-in Sub-Processor (e.g., via UI, docs, or implementation guidance).
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  A) Messaging, communications, and telephony
                </h3>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-black/20">
                    <thead>
                      <tr className="bg-black/5">
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Sub-Processor</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Purpose</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Applicable Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">SendGrid, Inc.</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Email delivery</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Email sending (campaign and/or transactional delivery)</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Twilio Inc.</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">SMS / messaging / telephony</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">SMS delivery; telephony and call recording (if enabled)</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Google LLC</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Push notifications (FCM)</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Android push notifications via Firebase Cloud Messaging (FCM)</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Apple Inc.</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Push notifications (APNs)</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">iOS push notifications via Apple Push Notification service (APNs)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  B) Customer support & communications
                </h3>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-black/20">
                    <thead>
                      <tr className="bg-black/5">
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Sub-Processor</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Purpose</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Applicable Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Intercom, Inc.</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Customer support / chat</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Support communications and customer messaging (if you contact Intempt support or use Intercom-powered support features)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  C) Payments / billing
                </h3>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-black/20">
                    <thead>
                      <tr className="bg-black/5">
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Sub-Processor</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Purpose</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Applicable Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Stripe, Inc.</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Payment processing and billing</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Processing subscription payments and billing-related data (e.g., billing contact information and payment metadata)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  D) AI / ML (feature-driven)
                </h3>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-black/20">
                    <thead>
                      <tr className="bg-black/5">
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Sub-Processor</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Purpose</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Applicable Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">OpenAI, L.L.C.</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">AI service provider</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">AI/LLM features (including embeddings), when enabled/used</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Anthropic, PBC</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">AI service provider</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">AI/LLM features, when enabled/used</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  E) Meeting bot / note-taking (feature-driven)
                </h3>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-black/20">
                    <thead>
                      <tr className="bg-black/5">
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Sub-Processor</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Purpose</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Applicable Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Recall.ai</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Meeting bot note-taking and storage</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Call/meeting note-taking features and related storage (if enabled/used)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  F) Integrations (opt-in)
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If you enable the following integrations, the relevant third parties may process Customer Data as part of providing that integration:
                </p>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-black/20">
                    <thead>
                      <tr className="bg-black/5">
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Sub-Processor</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Purpose</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Applicable Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">HubSpot, Inc.</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">CRM / marketing automation integration</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">HubSpot integration (syncing and workflows, as configured)</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Shopify Inc.</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">eCommerce platform integration</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Shopify integration (catalog/customer/event sync, as configured)</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Slack Technologies, LLC (a Salesforce company)</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Team messaging integration</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Slack integration (notifications and workflow actions, as configured)</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Twilio Segment (Segment.io, Inc.)</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Customer data platform integration</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Segment integration (event/user forwarding and ingestion, as configured)</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Webhook endpoints you configure</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Customer-chosen recipients</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Webhook integrations (data sent to endpoints you provide and control)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  <strong>Important:</strong> For webhooks, Intempt acts on your instructions to deliver data to destinations you configure. Those destinations are not &quot;Intempt Sub-Processors&quot; (they are typically your vendors or systems).
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  3. INTEMPT AFFILIATE SUB-PROCESSORS
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  At this time, Intempt does not use affiliate entities as Sub-Processors for processing Customer Data.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  4. UPDATES TO SUB-PROCESSOR PAGE
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Due to the nature of our business and our ongoing efforts to improve the Services, our Sub-Processors may change from time to time. For example, we may replace a Sub-Processor to consolidate and minimize our vendor footprint, or we may add a Sub-Processor if doing so enhances our ability to deliver the Services.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Where required under the DPA, Intempt will provide advance notice of new or replacement Sub-Processors and permit Customer to object on reasonable grounds, as described in the DPA (typically at least 30 days in advance, except where a shorter timeline is necessary for urgent security or operational reasons).
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  5. QUESTIONS / CONTACT
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Questions about this page or Intempt&apos;s privacy practices: <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a>
                </p>
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

