"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Badge from "@/components/ui/Badge";
import { MapPin, Leaf, Filter } from "lucide-react";
import { projects } from "@/lib/data/projects";

export default function ProjectGrid() {
  const [stateFilter, setStateFilter] = useState<string>("All");
  const [feedstockFilter, setFeedstockFilter] = useState<string>("All");

  const states = useMemo(() => ["All", ...Array.from(new Set(projects.map(p => p.state)))], []);
  const feedstocks = useMemo(() => ["All", ...Array.from(new Set(projects.map(p => p.feedstockType)))], []);

  const filteredProjects = projects.filter(p => {
    const stateMatch = stateFilter === "All" || p.state === stateFilter;
    const feedstockMatch = feedstockFilter === "All" || p.feedstockType === feedstockFilter;
    return stateMatch && feedstockMatch;
  });

  return (
    <section className="py-24 bg-steel-50 border-t border-steel-100 min-h-[600px]">
      <Container>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 bg-white p-4 rounded-xl shadow-sm border border-steel-200">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-steel-400" />
            <span className="font-semibold text-steel-700 mr-2">Filter by:</span>
          </div>
          
          <select 
            className="bg-steel-50 border border-steel-200 text-steel-700 text-sm rounded-lg focus:ring-forest-500 focus:border-forest-500 block p-2.5"
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
          >
            <option value="All">All States</option>
            {states.filter(s => s !== "All").map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          
          <select 
            className="bg-steel-50 border border-steel-200 text-steel-700 text-sm rounded-lg focus:ring-forest-500 focus:border-forest-500 block p-2.5"
            value={feedstockFilter}
            onChange={(e) => setFeedstockFilter(e.target.value)}
          >
            <option value="All">All Feedstocks</option>
            {feedstocks.filter(f => f !== "All").map(fs => (
              <option key={fs} value={fs}>{fs}</option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-steel-200 flex flex-col group hover:shadow-elevated transition-shadow"
              >
                <div className="relative h-64 w-full bg-steel-100 overflow-hidden">
                  <ImagePlaceholder
                    src={`/images/plant/hero_bg.png`}
                    alt={`${project.tpdCapacity} CBG Plant in ${project.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    isPlaceholder={true}
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="warning">{project.status}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="bg-forest-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-bold text-lg border border-forest-500/50 shadow-sm">
                      {project.tpdCapacity} Capacity
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-steel-900 mb-4">{project.clientName}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2 text-sm text-steel-600">
                      <Leaf className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-semibold text-steel-900">Feedstock</span>
                        {project.feedstockType}
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-steel-600">
                      <MapPin className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-semibold text-steel-900">Location</span>
                        {project.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-steel-200 shadow-sm">
            <h3 className="text-xl font-bold text-steel-700 mb-2">No projects found</h3>
            <p className="text-steel-500">Try adjusting your filters.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
