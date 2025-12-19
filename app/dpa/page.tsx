import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

export default function DPAPage() {
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
                Data Processing Addendum
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                Last Updated October 10, 2025
              </p>
            </div>
          </Container>
        </section>

        {/* DPA Content */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This Data Processing Addendum and its Annexes (&quot;DPA&quot;) is incorporated into and forms part of the Intempt Customer Terms of Service, Order Form, or other agreement governing Customer&apos;s use of the Services (the &quot;Agreement&quot;) between Customer and Intempt Technologies LLC (&quot;Intempt,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;).
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This DPA reflects the parties&apos; agreement regarding:
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Controller-to-Processor Processing: Intempt&apos;s Processing of Customer Personal Data as a Processor / Service Provider on behalf of Customer in connection with the Services; and
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Controller-to-Controller Processing (Limited): where applicable, the parties&apos; Processing as independent Controllers in connection with partner-sourced enrichment described in Section 10.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If there is any conflict between this DPA and the Agreement, this DPA controls for privacy and data protection matters.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The term of this DPA follows the term of the Agreement unless stated otherwise.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  1. Definitions
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Capitalized terms not defined here have the meaning in the Agreement.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  &quot;Customer Data&quot; has the meaning in the Agreement and includes Customer Personal Data.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  &quot;Customer Personal Data&quot; means Personal Data contained in Customer Data that Intempt Processes as a Processor on behalf of Customer.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  &quot;Controller&quot;, &quot;Processor&quot;, &quot;Personal Data&quot;, &quot;Processing&quot; have the meanings set out in applicable Data Protection Laws.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  &quot;Data Protection Laws&quot; means all applicable privacy and data protection laws and regulations relating to the Processing of Personal Data under the Agreement, including (where applicable) the GDPR, UK GDPR, Swiss FADP, and U.S. state privacy laws such as the CCPA/CPRA.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  &quot;CCPA&quot; means the California Consumer Privacy Act as amended by the CPRA.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  &quot;Security Incident&quot; means a breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Customer Personal Data Processed by Intempt and/or its Subprocessors.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  &quot;Subprocessor&quot; means a Processor engaged by Intempt to Process Customer Personal Data on behalf of Customer.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  &quot;Standard Contractual Clauses&quot; or &quot;SCCs&quot; means the European Commission&apos;s standard contractual clauses (Decision (EU) 2021/914), as may be updated or replaced.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  &quot;UK Addendum&quot; means the International Data Transfer Addendum issued by the UK ICO, as may be updated or replaced.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  2. Customer Responsibilities
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  2.1 Compliance with Laws.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer is responsible for compliance with Data Protection Laws applicable to Customer&apos;s Processing, including providing notices, obtaining consents where required, honoring opt-outs, and ensuring a valid lawful basis for collection and use of Personal Data.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  2.2 Implementation Choices.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer controls what Customer Personal Data is collected and sent to Intempt via APIs, SDKs, pixels, mobile SDKs, session replay, call recording, and integrations, and is responsible for configuration choices (including enabling optional features).
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  2.3 Instructions.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The Agreement (including this DPA), Customer&apos;s configuration and use of the Services, and any documented written instructions consistent with the Agreement constitute Customer&apos;s instructions to Intempt.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  2.4 Sensitive Data.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer will not provide Sensitive Data unless expressly permitted in writing and supported by appropriate controls.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  3. Intempt Obligations as Processor
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.1 Processing on Instructions.
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Intempt will Process Customer Personal Data only:
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  (a) to provide and secure the Services;
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  (b) in accordance with the Agreement and Customer&apos;s documented instructions; or
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  (c) as required by applicable law (in which case Intempt will notify Customer unless prohibited).
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.2 Confidentiality.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt will ensure personnel authorized to Process Customer Personal Data are subject to confidentiality obligations.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.3 Security.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt will implement and maintain appropriate technical and organizational measures designed to protect Customer Personal Data. See Annex 2 (Security Measures).
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.4 Security Incidents.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt will notify Customer without undue delay after confirming a Security Incident involving Customer Personal Data and will provide information reasonably necessary for Customer to meet its obligations. Where feasible, Intempt typically notifies within 72 hours.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.5 Assistance.
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Taking into account the nature of Processing and the information available, Intempt will provide reasonable assistance for:
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  (a) Data Subject Requests (Section 4); and
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  (b) DPIAs and consultations with supervisory authorities where required (GDPR Articles 35–36).
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt may charge reasonable fees for assistance that is beyond self-serve tooling or standard support.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.6 Subprocessors.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt may engage Subprocessors in accordance with Section 5.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  4. Data Subject Requests
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  4.1 Self-Serve Controls.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt provides in-product tools and/or APIs to help Customer access, correct, export, delete, or restrict Customer Personal Data.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  4.2 Requests Received by Intempt.
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If Intempt receives a request directly from a Data Subject relating to Customer Personal Data, Intempt will (to the extent legally permitted):
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  (a) inform Customer; and
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  (b) direct the Data Subject to Customer (unless Customer authorizes Intempt to respond).
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  5. Subprocessors
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  5.1 Authorization.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer grants Intempt general authorization to engage Subprocessors to Process Customer Personal Data.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  5.2 List.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt maintains a current list of Subprocessors at: <a href="https://intempt.com/subprocessors" className="text-[#0382ff] hover:underline">https://intempt.com/subprocessors</a> (the &quot;Subprocessors Page&quot;), incorporated into this DPA.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  5.3 Notice and Objection.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt will provide advance notice of new or replacement Subprocessors as described in the DPA (typically at least 30 days where required, except for urgent security/operational needs). Customer may object on reasonable grounds related to data protection. If the parties cannot resolve the objection commercially reasonably, Customer may terminate the affected Services as its sole remedy.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  5.4 Flow-down Terms.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt will impose data protection terms on Subprocessors that provide at least the same level of protection for Customer Personal Data as this DPA, as applicable.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  5.5 Responsibility.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt remains responsible for its Subprocessors&apos; performance of their obligations in relation to Customer Personal Data.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  6. International Data Transfers
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  6.1 Scope.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer authorizes Intempt to transfer Customer Personal Data internationally as necessary to provide the Services.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  6.2 Transfer Mechanisms (Europe/UK/Switzerland).
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Where European Data Protection Laws require safeguards for transfers to countries without an adequacy decision, the parties agree that the SCCs apply and are incorporated by reference, completed using the information in Annex 1 and Annex 2, with the following:
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Module Two (Controller-to-Processor) applies where Customer is a Controller and Intempt is a Processor.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  For the UK, the UK Addendum is incorporated by reference and modifies the SCCs accordingly.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  For Switzerland, SCC references are interpreted to align with Swiss requirements, and the competent authority is the FDPIC as applicable.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  6.3 Order of Precedence.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If SCCs/UK Addendum conflict with this DPA, the SCCs/UK Addendum control for the Restricted Transfer.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  7. Demonstration of Compliance / Audits
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  7.1 Information.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt will make available information reasonably necessary to demonstrate compliance with this DPA.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  7.2 Audits.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer may request (no more than once per year absent reasonable grounds of non-compliance) either:
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  (a) third-party audit reports or certifications (if available); or
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  (b) responses to reasonable security/privacy questionnaires.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  On-site audits of Intempt systems or data centers are not supported by default; any expanded audit rights require a separate written agreement.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  8. Additional Terms for European Data
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  8.1 Roles.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  For Customer Personal Data subject to GDPR/UK GDPR, Customer is Controller and Intempt is Processor (unless Customer acts as Processor on behalf of another Controller, in which case Intempt is a subprocessor).
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  8.2 Conflicting Instructions.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If Intempt believes Customer instructions violate European Data Protection Laws, Intempt will inform Customer without undue delay.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  9. Additional Terms for California Personal Information (CCPA/CPRA)
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  9.1 Roles.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  For California Personal Information that Intempt Processes on Customer&apos;s behalf, Customer is a Business and Intempt is a Service Provider (and &quot;Contractor&quot; where applicable).
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  9.2 Restrictions.
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Intempt will not:
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  (a) Sell or Share California Personal Information;
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  (b) retain, use, or disclose it outside the direct business relationship except as permitted by the CCPA; or
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  (c) combine it with personal information obtained from other sources except as permitted by the CCPA (including to perform Services).
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  9.3 Compliance Signals.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer is responsible for honoring consumer opt-outs and preference signals in its collection layer and configurations; Intempt will support deletion/opt-out handling through available product controls.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  10. Controller-to-Controller Terms (Enrichment Data from Partners) — Limited
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  10.1 When this applies.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This section applies only to the extent Intempt provides optional enrichment outputs sourced from third-party partners and Intempt and Customer each determine independent purposes for their Processing of that partner-sourced enrichment data (if applicable).
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  10.2 Independent Compliance.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Each party will comply with applicable Data Protection Laws for its own Processing as Controller, including providing appropriate notices and maintaining a lawful basis.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  10.3 Opt-Out / Deletion.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Where enrichment data originates from partners and an individual&apos;s deletion/opt-out must be executed through the partner, Intempt will support Customer by facilitating the request path consistent with partner capabilities and the Agreement.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  11. Deletion, Return, and Retention
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  11.1 Customer-Controlled Deletion During Term.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer may delete Customer Data via self-serve controls/APIs. Intempt will delete Customer Data from active systems within 30 days of a valid Customer deletion request, except where retention is required by applicable law or for security/fraud prevention as permitted by law.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  11.2 After Termination/Expiration (Default Retention).
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Unless otherwise agreed in an Order Form, Intempt retains Customer Data for up to three (3) years following termination/expiration unless Customer requests deletion earlier.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  11.3 Backups.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer Data deleted from active systems may remain in backups that are securely isolated and expire on a rolling basis, with a maximum backup retention of up to three (3) years, after which it is overwritten or deleted as part of normal backup lifecycle management.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  11.4 Return/Export.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer may export Customer Data during the Subscription Term via product tools/APIs, subject to plan features and the Agreement.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  12. Product-Specific Processing Disclosures (Accuracy Locks)
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  12.1 Tracking Technologies.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt provides web SDKs/pixels and mobile SDKs (iOS/Android) that may collect events, device data, and interactions from Customer properties as configured by Customer.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  12.2 Session Replay / Keystroke Capture.
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If enabled (default ON), session replay may capture interaction events including certain keystroke events as implemented in the SDK. Intempt provides:
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  default masking for password and payment-card fields; and
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  an opt-out selector: .intempt-no-capture to prevent capture for designated elements/areas.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  12.3 Call Recording + Meeting Notes.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt may support call recording and meeting note-taking as a core feature when enabled by Customer. This may involve Subprocessors including Twilio (telephony/recording) and Recall.ai (bot note-taker/storage), as configured.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  12.4 AI Features (OpenAI / Anthropic).
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If Customer uses AI features, prompts may include Customer-provided content and/or retrieved snippets (RAG) from Customer Data to generate outputs. Intempt uses the OpenAI and Anthropic APIs and OpenAI embeddings for applicable features. Intempt does not use Customer Data to train generalized AI models by default.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  13. General Provisions
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  13.1 Limitation of Liability.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This DPA is subject to the limitations of liability in the Agreement.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  13.2 Order of Precedence.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If SCCs/UK Addendum apply, they take precedence over this DPA for Restricted Transfers.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  13.3 Updates.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt may update this DPA by posting a revised version. Material changes will be notified consistent with the Agreement.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  13.4 Contact.
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Questions about this DPA: <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a>.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Annex 1 — Details of Processing (SCC Annex I equivalents)
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  A. List of Parties
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Data Exporter: Customer (as identified in the Agreement/Order Form)
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Data Importer: Intempt Technologies LLC, 1101 W 34th St, #595, Austin, TX 78705, USA
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  B. Categories of Data Subjects
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Customer&apos;s end users/visitors
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Customer&apos;s employees, contractors, and authorized users
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer&apos;s prospects/customers and other contacts, as uploaded or collected
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  C. Categories of Personal Data (determined by Customer configuration/use), which may include:
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Identifiers: name, email, phone, external user_id, cookie/device IDs, hashed identifiers
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Online identifiers: IP address, user agent, browser/device metadata
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Events and behavioral data: page views, clicks, form interactions, session replay events
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Communications metadata/content: messages sent/stored as configured (email/SMS/push/WhatsApp), call/meeting artifacts where enabled
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Files uploaded by Customer
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Inferences/segments created in the product based on Customer configuration
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Billing/admin contact information (e.g., name, email, company, billing metadata)
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  D. Special Categories of Data
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Not intended; Customer should not provide unless expressly agreed.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  E. Processing Activities / Purposes
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Provide, secure, and maintain the Services
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Identity resolution and profile management
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Segmentation, journeys/automation, personalization, experimentation, analytics
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Messaging delivery via Subprocessors
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Customer support and troubleshooting
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Security monitoring and abuse prevention
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Billing and account administration
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  F. Frequency of Transfer
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Continuous
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  G. Duration of Processing
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  For the term of the Agreement, plus retention described in Section 11.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Annex 2 — Security Measures (Summary)
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt maintains commercially reasonable safeguards, including (as applicable):
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Access controls and least privilege; RBAC in-product
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Encryption in transit (TLS)
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Logging/monitoring for security and availability
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Separation of environments and controlled production access
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Incident response processes and notification commitments (Section 3.4)
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Secure development and change management practices
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Annex 3 — Subprocessors
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The Subprocessors Page at <a href="https://intempt.com/subprocessors" className="text-[#0382ff] hover:underline">https://intempt.com/subprocessors</a> is incorporated into this DPA.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Amazon Web Services, Inc. (hosting/infrastructure)
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Intercom, Inc. (customer support/chat)
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Stripe, Inc. (payment processing / billing contact info)
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  SendGrid, Inc. (email delivery)
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Twilio Inc. (SMS/telephony/recording, if enabled)
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Google LLC (FCM push)
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Apple Inc. (APNs push)
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  OpenAI, L.L.C. (AI features / embeddings)
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Anthropic, PBC (AI features)
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

