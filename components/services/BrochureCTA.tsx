"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function BrochureCTA() {
  return (
    <section className="py-16 bg-forest-900 text-white text-center">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-4">Deep Dive into Our Technology</h2>
          <p className="text-forest-200 mb-8 text-lg">Download our comprehensive technical brochure to explore process flows, equipment specifications, and performance guarantees in detail.</p>
          
          {/* TODO: replace with actual client-approved PDF brochure */}
          <Button href="/brochure.pdf" variant="accent" size="lg" className="inline-flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Download Technical Brochure
          </Button>
          <div className="mt-4 text-xs text-forest-300 font-mono opacity-60">TODO: replace with actual client-approved PDF brochure</div>
        </div>
      </Container>
    </section>
  );
}
