"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPin } from "lucide-react";

export default function Locations() {
  return (
    <section className="py-24 bg-forest-900 text-white">
      <Container>
        <SectionHeading
          badge="Global Presence"
          title="Our Facilities"
          centered
          light
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-forest-800/50 p-8 rounded-2xl border border-forest-700 backdrop-blur-sm flex items-start gap-4">
            <MapPin className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-xl font-bold mb-2">Ahmedabad, Gujarat</h3>
              <p className="text-forest-200 mb-2">Head Office</p>
              <div className="bg-forest-950 text-forest-300 text-xs px-2 py-1 rounded inline-block font-semibold">Address pending client confirmation</div>
            </div>
          </div>
          
          <div className="bg-forest-800/50 p-8 rounded-2xl border border-forest-700 backdrop-blur-sm flex items-start gap-4">
            <MapPin className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-xl font-bold mb-2">Manufacturing Unit</h3>
              <p className="text-forest-200 mb-2">State-of-the-art fabrication</p>
              <div className="bg-forest-950 text-forest-300 text-xs px-2 py-1 rounded inline-block font-semibold">Address pending client confirmation</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
