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
              <h3 className="font-heading text-xl font-bold mb-2">Corporate Office</h3>
              <p className="text-forest-200 mb-2 leading-relaxed">B-608, Shalin Square,<br/>Near Hathijan Circle, Vatva<br/>Ahmedabad - 382445</p>
            </div>
          </div>
          
          <div className="bg-forest-800/50 p-8 rounded-2xl border border-forest-700 backdrop-blur-sm flex items-start gap-4">
            <MapPin className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-xl font-bold mb-2">Manufacturing Unit</h3>
              <p className="text-forest-200 mb-2 leading-relaxed">Plot No.53, RIDC, Rohisa Village Road,<br/>Mahemdabad, Ahmedabad - 387130</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
