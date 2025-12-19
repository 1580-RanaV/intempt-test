import { siteContent } from "./content/siteContent";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { AskBluSection } from "./sections/AskBluSection";
import { DoSection } from "./sections/DoSection";
import { ProblemSection } from "./sections/ProblemSection";
import { FixSection } from "./sections/FixSection";
import { PlatformSection } from "./sections/PlatformSection";
import { CredibilitySection } from "./sections/CredibilitySection";
import { IntegrationsSection } from "./sections/IntegrationsSection";
import { FinalSection } from "./sections/FinalSection";

export default function Home() {
  return (
    <div className="bg-[white] text-black">
      <HeaderSection
        brand={siteContent.brand}
        navItems={siteContent.nav.items}
        actions={siteContent.nav.actions}
      />
      <main>
        <HeroSection hero={siteContent.hero} />
        <AskBluSection blu={siteContent.blu} />
        <DoSection blu={siteContent.blu} />
        <ProblemSection why={siteContent.why} />
        <FixSection why={siteContent.why} />
        <PlatformSection platform={siteContent.platform} />
        <CredibilitySection proof={siteContent.proof} />
        <IntegrationsSection integrations={siteContent.integrations} />
        <FinalSection
          brand={siteContent.brand}
          finalCtas={siteContent.finalCtas}
          footer={siteContent.footer}
        />
      </main>
    </div>
  );
}
