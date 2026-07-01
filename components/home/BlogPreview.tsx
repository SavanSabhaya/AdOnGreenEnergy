"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ArrowUpRight, Clock } from "lucide-react";
import { resources } from "@/lib/data/resources";

export default function BlogPreview() {
  const previews = resources.slice(0, 3);

  return (
    <section className="py-section bg-steel-50/50" aria-label="Blog and insights">
      <Container>
        <SectionHeading
          badge="Insights & Resources"
          title="CBG Knowledge "
          highlight="Hub"
          subtitle="Expert guides, scheme breakdowns, and industry insights — the educational content competitors don't offer."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {previews.map((resource) => (
            <motion.article
              key={resource.id}
              variants={fadeInUp}
              className="group bg-white rounded-[var(--radius-card)] overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-steel-100"
            >
              {/* Category color bar */}
              <div className={`h-1 ${
                resource.category === "Guide" ? "bg-forest-500" :
                resource.category === "Scheme" ? "bg-amber-500" :
                resource.category === "Technical" ? "bg-sky-500" :
                "bg-steel-500"
              }`} />

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant={
                      resource.category === "Guide" ? "success" :
                      resource.category === "Scheme" ? "warning" :
                      "default"
                    }
                    size="sm"
                  >
                    {resource.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-caption text-steel-400">
                    <Clock className="h-3 w-3" />
                    {resource.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-body font-bold text-steel-900 mb-3 group-hover:text-forest-700 transition-colors line-clamp-2">
                  <Link href={`/resources#${resource.slug}`}>
                    {resource.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-body-sm text-steel-500 leading-relaxed line-clamp-3">
                  {resource.excerpt}
                </p>

                {/* Read more */}
                <div className="mt-4 flex items-center gap-1 text-body-sm font-semibold text-forest-600 group-hover:text-forest-700">
                  Read More
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Button href="/resources" variant="outline" showArrow>
            View All Resources
          </Button>
        </div>
      </Container>
    </section>
  );
}
