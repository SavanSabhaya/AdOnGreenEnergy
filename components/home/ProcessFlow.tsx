"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Container from "@/components/ui/Container";

const processSteps = [
  { id: "01", title: "Feedstock Collection", desc: "Sourcing organic waste from agriculture and municipalities." },
  { id: "02", title: "Pre-treatment", desc: "Shredding & homogenization for optimal digestion." },
  { id: "03", title: "Anaerobic Digestion", desc: "Microbial breakdown generating raw biogas." },
  { id: "04", title: "Gas Purification", desc: "Removing H₂S & CO₂ via VPSA technology." },
  { id: "05", title: "Compression", desc: "Bottling at 200-250 bar for transport." },
  { id: "06", title: "Bio-Fertilizer", desc: "Nutrient-rich digestate for organic farming." },
];

function ProcessStep({ 
  step, 
  index, 
  total, 
  scrollYProgress 
}: { 
  step: typeof processSteps[0], 
  index: number, 
  total: number, 
  scrollYProgress: MotionValue<number> 
}) {
  const stepStart = index / total;
  const stepEnd = (index + 1) / total;
  const stepPeak = (stepStart + stepEnd) / 2;

  // Use strictly increasing bounds without overflowing the [0, 1] range unnecessarily
  // or risking non-monotonic offsets.
  const opacity = useTransform(
    scrollYProgress,
    [stepStart, stepPeak, stepEnd],
    [0, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [stepStart, stepPeak, stepEnd],
    [100, 0, -100]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [stepStart, stepPeak, stepEnd],
    [0.8, 1, 0.8]
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center"
      style={{ opacity, y, scale }}
    >
      {/* Large background number */}
      <div className="text-[14rem] md:text-[18rem] font-black font-heading text-forest-900/40 leading-none absolute -top-20 -right-4 md:-right-8 select-none z-0 transition-transform duration-700 ease-out group-hover:scale-105">
        {step.id}
      </div>
      
      {/* Card Content */}
      <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-10 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden group w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
        <h3 className="relative font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">{step.title}</h3>
        <p className="relative text-xl text-steel-300 font-light leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-[#0A1110] text-white h-[400vh]">
      <div className="sticky top-0 h-[100svh] w-full flex flex-col justify-center overflow-hidden pt-20 pb-6 lg:py-0">
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay" />
        
        <Container className="relative z-10 w-full h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            
            <div className="relative flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-forest-900/80 to-forest-800/60 border border-forest-400/30 text-forest-300 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(34,197,94,0.15)] mb-4 md:mb-8 w-max backdrop-blur-md">
                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                </span>
                Our Technology
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-steel-500">
                The CBG<br className="hidden lg:block"/>Pipeline
              </h2>
              <p className="text-steel-400 max-w-md text-sm md:text-lg font-light leading-relaxed">
                A state-of-the-art process converting raw organic waste into high-purity Compressed Biogas and premium Bio-Fertilizer. Scroll to explore.
              </p>
              
              <div className="mt-6 md:mt-12 h-1 w-full max-w-md bg-steel-900 rounded-full overflow-hidden hidden md:block">
                <motion.div 
                  className="h-full bg-gradient-to-r from-forest-500 to-amber-500 origin-left"
                  style={{ scaleX: scrollYProgress }}
                />
              </div>
            </div>

            <div className="relative h-[45vh] lg:h-[60vh] flex items-center mt-4 lg:mt-0">
              {processSteps.map((step, index) => (
                <ProcessStep 
                  key={step.id} 
                  step={step} 
                  index={index} 
                  total={processSteps.length} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
