"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function SubsidyCTA() {
  return (
    <section className="py-20 bg-forest-900 text-white text-center border-t border-forest-800">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-4">Not sure which subsidy applies to your project?</h2>
          <p className="text-forest-200 text-lg mb-8">
            Every project is unique. Let our experts evaluate your feedstock, capacity, and location to build a customized financial and technical roadmap.
          </p>
          <Button href="/contact" variant="accent" size="lg" showArrow>
            Talk to Our Team
          </Button>
        </div>
      </Container>
    </section>
  );
}
