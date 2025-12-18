import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

export default function SLAPage() {
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
                Service Level Agreement
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                Last Updated: October 10, 2025
              </p>
            </div>
          </Container>
        </section>

        {/* SLA Content */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="mb-8 text-base leading-7 text-black/80">
                  This Intempt Service Level Agreement (&quot;SLA&quot;) is between Intempt Technologies LLC (&quot;Intempt,&quot; &quot;we,&quot; &quot;us&quot;) and the customer or authorized user of the Intempt Services (&quot;you&quot;). This SLA governs availability of the Services and is subject to the Master Subscription Agreement (the &quot;Agreement&quot;). If there is a conflict between this SLA and the Agreement, the Agreement controls unless it expressly states otherwise.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  1. Service Commitment
                </h2>

                <p className="mb-6 text-base leading-7 text-black/80">
                  Intempt will use commercially reasonable efforts to make the Covered Services available with a Monthly Uptime Percentage of at least 99.9% during each monthly billing cycle (the &quot;Service Commitment&quot;).
                </p>

                <p className="mb-8 text-base leading-7 text-black/80">
                  Subject to the SLA Exclusions in Section 6, if Intempt does not meet the Service Commitment for a Covered Service, you may be eligible to receive a Service Credit under Section 3.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  2. Definitions
                </h2>

                <div className="mb-8 space-y-4 text-base leading-7 text-black/80">
                  <p>
                    <strong>&quot;Covered Service&quot;</strong> means the following components of the Services, as applicable to your subscription:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Customer Data Platform (CRM)</li>
                    <li>Journeys</li>
                    <li>Analytics</li>
                    <li>Experiences</li>
                    <li>Recommendations</li>
                    <li>App (app.intempt.com)</li>
                  </ul>
                  <p>
                    <strong>&quot;Maintenance&quot;</strong> means scheduled Unavailability of the Services that Intempt announces in advance.
                  </p>
                  <p>
                    <strong>&quot;Monthly Uptime Percentage&quot;</strong> is calculated for each Covered Service as:
                  </p>
                  <p className="ml-4 font-mono text-sm">
                    100% − (Unavailable Minutes / Total Minutes in the month × 100%)
                  </p>
                  <p>
                    Monthly Uptime Percentage excludes downtime resulting from any SLA Exclusion.
                  </p>
                  <p>
                    <strong>&quot;Unavailable&quot; / &quot;Unavailability&quot;</strong> means that the Covered Service is not running or not reachable due to Intempt&apos;s fault. Unavailability does not include: (a) containers that are unreachable or not running because the container&apos;s provisioned resources (RAM, CPU, disk, as applicable) are insufficient; or (b) individual members of a database cluster where the cluster as a whole is running and reachable.
                  </p>
                  <p>
                    <strong>&quot;Service Credit&quot;</strong> means a credit denominated in U.S. dollars, calculated under Section 3.
                  </p>
                </div>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  3. Service Credits
                </h2>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.1 Credit Schedule
                </h3>

                <p className="mb-6 text-base leading-7 text-black/80">
                  If Intempt fails to meet the Service Commitment for a Covered Service, you will be eligible for a Service Credit calculated as a percentage of the monthly subscription fees attributable to the affected Covered Service(s), according to the following schedule:
                </p>

                <div className="mb-8 overflow-x-auto">
                  <table className="min-w-full border border-black/10">
                    <thead className="bg-black/5">
                      <tr>
                        <th className="border-b border-black/10 px-4 py-3 text-left text-sm font-semibold text-black">
                          Monthly Uptime Percentage (per Covered Service)
                        </th>
                        <th className="border-b border-black/10 px-4 py-3 text-left text-sm font-semibold text-black">
                          Service Credit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-black/10 px-4 py-3 text-sm text-black/80">
                          &lt; 99.9% and ≥ 99.0%
                        </td>
                        <td className="border-b border-black/10 px-4 py-3 text-sm text-black/80">
                          10%
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-black/10 px-4 py-3 text-sm text-black/80">
                          &lt; 99.0% and ≥ 95.0%
                        </td>
                        <td className="border-b border-black/10 px-4 py-3 text-sm text-black/80">
                          25%
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-black/10 px-4 py-3 text-sm text-black/80">
                          &lt; 95.0%
                        </td>
                        <td className="border-b border-black/10 px-4 py-3 text-sm text-black/80">
                          50%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.2 Application; No Refunds
                </h3>

                <p className="mb-8 text-base leading-7 text-black/80">
                  Service Credits will be applied only against future payments due for the Services. At Intempt&apos;s discretion, Intempt may instead issue the Service Credit to the payment method used for the billing cycle in which the Unavailability occurred. Service Credits are not refunds and do not entitle you to any other payment.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  3.3 Minimum Threshold; Cap
                </h3>

                <p className="mb-6 text-base leading-7 text-black/80">
                  A Service Credit will be issued only if the total credit amount for the applicable monthly billing cycle is at least US$10. Service Credits may not be transferred or applied to any other account.
                </p>

                <p className="mb-8 text-base leading-7 text-black/80">
                  Total Service Credits issued in a single monthly billing cycle will not exceed 50% of the monthly subscription fees for the affected Covered Service(s).
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  4. Sole Remedy
                </h2>

                <p className="mb-8 text-base leading-7 text-black/80">
                  Except as expressly provided in the Agreement, your sole and exclusive remedy for any Unavailability, non-performance, or other failure by Intempt to provide the Services is the receipt of a Service Credit (if eligible) in accordance with this SLA.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  5. Credit Request Procedure
                </h2>

                <p className="mb-6 text-base leading-7 text-black/80">
                  To receive a Service Credit, you must submit a claim by emailing <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a>.
                </p>

                <p className="mb-6 text-base leading-7 text-black/80">
                  To be eligible, the request must be received by Intempt no later than the end of the second billing cycle after the incident occurred and must include:
                </p>

                <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-7 text-black/80">
                  <li>the words &quot;SLA Credit Request&quot; in the subject line;</li>
                  <li>the dates and times of each claimed Unavailability incident;</li>
                  <li>the applicable account handle(s); and</li>
                  <li>logs or other evidence documenting the errors and corroborating the claimed outage (remove or mask confidential or sensitive information).</li>
                </ul>

                <p className="mb-8 text-base leading-7 text-black/80">
                  If Intempt confirms the Monthly Uptime Percentage was below the Service Commitment, Intempt will issue the Service Credit within one billing cycle following the month in which the claim is confirmed. Failure to provide the required information may disqualify the request.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  6. SLA Exclusions
                </h2>

                <p className="mb-6 text-base leading-7 text-black/80">
                  The Service Commitment does not apply to any Unavailability that:
                </p>

                <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-7 text-black/80">
                  <li>results from a suspension or remedial action under the Agreement;</li>
                  <li>is caused by factors outside Intempt&apos;s reasonable control (including force majeure events, internet access issues, or problems beyond the demarcation point of the Intempt network);</li>
                  <li>results from actions or inactions of you or any third party;</li>
                  <li>results from your or any third party&apos;s equipment, software, or other technology (other than third-party equipment within Intempt&apos;s direct control);</li>
                  <li>results from failures not attributable to Unavailability; or</li>
                  <li>results from Maintenance.</li>
                </ul>

                <p className="mb-8 text-base leading-7 text-black/80">
                  If availability is impacted by factors other than those used in the Monthly Uptime Percentage calculation, Intempt may, at its discretion, issue a Service Credit considering such factors.
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

