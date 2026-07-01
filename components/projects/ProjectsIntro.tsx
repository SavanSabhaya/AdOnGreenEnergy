"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectsIntro() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            badge="EPC Track Record"
            title="Building India's CBG Infrastructure"
            centered
            className="mb-6"
          />
          <p className="text-lg text-steel-600 leading-relaxed">
            With a growing pipeline of high-capacity Compressed Biogas plants across multiple states, ADON Green Energy is actively delivering end-to-end EPC solutions. Our active projects demonstrate our capability to handle diverse feedstocks—from mixed municipal waste to agricultural residue like Napier grass—while ensuring maximum biomethane yield.
          </p>
        </div>
      </Container>
    </section>
  );
}
