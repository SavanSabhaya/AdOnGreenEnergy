"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Timeline() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Our History"
          title="Milestones"
          centered
          className="mb-12"
        />
        
        {/* Placeholder state */}
        <div className="bg-amber-50 border-2 border-dashed border-amber-300 rounded-2xl p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-amber-800 font-bold text-xl mb-2">Content pending client input</h3>
          <p className="text-amber-700">Timeline milestones to be added upon receipt of company history details.</p>
        </div>
      </Container>
    </section>
  );
}
