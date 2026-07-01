"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { projects } from "@/lib/data/projects";
import { MapPin, Leaf } from "lucide-react";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            badge="Our Portfolio"
            title="Featured Active Projects"
            description="Developing large-scale CBG facilities across India."
            className="mb-0"
          />
          <Button href="/projects" variant="outline" className="shrink-0">
            View All Projects
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-all duration-300 border border-steel-100"
            >
              <div className="bg-gradient-to-r from-amber-500 to-amber-400 h-2 w-full" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="warning">{project.status}</Badge>
                  <span className="text-caption font-semibold text-steel-400">{project.tpdCapacity}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-steel-900 mb-3">{project.clientName}</h3>
                
                <div className="space-y-2 text-sm text-steel-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-forest-500 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-forest-500 shrink-0" />
                    <span>{project.feedstockType}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
