"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Technology Comparison"
          title="Choosing the Right Solution"
          centered
          className="mb-16"
        />

        <div className="max-w-5xl mx-auto space-y-16">
          {/* RCC vs GFS Table */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-steel-900 mb-6 text-center">Digester Tank Options: RCC vs GFS</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-steel-200">
                <thead>
                  <tr className="bg-forest-900 text-white">
                    <th className="py-4 px-6 text-left font-semibold">Aspect</th>
                    <th className="py-4 px-6 text-left font-semibold border-l border-forest-800">RCC Tank (Reinforced Cement Concrete)</th>
                    <th className="py-4 px-6 text-left font-semibold border-l border-forest-800">GFS Tank (Glass Fused to Steel)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-200">
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">Material</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">M25–M35 concrete + steel reinforcement</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Steel panels coated with glass enamel (850°C fusion)</td>
                  </tr>
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">Construction Time</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">2–4 months (on-site civil work)</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">2–4 weeks (factory-made, bolted on site)</td>
                  </tr>
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">Life Span</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">25–40 years</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">20–30 years</td>
                  </tr>
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">Advantages</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Very strong, long lifespan, minimal maintenance, better thermal insulation, no corrosion issues, ideal for large capacity (5–50+ TPD).</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Fast installation, factory QC, corrosion resistant, modular/relocatable, smooth surface (less sludge).</td>
                  </tr>
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">Limitations</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Skilled civil work needed, crack risk, not relocatable.</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Higher initial cost, bolt sealing needed, less thermal insulation, sensitive to mechanical damage.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* VPSA vs Membrane Table */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-steel-900 mb-6 text-center">Purification Technology: VPSA vs Membrane</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-steel-200">
                <thead>
                  <tr className="bg-forest-900 text-white">
                    <th className="py-4 px-6 text-left font-semibold">Aspect</th>
                    <th className="py-4 px-6 text-left font-semibold border-l border-forest-800">VPSA (Vacuum Pressure Swing Adsorption)</th>
                    <th className="py-4 px-6 text-left font-semibold border-l border-forest-800">Membrane Separation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-200">
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">Purity Achieved</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">96–98%</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">95–98%</td>
                  </tr>
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">Methane Recovery</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">95–98%</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">90–96%</td>
                  </tr>
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">Installation Time</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Standard project timeline</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">2–4 weeks (Skid-mounted)</td>
                  </tr>
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">CAPEX</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Higher initial investment</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Lower CAPEX (ideal for small-medium plants)</td>
                  </tr>
                  <tr className="hover:bg-steel-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-steel-900">Maintenance</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Low (Adsorbent life 3-5 years)</td>
                    <td className="py-4 px-6 text-steel-700 border-l border-steel-200">Low, modular replacements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
