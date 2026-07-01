"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ResourcesIntro() {
  return (
    <section className="py-20 bg-white border-b border-steel-100">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            badge="Knowledge Hub"
            title="Insights & Educational Resources"
            centered
            className="mb-6"
          />
          <p className="text-lg text-steel-600 leading-relaxed">
            Stay informed with the latest insights on Compressed Biogas (CBG) technology, government policies, and industry best practices. Our educational resources are designed to help project developers make informed decisions and successfully navigate the EPC landscape in India.
          </p>
        </div>
      </Container>
    </section>
  );
}
