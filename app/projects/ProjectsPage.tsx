"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projects, projectStats } from "@/lib/data/projects";
import { MapPin, Zap, Leaf, Filter } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const states = ["All", ...Array.from(new Set(projects.map((p) => p.state)))];

  const filtered = filter === "All" ? projects : projects.filter((p) => p.state === filter);

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-28 gradient-bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-white/10 text-forest-300 border border-white/10">Our Portfolio</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight max-w-3xl">
              Proven <span className="text-forest-400">CBG Plant</span> Deliveries
            </h1>
            <p className="mt-6 text-lg text-steel-300 max-w-2xl leading-relaxed">
              6+ plants commissioned across 3 states — each one a testament to our EPC capability and technical expertise.
            </p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-12 bg-steel-50 border-b border-steel-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={6} suffix="+" label="Plants Commissioned" className="text-forest-700" />
            <AnimatedCounter end={49} suffix="+" label="TPD Capacity" className="text-forest-700" />
            <AnimatedCounter end={3} label="States Served" className="text-amber-600" />
            <AnimatedCounter end={5} suffix="+" label="Feedstock Types" className="text-forest-700" />
          </div>
        </Container>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white sticky top-[72px] z-20 shadow-sm border-b border-steel-100">
        <Container>
          <div className="flex items-center gap-3 overflow-x-auto">
            <Filter className="h-4 w-4 text-steel-400 shrink-0" />
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setFilter(state)}
                className={`px-4 py-2 rounded-full text-body-sm font-medium whitespace-nowrap transition-colors ${
                  filter === state
                    ? "bg-forest-700 text-white"
                    : "bg-steel-100 text-steel-600 hover:bg-steel-200"
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-section">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                layout
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-steel-100"
              >
                {/* Top bar */}
                <div className={`h-2 ${
                  project.status === "Commissioned" ? "bg-gradient-to-r from-forest-600 to-forest-400" :
                  project.status === "Under Construction" ? "bg-gradient-to-r from-amber-500 to-amber-400" :
                  "bg-gradient-to-r from-steel-400 to-steel-300"
                }`} />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={project.status === "Commissioned" ? "success" : "warning"}>
                      {project.status}
                    </Badge>
                    <span className="text-caption font-semibold text-steel-400">{project.tpdCapacity}</span>
                  </div>

                  <h3 className="font-heading text-h4 font-bold text-steel-900 mb-2">{project.clientName}</h3>

                  <div className="space-y-2.5 text-body-sm text-steel-500 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-forest-500 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-forest-500 shrink-0" />
                      <span>{project.feedstockType}</span>
                    </div>
                  </div>

                  {project.description && (
                    <p className="text-body-sm text-steel-500 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  )}

                  {project.highlights && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((h) => (
                        <span key={h} className="px-2 py-0.5 rounded text-[0.625rem] font-medium bg-forest-50 text-forest-700 border border-forest-100">{h}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-steel-500 py-12">No projects found for the selected filter.</p>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section bg-forest-800 text-white text-center">
        <Container>
          <ScrollReveal>
            <h2 className="font-heading text-h2 font-bold mb-4">Want Your Plant on This Page?</h2>
            <p className="text-body-lg text-forest-200 mb-8 max-w-xl mx-auto">Let us help you build a CBG plant that delivers results. Start with a free consultation.</p>
            <Button href="/contact" variant="accent" size="lg" showArrow>
              Start Your Project
            </Button>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
