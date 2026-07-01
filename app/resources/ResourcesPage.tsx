"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { resources } from "@/lib/data/resources";
import { Clock, ChevronDown, ChevronUp, BookOpen, Filter } from "lucide-react";

export default function ResourcesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(resources.map((r) => r.category)))];

  const filtered = categoryFilter === "All" ? resources : resources.filter((r) => r.category === categoryFilter);

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-28 gradient-bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-white/10 text-forest-300 border border-white/10">Knowledge Hub</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight max-w-3xl">
              CBG <span className="text-amber-400">Resources</span> & Guides
            </h1>
            <p className="mt-6 text-lg text-steel-300 max-w-2xl leading-relaxed">
              Expert insights, scheme breakdowns, and technical guides to help you navigate the CBG ecosystem with confidence.
            </p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Filter */}
      <section className="py-6 bg-white sticky top-[72px] z-20 shadow-sm border-b border-steel-100">
        <Container>
          <div className="flex items-center gap-3 overflow-x-auto">
            <Filter className="h-4 w-4 text-steel-400 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full text-body-sm font-medium whitespace-nowrap transition-colors ${
                  categoryFilter === cat
                    ? "bg-forest-700 text-white"
                    : "bg-steel-100 text-steel-600 hover:bg-steel-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Resources List */}
      <section className="py-section">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            {filtered.map((resource) => {
              const isExpanded = expandedId === resource.id;
              return (
                <ScrollReveal key={resource.id}>
                  <article
                    id={resource.slug}
                    className={`bg-white rounded-2xl border transition-all duration-300 ${
                      isExpanded ? "border-forest-200 shadow-card" : "border-steel-200 hover:border-forest-100 shadow-soft"
                    }`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : resource.id)}
                      className="w-full flex items-start gap-4 p-6 text-left cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-forest-50">
                        <BookOpen className="h-6 w-6 text-forest-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <Badge
                            variant={
                              resource.category === "Guide" ? "success" :
                              resource.category === "Scheme" ? "warning" :
                              resource.category === "Technical" ? "info" :
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
                        <h2 className="font-heading text-h4 font-bold text-steel-900">{resource.title}</h2>
                        <p className="text-body-sm text-steel-500 mt-2 line-clamp-2">{resource.excerpt}</p>
                      </div>
                      <div className="shrink-0 mt-1">
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-steel-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-steel-400" />
                        )}
                      </div>
                    </button>

                    {/* Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="px-6 pb-6 border-t border-steel-100 pt-6"
                      >
                        <div className="prose prose-sm max-w-none text-steel-600">
                          {resource.content.split("\n\n").map((paragraph, i) => {
                            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                              return <h3 key={i} className="font-heading text-body font-bold text-steel-800 mt-6 mb-2">{paragraph.replace(/\*\*/g, "")}</h3>;
                            }
                            if (paragraph.startsWith("- ")) {
                              return (
                                <ul key={i} className="list-disc list-inside space-y-1 text-body-sm">
                                  {paragraph.split("\n").map((line, j) => (
                                    <li key={j}>{line.replace("- ", "")}</li>
                                  ))}
                                </ul>
                              );
                            }
                            if (paragraph.match(/^\d\./)) {
                              return (
                                <ol key={i} className="list-decimal list-inside space-y-1 text-body-sm">
                                  {paragraph.split("\n").map((line, j) => (
                                    <li key={j}>{line.replace(/^\d+\.\s/, "")}</li>
                                  ))}
                                </ol>
                              );
                            }
                            return <p key={i} className="text-body-sm leading-relaxed mb-3">{paragraph.replace(/\*\*/g, "")}</p>;
                          })}
                        </div>
                      </motion.div>
                    )}
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
