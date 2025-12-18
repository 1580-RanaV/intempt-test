import { Container } from "./Container";
import Image from "next/image";

export function Footer({
  brand,
  contact,
  columns,
}: {
  brand: string;
  contact: {
    title: string;
    locations: ReadonlyArray<{
      region: string;
      lines: ReadonlyArray<string>;
    }>;
  };
  columns: ReadonlyArray<{
    title: string;
    links: ReadonlyArray<string>;
  }>;
}) {
  return (
    <footer className="border-t border-black/10 bg-[#fffff3]">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Intempt logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded-md"
              />
              <div className="text-base font-semibold text-zinc-900">
                {brand}
              </div>
            </div>
            <div className="mt-6 text-sm font-medium text-zinc-900">
              {contact.title}
            </div>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {contact.locations.map((loc) => (
                <div key={loc.region} className="text-sm text-zinc-600">
                  <div className="font-medium text-zinc-900">{loc.region}</div>
                  <div className="mt-2 space-y-1">
                    {loc.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-sm font-medium text-zinc-900">
                  {col.title}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                  {col.links.map((link) => {
                    let href = "#";
                    
                    // Map links to their corresponding routes
                    const linkMap: Record<string, string> = {
                      // GrowthOS™
                      "Sales CRM": "/sales-crm",
                      "Experiment": "/experiment",
                      "Personalization": "/personalization",
                      "Recommendations": "/recommendations",
                      "Journeys": "/journeys",
                      "Analytics": "/analytics",
                      "Agents": "/agents",
                      "Blu: AI Co-Marketer": "/blu-ai",
                      "Privacy": "/privacy",
                      "Pricing": "/pricing",
                      // Solutions
                      "Sales Teams": "/sales-teams",
                      "Agentic CRM": "/agentic-crm",
                      "LTV eCommerce": "/ltv-ecommerce",
                      "AOV eCommerce": "/aov-ecommerce",
                      "Analytics PLG SaaS": "/analytics-plg-saas",
                      "Analytics eCommerce": "/analytics-ecommerce",
                      "CRO eCommerce": "/cro-ecommerce",
                      // Learn
                      "Growth Plays": "/growthplays",
                      "Blog": "/blog",
                      "Product Tour": "/product-tour",
                      "Help & Support": "https://help.intempt.com",
                      "Help and Support": "https://help.intempt.com",
                      // Partners
                      "Affiliates": "/affiliates",
                      "Agencies": "/agencies",
                    };
                    
                    href = linkMap[link] || href;
                    
                    return (
                    <li key={link}>
                      <a
                          href={href}
                        className="transition-colors hover:text-zinc-900"
                          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link}
                      </a>
                    </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/10 pt-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {brand}</div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>System status</span>
            </div>
            <a href="#" className="transition-colors hover:text-zinc-900">
              Terms of service
            </a>
            <a href="/privacy" className="transition-colors hover:text-zinc-900">
              Privacy policy
            </a>
            <a href="#" className="transition-colors hover:text-zinc-900">
              SLA
            </a>
            <a href="#" className="transition-colors hover:text-zinc-900">
              DPA
            </a>
            <a href="#" className="transition-colors hover:text-zinc-900">
              SubProcessors
            </a>
            <a href="#" className="transition-colors hover:text-zinc-900">
              AUP
            </a>
            <a href="#" className="transition-colors hover:text-zinc-900">
              Security
            </a>
            <a href="#" className="transition-colors hover:text-zinc-900">
              Trust portal
            </a>
            <a href="/affiliates" className="transition-colors hover:text-zinc-900">
              Affiliate terms
            </a>
            <a href="/agencies" className="transition-colors hover:text-zinc-900">
              Agency terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
