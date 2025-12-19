import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

export default function SecurityPage() {
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
                Security
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                Security
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                Security and customer privacy is a top priority at Intempt.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-black/70">
                All employees complete mandatory security training and follow secure data handling best practices.
              </p>
            </div>
          </Container>
        </section>

        {/* Security Content */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Enterprise grade security
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt safeguards customer data using a comprehensive set of technical, operational, and organizational controls, including:
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Encryption & data protection
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Application data is secured in transit using TLS and encrypted at rest with industry-standard AES-256 encryption.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Logical data isolation & access control
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Customer data is logically separated, and access is enforced through strong authentication and role-based access control (RBAC) with least-privilege principles.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Backups & resilience
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Automated encrypted backups and tested restoration procedures help ensure data durability and support recovery if needed.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Monitoring & observability
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Security logging, uptime monitoring, and system availability metrics are collected and reviewed to help detect and respond to issues quickly.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Secure software practices
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Our secure software development lifecycle (SDLC) includes security design reviews, dependency scanning, and infrastructure hardening. We leverage the OWASP Top Ten as one of many inputs into our platform security program.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Independent testing & risk assessment
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Regular penetration testing by external security experts and routine impact and risk assessments help us identify and reduce vulnerabilities.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-black">
                  Incident response
                </h3>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt maintains a formal incident response process, with defined escalation, containment, and remediation practices to handle security events effectively.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  Engineering roadmap
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  We actively enhance our security program, including work toward formal SOC 2 Type II compliance. While multi-factor authentication (MFA/2FA) and single sign-on (SSO) capabilities are planned future enhancements, we continually improve our controls and services to meet enterprise needs.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  European Union&apos;s General Data Protection Regulation (GDPR)
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  Intempt is committed to complying with the GDPR so that our customers and their end users retain appropriate protections and rights under this regulation. Customers can submit requests for data deletion or export, and configure data retention policies as needed.
                </p>

                <h2 className="mt-12 mb-6 text-2xl font-semibold text-black">
                  General security questions
                </h2>

                <p className="mb-8 text-base font-normal leading-7 text-black">
                  If you have any security questions or concerns, please contact us at <a href="mailto:hey@intempt.com" className="text-[#0382ff] hover:underline">hey@intempt.com</a>.
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

