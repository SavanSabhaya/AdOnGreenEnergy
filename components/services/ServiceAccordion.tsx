"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Feedstock Handling & Pre-treatment",
    specs: [
      "Size reduction and shredding to 10-30mm uniform particles",
      "Impurity removal (stones, plastics, metals)",
      "Mixed with water/digestate to form slurry (8-12% total solids)",
      "Homogenized before feeding into digester",
    ]
  },
  {
    title: "CSTR Anaerobic Digestion",
    specs: [
      "Mesophilic 35-38°C or Thermophilic 50-55°C operation",
      "Hydraulic Retention Time: 20-30 days",
      "Organic Loading Rate: 2-6 kg VS/m³/day",
      "Completely mixed, continuous flow with mechanical agitation",
    ]
  },
  {
    title: "H2S Removal System",
    specs: [
      "Critical pre-treatment to reduce H2S below 10ppm",
      "Dry desulphurization via iron oxide (Fe2O3) or activated carbon",
      "Wet scrubbing via alkaline solutions (NaOH) for high-capacity plants",
      "Protects downstream compressors, pipelines, and adsorption media",
    ]
  },
  {
    title: "VPSA Purification (Vacuum Pressure Swing Adsorption)",
    specs: [
      "Achieves 96-98% biomethane purity",
      "PLC-controlled, 2-5 min cyclic operation",
      "No chemicals required, low OPEX (electricity only)",
      "Final gas dried to -40°C dew point, compressed to 200-250 bar",
    ]
  },
  {
    title: "Membrane Purification",
    specs: [
      "Achieves 95-98% purity via semi-permeable hollow fiber membranes",
      "8-16 bar continuous operation (no cycle switching)",
      "Compact/modular skid-mounted design",
      "Fast installation (2-4 weeks) with flexible operation",
    ]
  },
  {
    title: "Gas Compression & Bottling",
    specs: [
      "Multi-stage reciprocating compression (3-5 stages) up to 250 bar",
      "Intercoolers and moisture separators between stages",
      "Delivery to mobile cascade storage (low/medium/high pressure banks)",
      "Priority panel sequential filling for efficient distribution",
    ]
  },
  {
    title: "Pipeline Injection",
    specs: [
      "Direct injection into City Gas Distribution (CGD) network at 25-30 bar",
      "Requires ≥98% CH4 purity and H2S <10ppm",
      "Includes pressure regulation skid and custody transfer flow metering",
      "Odorization unit (THT) integrated",
    ]
  },
  {
    title: "Solid-Liquid Separator (SLS) & Bio-Fertilizer",
    specs: [
      "Screw press separation of digested slurry (8-12% TS)",
      "Produces solid organic manure (20-30% dry matter) rich in organic carbon",
      "Produces NPK-rich liquid fraction — N: 1.5–3%, P: 1–2%, K: 1–2%, pH: 6.5–7.5",
      "Liquid reusable for slurry dilution, fertigation, or irrigation — saves fresh water",
      "Applications: agriculture, organic farming, fertigation systems, land reclamation",
      "Reduces digestate handling cost by 30-50%, essential for plants > 5 TPD",
    ]
  }
];

export default function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-steel-50 border-t border-steel-100">
      <Container>
        <SectionHeading
          badge="Core Technologies"
          title="Technical Capabilities"
          centered
          className="mb-12"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-steel-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-forest-50 transition-colors"
              >
                <h3 className="font-heading text-lg font-bold text-steel-900">{service.title}</h3>
                <ChevronDown className={`w-5 h-5 text-forest-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 border-t border-steel-100">
                      <ul className="space-y-3 mt-4">
                        {service.specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                            <span className="text-steel-700 leading-relaxed">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
