import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

export default function AgencyTermsPage() {
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
                Intempt Sales Partner Agreement
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                Last Modified: Nov 17, 2024
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
                    PLEASE READ THIS PARTNER PROGRAM AGREEMENT CAREFULLY.
                  </p>
                </div>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This is a contract between you (the Partner or Provider, together addressed as Participant(s)) and us (Intempt). It describes how we will work together and other aspects of our business relationship. It is a legal document, so some of the language is necessarily &quot;legalese&quot;, but we have tried to make it as readable as possible.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We periodically update these terms. We might also choose to replace these terms in their entirety if, for example, the Program ends, or becomes part of another partner program. If we update or replace the terms we will let you know via an in-app notification in your portal or by email. If you don&apos;t agree to the update or replacement, you can choose to terminate as we describe below.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Contract Details Parties
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Intempt Technologies LLC.
                </h3>

                <div className="mb-8 space-y-2 text-base font-normal leading-7 text-black">
                  <p><strong>Company:</strong> Intempt Technologies LLC.</p>
                  <p><strong>Company Registration Nr:</strong> ________________________</p>
                  <p><strong>Primary Contact Person:</strong> ________________________</p>
                  <p><strong>Address:</strong> 1101 W 34th St, #595</p>
                  <p><strong>Postal Code:</strong> 78705</p>
                  <p><strong>State:</strong> Texas</p>
                  <p><strong>City:</strong> Austin</p>
                  <p><strong>Country:</strong> United States</p>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Partner
                </h3>

                <div className="mb-8 space-y-2 text-base font-normal leading-7 text-black">
                  <p><strong>Partner Name:</strong> ________________________</p>
                  <p><strong>Company Registration Nr:</strong> ________________________</p>
                  <p><strong>VAT/GST Number (if applicable):</strong> ________________________</p>
                  <p><strong>Primary Contact Person:</strong> ________________________</p>
                  <p><strong>Address:</strong> ________________________</p>
                  <p><strong>Postal Code:</strong> ________________________</p>
                  <p><strong>State:</strong> ________________________</p>
                  <p><strong>City:</strong> ________________________</p>
                  <p><strong>Country:</strong> ________________________</p>
                </div>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  1. Definitions
                </h2>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    <strong>&quot;Active Engagement&quot;</strong> means that you have a fully executed written agreement with a Intempt customer under which you provide your services to that customer and the agreement with the customer (i) either pre-dates the time at which the transactions for Subscription Service is closed, or is signed contemporaneously with the close of transaction, and (ii) either extends at least ninety (30) days beyond the close of the transaction for Subscription Service or has a specific and identifiable deliverable, as determined by us in our discretion.
                  </p>
                  <p>
                    <strong>&quot;Affiliate&quot;</strong> means any entity that directly or indirectly controls, is controlled by, or is under common control with the subject entity. &quot;Control,&quot; for purposes of this definition, means direct or indirect ownership or control of more than 50% of the voting interests of the subject entity.
                  </p>
                  <p>
                    <strong>&quot;Agreement&quot;</strong> means this Intempt Partner Program Agreement and all materials referred or linked to in here.
                  </p>
                  <p>
                    <strong>&quot;Confidential Information&quot;</strong> means all confidential information disclosed by a party (&quot;Disclosing Party&quot;) to the other party (&quot;Receiving Party&quot;), whether orally or in writing, that is designated as confidential. Whether or not marked or designated as confidential, Confidential Information shall include all information concerning: (a) Disclosing Party&apos;s customer and prospect information, including Customer Data and Customer Materials, as defined in the Terms of Service(b) Disclosing Party&apos;s past, present or proposed products, marketing plans, engineering and other designs, technical data, business plans, business opportunities, finances, research and development materials. Confidential Information shall not include any information that (i) is or becomes generally known to the public without breach of any obligation owed to the Disclosing Party (ii) was known to the Receiving Party prior to its disclosure by the Disclosing Party without breach of any obligation owed to the Disclosing Party, (iii) is received from a third party without breach of any obligation owed to the Disclosing Party, or (iv) was independently developed by the Receiving Party.
                  </p>
                  <p>
                    <strong>&quot;Terms of Service&quot;</strong> means those terms and conditions located at <a href="https://www.intempt.com/terms-of-service" className="text-[#0382ff] hover:underline">https://www.intempt.com/terms-of-service</a> as modified from time to time.
                  </p>
                  <p>
                    <strong>&quot;Authorized User&quot;</strong> means the authorized actual user of Intempt or the party on whose behalf you use Intempt.
                  </p>
                  <p>
                    <strong>&quot;Authorized User Data&quot;</strong> means all information that Authorized User, or you acting on Authorized User&apos;s behalf, submits or collects via the Application Services and all materials that Authorized User, or you acting on Authorized User&apos;s behalf, provides or posts, uploads, inputs or submits for public display through the Application Services.
                  </p>
                  <p>
                    <strong>&quot;Intempt Content&quot;</strong> means all information, data, text, messages, software, sound, music, video, photographs, graphics, images, and tags that we incorporate into Application Services and all of our other services.
                  </p>
                  <p>
                    <strong>&quot;Application Services&quot;</strong> means the Subscription Service of Application Services.
                  </p>
                  <p>
                    <strong>&quot;Legitimate Prospect&quot;</strong> means a contact, tied to a domain and/or business entity, with which you have established a demonstrable business relationship and who you are actively approaching and are engaging with in a pursuit of a sale.
                  </p>
                  <p>
                    <strong>&quot;List Price&quot;</strong> means the standard pricing for the Subscription Service as listed at <a href="https://www.Intempt.com/pricing" className="text-[#0382ff] hover:underline">https://www.Intempt.com/pricing</a>. We reserve the right to change such pricing at any time. However, we will not apply any price change to Authorized Users who purchase Subscription Service within seven (7) days after such price change.
                  </p>
                  <p>
                    <strong>&quot;Net Revenue&quot;</strong> means the initial fee, any renewal fees, and any upgrade or downgrade fees that are actually paid to us by an Authorized User or by Partner or Provider for an Authorized User for the Subscription Service. Net Revenue shall: (i) be calculated net of any discounts, taxes payable and subsequent refunds not due to a contract breach by Intempt, and (ii) shall exclude any fees for Other Products.
                  </p>
                  <p>
                    <strong>&quot;Other Products&quot;</strong> means those products and services that we offer, which are not included in the Subscription Service. For the purposes of this Agreement, Other Products includes individual features, tools, and/or services and any implementation, migration, customization, training, consulting, additional support or other professional services provided by Intempt, or any third-party products or services.
                  </p>
                  <p>
                    <strong>&quot;Partner Revenue Share&quot;</strong> means an amount paid depending on the partner&apos;s relationship with the lead. See Appendix 1 for a detailed breakdown of different revenue share tiers.
                  </p>
                  <p>
                    <strong>&quot;Partner Eligibility Requirements&quot;</strong> mean you 1) have purchased and maintain an active subscription to Intempt; and 2) have completed Partner Onboarding and Training.
                  </p>
                  <p>
                    <strong>&quot;Qualified Subscription Value&quot;</strong> means the aggregate amount of Subscription Fees paid or payable to us by the customers attributable to you via Qualified Transactions and for which Revenue Share is paid or payable to you. This amount includes all Subscription Fees for Subscription Services but excludes fees for Other Products, fees for renewals, Consulting Services and applicable taxes.
                  </p>
                  <p>
                    <strong>&quot;Qualified Transactions&quot;</strong> means those transactions that are eligible for a Revenue Share pursuant to the &quot;Qualified Transactions&quot; section of this Agreement.
                  </p>
                  <p>
                    <strong>&quot;Subscription Service&quot;</strong> means our web-based marketing, sales software that is subscribed to, and developed, operated, and maintained by us, accessible via <a href="https://app.Intempt.com" className="text-[#0382ff] hover:underline">https://app.Intempt.com</a> or another designated URL, and any add-on products that are included with such software, but excluding all Other Products. For avoidance of doubt, add-on products alone will not be considered Subscription Services.
                  </p>
                  <p>
                    <strong>&quot;User Permissions&quot;</strong> means the authorization given to users within an Intempt portal that enables them to access specific resources, such as data and applications.
                  </p>
                  <p>
                    <strong>&quot;We&quot;, &quot;us&quot;, &quot;our&quot;, and &quot;Intempt&quot;</strong> means Intempt Technologies, LLC.
                  </p>
                  <p>
                    <strong>&quot;You&quot; and &quot;Partner&quot; or &quot;Provider&quot;</strong> means the party, other than Intempt, entering into this Agreement and participating in the Program.
                  </p>
                </div>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  2. Non-Exclusivity
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  This Agreement does not create an exclusive agreement between you and us. Both you and we will have the right to recommend similar products and services of third parties and to work with other parties in connection with the design, sale, installation, implementation and use of similar services and products of third parties.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You can only participate in our Program as either a Partner or a Provider at any one time. Your acceptance and participation as a Provider does not mean that you will be accepted into our Program as a Partner. Each level of participation has its own eligibility requirements that must be met and maintained separately.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  3. Partner Rights and Obligations
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. Partner Rights
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We grant you, subject to the limitations set forth below, a non-transferable, non-exclusive right to: (i) demonstrate and promote the Application Services to your prospects and customers, and (ii) to provide Authorized Users access to use the Application Services in accordance with this Agreement and the Terms of Service, provided that Authorized Users agreed to the Terms of Service. At our discretion, we will provide limited sales support to you, such as occasional participation on a call with you and a prospect.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. Compliance with Program Policies and the Program Code of Conduct
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You will comply with the terms and conditions of this Agreement at all times Failure to comply with the Partner Program Policies may result in the termination of this Agreement in accordance with the &quot;Termination&quot; section of this Agreement or in accordance with any other termination or suspension right we may have.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  4. Qualified Transactions
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. Transaction Eligibility Requirements
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  To be eligible to receive Revenue Share for a Qualified Transaction, a prospect must be registered, accepted and valid in accordance with the &apos;Submission, Acceptance and Validity&apos; or the &apos;Shared Leads&apos; section. You are not eligible to receive a Revenue Share or any other compensation from us based on transactions with an Intempt Lead (as defined below) if: (i) such compensation is disallowed or limited by federal, state or local law or regulation in the United States or the laws or regulations of your jurisdiction; (ii) the applicable Authorized User objects to or prohibits such compensation or excludes such compensation from its payments to us or our Affiliates; (iii) we determine that you are acting, or have acted, in a way that has or may negatively reflect on or affect us with respect to a given transaction; (iv) the Authorized User has paid or will pay such commissions, referral fees, or other compensation directly to you; (v) the Authorized User participates in this Program, or (vi) for any transactions with Authorized User that precede in time to you becoming a Partner or Provider in this Program under this Agreement. In competitive situations with other Partners or Providers, we may elect to enable Cross Sell (in situations where the Subscription Service is complementary and Cross Sell is otherwise available) or to provide the Revenue Share to the partner that actually secures the business with the Authorized User, which may result in you being ineligible for Revenue Share, regardless of whether or not you registered the prospect.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may terminate this Agreement and/or discontinue Revenue Share payment(s) should you fail to meet any of the eligibility criteria set forth in Section 3 or 4 of the Agreement or as outlined in the Program Policies at any time.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. Submission, Acceptance and Validity of Prospects
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You must register each prospect with us using the Partner Portal or any other means we provide prior to the close of a Qualified Transaction. To register a prospect and a deal, you must provide at least the following information about each prospect: contact first name, contact last name, email, URL and company name. We generally will accept a prospect who, in our reasonable determination: (i) is a new potential customer of ours; (ii) is not, at the time of submission or sixty (60) days prior, one of our pre-existing customers, involved in our active sales process, or your Affiliate; (iii) is a Legitimate Prospect whose contact information was legally obtained.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Notwithstanding the foregoing, we may choose not to accept a prospect, in our reasonable discretion. We may choose to do so at the time of your registration submission, or we may reject a prospect and remove attribution to you if we determine a prospect does not meet the criteria outlined in this Section 4.b. at any point after submission, even in cases where it was initially accepted.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  A prospect is not considered valid: (i)if it is not registered, (ii) if it is not accepted, (iii) if it is expired, (iv) if it exceeds the registered capacity limits or other applicable limits, or (v) after this Agreement is expired or terminated.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Once the valid prospect is ready to purchase, we will, at our discretion, accept an order and provision the Subscription Service for the Authorized User in order to complete a Qualified Transaction.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If a prospect does not purchase the Subscription Service before its registration expires (60 days), you will need to complete the registration process again in order to re-qualify for Revenue Share for that prospect. Please note that you must have a written and readily available privacy policy and you certify that you are providing the prospect&apos;s information to us in accordance with not only all applicable laws and regulation but also in accordance with your own privacy policy.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  c. Intempt Leads
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may choose to introduce you to, or send you information on, a prospect of ours when we identify that such prospect may have a need for the services you offer (each, a &quot;Intempt Lead&quot;). We can do the same for other partners of ours, even if it is for the same Intempt Lead. You may use the information about the Intempt Lead provided only to market and sell your services to them and not for any other purpose (unless the Intempt Lead otherwise consents). Immediately upon our or the Intempt Lead&apos;s request, you will promptly discontinue all use of and delete the Intempt Lead&apos;s information. Intempt Leads are considered our Confidential Information and shall be treated in accordance with the &apos;Confidentiality&apos; section below.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  d. Co-selling
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If we decide to participate in the same sales process as you and this results in the sale of the Subscription Service to a prospect that would have otherwise not been valid based on it (i) not being registered, (ii) not being accepted, (iii) being expired, or (iv) exceeding the registered capacity limits or other applicable limits, (each, a &quot;Shared Lead&quot;) and you have an Active Engagement with such Shared Lead, then we may in our discretion, determine that Shared Lead will be considered a registered, accepted and valid prospect for the purposes of the &apos;Eligibility&apos; section above.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt may request you to provide proof of Active Engagement (for example, by providing a copy of your retainer agreement with the Authorized User if we so request) for managed and/or sold credit.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  e. Engagement with Prospects and Authorized Users
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We may engage with a prospect, lead or Authorized User directly (i) to complete the subscription process, (ii) to fulfill or enforce our obligations under an agreement with such prospect, (iii) to provide support, (iv) to conduct our standard marketing and sales activities with prospects; (vi) as otherwise permitted by this Agreement.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If and when we do engage, we may choose how to engage with each prospect and may request that you collaborate with us in the engagement. Upon our request, you will provide us with the name and contact information of the prospect, and facilitate an introduction. If a prospect is not valid then we may choose to maintain it in our database and we may choose to engage with such a prospect.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If we request, you will facilitate our participation on calls with you and various Authorized User(s). We may request to participate on these calls in an effort to help to ensure the quality of your service delivery and for the purposes of managing the Program.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  In a resulting Qualified Transaction, (i) the Authorized User will contract directly with us for provision of the Application Services, or (ii) you will place order(s) and contract with Intempt in your own capacity for the Application Services with us, specifying the terms of the Application Services ordered and providing information about the Authorized User as we may request. the case of (ii) herein, where possible, and the prospect is considered registered, accepted and valid for the purposes of this Section 4., you may sell the Application Services to Authorized Users at a price determined solely by you and you will ensure that your agreement with the Authorized User incorporates our Terms of Service or contains those provisions set forth in our Terms of Service. If you purchase on behalf of an Authorized User, you agree to be responsible for the order placed and to guarantee payment of all fees. Additionally, Subscription Service may be used only for the Authorized User for which it was originally purchased, it may not be shared and may not be repurposed for or reassigned to any alternate Authorized Users without our prior written consent. Log-in information may never be shared between individuals.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Regardless of the method of purchase and which party is the contracting entity as established by the order, we require each Authorized User to agree to the Terms of Service when using the portal.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You will take all reasonable steps to ensure that Authorized Users do not use the Application Services in violation of the Terms of Service. If you discover or have reason to believe that any Authorized User is making use of the Application Services in violation of the Terms of Service, then you will immediately notify us in writing.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  5. Revenue Share and Payment
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. The Partner&apos;s Revenue Share
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The Partner&apos;s Revenue Share shall be based on the Partner&apos;s involvement with the deal as stated in Appendix 1.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. Requirements for Payment; Forfeiture
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  In order to receive payment under this Agreement, you must have: (i) agreed to and complied with the terms of this Agreement; (ii) provided us with all of your account information, including your bank information for payment; and (iii) submitted to us all the necessary and valid tax documents, including VAT invoices where necessary, and the documents have been approved. Please see the Program Policies for the applicable list of documents that need to be submitted to us and the required method of delivery. In order for you to receive the Revenue Share you must have submitted the required documentation set out in this section no later than thirty (30) days after the end of any given fiscal quarter. If we have not received such documentation within this timeframe, we will not process the Revenue Share payment until the next fiscal quarter payment date for applicable Qualified Transactions.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  All payments by Intempt will be made by bank transfer and it is your responsibility to ensure that you have provided us with the most up-to-date and correct bank information to facilitate the transfer. We will not issue payment by any other means. Notwithstanding the foregoing or anything to the contrary in this Agreement, (i) if any of the requirements set forth in this section, Section 5. a., remain outstanding for six (6) months immediately following the close of a Qualified Transaction, or (ii) we have attempted to pay you a Revenue Share for a Qualified Transaction by bank transfer, and the attempt was unsuccessful (as confirmed by bank notice), to no fault of our own; and (iii) we reached out to either the Primary Contact, Billing Contact or Decision Maker Contact on your account (all of which you can update in app) to obtain the necessary information and have not received a response; and (iv) six (6) months has passed since the date of the initial, failed bank transfer described herein, then your right to receive Revenue Share arising from any and all Qualified Transactions(s) with the associated Authorized User will be forever forfeited (each, a &quot;Forfeited Transaction&quot;). We will have no obligation to pay you Revenue Share associated with a Forfeited Transaction.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Once you comply with all of the requirements in this Section 4 then you will be eligible to receive Revenue Share on Qualified Transactions, as long as these Qualified Transactions do not involve the same Authorized User associated with a Forfeited Transaction.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  c. Revenue Share Payment
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We will pay the Revenue Share amount due to you within fifteen (15) days after the end of each fiscal quarter in an amount equal to the Net Revenue we recognize as revenue from Qualified Transactions during such quarter, multiplied by the Revenue Share percentage and revenue share multiplier (if applicable, see Appendix 1). For example, pre-payment in full by an Authorized User for an annual commitment will be recognized by us as revenue quarterly on a pro-rata basis for the length of time the Subscription Service was provided during each quarter during the annual term, and you will receive the Revenue Share on that same quarterly pro-rata basis. The currency in which we pay Revenue Share will be the same that applies to the Qualified Transaction (in USD). We will not pay more than one Revenue Share or other similar referral fee on any given partner sale (unless we choose to in our discretion). We may withhold the Revenue Share payment until the Revenue Share amount that we owe you is above $100 USD.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  d. Revenue Share Term
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  In most cases, the Partner Revenue Share Term is 12 months from the time of the Qualified Transaction close, provided the End User remains an Intempt customer for this period.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  e. Taxes
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You are responsible for payment of all taxes applicable to the Revenue Share. You will be assessed sales tax unless you provide us with a valid reseller certificate that indicates tax should not be applied to the Revenue Share amount. All amounts payable by us to you are subject to offset by us against any amounts owed by you to us.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  f. Payment Obligations
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  In the event you placed the order and contracted with us directly for an Authorized User, for payments made by credit card, you will provide us with your valid and updated credit card information or bank account information for the payment of Application Services fees. You authorize us and our Affiliates to charge your credit card or bank account for all fees payable. You also authorize us and our Affiliates to use a third party to process payments, and consent to the disclosure of your payment information to such third party. For payments made by invoice, all amounts invoiced are due and payable within thirty (30) days from the date of the invoice. In the event you placed the order with us for an Authorized User, if you do not pay fees due for an Authorized User&apos;s account within ten (10) days after notice of non-payment from us or our Affiliate, we may suspend the Application Services while any payment is delinquent and may charge a reactivation fee to reinstate any Application Services. We may also terminate or suspend the Authorized User&apos;s access to the Application Services and/or to initiate direct communication with the Authorized User. Notwithstanding termination of this Agreement, you remain obligated to pay all fees due for our provision of the Application Services to Authorized Users in connection with an order placed with us by you for an Authorized User. If you placed the order with us for an Authorized User and/or contracted with us on their behalf, you will have sole responsibility for invoicing and collecting fees for the Application Services from the Authorized User. Your obligation to pay fees to us is not conditioned upon your receipt of payment from the Authorized User.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  g. Paperwork requirements
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  To receive the Revenue Share (commissions) you have earned when your registered domains/customers purchase Intempt, you must complete the appropriate paperwork.
                </p>

                <ul className="mb-6 ml-6 list-disc space-y-2 text-base font-normal leading-7 text-black">
                  <li>You can fill out and submit your ACH/Wire Form and W-8/W-9 tax forms from within your partner portal (access provided after signing the partner agreement). Your partner name on both your partner account with Intempt and the ACH/Wire Form must match</li>
                  <li>If you are located in a region where your customer commissions may be subject to VAT/GST, you will need to submit a VAT/GST invoice every quarter to receive your commissions. Invoices should be emailed to <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a></li>
                  <li>Revenue share payments are paid out quarterly. If you do not provide the required paperwork in order for us to send payment to you within six months following the close of a Qualified Transaction, those revenue share payments will be forfeited.</li>
                </ul>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Once a Qualified Transaction is finalized (a shared deal or a registered domain closes), you become eligible for Partner Revenue Share.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  6. Training and Support
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. Training and Support
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We will make available to you, without charge, various guides and other resources made available as part of our Program. We will also make available to you a Partner Toolset, accessible through your Intempt Portal. We may change or discontinue any or all parts of the Partner Toolset, and any other Program benefits or offerings at any time without notice. Any data submitted to us via the Partner Toolset will be stored in Intempt&apos;s US Data Center.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. Intempt Demo Account
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If we make an Intempt Demo Account available to you, then you will use the Intempt Demo Account solely for your own education, demonstration and evaluation purposes. You are not permitted to use it for any other purpose. You will not lease, distribute, license, sell or otherwise commercially exploit the Intempt Demo Account. You will not use any Authorized User data or Customer Data (as defined in the Terms of Service) with the Intempt Demo Account. You can only use your own data (data and information that you specifically own) or the synthetic data provided to you for demonstration purposes by Intempt. You will not exceed the contact limits provided for you in the Intempt Demo Account and will utilize a reasonable number of objects in your use of the Intempt Demo Account. The Terms of Service apply to your use of the Intempt Demo Account.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  7. Trademarks
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You grant to us a nonexclusive, nontransferable, royalty-free right to use and display your trademarks, service marks and logos (&quot;Participant Marks&quot;) in connection with the Program and this Agreement.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We retain all ownership rights in Intempt Trademarks. During the term of this Agreement, you may use our trademark as long as you follow the usage requirements in this section and the incorporated guidelines. You must: (i) only use the images of our trademarks that we make available to you as part of your participation in this Program, without altering them in any way; (ii) only use our trademarks in connection with the Program and this Agreement; (iii) immediately comply if we request that you discontinue use.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You must not use any of our trademarks: (a) in a misleading or disparaging way; (b) outside the scope of the Program or this Agreement; (c) in a way that implies we endorse, sponsor or approve of your services or products; or (d) in violation of applicable law or in connection with an obscene, indecent, or unlawful topic or material.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  8. Proprietary Rights
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. Intempt&apos;s Proprietary Rights
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  No license to any software is granted by this Agreement. The Application Services are protected by intellectual property laws. The Application Services belong to and are the property of us or our licensors (if any). We retain all ownership rights in the Application Services. You agree not to copy, rent, lease, sell, distribute, or create derivative works based on the Intempt Content, or the Application Services in whole or in part, by any means, except as expressly authorized in writing by us. Intempt, the Intempt logos, and other marks that we use from time to time are our trademarks and you may not use them without our prior written permission, except as otherwise set forth in this Agreement.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We encourage all customers and partners to comment on the Application Services, provide suggestions for improving them, and vote on suggestions they like. You agree that all such comments and suggestions will be non-confidential and that we own all rights to use and incorporate them into the Application Services, without payment to you.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. Authorized User&apos;s Proprietary Rights
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  As between you and Authorized User, Authorized User retains the right to access and use the Authorized User portal associated with the Application Services regardless of whether you placed the order with us for an Authorized User or made or make payments for an Authorized User. Authorized User will own and retain all rights to the Authorized User Data. If we deem it to be necessary based on the relationship status between you and the Authorized User or the particular situation, we may communicate directly with the Authorized User and/or may port ownership of the portal associated with the Application Services to the Authorized User.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  c. User Participation Disclosure
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Please note that any Authorized User portal may have more than one Partner or Provider involved in their use of the Application Services. All information and data about you in the Authorized User portal may be visible to all users of the Authorized User portal, and will not be considered Confidential Information between you and other users of the portal. It is the Authorized User&apos;s responsibility to set the User Permissions to control the access and visibility of all information and data in the Authorized User portal.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  9. Confidentiality
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. The Receiving Party
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The Receiving Party shall: (i) protect the confidentiality of the Confidential Information of the Disclosing Party using the same degree of care that it uses with its own confidential information, but in no event less than reasonable care, (ii) not use any Confidential Information of the Disclosing Party for any purpose outside the scope of this Agreement, (iii) not disclose Confidential Information of the Disclosing Party to any third party, and (iv) limit access to Confidential Information of the Disclosing Party to those of its employees, contractors and agents who need such access for purposes consistent with this Agreement and who have signed confidentiality agreements with the Receiving Party containing protections no less stringent than those herein.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. Disclosure Requirements
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The Receiving Party may disclose Confidential Information of the Disclosing Party if required to do so under any federal, state, or local law, statute, rule or regulation, subpoena or legal process; provided, however, that (i) Receiving Party will provide Disclosing Party with prompt notice of any request that it disclose Confidential Information, sufficient to allow Disclosing Party to object to the request and/or seek an appropriate protective order or, if such notice is prohibited by law, Receiving Party shall disclose the minimum amount of Confidential Information required to be disclosed under the applicable legal mandate; and (ii) in no event shall Receiving Party disclose Confidential Information to a party other than a government agency except under a valid order from a court having jurisdiction requiring the specific disclosure.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  c. Injunctive Relief
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Each party acknowledges that the unauthorized use or disclosure of the other party&apos;s Confidential Information may cause irreparable harm to the other party. Accordingly, each party agrees that the other party will have the right to seek an immediate injunction against any breach or threatened breach of this &quot;Confidentiality&quot; section of this Agreement, as well as the right to pursue any and all other rights and remedies available at law or in equity for such a breach.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  10. Opt Out and Unsubscribing
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You will comply promptly with all opt out, unsubscribe, &quot;do not call&quot; and &quot;do not send&quot; requests, including without limitation such requests from us related to Intempt Leads and Shared Leads. For the duration of this Agreement, you will establish and maintain a privacy policy that is compliant with all laws and regulations applicable to you and you shall establish and maintain systems and procedures appropriate to effectuate all opt out, unsubscribe, &quot;do not call&quot; and &quot;do not send&quot; requests.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  11. Term and Termination
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. Term
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This Agreement will apply for as long as you participate in the Program and fulfill all the participation requirements, until terminated.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. Termination Without Cause
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Both you and we may terminate this Agreement on thirty (30) days written notice to the other party.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  c. Termination for Agreement Changes
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If we update or replace the terms of this Agreement, you may terminate this Agreement without cause on five (5) days written notice to us, provided that you send us written notice within ten (10) days after we send you notice of the change.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If you continue to participate in the program and we receive no notice as per this Section, we will consider any and all changes accepted by you fifteen (15) days after we send you notice of the change.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  d. Termination for Cause
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may terminate this Agreement and/or suspend your or the Authorized User&apos;s access to the Application Services: (i) upon thirty (30) days&apos; notice to you of a material breach if such breach remains uncured at the expiration of such period, (ii) automatically, within thirty (30) of you failing to meet the Program requirements applicable to you in your capacity as the Partner; (iii) upon fifteen (15) days notice to you of non-payment of any amount due to us if such amount remains unpaid at the expiration of such period, (iv) immediately, if you become the subject of a petition in bankruptcy or any other proceeding relating to insolvency, receivership, liquidation or assignment for the benefit of creditors, (v) immediately, if you or your Authorized User(s) breach the Terms of Service, including if you default on your payment obligations to us or our Affiliate, or violate any applicable local, state, federal, or foreign laws or regulations, (vi) immediately, if you breach your confidentiality obligations under this Agreement or infringe or misappropriate Intempt&apos;s intellectual property rights, or (vii) immediately, if we determine that you are acting, or have acted, in a way that has or may negatively reflect on or affect us, our prospects, or our customers.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  e. Effects of Termination
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Termination of this Agreement for any reason does not terminate your Subscription Service or any Subscription Service you may have purchased on an Authorized User&apos;s behalf. Your purchase and use of the Subscription Services is governed by the Terms of Service. Otherwise, termination of this Agreement: (i) without cause by us, (ii) by you with cause, shall not affect our obligation to pay you Revenue Share earned up to the effective date of termination, so long as the related payment by the Authorized User is recognized by us within thirty (30) days of the date of such termination. If you are a Partner you will receive one (1) last payment of Revenue Share after completion of the quarter in which the Agreement is terminated and the related payment by the Authorized User is recognized. In the event of termination without cause by you, or for cause by us, our obligation to pay and your right to receive any Revenue Share will terminate upon the date of such termination, regardless of whether you would have otherwise been eligible to receive Revenue Share prior to the date of termination. Except as expressly set forth in this section, you are not eligible to receive a Revenue Share after termination of this Agreement.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Upon termination, you will discontinue all use of and delete all Intempt Leads and Shared Leads if we provided them to you and you do not otherwise have consent from the applicable Intempt Lead or Shared Lead to continue use of their data and information. Upon termination, a prospect is not considered valid, and we may choose to maintain it in our database and engage with such a prospect.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Upon termination, you will immediately discontinue all use of our trademark, and will remove all Intempt badges and references to this Program from your website(s) and other collateral. Termination of this Agreement shall not cause your or an Authorized User&apos;s subscription agreement to be terminated.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  12. Partner Representations and Warranties
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You represent and warrant that: (i) you have all sufficient rights and permissions to provide the prospect data to us for our use in sales and marketing efforts or as otherwise set forth in this Agreement, (ii) your participation in this Program will not conflict with any of your existing agreements or arrangements; and (iii) you own or have sufficient rights to use and to grant to us our right to use the Participant Marks.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  13. Indemnification
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. Partner Indemnification
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You will indemnify, defend and hold us harmless, at your expense, against any third-party claim, suit, action, or proceeding (each, an &quot;Action&quot;) brought against us (and our officers, directors, employees, agents, service providers, licensors, and affiliates) by a third party not affiliated with us to the extent that such Action is based upon or arises out of (a) your participation in the Program, (b) our use of the prospect or lead data you provided us, (c) your noncompliance with or breach of this Agreement, (d) your use of or participation in the Optional Programs, (e) your use of the Intempt Demo Account, or (f) our use of the Participant Marks. We will: notify you in writing within thirty (30) days of our becoming aware of any such claim; give you sole control of the defense or settlement of such a claim; and provide you (at your expense) with any and all information and assistance reasonably requested by you to handle the defense or settlement of the claim. You shall not accept any settlement that (i) imposes an obligation on us; (ii) requires us to make an admission; or (iii) imposes liability not covered by these indemnifications or places restrictions on us without our prior written consent.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. Intempt Indemnification Requirement
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If your total Qualified Subscription Value during the twelve (12) month period preceding the date of the event giving rise to a claim is equal to or exceeds twenty five thousand U.S. dollars (USD $25,000), then the Intempt Indemnity section below (Section 14. c.) applies to you.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  c. Intempt Indemnification
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Provided you have fulfilled the Intempt Indemnification Requirement, we will indemnify, defend and hold you harmless, at our expense, against any Action brought against you (and your officers, directors, employees, agents, service providers, licensors, and Affiliates) by a third party not affiliated with you to the extent that such Action is based upon or arises out of (1) an allegation that the Subscription Service infringes a valid patent in a member state of the Patent Cooperation Treaty, registered trademark, or registered copyright (&quot;IP Indemnification&quot;), or (2) our breach of our confidentiality obligations (&quot;Confidentiality Indemnification&quot;).
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You will: notify us in writing within thirty (30) days of you becoming aware of any such claim; give us sole control of the defense or settlement of such a claim; and provide us (at our expense) with any and all information and assistance reasonably requested by us to handle the defense or settlement of the claim. We will not accept any settlement that (i) imposes an obligation on you; (ii) requires you to make an admission; or (iii) imposes liability not covered by these indemnifications or places restrictions on you without your prior written consent.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We will not have any obligation or liability under this section if the alleged claim is caused by or based on: (i) any combination of the Subscription Service with any hardware, software, equipment, or data not provided by us, (ii) modification of the Subscription Service by anyone other than us, or modification of the Subscription Service by us in accordance with specifications or instructions that you or your Authorized User provided, (iii) use of the Subscription Service in violation of or outside the scope of the Terms of Service, (iv) an allegation that the Subscription Service consists of a function, system or method traditionally utilized in marketing, sales or services software that is not commercially unique to the Subscription Service, and the commercially unique aspects of the Subscription Service are not identified in the allegation giving rise to the claim, or (v) user interface or related user design elements not provided by us.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  <strong>Notwithstanding the foregoing, in the event of such a claim, or if we believe that such a claim is likely, we may, at our sole option and expense: (a) modify the Subscription Service or provide you and your Authorized Users with substitute Subscription Service that is non-infringing; or (b) obtain a license or permission for you and your Authorized Users to continue to use the Subscription Service, at no additional cost to you; or (c) if neither (a) nor (b) is, in our judgment, commercially practicable, terminate your or your Authorized Users&apos; access to the Subscription Service (or to a portion of the Subscription Service as necessary to resolve the claimed infringement) and refund any prepaid but unused fees covering use of the Subscription Service after termination in accordance with the &apos;Effect of Termination&apos; provision of this Agreement. THIS SECTION STATES OUR ENTIRE LIABILITY AND YOUR SOLE AND EXCLUSIVE REMEDY WITH RESPECT TO ANY CLAIM PROVIDED FOR UNDER THIS SECTION.</strong>
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  14. Disclaimers; Limitations of Liability
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. Disclaimer of Warranties
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  <strong>EXCEPT AS SET FORTH IN THE &apos;PERFORMANCE WARRANTY&apos; SECTION OF THE Terms of Service, WE AND OUR AFFILIATES AND AGENTS MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, SECURITY, ACCURACY OR COMPLETENESS OF Application Services, DATA SYNCHED TO OR MADE AVAILABLE FROM THE Application Services, Intempt CONTENT, PARTNER PROGRAM, OPTIONAL PROGRAMS, Intempt DEMO ACCOUNT OR CONSULTING SERVICES FOR ANY PURPOSE. APPLICATION PROGRAMMING INTERFACES (APIs) AND THE Intempt DEMO ACCOUNT MAY NOT BE AVAILABLE AT ALL TIMES. TO THE EXTENT PERMITTED BY LAW, THE Application Services, Intempt CONTENT, THE PROGRAM, THE OPTIONAL PROGRAMS, AND Intempt DEMO ACCOUNT ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OR CONDITION OF ANY KIND. WE DISCLAIM ALL WARRANTIES AND CONDITIONS OF ANY KIND WITH REGARD TO THE Application Services, Intempt CONTENT, THE PROGRAM, THE OPTIONAL PROGRAMS, AND Intempt DEMO ACCOUNT INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.</strong>
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. No Indirect Damages
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  <strong>EXCEPT FOR YOUR LIABILITY ARISING FROM YOUR OBLIGATIONS UNDER THE &quot;CONFIDENTIALITY&quot; SECTION, AND YOUR LIABILITY FOR VIOLATION OF OUR INTELLECTUAL PROPERTY RIGHTS, TO THE EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS OR BUSINESS OPPORTUNITIES.</strong>
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  c. Limitation of Liability
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  <strong>IF, NOTWITHSTANDING THE OTHER TERMS OF THIS AGREEMENT, WE ARE DETERMINED TO HAVE ANY LIABILITY TO YOU OR ANY THIRD PARTY, THE PARTIES AGREE THAT OUR AGGREGATE LIABILITY WILL BE LIMITED TO THE TOTAL REVENUE SHARE AMOUNTS YOU HAVE ACTUALLY EARNED IN THE TWELVE MONTH PERIOD PRECEDING THE EVENT GIVING RISE TO A CLAIM. THE FOREGOING LIMITATION WILL APPLY WHETHER AN ACTION IS IN CONTRACT OR TORT AND REGARDLESS OF THE THEORY OF LIABILITY.</strong>
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  d. Intempt Demo Account and Optional Programs
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  <strong>WE DISCLAIM ALL LIABILITY WITH RESPECT TO THE INTEMPT DEMO ACCOUNT AND THE OPTIONAL PROGRAMS THAT YOU USE. WE DO NOT PROMISE TO MAKE THE INTEMPT DEMO ACCOUNT OR OPTIONAL PROGRAMS AVAILABLE TO YOU, AND WE MAY CHOOSE TO DO SO, OR NOT TO DO SO, IN OUR DISCRETION.</strong>
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  15. Non-Solicitation
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You agree not to intentionally solicit for employment any of our employees or contractors during the term of this Agreement and for a period of twelve (12) months following the termination of this Agreement. Both you and we acknowledge that (i) any public job posting or public solicitation not directed specifically to such a person shall not be deemed to be a solicitation for purposes of this provision, and (ii) this provision is not intended to limit the mobility of either our employees or contractors.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  16. General
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  a. Amendment; No Waiver
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We may update and change any part or all of this Agreement, including by replacing it in its entirety. If we update or change this Agreement, the updated Agreement will be posted at Intempt website (or other designated URL) and we will let you know of the change through email. The updated Agreement will become effective and binding on the next business day after it is posted. When we change this Agreement, the &quot;Last Modified&quot; date above will be updated to reflect the date of the most recent version. We encourage you to review this Agreement periodically.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If you don&apos;t agree to the update, change or replacement, you can choose to terminate as we describe above.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  No delay in exercising any right or remedy or failure to object will be a waiver of such right or remedy or any other right or remedy. A waiver on one occasion will not be a waiver of any right or remedy on any future occasion.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  b. Applicable Law
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This Agreement shall be governed by the laws of the of Texas, USA without regard to the conflict of laws provisions thereof. In the event either of us initiates an action in connection with this Agreement or any other dispute between the parties, the exclusive venue and jurisdiction of such action shall be in the state and federal courts in Austin, Texas.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  c. Force Majeure
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Neither party will be responsible for failure or delay of performance if caused by: an act of war, hostility, or sabotage;; electrical, internet, or telecommunication outage that is not caused by the obligated party; government restrictions; or other event outside the reasonable control of the obligated party. Each party will use reasonable efforts to mitigate the effect of a force majeure event.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  d. Actions Permitted
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Except for actions for nonpayment or breach of a party&apos;s proprietary rights, no action, regardless of form, arising out of or relating to this Agreement may be brought by either party more than one (1) year after the cause of action has accrued.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  e. Relationship of the Parties
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Both you and we agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of this Agreement.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  f. Compliance with Applicable Laws
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You shall comply, and shall ensure that any third parties performing sales or referral activities on your behalf comply with all applicable foreign and domestic laws (including without limitation export laws, privacy regulations and laws applicable to sending of unsolicited email), governmental regulations, ordinances, and judicial administrative orders. You shall not engage in any deceptive, misleading, illegal or unethical marketing activities, or activities that otherwise may be detrimental to us, our customers, or to the public. Export laws and regulations of the United States and any other relevant local export laws and regulations may apply to the Application Services. You will comply with the sanctions programs administered by the Office of Foreign Assets Control (OFAC) of the US Department of the Treasury. You will not directly or indirectly export, re-export, or transfer the Application Services to prohibited countries or individuals or permit use of the Application Services by prohibited countries or individuals.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  g. Data Processing
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  To the extent that any Personal Data is processed in connection with the Program the terms set forth in the Intempt Data Processing Agreement, posted at: <a href="https://www.intempt.com/dpa" className="text-[#0382ff] hover:underline">https://www.intempt.com/dpa</a>, which is hereby incorporated by reference, shall apply.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  h. Severability
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If any part of this Agreement is determined to be invalid or unenforceable by applicable law, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of this Agreement will continue in effect.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  i. Notices
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Notice will be sent to the contact address set forth herein (as such may be changed by notice given to the other party), and will be deemed delivered as of the date of actual receipt:
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Intempt Technologies LLC. 1101 W 34th St, #595 Austin, TX 78705
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  To you: your address as provided in your Intempt portal account information. We may give electronic notices by general notice through an in-app notification in your portal and may give electronic notices specific to you by email to your email address(es) that we have on record in our account information for you. We may give notice to you by telephone calls to the telephone numbers on record in our account information for you. You must keep all of your account information with Intempt current.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  j. Entire Agreement
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This Agreement is the entire agreement between us for the Program and supersedes all other proposals and agreements (including all prior versions of this Agreement), whether electronic, oral or written, between us. We object to and reject any additional or different terms proposed by you, including those contained in your purchase order, acceptance or website. Our obligations are not contingent on the delivery of any future functionality or features of the Application Services or dependent on any oral or written public comments made by us regarding future functionality or features of the Application Services. It is the express wish of both you and us that this Agreement and all related documents be drawn up in English. We might make versions of this Agreement available in languages other than English. If we do, the English version of this Agreement will govern our relationship and the translated version is provided for convenience only and will not be interpreted to modify the English version of this Agreement.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  k. Assignment
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You will not assign or transfer this Agreement, including any assignment or transfer by reason of merger, reorganization, sale of all or substantially all of its assets, change of control or operation of law, without our prior written consent. We may assign this Agreement to any Affiliate or in the event of merger, reorganization, sale of all or substantially all of our assets, change of control or operation of law.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  l. No Third Party Beneficiaries
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Nothing in this Agreement, express or implied, is intended to or shall confer upon any person or entity (other than the parties hereto) any right, benefit or remedy of any nature whatsoever under or by reason of this Agreement.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  m. No Licenses
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We grant to you only the rights and licenses expressly stated in this Agreement, and you receive no other rights or licenses with respect to us, the Application Services, our trademarks, or any other property or right of ours.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  n. Sales by Intempt
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This Agreement shall in no way limit our right to sell the Application Services, directly or indirectly, to any current or prospective customers.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  o. Authority
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Each party represents and warrants to the other that it has full power and authority to enter into this Agreement and that it is binding upon such party and enforceable in accordance with its terms.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  p. Survival
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The following sections shall survive the termination of this Agreement: &apos;Revenue Share and Payment&apos;, &apos;Proprietary Rights&apos;, &apos;Confidentiality&apos;, &apos;Effects of Termination&apos;, &apos;Indemnification&apos;, &apos;Disclaimers; Limitation of Liability&apos;, &apos;Non-Solicitation&apos; and &apos;General&apos;.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  APPENDIX 1 - Revenue Share
                </h2>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-black/20">
                    <thead>
                      <tr className="bg-black/5">
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Tier</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Closed MRR (previous qtr)</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Partner Sold</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Co-Sell</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Bronze</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">$0–$9,999</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">10%</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">5%</td>
                      </tr>
                      <tr className="bg-white/50">
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Silver</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">$10,000–$99,999</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">20%</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">10%</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Gold</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">$100,000+</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">30%</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p><strong>Participants</strong></p>
                  <p><strong>INTEMPT TECHNOLOGIES LLC</strong></p>
                  <p>Date</p>
                  <p className="mt-8"><strong>Partner</strong></p>
                  <p>Date</p>
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

