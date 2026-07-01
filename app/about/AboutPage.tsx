"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { companyInfo, teamMembers, milestones } from "@/lib/data/team";
import { Target, Eye, MapPin, Building2, User, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-28 gradient-bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-white/10 text-forest-300 border border-white/10">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight max-w-3xl">
              Engineering India&apos;s <span className="text-forest-400">Clean Energy</span> Infrastructure
            </h1>
            <p className="mt-6 text-lg text-steel-300 max-w-2xl leading-relaxed">{companyInfo.description}</p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Vision & Mission */}
      <section className="py-section">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bg-forest-50 border border-forest-100 rounded-2xl p-8 lg:p-10 h-full">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-forest-700 shadow-md mb-6">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h2 className="font-heading text-h3 font-bold text-steel-950 mb-4">Our Vision</h2>
                <p className="text-body text-steel-600 leading-relaxed">{companyInfo.vision}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8 lg:p-10 h-full">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500 shadow-md mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="font-heading text-h3 font-bold text-steel-950 mb-4">Our Mission</h2>
                <p className="text-body text-steel-600 leading-relaxed">{companyInfo.mission}</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-section bg-steel-50/50">
        <Container>
          <SectionHeading badge="Our Team" title="Leadership " highlight="Team" subtitle="Meet the experienced professionals driving ADON's growth in the CBG sector." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={fadeInUp} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-steel-100">
                {/* Photo placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-forest-100 to-forest-50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-forest-200 flex items-center justify-center">
                    <User className="h-12 w-12 text-forest-600" />
                  </div>
                  {/* Placeholder text */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 rounded text-[0.6rem] font-medium bg-white/80 text-steel-500">Photo pending</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-h4 font-bold text-steel-900">{member.name}</h3>
                  <p className="text-body-sm font-semibold text-forest-600 mt-1">{member.title}</p>
                  <p className="text-body-sm text-steel-500 mt-3 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {member.expertiseTags.map((tag) => (
                      <Badge key={tag} variant="success" size="sm">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-section">
        <Container>
          <SectionHeading badge="Our Journey" title="Company " highlight="Milestones" subtitle="Key moments in ADON's growth from founding to multi-state operations." />
          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest-400 via-forest-600 to-forest-800 md:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map((milestone, i) => (
                <ScrollReveal key={milestone.year} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Year dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-forest-600 border-4 border-white shadow-md -translate-x-1/2 mt-1.5 z-10" />
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-caption font-bold mb-2">{milestone.year}</span>
                      <h3 className="font-heading text-body font-bold text-steel-900">{milestone.title}</h3>
                      <p className="text-body-sm text-steel-500 mt-1">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="py-section bg-steel-50/50">
        <Container>
          <SectionHeading badge="Locations" title="Our " highlight="Offices" subtitle="Headquartered in Ahmedabad with manufacturing in Mahemdabad." />
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {Object.values(companyInfo.locations).map((loc) => (
              <ScrollReveal key={loc.label}>
                <div className="bg-white rounded-2xl p-8 shadow-soft border border-steel-100 text-center hover:shadow-card transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-forest-50 mb-4">
                    {loc.label.includes("Corporate") ? <Building2 className="h-7 w-7 text-forest-600" /> : <Award className="h-7 w-7 text-forest-600" />}
                  </div>
                  <h3 className="font-heading text-h4 font-bold text-steel-900">{loc.label}</h3>
                  <p className="text-body-sm text-steel-500 mt-2">{loc.fullAddress}</p>
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-body-sm font-semibold text-forest-600 hover:text-forest-700">
                    <MapPin className="h-4 w-4" /> View on Map
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
