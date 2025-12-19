import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

export default function AUPPage() {
  return (
    <div className="bg-[#f5f5f5] text-black">
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
                Acceptable Use Policy
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                Updated October 10, 2025
              </p>
            </div>
          </Container>
        </section>

        {/* AUP Content */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This Acceptable Use Policy (&quot;AUP&quot;) applies to any access to or use of Intempt&apos;s Services by any customer (&quot;Customer&quot;) or user (&quot;User&quot;). It is incorporated by reference into the Intempt Customer Terms of Service (the &quot;Terms&quot;). Capitalized terms not defined here have the meaning given in the Terms.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  <strong>Scope.</strong> &quot;Services&quot; include Intempt&apos;s websites, apps, APIs/SDKs, web and mobile SDKs, tracking pixels, event ingestion, identity resolution (deterministic), segmentation, journeys/automation, personalization, experimentation, analytics, integrations, messaging features (email/SMS/WhatsApp/push), enrichment features, and AI assistant/generative features.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  By using the Services, you agree to this AUP. Customer is responsible for all access and use under its account, including by its Users, contractors, agents, and Affiliates, and for ensuring their compliance with this AUP. You may not assist, encourage, or enable others to violate this AUP.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  <strong>Enforcement.</strong> We may enforce this AUP using methods we consider appropriate, including monitoring complaint signals (e.g., spam complaints, bounce rates, carrier feedback, blocklisting indicators), rate limits, provider enforcement notices, and abuse investigations. We may throttle, suspend, or terminate access to the Services (or specific features) for violations of this AUP as permitted by the Terms.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  <strong>Updates.</strong> We may update this AUP from time to time by posting a revised version on our website and/or providing notice in-product. Continued use after an updated AUP&apos;s effective date constitutes acceptance (except where prohibited by law).
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  1) Reporting Suspected Violations
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  1.1 Reporting by recipients.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If you receive a message you believe violates this AUP (spam/phishing/abusive content) sent using Intempt, please report it to <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a> and, where possible, include message headers and context (time sent, sender, content, and any links).
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  1.2 Customer duty to notify.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If you know of or suspect a violation of this AUP related to your account or Users, you must notify us promptly at <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a>.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  2) Messaging Channels & Providers (Operational Reality)
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Intempt supports messaging capabilities that may rely on third-party providers, including:
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Email: delivered via SendGrid (by Twilio SendGrid)
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  SMS: delivered via Twilio
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  WhatsApp: via WhatsApp Business API through an approved provider
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Push notifications: delivered via FCM/APNs (no in-app inbox)
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You acknowledge that these providers and platforms may impose additional policies, limitations, registration requirements, and enforcement actions. You are responsible for compliance with all applicable provider/platform policies for the channels you use.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  3) Prohibited Messaging Actions (Email)
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If you use any Intempt email sending or email-integrated journey functionality:
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.1 Spam prohibited.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You may not use the Services to send spam or otherwise send unsolicited bulk or commercial messages in violation of applicable law or industry best practices. You must have a lawful basis to send each message and comply with applicable marketing and privacy laws.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.2 Misleading or falsified email prohibited.
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Messages sent using the Services may not:
                </p>

                <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>use forged, deceptive, or misleading headers;</li>
                  <li>use deceptive subject lines;</li>
                  <li>obscure the origin or transmission path;</li>
                  <li>impersonate a person or entity; or</li>
                  <li>use a third party&apos;s domain without authorization.</li>
                </ul>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.3 Purchased/rented/borrowed lists (conditional).
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You may not email contacts collected through scraping/harvesting or other surreptitious means where consent cannot be verified or where prohibited by law.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Purchased/rented/borrowed lists are not permitted unless you can demonstrate (upon request) a lawful basis and verifiable permission where required by applicable law and provider policies, and the list meets reasonable deliverability and compliance standards. Intempt may require additional controls or may disallow use of such lists to protect deliverability and the Services.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.4 High-risk practices prohibited.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You may not engage in practices likely to cause high bounce rates, elevated spam complaints, or blocklisting, including repeated sending to invalid addresses, ignoring suppression lists, or circumventing deliverability safeguards. We may throttle, pause, or suspend sending to protect the Services and other customers.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  4) Opt-Out and Consent Requirements (Email)
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  4.1 Opt-out compliance.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You must promptly honor unsubscribe/opt-out requests and maintain suppression lists consistent with applicable law.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  4.2 Required message elements.
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Each marketing email must include:
                </p>

                <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>accurate sender identification; and</li>
                  <li>a clear, functional method to opt out/unsubscribe (unless the message is purely transactional and applicable law allows omission).</li>
                </ul>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  4.3 Consent management.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt may provide tools to manage consent. Customer remains responsible for ensuring that consent and preference settings reflect the end user&apos;s choices and legal requirements for Customer&apos;s use case. Where Intempt&apos;s platform stores consent, Customer must configure it correctly and not override or circumvent it.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  5) Telephone, SMS, WhatsApp, and Similar Messaging
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If you use any texting, WhatsApp, or other supported messaging features in Intempt journeys:
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  5.1 Legal and platform/carrier compliance required.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You must comply with all applicable laws and regulations (including consent, disclosures, opt-in/opt-out, quiet hours where required, and recordkeeping), and all carrier/platform policies (including Twilio policies and WhatsApp Business policies). This includes any required registration, sender verification, and template approval processes.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  5.2 No emergency services.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You may not use the Services to place or route emergency calls or provide emergency services.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  5.3 Enforcement based on complaints.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may suspend or terminate messaging features if we receive repetitive complaints, if your traffic threatens deliverability, if a provider/platform instructs us to suspend service, or if your use creates undue legal or operational risk.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  5.4 Pass-through fees and penalties.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Where permitted by your Order and applicable law, carrier/platform fees, penalties, or surcharges may be passed through to Customer.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  6) Push Notifications (FCM/APNs)
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If you use push notifications:
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  6.1 Permissions and compliance.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You must obtain and manage end-user permissions/consents as required by platform rules and applicable law, and provide clear opt-out mechanisms where required.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  6.2 No deceptive or harmful content.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You may not use push messages to distribute malware, phishing, deceptive content, or content that violates law or this AUP.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  6.3 Delivery is not guaranteed.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Push delivery depends on device/platform conditions and is not guaranteed.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  7) Tracking, SDKs/Pixels, and Consent (CDP-Specific)
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt may process web/mobile event data when you deploy our SDKs or tracking code.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  7.1 No fingerprinting or consent circumvention.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You may not use the Services (including SDKs/pixels) to fingerprint users, re-identify individuals in a manner prohibited by law, or circumvent user choice, consent, opt-out signals, or platform restrictions.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  7.2 Lawful collection and notice.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You are responsible for providing appropriate notices and obtaining any required consents for collection and use of tracking and analytics data, including where required by ePrivacy, GDPR/UK GDPR, state privacy laws, or platform policies.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  7.3 Prohibited data harvesting.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You may not deploy our tracking code or SDKs on websites or apps you do not own or control (or lack permission to operate), or for the purpose of harvesting identifiers without a lawful basis.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  8) No Disruption, Abuse, or Security Violations
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You may not (directly or indirectly):
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  8.1 Disrupt or harm systems.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Interfere with, disrupt, or compromise the integrity, performance, or security of the Services, any customer account, or any third-party system.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  8.2 Automated abuse and scraping.
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Use bots, spiders, scrapers, or automated requests that:
                </p>

                <ul className="mb-8 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>exceed reasonable request rates,</li>
                  <li>circumvent rate limits, or</li>
                  <li>attempt to harvest data (including emails/identifiers) without consent or lawful basis.</li>
                </ul>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  8.3 Unauthorized access and security testing.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Attempt to gain unauthorized access to the Services, accounts, data, networks, or systems, including probing, scanning, or testing vulnerabilities without our prior written permission.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  8.4 Credential misuse.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Share logins, reuse credentials across multiple users, or allow access by unauthorized users.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  8.5 Deliverability/blacklisting harm.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Use the Services in a way that causes (or is likely to cause) Intempt domains or IPs (or your connected sending domains) to be blacklisted or materially degraded.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  9) Prohibited Content and Conduct
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You may not use the Services to store, transmit, or distribute content that:
                </p>

                <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>is unlawful, deceptive, fraudulent, or misleading;</li>
                  <li>is threatening, harassing, defamatory, or invasive of privacy;</li>
                  <li>contains malware, spyware, or other harmful code;</li>
                  <li>infringes intellectual property rights;</li>
                  <li>facilitates illegal activity; or</li>
                  <li>promotes, encourages, or facilitates hate, violence, or discrimination against protected groups.</li>
                </ul>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You are responsible for moderating user-generated content or activities you enable using the Services (if applicable).
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  10) Sensitive Data and Regulated Data (Default Prohibited)
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Unless expressly permitted in writing by Intempt (e.g., a signed addendum and supported controls), you may not upload, process, or transmit:
                </p>

                <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>PHI / HIPAA-regulated health data;</li>
                  <li>PCI / full payment card data;</li>
                  <li>government-issued identifiers (e.g., SSNs, driver&apos;s license numbers, passport numbers);</li>
                  <li>biometric identifiers used for identification;</li>
                  <li>precise geolocation (as defined by applicable law); or</li>
                  <li>children&apos;s data where prohibited (including data of children under 13, and under other ages as defined by law).</li>
                </ul>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You also may not process special categories of personal data under GDPR (or similar sensitive categories under applicable law) unless expressly permitted by written addendum.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  11) Restricted / High-Risk Industries (Approval Required)
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Some industries and use cases historically generate elevated spam complaints, fraud, chargebacks, carrier enforcement, or regulatory risk, which can harm deliverability and the reliability of the Services for all customers.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If your primary business or intended use falls within a High-Risk Industry (defined below), you may use the Services only with Intempt&apos;s prior written approval. Intempt may approve, deny, suspend, or impose additional requirements or limits (including channel restrictions, rate limits, content review, sender verification, and list/consent verification) in its sole discretion.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  High-Risk Industries include (non-exhaustive):
                </p>

                <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>List brokerage, list rental, lead list selling, or data reselling (including email/phone lead sellers).</li>
                  <li>Affiliate marketing networks and high-volume lead generation businesses, especially where leads are resold or sourced from third parties.</li>
                  <li>&quot;Get rich quick,&quot; &quot;make money online,&quot; business opportunity offers, or similar income-claim marketing.</li>
                  <li>Cryptocurrency, token/NFT promotions, trading signals, or related financial speculation (including airdrops).</li>
                  <li>Gambling, betting, sweepstakes, or lotteries, including online gaming promotions.</li>
                  <li>Adult content or sexually explicit services, and businesses with similar complaint patterns.</li>
                  <li>Pharmaceuticals, supplements, nutraceuticals, and health-related products commonly restricted by providers or subject to heightened claims enforcement.</li>
                  <li>CBD/cannabis, vaping, nicotine products, or related regulated goods.</li>
                  <li>Payday loans, high-interest lending, debt relief, credit repair, or similar consumer financial products.</li>
                  <li>Forex/CFD/binary options or similar high-risk financial trading.</li>
                  <li>Multi-level marketing (MLM) or similar recruitment-based selling models.</li>
                  <li>Reputation manipulation (e.g., selling reviews, likes, followers, traffic manipulation).</li>
                  <li>Identity/credential/document services that create heightened fraud or impersonation risk.</li>
                  <li>Political content/campaigning: Political content is permitted provided it complies with applicable law and all platform/provider policies. Intempt may require prior written approval for political use cases that are high-volume, high-velocity, or otherwise create elevated deliverability or compliance risk.</li>
                </ul>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Requesting approval: Email <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a> with your company name, website, channels you plan to use (email/SMS/WhatsApp/push), estimated volumes, audience/list sourcing method, and compliance approach.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  12) Intellectual Property, Brand, and Misrepresentation
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You may not:
                </p>

                <ul className="mb-8 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>misrepresent your affiliation with Intempt;</li>
                  <li>use Intempt trademarks/logos without permission; or</li>
                  <li>remove proprietary notices from the Services or Documentation.</li>
                </ul>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  13) Developer / API Rules (APIs/SDKs/Pixels)
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If you use Intempt APIs/SDKs/pixels:
                </p>

                <ul className="mb-8 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>follow published documentation and rate limits;</li>
                  <li>do not use APIs/SDKs to collect data unlawfully, bypass consent mechanisms, fingerprint users unlawfully, or scrape third-party systems;</li>
                  <li>do not interfere with telemetry, monitoring, or security controls; and</li>
                  <li>do not use the Services to build a competing product or to replicate the Services&apos; functionality.</li>
                </ul>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  14) AI Assistant / Generative Features
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If you use AI assistant or generative features:
                </p>

                <ul className="mb-8 list-disc space-y-2 pl-6 text-base font-normal leading-7 text-black">
                  <li>you may not use AI features to generate phishing, malware, illegal content, or content that violates this AUP;</li>
                  <li>you are responsible for reviewing AI outputs before using them or sending them to end users; and</li>
                  <li>you may not attempt to extract system prompts, bypass safeguards, or jailbreak the AI features.</li>
                </ul>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  15) Suspension, Removal, and Cooperation
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  15.1 Suspension/termination.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may suspend or terminate access to the Services (or specific features such as messaging) for violations of this AUP or where necessary to protect the Services, our customers, recipients, or third parties.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  15.2 Content removal.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may remove or disable access to content that violates this AUP.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  15.3 Cooperation.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You agree to reasonably cooperate with our investigation of suspected violations, including providing information about consent, list sources, messaging practices, and configuration settings where relevant.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  16) Contact
                </h2>

                <div className="mb-8 space-y-2 text-base leading-7 text-black/80">
                  <p>
                    <strong>Abuse reports / Support:</strong> <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a>
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

