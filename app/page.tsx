import { siteContent } from "./content/siteContent";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { BluSection } from "./sections/BluSection";
import { GrowSection } from "./sections/GrowSection";
import { PlatformSection } from "./sections/PlatformSection";
import { ScaleSection } from "./sections/ScaleSection";
import { ProblemRolesSection } from "./sections/ProblemRolesSection";
import { FinalSection } from "./sections/FinalSection";

export default function Home() {
  return (
    <div className="bg-[#fffff3] text-black">
      <HeaderSection
        brand={siteContent.brand}
        navItems={siteContent.nav.items}
        actions={siteContent.nav.actions}
      />
      <main>
        <HeroSection hero={siteContent.hero} />
        <BluSection blu={siteContent.blu} />
        {/* <GrowSection grow={siteContent.grow} /> */}
        <PlatformSection platform={siteContent.platform} />
        <ScaleSection
          proof={siteContent.proof}
          integrations={siteContent.integrations}
        />
        <ProblemRolesSection why={siteContent.why} roles={siteContent.roles} />
        <FinalSection
          brand={siteContent.brand}
          finalCtas={siteContent.finalCtas}
          footer={siteContent.footer}
        />
      </main>
    </div>
  );
}
