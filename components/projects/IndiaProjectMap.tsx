"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Leaf, CheckCircle2, ChevronRight, Activity, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, projectStats, Project } from "@/lib/data/projects";
import { indiaMapData } from "@/lib/data/india-map-paths";

export default function IndiaProjectMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<"All" | "Commissioned" | "Upcoming">("All");

  // Get active states based on project data
  const activeStates = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.state)));
  }, []);

  // Filter projects by selected state and status filter
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesState = !selectedState || p.state === selectedState;
      const matchesStatus =
        statusFilter === "All" ||
        (statusFilter === "Commissioned" && p.status === "Commissioned") ||
        (statusFilter === "Upcoming" && p.status !== "Commissioned");
      return matchesState && matchesStatus;
    });
  }, [selectedState, statusFilter]);

  // Group projects by state for the sidebar
  const projectsByState = useMemo(() => {
    const groups: { [key: string]: Project[] } = {};
    projects.forEach((p) => {
      if (!groups[p.state]) {
        groups[p.state] = [];
      }
      groups[p.state].push(p);
    });
    return groups;
  }, []);

  // Calculate totals based on status
  const runningCount = useMemo(() => projects.filter((p) => p.status === "Commissioned").length, []);
  const upcomingCount = useMemo(() => projects.filter((p) => p.status !== "Commissioned").length, []);

  // Map state name to map ID from paths data
  const stateNameToIdMap = useMemo(() => {
    const mapping: { [key: string]: string } = {};
    indiaMapData.locations.forEach((loc) => {
      mapping[loc.name] = loc.id;
    });
    return mapping;
  }, []);

  const handleStateClick = (stateName: string) => {
    if (activeStates.includes(stateName)) {
      setSelectedState(selectedState === stateName ? null : stateName);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-steel-50 border-t border-steel-100 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <SectionHeading
            badge="Geographic Footprint"
            title="Our National Presence & Active Facilities"
            description="Delivering state-of-the-art Compressed Biogas (CBG) infrastructure across India. Explore our operational track record and upcoming project developments."
            centered
          />
        </div>

        {/* Responsive Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-3.5 sm:p-5 md:p-6 rounded-2xl border border-steel-200/80 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-forest-50 rounded-xl group-hover:bg-forest-100 transition-colors text-forest-600 shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] sm:text-caption font-semibold text-steel-400 uppercase tracking-tight sm:tracking-wider truncate">
                  States Present
                </span>
                <span className="text-base sm:text-xl md:text-2xl font-bold text-steel-900 block leading-tight break-words">
                  {projectStats.statesPresent} States
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-3.5 sm:p-5 md:p-6 rounded-2xl border border-steel-200/80 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors text-amber-600 shrink-0">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] sm:text-caption font-semibold text-steel-400 uppercase tracking-tight sm:tracking-wider truncate">
                  Running Plants
                </span>
                <span className="text-base sm:text-xl md:text-2xl font-bold text-steel-900 block leading-tight break-words">
                  {runningCount} Operational
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-3.5 sm:p-5 md:p-6 rounded-2xl border border-steel-200/80 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-forest-50 rounded-xl group-hover:bg-forest-100 transition-colors text-forest-500 shrink-0">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] sm:text-caption font-semibold text-steel-400 uppercase tracking-tight sm:tracking-wider truncate">
                  Upcoming Plants
                </span>
                <span className="text-base sm:text-xl md:text-2xl font-bold text-steel-900 block leading-tight break-words">
                  {upcomingCount} Facilities
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-3.5 sm:p-5 md:p-6 rounded-2xl border border-steel-200/80 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-forest-50 rounded-xl group-hover:bg-forest-100 transition-colors text-forest-600 shrink-0">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] sm:text-caption font-semibold text-steel-400 uppercase tracking-tight sm:tracking-wider truncate">
                  Total Capacity
                </span>
                <span className="text-base sm:text-xl md:text-2xl font-bold text-steel-900 block leading-tight break-words">
                  {projectStats.totalCapacity} TPD
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Interactive Sidebar & Project Listing */}
          <div className="lg:col-span-5 space-y-6">
            {/* Filter Panel */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-steel-200/80 shadow-sm">
              <h3 className="font-heading text-base sm:text-lg font-bold text-steel-900 mb-3 sm:mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-forest-600" />
                Filter Projects
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setStatusFilter("All")}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    statusFilter === "All"
                      ? "bg-forest-600 text-white shadow-sm"
                      : "bg-steel-100 hover:bg-steel-200 text-steel-600"
                  }`}
                >
                  All ({projects.length})
                </button>
                <button
                  onClick={() => setStatusFilter("Commissioned")}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    statusFilter === "Commissioned"
                      ? "bg-amber-500 text-white shadow-sm"
                      : "bg-steel-100 hover:bg-steel-200 text-steel-600"
                  }`}
                >
                  Running ({runningCount})
                </button>
                <button
                  onClick={() => setStatusFilter("Upcoming")}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    statusFilter === "Upcoming"
                      ? "bg-forest-900 text-white shadow-sm"
                      : "bg-steel-100 hover:bg-steel-200 text-steel-600"
                  }`}
                >
                  Upcoming ({upcomingCount})
                </button>
              </div>
            </div>

            {/* State List Accordion */}
            <div className="bg-white rounded-2xl border border-steel-200/80 shadow-sm divide-y divide-steel-100 max-h-[500px] sm:max-h-[550px] overflow-y-auto">
              <div className="p-4 sm:p-5 bg-gradient-to-r from-forest-900 to-forest-800 text-white flex justify-between items-center sticky top-0 z-10 shadow-sm">
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold">Active States ({activeStates.length})</h3>
                  <p className="text-[11px] sm:text-xs text-forest-200 mt-0.5">Select a state to focus on map</p>
                </div>
                {selectedState && (
                  <button
                    onClick={() => setSelectedState(null)}
                    className="text-xs bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded-md transition-colors font-medium"
                  >
                    Clear Filter
                  </button>
                )}
              </div>

              {activeStates.map((stateName) => {
                const stateProjects = projectsByState[stateName] || [];
                const isExpanded = selectedState === stateName;
                const stateId = stateNameToIdMap[stateName];

                const displayStateProjects = stateProjects.filter((p) => {
                  if (statusFilter === "All") return true;
                  if (statusFilter === "Commissioned") return p.status === "Commissioned";
                  return p.status !== "Commissioned";
                });

                if (displayStateProjects.length === 0) return null;

                return (
                  <div key={stateName} className="transition-all">
                    <button
                      onClick={() => handleStateClick(stateName)}
                      onMouseEnter={() => setHoveredStateId(stateId)}
                      onMouseLeave={() => setHoveredStateId(null)}
                      className={`w-full flex items-center justify-between p-3.5 sm:p-4 text-left transition-colors ${
                        isExpanded ? "bg-forest-50/50 font-bold" : "hover:bg-steel-50/60"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div
                          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                            isExpanded ? "bg-forest-600" : "bg-forest-400"
                          }`}
                        />
                        <span className="font-semibold text-steel-800 text-xs sm:text-body">{stateName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] sm:text-xs bg-steel-100 text-steel-700 px-2 sm:px-2.5 py-0.5 rounded-full font-bold">
                          {displayStateProjects.length} {displayStateProjects.length === 1 ? "Plant" : "Plants"}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 text-steel-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-90 text-forest-600" : ""
                          }`}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-steel-50/40 border-t border-steel-100"
                        >
                          <div className="p-2.5 sm:p-3 space-y-2">
                            {displayStateProjects.map((project) => (
                              <div
                                key={project.id}
                                onMouseEnter={() => setHoveredProject(project)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="p-3 bg-white rounded-xl border border-steel-200/90 shadow-sm hover:border-forest-500 hover:shadow-md transition-all group relative cursor-pointer"
                              >
                                <div className="flex justify-between items-start mb-1.5">
                                  <h4 className="font-bold text-steel-950 text-xs sm:text-sm group-hover:text-forest-700 transition-colors">
                                    {project.location.split(',')[0]}
                                  </h4>
                                  <span
                                    className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                      project.status === "Commissioned"
                                        ? "bg-amber-100 text-amber-800 border border-amber-300/60"
                                        : "bg-forest-100 text-forest-800 border border-forest-300/60"
                                    }`}
                                  >
                                    {project.status === "Commissioned" ? "Running" : "Upcoming"}
                                  </span>
                                </div>
                                <div className="space-y-1 text-xs text-steel-600">
                                  <div className="flex items-center gap-1.5">
                                    <Leaf className="w-3.5 h-3.5 text-forest-600 shrink-0" />
                                    <span className="truncate">{project.feedstockType}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-forest-600 shrink-0" />
                                    <span className="font-semibold text-steel-900">{project.tpdCapacity} Capacity</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Precision Interactive India SVG Map */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full max-w-[560px] relative bg-white p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-steel-200/90 shadow-soft flex flex-col items-center">
              {/* Map Sub-header legend */}
              <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4 border-b border-steel-100 pb-3 text-[11px] sm:text-xs text-steel-600">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-forest-600 inline-block border border-white shadow-sm"></span>
                  <span className="font-semibold text-steel-800">Active State Presence</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 inline-block shadow-sm"></span>
                    <span className="font-medium text-steel-700">Running</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 inline-block shadow-sm"></span>
                    <span className="font-medium text-steel-700">Upcoming</span>
                  </div>
                </div>
              </div>

              {/* SVG Map Container */}
              <div className="w-full aspect-[612/696] relative select-none">
                <svg
                  viewBox={indiaMapData.viewBox}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  {/* Outer Country Boundary Highlighting Layer */}
                  <g className="pointer-events-none">
                    {indiaMapData.locations.map((loc) => (
                      <path
                        key={`outer-border-${loc.id}`}
                        d={loc.path}
                        fill="none"
                        stroke="#15803d"
                        strokeWidth="3.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        className="opacity-40"
                      />
                    ))}
                  </g>

                  {/* Render State Paths with Crisp Bold Borders */}
                  <g>
                    {indiaMapData.locations.map((loc) => {
                      const isActiveState = activeStates.includes(loc.name);
                      const isStateSelected = selectedState === loc.name;
                      const isStateHovered = hoveredStateId === loc.id;
                      
                      let fillValue = "#f1f5f9"; // Neutral light steel gray for inactive states
                      let strokeColor = "#cbd5e1"; // Inactive state border
                      let strokeWidthValue = "1";

                      if (isActiveState) {
                        strokeColor = "#ffffff";
                        strokeWidthValue = "1.8";
                        if (isStateSelected || isStateHovered) {
                          fillValue = "#15803d"; // Deep green when focused/hovered
                          strokeColor = "#052e16";
                          strokeWidthValue = "2.2";
                        } else {
                          fillValue = "#dcfce7"; // Vibrant light green highlight for active states
                        }
                      }

                      return (
                        <path
                          key={loc.id}
                          id={loc.id}
                          d={loc.path}
                          fill={fillValue}
                          stroke={strokeColor}
                          strokeWidth={strokeWidthValue}
                          strokeLinejoin="round"
                          onClick={() => handleStateClick(loc.name)}
                          onMouseEnter={() => {
                            if (isActiveState) setHoveredStateId(loc.id);
                          }}
                          onMouseLeave={() => setHoveredStateId(null)}
                          className={`transition-all duration-300 ease-in-out ${
                            isActiveState
                              ? "cursor-pointer hover:opacity-95"
                              : "pointer-events-none"
                          }`}
                        />
                      );
                    })}
                  </g>

                  {/* Render Geographically Precise Stationary Landmark Pins */}
                  <g>
                    {filteredProjects.map((project) => {
                      const isCommissioned = project.status === "Commissioned";
                      const isHovered = hoveredProject?.id === project.id;
                      const pinColor = isCommissioned ? "#f59e0b" : "#10b981";
                      const darkPinColor = isCommissioned ? "#d97706" : "#059669";

                      return (
                        <g
                          key={project.id}
                          className="cursor-pointer"
                          onClick={() => {
                            setSelectedState(project.state);
                            setHoveredProject(project);
                          }}
                          onMouseEnter={() => setHoveredProject(project)}
                          onMouseLeave={() => setHoveredProject(null)}
                        >
                          {/* Outer concentric pulsing ring */}
                          <circle
                            cx={project.x}
                            cy={project.y}
                            fill="none"
                            stroke={pinColor}
                            strokeWidth="1.5"
                          >
                            <animate
                              attributeName="r"
                              values={isHovered ? "14; 26; 14" : "6; 16; 6"}
                              dur="2.5s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.8; 0.15; 0.8"
                              dur="2.5s"
                              repeatCount="indefinite"
                            />
                          </circle>

                          {/* Soft inner glow circle */}
                          <circle
                            cx={project.x}
                            cy={project.y}
                            fill={pinColor}
                          >
                            <animate
                              attributeName="r"
                              values={isHovered ? "10; 14; 10" : "4; 7; 4"}
                              dur="2.5s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.4; 0.15; 0.4"
                              dur="2.5s"
                              repeatCount="indefinite"
                            />
                          </circle>

                          {/* Solid stationary core pin center */}
                          <circle
                            cx={project.x}
                            cy={project.y}
                            r={isHovered ? 6 : 4.5}
                            fill={darkPinColor}
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            className="transition-all duration-200"
                          />
                        </g>
                      );
                    })}
                  </g>
                </svg>

                {/* Floating Rich Tooltip Overlay */}
                <AnimatePresence>
                  {hoveredProject && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -8 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        left: `${(hoveredProject.x / 612) * 100}%`,
                        top: `${(hoveredProject.y / 696) * 100}%`,
                        transform: "translate(-50%, -100%)",
                      }}
                      className="absolute z-30 pointer-events-none max-w-[260px] w-[85vw] sm:w-64 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-steel-200 shadow-elevated flex flex-col -mt-3"
                    >
                      {/* Arrow tail */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white/95"></div>

                      <div className="flex justify-between items-start mb-1.5 gap-1">
                        <span className="font-heading text-xs sm:text-sm font-bold text-steel-900 truncate">
                          {hoveredProject.location.split(',')[0]}
                        </span>
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0 ${
                            hoveredProject.status === "Commissioned"
                              ? "bg-amber-100 text-amber-800 border border-amber-300/50"
                              : "bg-forest-100 text-forest-800 border border-forest-300/50"
                          }`}
                        >
                          {hoveredProject.status === "Commissioned" ? "Running" : "Upcoming"}
                        </span>
                      </div>

                      <span className="text-[10px] sm:text-[11px] text-steel-400 font-semibold mb-2">
                        {hoveredProject.state}
                      </span>

                      <div className="space-y-1.5 text-[11px] sm:text-xs text-steel-600 border-t border-steel-100 pt-2">
                        <div className="flex items-center gap-1.5">
                          <Leaf className="w-3.5 h-3.5 text-forest-600 shrink-0" />
                          <span className="truncate">{hoveredProject.feedstockType}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-forest-600 shrink-0" />
                          <span className="font-bold text-steel-900">
                            {hoveredProject.tpdCapacity} Capacity
                          </span>
                        </div>
                      </div>

                      {hoveredProject.description && (
                        <p className="text-[10px] text-steel-500 italic mt-2 border-t border-steel-50 pt-1.5 leading-relaxed hidden sm:block">
                          {hoveredProject.description}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Instructions helper */}
              <div className="mt-3 sm:mt-4 text-center">
                <p className="text-[11px] sm:text-xs text-steel-400 font-semibold">
                  * Hover over landmark pins for city plant details. Click states to filter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
