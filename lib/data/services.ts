export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Lucide icon name
  features: string[];
  specifications?: Record<string, string>;
}

export const services: Service[] = [
  {
    id: "plant-design",
    title: "CBG Plant Design & Engineering",
    shortDescription: "Complete plant layout, P&ID, civil and structural design tailored to your feedstock and capacity requirements.",
    fullDescription: "Our engineering team delivers comprehensive plant design from concept to detailed engineering drawings. We develop process flow diagrams (PFDs), piping and instrumentation diagrams (P&IDs), civil and structural designs, and electrical layouts — all optimized for your specific feedstock characteristics, target capacity, and site conditions.",
    icon: "Compass",
    features: [
      "Custom process flow design for specific feedstock types",
      "Detailed P&ID and GA drawings",
      "Civil and structural engineering",
      "Electrical and instrumentation design",
      "3D plant modeling and visualization",
      "Design optimization for SATAT compliance",
    ],
  },
  {
    id: "feedstock-systems",
    title: "Feedstock Handling & Pre-treatment",
    shortDescription: "Engineered systems for receiving, sorting, sizing, and pre-treating diverse organic feedstocks.",
    fullDescription: "Every CBG plant's success starts with reliable feedstock handling. We design and install complete pre-treatment systems including receiving hoppers, conveyor systems, shredders, pulpers, and mixing tanks that handle agricultural residue, animal waste, food waste, MSW, and industrial organic waste with consistent throughput.",
    icon: "Wheat",
    features: [
      "Multi-feedstock receiving and sorting systems",
      "Shredding and pulping equipment",
      "Slurry preparation and mixing tanks",
      "Contamination removal (de-gritting, de-sanding)",
      "Feedstock storage and buffering",
      "Automated feeding systems",
    ],
  },
  {
    id: "anaerobic-digestion",
    title: "Anaerobic Digestion Systems",
    shortDescription: "CSTR digesters and biogas reactors engineered for maximum methane yield and stable operation.",
    fullDescription: "The digester is the heart of any CBG plant. We engineer both CSTR (Continuously Stirred Tank Reactor) and plug-flow digester systems in RCC (Reinforced Cement Concrete) or GFS (Glass-Fused-to-Steel) tank configurations. Our designs optimize retention time, mixing efficiency, and temperature control for maximum biogas yield.",
    icon: "FlaskConical",
    features: [
      "CSTR digester design and installation",
      "RCC and GFS tank options",
      "Thermophilic and mesophilic operating modes",
      "Advanced mixing systems (mechanical/gas recirculation)",
      "Temperature control and monitoring systems",
      "Digestate management and recirculation",
    ],
    specifications: {
      "Tank Types": "RCC (Reinforced Cement Concrete), GFS (Glass-Fused-to-Steel)",
      "Operating Modes": "Mesophilic (35-40°C), Thermophilic (50-55°C)",
      "Retention Time": "20-40 days (feedstock dependent)",
      "Mixing": "Mechanical / Gas Recirculation",
    },
  },
  {
    id: "h2s-removal",
    title: "H₂S Removal Systems",
    shortDescription: "Biological and chemical desulfurization to remove hydrogen sulfide from raw biogas.",
    fullDescription: "Raw biogas contains hydrogen sulfide (H₂S) which must be removed to protect downstream equipment and meet gas quality standards. We design and install both biological (using specialized bacteria in biotrickling filters) and chemical (using iron sponge or activated carbon) H₂S removal systems suited to your plant's scale and H₂S concentration.",
    icon: "Shield",
    features: [
      "Biological desulfurization (biotrickling filters)",
      "Chemical desulfurization (iron sponge / activated carbon)",
      "Inline monitoring and automatic dosing",
      "Removal efficiency > 99%",
      "Low operating cost designs",
      "Customized for H₂S concentration levels",
    ],
  },
  {
    id: "vpsa-purification",
    title: "VPSA Purification",
    shortDescription: "Vacuum Pressure Swing Adsorption for upgrading biogas to pipeline-quality biomethane.",
    fullDescription: "Our VPSA (Vacuum Pressure Swing Adsorption) systems separate CO₂ from biogas to produce high-purity biomethane (>96% CH₄). VPSA technology offers excellent methane recovery rates, lower energy consumption compared to alternatives, and reliable operation across varying biogas compositions.",
    icon: "Filter",
    features: [
      "Methane purity > 96%",
      "Methane recovery > 97%",
      "Low energy consumption per Nm³ of biomethane",
      "Automated operation with PLC control",
      "Compact modular design",
      "Suitable for 2–20 TPD plants",
    ],
    specifications: {
      "Output Purity": "> 96% CH₄",
      "Recovery Rate": "> 97%",
      "Operating Pressure": "4–8 bar",
      "Capacity Range": "2–20 TPD",
    },
  },
  {
    id: "membrane-purification",
    title: "Membrane Purification",
    shortDescription: "Membrane-based biogas upgrading for high-purity CBG production with excellent scalability.",
    fullDescription: "Membrane gas separation is an increasingly popular choice for biogas upgrading. Our membrane purification systems use selective polymer membranes to separate CO₂ from methane, producing high-purity CBG with minimal moving parts. This technology offers excellent scalability, low maintenance requirements, and consistent performance.",
    icon: "Layers",
    features: [
      "Methane purity > 97%",
      "No chemical consumables required",
      "Low maintenance — no moving parts in membrane module",
      "Excellent scalability (modular design)",
      "Compact footprint",
      "Suitable for 5–25 TPD plants",
    ],
    specifications: {
      "Output Purity": "> 97% CH₄",
      "Technology": "Polymeric hollow-fiber membranes",
      "Operating Pressure": "10–16 bar",
      "Capacity Range": "5–25 TPD",
    },
  },
  {
    id: "compression-bottling",
    title: "Compression & Bottling",
    shortDescription: "High-pressure compression systems up to 250 bar for CBG bottling and cascade filling.",
    fullDescription: "We supply and commission complete compression and bottling systems that compress purified biomethane to 200–250 bar for storage in CNG-type cascade cylinders or transport in tube trailers. Our systems include multi-stage compressors, priority panels, cascades, and dispensing units.",
    icon: "Gauge",
    features: [
      "Multi-stage compression up to 250 bar",
      "Cascade filling systems",
      "Cylinder storage banks",
      "Tube trailer filling stations",
      "Priority panel and sequencing",
      "Safety interlocks and pressure monitoring",
    ],
    specifications: {
      "Max Pressure": "250 bar",
      "Compressor Type": "Multi-stage reciprocating",
      "Storage": "Cascade cylinder banks / Tube trailers",
      "Filling": "Priority panel with sequential filling",
    },
  },
  {
    id: "pipeline-injection",
    title: "Pipeline Injection Systems",
    shortDescription: "Gas quality management and injection skids for feeding CBG into city gas distribution networks.",
    fullDescription: "For projects connected to CGD (City Gas Distribution) networks, we provide pipeline injection solutions including gas quality monitoring, flow metering, odorization, pressure regulation, and SCADA-integrated injection skids that meet all PNGRB and CGD operator specifications.",
    icon: "GitBranch",
    features: [
      "Gas chromatograph integration for quality monitoring",
      "Fiscal metering systems",
      "Pressure regulation and safety systems",
      "Odorization units",
      "SCADA-integrated control systems",
      "Compliance with PNGRB standards",
    ],
  },
  {
    id: "bio-fertilizer",
    title: "Solid-Liquid Separator & Bio-Fertilizer",
    shortDescription: "Complete digestate processing systems to produce marketable organic fertilizer as a valuable by-product.",
    fullDescription: "The digestate from anaerobic digestion is a nutrient-rich material that can be converted into valuable organic fertilizer. Our solid-liquid separation and bio-fertilizer processing systems include screw presses, decanter centrifuges, drying beds, and granulation equipment to produce marketable organic manure — creating an additional revenue stream.",
    icon: "Sprout",
    features: [
      "Screw press and decanter centrifuge separators",
      "Dewatering and drying systems",
      "Composting and maturation areas",
      "Granulation / pelletization (optional)",
      "Liquid fertilizer (fertigation-ready) output",
      "FSSAI-compliant organic manure production",
    ],
  },
];

export const tankComparison = {
  headers: ["Parameter", "RCC Tanks", "GFS Tanks"],
  rows: [
    ["Material", "Reinforced Cement Concrete", "Glass-Fused-to-Steel panels"],
    ["Construction Time", "3–6 months", "2–4 weeks"],
    ["Lifespan", "30+ years", "25+ years"],
    ["Corrosion Resistance", "Moderate (coating needed)", "Excellent (glass lining)"],
    ["Maintenance", "Periodic re-coating required", "Very low maintenance"],
    ["Leak-proofing", "Requires waterproofing treatment", "Factory-sealed bolted joints"],
    ["Expandability", "Difficult to modify", "Modular — easy to expand"],
    ["Cost", "Lower initial cost", "Higher initial, lower lifecycle cost"],
    ["Best For", "Large permanent installations", "Fast-track and modular projects"],
  ],
};
