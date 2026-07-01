"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Lock } from "lucide-react";

export default function CaseStudyTemplate() {
  return (
    <section className="py-24 bg-white border-t border-steel-100">
      <Container>
        <SectionHeading
          badge="In-Depth Performance"
          title="Featured Case Study"
          centered
          className="mb-12"
        />

        <div className="relative bg-steel-50 border border-steel-200 rounded-2xl p-12 text-center max-w-4xl mx-auto overflow-hidden">
          {/* Blurred structural template content in the background */}
          <div className="opacity-20 blur-sm pointer-events-none select-none">
            <div className="grid md:grid-cols-3 gap-8 text-left mb-8">
              <div>
                <h4 className="font-bold text-steel-900">Capacity</h4>
                <p>12.0 TPD</p>
              </div>
              <div>
                <h4 className="font-bold text-steel-900">Feedstock</h4>
                <p>Press Mud</p>
              </div>
              <div>
                <h4 className="font-bold text-steel-900">Outcome</h4>
                <p>20% higher yield</p>
              </div>
            </div>
            <div className="h-64 bg-steel-300 rounded-xl w-full mb-8" />
            <p className="text-left text-lg">Detailed breakdown of engineering challenges, technology selection, and operational success...</p>
          </div>
          
          {/* Foreground overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 backdrop-blur-[2px]">
            <div className="bg-white p-6 rounded-2xl shadow-elevated border border-steel-100 max-w-md flex flex-col items-center">
              <div className="w-16 h-16 bg-forest-50 text-forest-600 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl font-bold text-steel-900 mb-2">Awaiting First Completed Case Study</h3>
              <p className="text-steel-600 text-sm">Template ready — awaiting comprehensive data and client approval from our first commissioned plant.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
