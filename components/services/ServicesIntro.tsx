"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesIntro() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            badge="EPC Solutions"
            title="End-to-End CBG Plant Value Chain"
            centered
            className="mb-6"
          />
          <p className="text-lg text-steel-600 leading-relaxed">
            ADON Equipments provides comprehensive Engineering, Procurement, and Construction (EPC) services. From initial design and technology selection to equipment supply, installation, and final commissioning, we deliver robust, high-performance CBG plants tailored to your specific feedstock and capacity requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
