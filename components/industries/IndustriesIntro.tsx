"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function IndustriesIntro() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            badge="Versatile Solutions"
            title="Converting Diverse Organic Waste to Wealth"
            centered
            className="mb-6"
          />
          <p className="text-lg text-steel-600 leading-relaxed">
            Our CBG plant designs are engineered to handle a wide variety of organic feedstocks. By tailoring our pre-treatment and digestion processes, we ensure maximum biomethane yield regardless of the industry source.
          </p>
        </div>
      </Container>
    </section>
  );
}
