import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

export default function AffiliateTermsPage() {
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
                Intempt Marketing Affiliate Partner Agreement
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
                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This is a contract between you (the &quot;Affiliate&quot;) and us (&quot;Intempt&quot;). It describes how we will work together and other aspects of our business relationship. It is a legal document, so some of the language is necessarily &quot;legalese,&quot; but we have tried to make it as readable as possible.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The Affiliate Program Agreement applies to your participation in our Affiliate Program (the &quot;Affiliate Program&quot;). These terms are so important that we cannot have you participate in our Affiliate Program unless you agree to them.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We periodically update these terms. We might also choose to replace these terms in their entirety if, for example, the Affiliate Program changes, ends, or becomes part of an existing program, including our partner programs. If we update or replace the terms we or the Affiliate Tool will let you know via electronic means, which may include an in-app notification or by email. If you don&apos;t agree to the update or replacement, you can choose to terminate as we describe below.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Definitions
                </h2>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    <strong>&quot;Intempt Affiliate&quot;</strong> means a company owned, operated or controlled by Intempt.
                  </p>
                  <p>
                    <strong>&quot;Affiliate Program&quot;</strong> means our affiliate program as described in this Agreement.
                  </p>
                  <p>
                    <strong>&quot;Affiliate Lead&quot;</strong> means a customer prospect who clicks on the Affiliate Link that we have made available to you via the Affiliate Tool.
                  </p>
                  <p>
                    <strong>&quot;Affiliate Link&quot;</strong> means the unique tracking link you place on your site or promote through other channels.
                  </p>
                  <p>
                    <strong>&quot;Affiliate Policies&quot;</strong> means the policies applicable to affiliates that we may make available to you from time to time.
                  </p>
                  <p>
                    <strong>&quot;Affiliate Tool&quot;</strong> means the tool that we make available to you upon your acceptance into the Affiliate Program and for you to use in order to participate in the Affiliate Program.
                  </p>
                  <p>
                    <strong>&quot;Agreement&quot;</strong> means this Affiliate Program Agreement and all materials referred or linked to in here.
                  </p>
                  <p>
                    <strong>&quot;Commission&quot;</strong> means an amount described in the Affiliate Tool (or if applicable, in the Program Policies) for each Customer Transaction.
                  </p>
                  <p>
                    <strong>&quot;Customer&quot;</strong> means the authorized actual user of the Intempt Products who has purchased or signed up for the Intempt products after being an Affiliate Lead.
                  </p>
                  <p>
                    <strong>&quot;Customer Transactions&quot;</strong> means those transactions by Affiliate Leads that are eligible for Commission pursuant to the &apos;Customer Transactions&apos; section of this Agreement. Customer Transactions may include customer purchases or customer signups, as further described in the Affiliate Tool.
                  </p>
                  <p>
                    <strong>&quot;Customer Data&quot;</strong> means all information that Customer submits or collects via the Intempt Products and all materials that Customer provides or posts, uploads, inputs or submits for public display through the Intempt Products.
                  </p>
                  <p>
                    <strong>&quot;Intempt Content&quot;</strong> means all information, data, text, messages, software, sound, music, video, photographs, graphics, images, and tags that we incorporate into our services.
                  </p>
                  <p>
                    <strong>&quot;Intempt Products&quot;</strong> means Intempt Subscription Service.
                  </p>
                  <p>
                    <strong>&quot;Subscription Service&quot;</strong> means our web-based software that is subscribed to, and developed, operated, and maintained by us, accessible via http://app.Intempt.com or another designated URL, and add-on products to our software.
                  </p>
                  <p>
                    <strong>&quot;We&quot;, &quot;us&quot;, &quot;our&quot;, and &quot;Intempt&quot;</strong> means Intempt Technologies, LLC.
                  </p>
                  <p>
                    <strong>&quot;You&quot; and &quot;Affiliate&quot;</strong> means the party, other than Intempt, entering into this Agreement and participating in the Affiliate Program.
                  </p>
                </div>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Non-Exclusivity
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  This Agreement does not create an exclusive agreement between you and us. Both you and we will have the right to recommend similar products and services of third parties and to work with other parties in connection with the design, sale, installation, implementation and use of similar services and products of third parties.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Affiliate Acceptance
                </h2>

                <div className="mb-8 space-y-4 text-base font-normal leading-7 text-black">
                  <p>
                    Once you complete an application to become an Affiliate, we will review your application and notify you whether you have been accepted to participate in the Affiliate Program, or not. Before we accept an application, we may want to review your application with you so that we may reach out to you for more information. We may require that you complete certain requirements or certification(s) before we accept your application. If we do not notify you that you are accepted to participate in the Affiliate Program within thirty (30) days from your application, your application is considered to be rejected.
                  </p>
                  <p>
                    If you are accepted to participate in the Affiliate Program, then upon notification of acceptance, the terms and conditions of this Agreement shall apply in full force and effect, until terminated, pursuant to the terms set forth below. Further, you will need to complete any enrollment criteria set out in the Program Policies Page, if applicable. Failure to complete any enrollment criteria within thirty (30) days of your acceptance will result in the immediate termination of this Agreement and you will no longer be able to participate in the Affiliate Program.
                  </p>
                  <p>
                    Your acceptance and participation in the Affiliate Program do not mean that you will be accepted into the Agency Partner Program. In order to participate in this program, you will need to apply in accordance with the relevant application procedure.
                  </p>
                  <p>
                    You will comply with the terms and conditions of this Agreement at all times, including any applicable Program Policies.
                  </p>
                </div>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Customer Transactions
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Affiliate Program Limits
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Each accepted Affiliate Lead will expire according to the information provided in the Affiliate Tool (or if applicable, in the Program Policies) from the date the Affiliate Lead clicked on the Affiliate Link that was made available by you. We will pay you Commission as described in the Affiliate Tool (or if applicable, in the Program Policies) for each new Customer who completes an applicable Customer Transaction after clicking on an Affiliate Lead made available by you, provided that you remain eligible to receive Commission pursuant to the terms of this Agreement. The start of the Customer&apos;s subscription is determined by the date of the first purchase or sign up (as applicable) of the Subscription Service by the Customer and you will receive a Commission payment for that Customer Transaction only, regardless of any additional purchases made by that customer during their Subscription Service. The Affiliate will not be entitled to receive Commission on any additional purchases of Intempt Products by that same Customer.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Eligibility
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  To be eligible for Commission (i) an Affiliate Lead must be accepted and valid in accordance with the &apos;Acceptance and Validity&apos; section, (ii) a Customer Transaction must have occurred, (iii) a Customer must remain a customer during the locking period in the Affiliate Tool (or if applicable, in the Program Policies). You are not eligible to receive Commission or any other compensation from us based on transactions for Other Products or if: (i) such compensation is disallowed or limited by federal, state or local law or regulation in the United States or the laws or regulations of your jurisdiction; (ii) the applicable Customer objects to or prohibits such compensation or excludes such compensation from its payments to us or Intempt Affiliates; (iii) the Customer has paid or will pay such commissions, referral fees, or other compensation directly to you, (iv) the Commission payment has been obtained by fraudulent means, misuse of the Affiliate Link, in violation of any Affiliate Program Policies that we make available to you, misuse of the Affiliate Tool or by any other means that we deem to breach the spirit of the Affiliate Program, or (v) the Customer participates in any of our partner programs, including our Sales Partner Program and is eligible to receive commission in relation to the Customer Transaction under any of these programs. If at any point you are eligible to receive a revenue share payment or commission under another Program at Intempt, that payment amount will not change based on your participation in the Affiliate Program. For example, you will not be able to receive the Commission set out in this Agreement on any Partner Transaction that was completed whilst participating as a partner in the Sales Partner Program (as defined in the Sales Partner Program Agreement). In competitive situations with other affiliates, we may elect to provide the Commission to the affiliate that we deem to be the most eligible for Commission, at our discretion. We may discontinue Commission payments should any of the eligibility criteria set forth in this subsection fail to be met at any time.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Acceptance and Validity
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You will only be eligible for a Commission payment for any Customer Transactions that derived from Affiliate Leads generated by the Affiliate Link that we make available to you and are accepted by Intempt. An Affiliate Lead will be considered valid and accepted if, in our reasonable determination: (i) it is a new potential customer of ours, and (ii) is not, at the time of submission or sixty (60) days prior, one of our pre-existing customers, or involved in our active sales process. Notwithstanding the foregoing, we may choose not to accept an Affiliate Lead in our reasonable discretion. If an Affiliate Lead does not purchase the Subscription Service within the time period described on the Affiliate Tool (or if applicable, in the Program Policies) of their first click on the Affiliate Link, you will not be eligible for a Commission payment, even if the Affiliate Lead decides to purchase after the time period has expired. An Affiliate Lead is not considered valid if its first click on the Affiliate Link is after this Agreement has expired or terminated.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Engagement with Prospects
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Once we have received the Affiliate Lead information, we may elect to engage with the prospect directly, regardless of whether or not the Affiliate Lead is valid. If an Affiliate Lead is not valid then we may choose to maintain it in our database and we may choose to engage with such Affiliate Lead. Any engagement between Intempt and an Affiliate Lead will be at Intempt&apos;s discretion.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Revenue Share and Payment
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  The Partner&apos;s Revenue Share shall be based on the Partner&apos;s involvement with the deal as stated in Appendix 1.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Requirements for Payment; Forfeiture
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  In order to receive payment under this Agreement, you must have: (i) agreed to and complied with the terms of this Agreement; (ii) provided us with all of your account information, including your bank information for payment; and (iii) submitted to us all the necessary and valid tax documents, including VAT invoices where necessary, and the documents have been approved. Please see the Program Policies for the applicable list of documents that need to be submitted to us and the required method of delivery. In order for you to receive the Revenue Share you must have submitted the required documentation set out in this section no later than thirty (30) days after the end of any given fiscal quarter. If we have not received such documentation within this timeframe, we will not process the Revenue Share payment until the next fiscal quarter payment date for applicable Qualified Transactions.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  All payments by Intempt will be made by bank transfer and it is your responsibility to ensure that you have provided us with the most up-to-date and correct bank information to facilitate the transfer. We will not issue payment by any other means. Notwithstanding the foregoing or anything to the contrary in this Agreement, (i) if any of the requirements set forth in this section, Section 5. a., remain outstanding for six (6) months immediately following the close of a Qualified Transaction, or (ii) we have attempted to pay you a Revenue Share for a Qualified Transaction by bank transfer, and the attempt was unsuccessful (as confirmed by bank notice), to no fault of our own; and (iii) we reached out to either the Primary Contact, Billing Contact or Decision Maker Contact on your account (all of which you can update in app) to obtain the necessary information and have not received a response; and (iv) six (6) months has passed since the date of the initial, failed bank transfer described herein, then your right to receive Revenue Share arising from any and all Qualified Transactions(s) with the associated Authorized User will be forever forfeited (each, a &quot;Forfeited Transaction&quot;). We will have no obligation to pay you Revenue Share associated with a Forfeited Transaction.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Once you comply with all of the requirements in this Section then you will be eligible to receive Revenue Share on Qualified Transactions, as long as these Qualified Transactions do not involve the same Authorized User associated with a Forfeited Transaction.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Revenue Share Payment
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We will pay the Revenue Share amount due to you within forty-five (45) days after the end of each fiscal quarter in an amount equal to the Net Revenue we recognize as revenue from Qualified Transactions during such quarter, multiplied by the Revenue Share percentage and revenue share multiplier (if applicable, see Appendix 1). For example, pre-payment in full by an Authorized User for an annual commitment will be recognized by us as revenue quarterly on a pro-rata basis for the length of time the Subscription Service was provided during each quarter during the annual term, and you will receive the Revenue Share on that same quarterly pro-rata basis. The currency in which we pay Revenue Share will be the same that applies to the Qualified Transaction (in USD). We will not pay more than one Revenue Share or other similar referral fee on any given partner sale (unless we choose to in our discretion). We may withhold the Revenue Share payment until the Revenue Share amount that we owe you is above $100 USD.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Revenue Share Term
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  In most cases, the Partner Revenue Share Term is 12 months from the time of the Qualified Transaction close, provided the End User remains an Intempt customer for this period.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Taxes
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You are responsible for payment of all taxes applicable to the Revenue Share. You will be assessed sales tax unless you provide us with a valid certificate that indicates tax should not be applied to the Revenue Share amount. All amounts payable by us to you are subject to offset by us against any amounts owed by you to us.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Payment Obligations
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  In the event you placed the order and contracted with us directly for an Authorized User, for payments made by credit card, you will provide us with your valid and updated credit card information or bank account information for the payment of Application Services fees. You authorize us and our Affiliates to charge your credit card or bank account for all fees payable. You also authorize us and our Affiliates to use a third party to process payments, and consent to the disclosure of your payment information to such third party. For payments made by invoice, all amounts invoiced are due and payable within thirty (30) days from the date of the invoice. In the event you placed the order with us for an Authorized User, if you do not pay fees due for an Authorized User&apos;s account within ten (10) days after notice of non-payment from us or our Affiliate, we may suspend the Application Services while any payment is delinquent and may charge a reactivation fee to reinstate any Application Services. We may also terminate or suspend the Authorized User&apos;s access to the Application Services and/or to initiate direct communication with the Authorized User. Notwithstanding termination of this Agreement, you remain obligated to pay all fees due for our provision of the Application Services to Authorized Users in connection with an order placed with us by you for an Authorized User. If you placed the order with us for an Authorized User and/or contracted with us on their behalf, you will have sole responsibility for invoicing and collecting fees for the Application Services from the Authorized User. Your obligation to pay fees to us is not conditioned upon your receipt of payment from the Authorized User.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Paperwork requirements
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
                  Once a Qualified Transaction is finalized, you become eligible for Partner Revenue Share.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Training and Support
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We may make available to you, without charge, various resources made available as part of our Affiliate Program. We may change or discontinue any or all parts of the Affiliate Program benefits or offerings at any time without notice.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Trademarks
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You grant to us a nonexclusive, nontransferable, royalty-free right to use and display your trademarks, service marks and logos (&quot;Affiliate Marks&quot;) in connection with the Affiliate Program and this Agreement.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  During the term of this Agreement, in the event that we make our trademark available to you within the Affiliate Tool, you may use our trademark as long as you follow the usage requirements in this section. You must: (i) only use the images of our trademark that we make available to you, without altering them in any way; (ii) only use our trademarks in connection with the Affiliate Program and this Agreement; (iii) immediately comply if we request that you discontinue use. You must not: (i) use our trademark in a misleading or disparaging way; (ii) use our trademark in a way that implies we endorse, sponsor or approve of your services or products; or (iii) use our trademark in violation of applicable law or in connection with an obscene, indecent, or unlawful topic or material.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Proprietary Rights
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Intempt&apos;s Proprietary Rights
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  No license to any software is granted by this Agreement. The Intempt Products are protected by intellectual property laws. The Intempt Products belong to and are the property of us or our licensors (if any). We retain all ownership rights in the Intempt Products. You agree not to copy, rent, lease, sell, distribute, or create derivative works based on the Intempt Content, or the Intempt Products in whole or in part, by any means, except as expressly authorized in writing by us.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Customer&apos;s Proprietary Rights
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  As between you and Customer, Customer retains the right to access and use the Customer portal associated with the Intempt Products. For the avoidance of doubt, Customer will own and retain all rights to the Customer Data.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Confidentiality
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  As used herein, &quot;Confidential Information&quot; means all confidential information disclosed by a party (&quot;Disclosing Party&quot;) to the other party (&quot;Receiving Party&quot;), (i) whether orally or in writing, that is designated as confidential, and (ii) Intempt customer and prospect information, whether or not otherwise designated as confidential. Confidential Information does not include any information that (i) is or becomes generally known to the public without breach of any obligation owed to the Disclosing Party or (ii) was known to the Receiving Party prior to its disclosure by the Disclosing Party without breach of any obligation owed to the Disclosing Party. The Receiving Party shall: (i) protect the confidentiality of the Confidential Information of the Disclosing Party using the same degree of care that it uses with its own confidential information, but in no event less than reasonable care, (ii) not use any Confidential Information of the Disclosing Party for any purpose outside the scope of this Agreement, (iii) not disclose Confidential Information of the Disclosing Party to any third party, and (iv) limit access to Confidential Information of the Disclosing Party to its employees, contractors and agents. The Receiving Party may disclose Confidential Information of the Disclosing Party if required to do so under any federal, state, or local law, statute, rule or regulation, subpoena or legal process.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Opt-Out and Unsubscribing
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You will comply promptly with all opt out, unsubscribe, &quot;do not call&quot; and &quot;do not send&quot; requests. For the duration of this Agreement, you will establish and maintain systems and procedures appropriate to effectuate all opt out, unsubscribe, &quot;do not call&quot; and &quot;do not send&quot; requests.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Term and Termination
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Term
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  This Agreement will apply for as long as you participate in the Affiliate Program, until terminated.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Termination Without Cause
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Both you and we may terminate this Agreement on fifteen (15) days written notice to the other party.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Termination for Agreement Changes
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If we update or replace the terms of this Agreement, you may terminate this Agreement on five (5) days written notice to us, provided that you send us written notice within ten (10) days after we send you notice of the change.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Termination for Cause
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We may terminate this Agreement and/or suspend your or the End User&apos;s access to the Intempt Products: (i) upon thirty (30) days&apos; notice to you of a material breach if such breach remains uncured at the expiration of such period, (ii) automatically, within thirty (30) days of you failing to meet the Program requirements applicable to you in your capacity as a Partner; (iii) upon fifteen (15) days notice to you of non-payment of any amount due to us if such amount remains unpaid at the expiration of such period, (iv) immediately, if you become the subject of a petition in bankruptcy or any other proceeding relating to insolvency, receivership, liquidation or assignment for the benefit of creditors, (v) immediately, if you or your End User(s) breach the Customer Terms of Service, including if you default on your payment obligations to us or our Affiliate, or violate any applicable local, state, federal, or foreign laws or regulations, (vi) immediately, if you breach your confidentiality obligations under this Agreement or infringe or misappropriate Intempt&apos;s intellectual property rights, or (vii) immediately, if we determine that you are acting, or have acted, in a way that has or may negatively reflect on or affect us, our prospects, or our customers.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Effects of Expiration/Termination
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Expiration of this Agreement, and termination of this Agreement: (i) without cause by us,(ii) by you with cause, (iii) by you according to the &apos;Termination for Agreement Changes&apos; section, shall not affect our obligation to pay you a Commission, so long as the related payment by the Customer Transaction is recognized by us within thirty (30) days after the date of such termination or expiration and provided that in no event shall you be entitled to payment of Commission under this Agreement if you are eligible to receive a revenue share payment under the Sales Partner Program Agreement. We will not pay you fees on Customer Transactions recognized by us after thirty (30) days after the date of such termination or expiration set out above. Provided however, in the event of termination without cause by you, or for cause by us, our obligation to pay and your right to receive any Commission will terminate upon the date of such termination, regardless of whether you would have otherwise been eligible to receive Commission prior to the date of termination. Except as expressly set forth in this section, you are not eligible to receive a Commission payment after expiration or termination of this Agreement. Upon termination or expiration, you will discontinue all use of and delete the Affiliate Tool that we make available to you for your participation in the Affiliate Program. Upon termination or expiration, an Affiliate Lead is not considered valid, and we may choose to maintain it in our database and engage with such a prospect. Upon termination or expiration, you will immediately discontinue all use of our trademark and references to this Affiliate Program from your website(s) and other collateral. For the avoidance of doubt, termination or expiration of this Agreement shall not cause a Customer&apos;s subscription agreement to be terminated.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Affiliate Representations and Warranties
                </h2>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You represent and warrant that: (i) you have all sufficient rights and permissions to participate in the Affiliate Program and to provision Intempt with Affiliate Leads for our use in sales and marketing efforts or as otherwise set forth in this Agreement, (ii) your participation in this Affiliate Program will not conflict with any of your existing agreements or arrangements; and (iii) you own or have sufficient rights to use and to grant to us our right to use the Affiliate Marks.
                </p>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You further represent and warrant that: (i) you will ensure that you are compliant with any trade or regulatory requirements that may apply to your participation in the Affiliate Program (for example, by clearly stating you are an Intempt Affiliate on any website(s) you own where you make an Affiliate Link available); (ii) you will accurately provide in the Affiliate Tool all websites and domains you own where you intend to use Affiliate Links to generate Affiliate Leads; (iii) you will not purchase ads that direct to your site(s) or through an Affiliate Link that could be considered as competing with Intempt&apos;s own advertising, including, but not limited to, our branded keywords; (iv) you will not participate in cookie stuffing or pop-ups, false or misleading links are strictly prohibited; (v) you will not attempt to mask the referring URL information; (vi) you will not use your own Affiliate Link to purchase Intempt products for yourself; and (vii) you will not use any mechanisms to deliver leads other than through an intended consumer. This includes sourcing leads through compilations of personal data such as phonebooks, using fake redirects or other tools or automation devices to generate leads (including but not limited to robots, lframes, or hidden frames), or offering incentives to encourage purchases or signups.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Indemnification
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  You will indemnify, defend and hold us harmless, at your expense, against any third-party claim, suit, action, or proceeding (each, an &quot;Action&quot;) brought against us (and our officers, directors, employees, agents, service providers, licensors, and affiliates) by a third party not affiliated with us to the extent that such Action is based upon or arises out of (a) your participation in the Affiliate Program, (b) our use of the prospect data you provided us, (c) your noncompliance with or breach of this Agreement, (d) your use of the Affiliate Tool, or (e) our use of the Affiliate Marks. We will: notify you in writing within thirty (30) days of our becoming aware of any such claim; give you sole control of the defense or settlement of such a claim; and provide you (at your expense) with any and all information and assistance reasonably requested by you to handle the defense or settlement of the claim. You shall not accept any settlement that (i) imposes an obligation on us; (ii) requires us to make an admission; or (iii) imposes liability not covered by these indemnifications or places restrictions on us without our prior written consent.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Disclaimers; Limitations of Liability
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Disclaimer of Warranties
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  <strong>WE AND OUR AFFILIATED COMPANIES AND AGENTS MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, SECURITY OR ACCURACY OF THE INTEMPT PRODUCTS, INTEMPT CONTENT, THE AFFILIATE PROGRAM OR THE AFFILIATE TOOL FOR ANY PURPOSE. APPLICATION PROGRAMMING INTERFACES (APIs) AND THE AFFILIATE TOOL MAY NOT BE AVAILABLE AT ALL TIMES. TO THE EXTENT PERMITTED BY LAW, THE INTEMPT PRODUCTS AND AFFILIATE TOOL ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OR CONDITION OF ANY KIND. WE DISCLAIM ALL WARRANTIES AND CONDITIONS OF ANY KIND WITH REGARD TO THE INTEMPT PRODUCTS AND THE AFFILIATE TOOL INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.</strong>
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  No Indirect Damages
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  <strong>TO THE EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS OR BUSINESS OPPORTUNITIES.</strong>
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Limitation of Liability
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  <strong>IF, NOTWITHSTANDING THE OTHER TERMS OF THIS AGREEMENT, WE ARE DETERMINED TO HAVE ANY LIABILITY TO YOU OR ANY THIRD PARTY, THE PARTIES AGREE THAT OUR AGGREGATE LIABILITY WILL BE LIMITED TO THE TOTAL COMMISSION AMOUNTS YOU HAVE ACTUALLY EARNED FOR THE RELATED CUSTOMER TRANSACTIONS IN THE TWELVE MONTH PERIOD PRECEDING THE EVENT GIVING RISE TO A CLAIM.</strong>
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Affiliate Tool
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  <strong>WE DISCLAIM ALL LIABILITY WITH RESPECT TO THE AFFILIATE TOOL THAT YOU USE. WE DO NOT PROMISE TO MAKE THE AFFILIATE TOOL AVAILABLE TO YOU, AND WE MAY CHOOSE TO DO SO, OR NOT TO DO SO, IN OUR DISCRETION.</strong>
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Cookie Duration
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  <strong>COOKIES USED AS PART OF THE AFFILIATE TOOL HAVE A 60-DAY DURATION. IF A POTENTIAL CUSTOMER CLEARS THEIR COOKIES DURING THIS PERIOD, INTEMPT SHALL NOT BE LIABLE FOR ANY COMMISSIONS THAT MAY HAVE BEEN OWED TO YOU.</strong>
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  General
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Amendment; No Waiver
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We may update and change any part or all of this Agreement, including by replacing it in its entirety. If we update or change this Agreement, the updated Agreement will be made available to you via the Affiliate Tool and/or by email. The updated Agreement will become effective and binding on the next business day after we or the Affiliate Tool have notified you. When we change this Agreement, the &quot;Last Modified&quot; date above will be updated to reflect the date of the most recent version at <a href="https://www.intempt.com/affiliate-program-agreement" className="text-[#0382ff] hover:underline">https://www.intempt.com/affiliate-program-agreement</a>. We encourage you to review this Agreement periodically. If you don&apos;t agree to the update, change or replacement, you can choose to terminate as we describe above. No delay in exercising any right or remedy or failure to object will be a waiver of such right or remedy or any other right or remedy. A waiver on one occasion will not be a waiver of any right or remedy on any future occasion.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Applicable Law
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  This Agreement shall be governed by the laws of state of Texas, without regard to the conflict of laws provisions thereof. In the event either of us initiates an action in connection with this Agreement or any other dispute between the parties, the exclusive venue and jurisdiction of such action shall be in the state and federal courts in Austin, Texas.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Force Majeure
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Neither party will be responsible for failure or delay of performance if caused by: an act of war, hostility, or sabotage; act of God; electrical, internet, or telecommunication outage that is not caused by the obligated party; government restrictions; or other event outside the reasonable control of the obligated party. Each party will use reasonable efforts to mitigate the effect of a force majeure event.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Actions Permitted
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Except for actions for nonpayment or breach of a party&apos;s proprietary rights, no action, regardless of form, arising out of or relating to this Agreement may be brought by either party more than one (1) year after the cause of action has accrued.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Relationship of the Parties
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Both you and we agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of this Agreement.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Compliance with Applicable Laws
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You shall comply, and shall ensure that any third parties performing sales or referral activities on your behalf comply with all applicable foreign and domestic laws (including without limitation export laws and laws applicable to sending of unsolicited email), governmental regulations, ordinances, and judicial administrative orders. You shall not engage in any deceptive, misleading, illegal or unethical marketing activities, or activities that otherwise may be detrimental to us, our customers, or to the public. Export laws and regulations of the United States and any other relevant local export laws and regulations may apply to the Intempt Products. You will comply with the sanctions programs administered by the Office of Foreign Assets Control (OFAC) of the US Department of the Treasury. You will not directly or indirectly export, re-export, or transfer the Intempt Products to prohibited countries or individuals or permit use of the Intempt Products by prohibited countries or individuals.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Severability
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  If any part of this Agreement is determined to be invalid or unenforceable by applicable law, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of this Agreement will continue in effect.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Notices
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Notice will be sent to the contact address set forth herein (as such may be changed by notice given to the other party), and will be deemed delivered as of the date of actual receipt. To Intempt Technologies, LLC.: Austin, Texas 1101 W 34th St, #595 Austin, TX 78705. To you: your address as provided in our affiliate account information for you.
                </p>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We may give electronic notices specific to you by email to your e-mail address(es) on record in our account information for you. We may give notice to you by telephone calls to the telephone numbers on record in our account information for you.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Entire Agreement
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  This Agreement is the entire agreement between us for the Affiliate Program and supersedes all other proposals and agreements, whether electronic, oral or written, between us. We object to and reject any additional or different terms proposed by you, including those contained in your purchase order, acceptance or website. Our obligations are not contingent on the delivery of any future functionality or features of the Intempt Products or dependent on any oral or written public comments made by us regarding future functionality or features of the Intempt Products. It is the express wish of both you and us that this Agreement and all related documents be drawn up in English. We might make versions of this Agreement available in languages other than English. If we do, the English version of this Agreement will govern our relationship and the translated version is provided for convenience only and will not be interpreted to modify the English version of this Agreement.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Assignment
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  You will not assign or transfer this Agreement, including any assignment or transfer by reason of merger, reorganization, sale of all or substantially all of its assets, change of control or operation of law, without our prior written consent. We may assign this Agreement to any affiliate or in the event of merger, reorganization, sale of all or substantially all of our assets, change of control or operation of law.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  No Third Party Beneficiaries
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Nothing in this Agreement, express or implied, is intended to or shall confer upon any person or entity (other than the parties hereto) any right, benefit or remedy of any nature whatsoever under or by reason of this Agreement.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  No Licenses
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  We grant to you only the rights and licenses expressly stated in this Agreement, and you receive no other rights or licenses with respect to us, Intempt Products, our trademarks, or any other property or right of ours.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Sales by Intempt
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  This Agreement shall in no way limit our right to sell the Intempt Products, directly or indirectly, to any current or prospective customers.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Authority
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  Each party represents and warrants to the other that it has full power and authority to enter into this Agreement and that it is binding upon such party and enforceable in accordance with its terms.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Survival
                </h3>

                <p className="mb-6 text-base font-normal leading-7 text-black">
                  The following sections shall survive the expiration or termination of this Agreement: &apos;Commission and Payment&apos;, &apos;Proprietary Rights&apos;, &apos;Confidentiality&apos;, &apos;Effects of Termination/Expiration&apos;, &apos;Indemnification&apos;, &apos;Disclaimers; Limitation of Liability&apos;, &apos;Non-Solicitation&apos; and &apos;General&apos;.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-black">
                  Data Processing and Protection
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  The parties acknowledge that in connection with the Affiliate Program, each party may provide or make available to the other party Personal Data. To the extent that any Personal Data is processed in connection with the Project the terms set forth in the Intempt Business Partner Data Processing Agreement (posted at: <a href="https://www.intempt.com/dpa" className="text-[#0382ff] hover:underline">https://www.intempt.com/dpa</a>), which are hereby incorporated by reference, shall apply. Each party shall process the copy of the Personal Data in its possession or control: (i) in accordance with the Intempt Business Partner DPA (ii) as an independent controller (not as a joint controller with the other party) (iii) for the purposes described in this Agreement; and/or (iv) as may otherwise be permitted under Applicable Data Protection Law. For the avoidance of doubt and without prejudice to the foregoing, Intempt shall be an independent controller of any Personal Data that it receives or shares with Affiliate.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  APPENDIX 1 - Revenue Share
                </h2>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-black/20">
                    <thead>
                      <tr className="bg-black/5">
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Tier</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Closed MRR (monthly recurring revenue in previous qtr)</th>
                        <th className="border border-black/20 px-4 py-3 text-left text-base font-semibold text-black">Affiliate Commission</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Bronze</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">$0–$9,999 MRR</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">10%</td>
                      </tr>
                      <tr className="bg-white/50">
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Silver</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">$10,000–$99,999 MRR</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">15%</td>
                      </tr>
                      <tr>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">Gold</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">$100,000+ MRR</td>
                        <td className="border border-black/20 px-4 py-3 text-base font-normal text-black">20%</td>
                      </tr>
                    </tbody>
                  </table>
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

