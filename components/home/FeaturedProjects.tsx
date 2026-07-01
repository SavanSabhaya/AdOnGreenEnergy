"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { MapPin, Zap, Leaf } from "lucide-react";
import { projects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.status === "Commissioned").slice(0, 4);

  return (
    <section className="py-section bg-steel-50/50" aria-label="Featured projects">
      <Container>
        <SectionHeading
          badge="Our Work"
          title="Commissioned CBG "
          highlight="Plants"
          subtitle="Proven track record across multiple states and feedstock types."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-[var(--radius-card)] overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-steel-100"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-forest-600 to-forest-400" />

              <div className="p-6">
                {/* Status badge */}
                <Badge variant="success" size="sm">
                  {project.status}
                </Badge>

                {/* Client name */}
                <h3 className="font-heading text-body font-bold text-steel-900 mt-3 mb-4 line-clamp-2">
                  {project.clientName}
                </h3>

                {/* Details */}
                <div className="space-y-2.5 text-body-sm text-steel-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-forest-500 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-500 shrink-0" />
                    <span className="font-semibold text-steel-700">{project.tpdCapacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-forest-500 shrink-0" />
                    <span>{project.feedstockType}</span>
                  </div>
                </div>

                {/* Highlights */}
                {project.highlights && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-0.5 rounded text-[0.625rem] font-medium bg-steel-50 text-steel-600 border border-steel-100"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Button href="/projects" variant="outline" showArrow>
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
