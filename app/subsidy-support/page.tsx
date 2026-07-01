import SubsidyHero from "@/components/subsidy-support/SubsidyHero";
import SATATOverview from "@/components/subsidy-support/SATATOverview";
import MNRESubsidyBreakdown from "@/components/subsidy-support/MNRESubsidyBreakdown";
import AdditionalSupport from "@/components/subsidy-support/AdditionalSupport";
import SubsidyCTA from "@/components/subsidy-support/SubsidyCTA";

export default function SubsidySupportPage() {
  return (
    <>
      <SubsidyHero />
      <SATATOverview />
      <MNRESubsidyBreakdown />
      <AdditionalSupport />
      <SubsidyCTA />
    </>
  );
}
