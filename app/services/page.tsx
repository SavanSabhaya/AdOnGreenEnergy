import ServicesIntro from "@/components/services/ServicesIntro";
import WhatIsCBG from "@/components/services/WhatIsCBG";
import ServiceAccordion from "@/components/services/ServiceAccordion";
import ComparisonTable from "@/components/services/ComparisonTable";
import BenefitsOfCBG from "@/components/services/BenefitsOfCBG";
import BrochureCTA from "@/components/services/BrochureCTA";

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-20 lg:py-28 bg-forest-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight mb-6">
            Our <span className="text-amber-400">Services</span>
          </h1>
          <p className="text-lg text-forest-200 max-w-2xl mx-auto">
            End-to-end EPC solutions for the Compressed Biogas (CBG) industry.
          </p>
        </div>
      </section>

      <WhatIsCBG />
      <ServicesIntro />
      <ServiceAccordion />
      <ComparisonTable />
      <BenefitsOfCBG />
      <BrochureCTA />
    </>
  );
}
