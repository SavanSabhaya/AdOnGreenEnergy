export interface Project {
  id: string;
  clientName: string;
  location: string;
  state: string;
  tpdCapacity: string;
  feedstockType: string;
  status: "Commissioned" | "Under Construction" | "Planning";
  description?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    clientName: "Shree Gayatri Agro Industries",
    location: "Kheda, Gujarat",
    state: "Gujarat",
    tpdCapacity: "6 TPD",
    feedstockType: "Agricultural Residue",
    status: "Commissioned",
    description: "End-to-end EPC delivery of a 6 TPD CBG plant utilizing agricultural residue as primary feedstock, with VPSA-based purification.",
    highlights: ["VPSA Purification", "250 bar Compression", "Bio-fertilizer Recovery"],
  },
  {
    id: "project-2",
    clientName: "Green Valley Biogas Pvt. Ltd.",
    location: "Anand, Gujarat",
    state: "Gujarat",
    tpdCapacity: "8 TPD",
    feedstockType: "Dairy & Cattle Waste",
    status: "Commissioned",
    description: "Large-scale dairy waste processing CBG plant with advanced CSTR digester technology and membrane purification system.",
    highlights: ["CSTR Digester", "Membrane Purification", "SATAT Registered"],
  },
  {
    id: "project-3",
    clientName: "Haryana Bio Fuel Corp.",
    location: "Karnal, Haryana",
    state: "Haryana",
    tpdCapacity: "10 TPD",
    feedstockType: "Paddy Straw & Agri Waste",
    status: "Commissioned",
    description: "One of the first paddy straw-based CBG plants in Haryana, addressing crop residue burning while producing clean fuel.",
    highlights: ["Paddy Straw Processing", "H2S Removal System", "Pipeline Injection Ready"],
  },
  {
    id: "project-4",
    clientName: "Uttarakhand Green Gas LLP",
    location: "Haridwar, Uttarakhand",
    state: "Uttarakhand",
    tpdCapacity: "5 TPD",
    feedstockType: "Municipal Solid Waste",
    status: "Commissioned",
    description: "MSW-to-CBG facility designed for Uttarakhand's organic waste stream, delivering clean fuel and organic manure as by-products.",
    highlights: ["MSW Processing", "GFS Tank Technology", "Organic Manure Output"],
  },
  {
    id: "project-5",
    clientName: "Saurashtra Agri Energy Pvt. Ltd.",
    location: "Rajkot, Gujarat",
    state: "Gujarat",
    tpdCapacity: "12 TPD",
    feedstockType: "Sugar & Distillery Waste",
    status: "Under Construction",
    description: "High-capacity CBG plant processing press mud and spent wash from sugar and distillery operations.",
    highlights: ["12 TPD Capacity", "Press Mud Processing", "Dual Purification"],
  },
  {
    id: "project-6",
    clientName: "Panchsheel Bio Energy",
    location: "Mehsana, Gujarat",
    state: "Gujarat",
    tpdCapacity: "8 TPD",
    feedstockType: "Poultry & Dairy Mixed Waste",
    status: "Commissioned",
    description: "Mixed feedstock CBG plant handling both poultry litter and dairy waste, featuring robust pre-treatment and solid-liquid separation.",
    highlights: ["Mixed Feedstock", "Advanced Pre-treatment", "MNRE Subsidized"],
  },
];

export const projectStats = {
  totalPlants: "6+",
  totalCapacity: "49+",
  statesPresent: "3",
  yearsExperience: "6+",
  feedstockTypes: "5+",
  clientSatisfaction: "100%",
};
