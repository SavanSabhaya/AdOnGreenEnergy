"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { services, tankComparison } from "@/lib/data/services";
import { ChevronDown, Download, CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>(services[0].id);

  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[name];
    return IconComponent ? <IconComponent className="h-6 w-6 text-white" /> : null;
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-28 gradient-bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-white/10 text-forest-300 border border-white/10">Services & Expertise</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight max-w-3xl">
              Full-Spectrum CBG <span className="text-forest-400">Technology</span> Solutions
            </h1>
            <p className="mt-6 text-lg text-steel-300 max-w-2xl leading-relaxed">
              Every system, every component — engineered, procured, installed, and commissioned by one expert team.
            </p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Accordion */}
      <section className="py-section">
        <Container>
          <SectionHeading badge="Our Technologies" title="Detailed Service " highlight="Breakdown" subtitle="Click each service to explore technical specifications and capabilities." />

          <div className="max-w-4xl mx-auto space-y-4">
            {services.map((service) => {
              const isOpen = openService === service.id;
              return (
                <ScrollReveal key={service.id}>
                  <div id={service.id} className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-forest-200 shadow-card bg-white" : "border-steel-200 bg-white hover:border-forest-100"}`}>
                    {/* Header */}
                    <button
                      onClick={() => setOpenService(isOpen ? null : service.id)}
                      className="w-full flex items-center gap-4 p-6 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-forest-700 to-forest-500 shadow-md">
                        {getIcon(service.icon)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-h4 font-bold text-steel-900">{service.title}</h3>
                        <p className="text-body-sm text-steel-500 mt-1 line-clamp-1">{service.shortDescription}</p>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-steel-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-steel-100 pt-6">
                            <p className="text-body text-steel-600 leading-relaxed mb-6">{service.fullDescription}</p>

                            {/* Features */}
                            <div className="grid sm:grid-cols-2 gap-3 mb-6">
                              {service.features.map((feature) => (
                                <div key={feature} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-forest-500 mt-0.5 shrink-0" />
                                  <span className="text-body-sm text-steel-600">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Specifications */}
                            {service.specifications && (
                              <div className="bg-steel-50 rounded-xl p-4">
                                <h4 className="font-heading text-body-sm font-bold text-steel-800 mb-3 uppercase tracking-wider">Key Specifications</h4>
                                <div className="grid sm:grid-cols-2 gap-2">
                                  {Object.entries(service.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between text-body-sm">
                                      <span className="text-steel-500">{key}</span>
                                      <span className="font-semibold text-steel-800">{value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Tank Comparison Table */}
      <section className="py-section bg-steel-50/50">
        <Container>
          <SectionHeading badge="Comparison" title="RCC vs GFS " highlight="Tanks" subtitle="Choosing the right digester tank technology for your CBG plant." />
          <ScrollReveal>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-soft border border-steel-100">
                <thead>
                  <tr className="bg-forest-800 text-white">
                    {tankComparison.headers.map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-body-sm font-bold tracking-wider uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tankComparison.rows.map((row, i) => (
                    <tr key={i} className={`border-b border-steel-100 ${i % 2 === 0 ? "bg-white" : "bg-steel-50/50"}`}>
                      {row.map((cell, j) => (
                        <td key={j} className={`px-6 py-4 text-body-sm ${j === 0 ? "font-semibold text-steel-800" : "text-steel-600"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Brochure CTA */}
      <section className="py-section">
        <Container>
          <div className="bg-gradient-to-r from-forest-800 to-forest-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <Download className="h-12 w-12 mx-auto mb-4 text-forest-200" />
            <h2 className="font-heading text-h3 font-bold mb-3">Download Our Technical Brochure</h2>
            <p className="text-body text-forest-200 mb-6 max-w-lg mx-auto">Get detailed specifications, process diagrams, and case studies in our comprehensive CBG plant brochure.</p>
            <Button variant="accent" size="lg" icon={Download} href="/contact">
              Request Brochure
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
