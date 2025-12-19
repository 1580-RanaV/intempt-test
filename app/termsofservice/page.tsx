import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

export default function TermsOfServicePage() {
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
                Terms of Service
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                Updated October 10, 2025
              </p>
            </div>
          </Container>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8 rounded-sm border border-black/10 bg-white/50 p-6">
                  <p className="text-base font-semibold text-black">
                    PLEASE READ THESE CUSTOMER TERMS OF SERVICE CAREFULLY.
                  </p>
                </div>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  These Customer Terms of Service (the &quot;Agreement&quot;) govern access to and use of Intempt&apos;s Services by the customer identified in an Order Form, online checkout, account record, or in-app purchase flow (&quot;Customer,&quot; &quot;you,&quot; &quot;your&quot;). This Agreement is entered into between Customer and Intempt Technologies LLC (&quot;Intempt,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;).
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Structure of This Agreement
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  This Agreement consists of the following documents, which are incorporated by reference:
                </p>

                <ul className="mb-8 ml-6 list-disc space-y-2 text-base font-normal leading-7 text-black">
                  <li>General Terms (these terms)</li>
                  <li>Product-Specific Terms</li>
                  <li>Acceptable Use Policy (AUP): <a href="https://intempt.com/aup" className="text-[#0382ff] hover:underline">https://intempt.com/aup</a></li>
                  <li>Data Processing Addendum (DPA): <a href="https://intempt.com/dpa" className="text-[#0382ff] hover:underline">https://intempt.com/dpa</a></li>
                  <li>Privacy Policy: <a href="https://intempt.com/privacy-policy" className="text-[#0382ff] hover:underline">https://intempt.com/privacy-policy</a></li>
                  <li>Any Order Form, Statement of Work (SOW), or other ordering document agreed by the parties (&quot;Order&quot;)</li>
                </ul>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Order of precedence in case of conflict:
                </p>

                <ol className="mb-8 ml-6 list-decimal space-y-2 text-base font-normal leading-7 text-black">
                  <li>Order Form or SOW</li>
                  <li>DPA (for privacy and data issues)</li>
                  <li>Product-Specific Terms</li>
                  <li>General Terms</li>
                  <li>Other referenced policies</li>
                </ol>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  GENERAL TERMS
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Definitions
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    <strong>Affiliate</strong> means any entity that directly or indirectly controls, is controlled by, or is under common control with a party, where control means ownership of more than 50% of voting interests.
                  </p>
                  <p>
                    <strong>Customer Data</strong> means all data, information, content, events, records, files, text, or other materials submitted to the Services or collected via the Services by or on behalf of Customer. Customer Data does not include Intempt Content.
                  </p>
                  <p>
                    <strong>Customer Materials</strong> means any materials Customer uploads, posts, or otherwise makes available in the Services, including templates, creative, messaging copy, and audience definitions.
                  </p>
                  <p>
                    <strong>Documentation</strong> means Intempt&apos;s then-current technical documentation, including in-product and help center materials.
                  </p>
                  <p>
                    <strong>Intempt Content</strong> means the Services, Documentation, software, interfaces, dashboards, and any content or data provided by Intempt, including enrichment outputs and AI feature outputs.
                  </p>
                  <p>
                    <strong>Order Form</strong> means an Intempt-approved ordering document, including online checkout or in-app purchases, specifying Services, term, limits, and fees.
                  </p>
                  <p>
                    <strong>Professional Services</strong> means implementation, onboarding, migration, advisory, consulting, or other services provided under an Order or SOW.
                  </p>
                  <p>
                    <strong>Services</strong> means Intempt&apos;s customer data and go-to-market execution platform, including APIs, SDKs, event ingestion, identity resolution, segmentation, journeys and automation, personalization, experimentation, analytics, integrations, and related functionality.
                  </p>
                  <p>
                    <strong>Subscription Term</strong> means the initial term plus any renewal terms identified in an Order.
                  </p>
                  <p>
                    <strong>User</strong> means an individual authorized by Customer to use the Services under Customer&apos;s account.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Use of Services
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Intempt grants Customer a limited, non-exclusive, non-transferable right to access and use the Services during the Subscription Term for internal business purposes, subject to this Agreement and the applicable Order.
                  </p>
                  <p>
                    Users must be at least 18 years old and authorized by Customer. Customer is responsible for all User activity and compliance.
                  </p>
                  <p>
                    Customer may allow Affiliates to use the Services under Customer&apos;s account, but Customer remains responsible for Affiliate compliance.
                  </p>
                  <p>
                    Customer is responsible for maintaining the confidentiality of login credentials and must promptly notify Intempt of unauthorized access.
                  </p>
                  <p>
                    Customer must comply with the Acceptable Use Policy and must not use the Services to spam, phish, distribute malware, violate laws, infringe intellectual property, abuse messaging channels, conduct unauthorized security testing, reverse engineer the Services, or otherwise harm Intempt or others.
                  </p>
                  <p>
                    The Services are not designed for regulated data or industries by default. Any regulated compliance (such as HIPAA) must be expressly agreed in writing.
                  </p>
                  <p>
                    The Services are not intended for collecting data from children under 13 or other applicable legal age thresholds.
                  </p>
                  <p>
                    Some components of the Services may be provided through third-party providers, which may be subject to their own terms.
                  </p>
                  <p>
                    Intempt may update or modify the Services from time to time and will not materially reduce overall paid functionality during the current term except for beta features, legal or third-party requirements, security changes, or changes described in Product-Specific Terms.
                  </p>
                  <p>
                    Beta features are provided &quot;as is,&quot; may change or be discontinued, and may be excluded from support or uptime commitments.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Orders, Fees, Taxes, and Payment
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Customer may purchase Services through self-serve checkout, Order Forms, or in-app purchases.
                  </p>
                  <p>
                    Fees are as stated in the applicable Order and are non-cancelable and non-refundable except as expressly stated or required by law.
                  </p>
                  <p>
                    Customer authorizes Intempt to charge the designated payment method for fees. Invoice payments are due Net 30 unless otherwise stated.
                  </p>
                  <p>
                    If payment is overdue, Intempt may provide notice and suspend access after a cure period, except where charges are disputed in good faith.
                  </p>
                  <p>
                    Monthly self-serve subscriptions renew monthly unless canceled. Annual or enterprise subscriptions renew automatically unless Customer provides notice at least 30 days before term end.
                  </p>
                  <p>
                    Intempt may adjust pricing at renewal up to current list pricing with at least 30 days&apos; notice for annual terms.
                  </p>
                  <p>
                    Fees exclude taxes. Customer is responsible for applicable taxes other than taxes on Intempt&apos;s net income.
                  </p>
                  <p>
                    Customer is responsible for chargebacks and collection costs as permitted by law.
                  </p>
                  <p>
                    Free trials may be offered. If Customer does not convert, Customer Data may be deleted after the trial ends.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Term and Termination
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Subscription Terms are defined in the applicable Order.
                  </p>
                  <p>
                    Annual subscriptions are non-cancelable mid-term except for uncured material breach. Monthly subscriptions may be canceled effective at the end of the billing period.
                  </p>
                  <p>
                    Either party may terminate for material breach not cured within 30 days or immediately upon insolvency.
                  </p>
                  <p>
                    Intempt may immediately suspend or terminate for non-payment, AUP violations, security threats, legal compliance risks, or repeated IP infringement claims.
                  </p>
                  <p>
                    Upon termination, Customer must stop using paid Services, refunds apply only for Intempt&apos;s uncured material breach, and accounts may be downgraded to free tiers if available.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Customer Data, Privacy, and Security
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Customer owns Customer Data. Customer grants Intempt a limited license to process Customer Data solely to provide and secure the Services, consistent with the DPA.
                  </p>
                  <p>
                    Customer is the Controller or Business; Intempt is the Processor or Service Provider.
                  </p>
                  <p>
                    Customer is responsible for lawful collection, notices, and consents, including for SDKs, pixels, and website or device data.
                  </p>
                  <p>
                    Intempt does not use Customer Data to train generalized AI models by default.
                  </p>
                  <p>
                    Customer may export data during the term and for 30 days after termination. Intempt may retain Customer Data for up to three years for legitimate purposes unless deleted earlier.
                  </p>
                  <p>
                    Deleted data may persist in encrypted backups for up to three years.
                  </p>
                  <p>
                    Primary hosting is in the United States. Data residency is not guaranteed unless expressly agreed.
                  </p>
                  <p>
                    Intempt maintains subprocessors, security safeguards, and breach notification practices as described in the DPA.
                  </p>
                  <p>
                    Customer must not upload Sensitive Data unless expressly permitted by written agreement.
                  </p>
                  <p>
                    For session replay and interaction capture features, Customer is responsible for notices, consents, masking, configuration, and compliance.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Intellectual Property
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Intempt retains all rights to the Services and Intempt Content. Customer receives no rights except as expressly granted.
                  </p>
                  <p>
                    Customer may not reverse engineer, resell, or create derivative works of the Services.
                  </p>
                  <p>
                    Customer grants Intempt a license to use Customer Materials solely to provide the Services.
                  </p>
                  <p>
                    Feedback is non-confidential and may be freely used by Intempt.
                  </p>
                  <p>
                    Open-source components are governed by applicable licenses.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Confidentiality
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Confidential Information includes non-public information, including Customer Data.
                  </p>
                  <p>
                    Each party will protect Confidential Information, use it only for Agreement purposes, and disclose it only to permitted parties.
                  </p>
                  <p>
                    Disclosure may occur if legally required, with notice where permitted.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Publicity
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Intempt may list Customer as a customer reference. Customer may opt out by emailing <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a>. Case studies require prior written approval.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Indemnification
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Customer will indemnify Intempt for claims arising from Customer Data, misuse, compliance failures, or third-party products.
                  </p>
                  <p>
                    Intempt will indemnify Customer against claims that core Services infringe U.S. IP rights, subject to stated exclusions.
                  </p>
                  <p>
                    Remedies include modification, replacement, licensing, or termination with refund.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Warranties and Liability
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Intempt warrants Services will materially conform to Documentation. Remedies are limited to cure or refund.
                  </p>
                  <p>
                    Services are otherwise provided &quot;as is.&quot;
                  </p>
                  <p>
                    Neither party is liable for indirect or consequential damages.
                  </p>
                  <p>
                    Total liability is capped at fees paid in the prior 12 months, with standard carve-outs.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Governing Law and Disputes
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Texas law governs. Venue is exclusively Texas courts.
                  </p>
                  <p>
                    Claims must be brought within one year unless prohibited by law.
                  </p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Miscellaneous
                </h3>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Notices, assignment rules, force majeure, severability, entire agreement, amendments, export controls, and anti-corruption obligations apply as stated.
                  </p>
                </div>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  PRODUCT-SPECIFIC TERMS
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  <strong>Last Modified:</strong> October 10, 2025
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  These terms apply when Customer uses the relevant features.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  They cover platform access and seats, usage limits and credits, email, SMS and WhatsApp messaging, push notifications, experimentation, personalization, enrichment, AI features, uptime goals, and professional services.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Appendices include DMCA takedown procedures and third-party connector disclaimers.
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

