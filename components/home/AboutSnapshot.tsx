"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSnapshot() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <SectionHeading
            badge="About ADON"
            title="Leading the Transition to Sustainable Energy"
            centered
            className="mb-8"
          />
          <p className="text-lg md:text-xl text-steel-600 leading-relaxed mb-10">
            ADON Green Energy is an engineering and technology-driven company focused on the development of Compressed Biogas (CBG) and biogas projects in India. We specialize in end-to-end EPC services—from plant design and equipment supply to installation and technical support—fully aligned with India's SATAT Scheme.
          </p>
          <Button href="/about" variant="primary" size="lg" showArrow>
            Learn More About Us
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
