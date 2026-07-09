"use client";

import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function TrustStrip() {
  return (
    <section className="bg-forest-900 text-white border-y border-forest-800/50 py-12 relative z-20 -mt-8 shadow-elevated rounded-t-3xl md:rounded-t-none md:-mt-12 mx-4 md:mx-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-forest-700/50">
          <div className="text-center px-4 pt-4 md:pt-0">
            <AnimatedCounter end={11} suffix="+" label="Plant Capacities Offered (0.5–15 TPD)" className="text-amber-400" />
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <AnimatedCounter end={4} label="Active Projects (UK, WB, MP, UP)" className="text-amber-400" />
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <AnimatedCounter end={96} prefix="≥" suffix="%" label="Bio-CNG Purity" className="text-amber-400" />
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <AnimatedCounter end={30} label="Month ROI Target" className="text-amber-400" />
          </div>
        </div>
      </Container>
    </section>
  );
}
