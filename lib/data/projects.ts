export interface Project {
  id: string;
  clientName: string;
  location: string;
  state: string;
  tpdCapacity: string;
  feedstockType: string;
  status: "Commissioned" | "Under Construction" | "Planning" | "Coming Soon";
  description?: string;
  highlights?: string[];
  x: number;
  y: number;
}

export const projects: Project[] = [
  // GUJARAT (5 Projects) - Verified strictly inside Gujarat state boundary
  {
    id: "proj-gj-jamnagar",
    clientName: "Jamnagar CBG Unit",
    location: "Jamnagar, Gujarat",
    state: "Gujarat",
    tpdCapacity: "10.0 TPD",
    feedstockType: "Napier Grass",
    status: "Commissioned",
    description: "High-capacity running CBG plant in Western Gujarat integrated with local Napier grass farming.",
    highlights: ["10.0 TPD Capacity", "100% Napier grass feedstock", "Advanced digestion system"],
    x: 32,
    y: 361
  },
  {
    id: "proj-gj-botad",
    clientName: "Botad CBG Facility",
    location: "Botad, Gujarat",
    state: "Gujarat",
    tpdCapacity: "5.0 TPD",
    feedstockType: "Napier Grass & Cattle Dung",
    status: "Commissioned",
    description: "Operational CBG facility in Saurashtra generating high-yield bio-CNG from local Napier grass and dairy manure.",
    highlights: ["5.0 TPD Bio-CNG", "Napier & Dung processing", "Operational Plant"],
    x: 68,
    y: 371
  },
  {
    id: "proj-gj-dhrangadhra",
    clientName: "Dhrangadhra Biogas Plant",
    location: "Dhrangadhra, Gujarat",
    state: "Gujarat",
    tpdCapacity: "8.0 TPD",
    feedstockType: "Agricultural Residue",
    status: "Commissioned",
    description: "Multi-feedstock active CBG facility processing diverse Surendranagar district crop residues.",
    highlights: ["8.0 TPD Capacity", "Crop residue processing", "Clean energy output"],
    x: 60,
    y: 345
  },
  {
    id: "proj-gj-karjan",
    clientName: "Karjan Biomass Plant",
    location: "Karjan, Gujarat",
    state: "Gujarat",
    tpdCapacity: "6.0 TPD",
    feedstockType: "Cotton Stalk & Dung",
    status: "Commissioned",
    description: "Facility in Vadodara district utilizing cotton stalk biomass combined with cow dung for stable biogas yields.",
    highlights: ["6.0 TPD Capacity", "Cotton stalk utilization", "Dairy dung co-digestion"],
    x: 102,
    y: 365
  },
  {
    id: "proj-gj-dharoi",
    clientName: "Dharoi Upcoming CBG Facility",
    location: "Dharoi, Gujarat",
    state: "Gujarat",
    tpdCapacity: "12.0 TPD",
    feedstockType: "Napier Grass & Silage",
    status: "Under Construction",
    description: "Upcoming high-capacity plant in North Gujarat under active development to supply green fuel to local networks.",
    highlights: ["12.0 TPD Planned Capacity", "Under active construction", "Advanced pre-treatment unit"],
    x: 82,
    y: 325
  },

  // HARYANA (4 Projects) - Verified strictly inside Haryana state boundary
  {
    id: "proj-hr-hisar",
    clientName: "Hisar Biogas Unit",
    location: "Hisar, Haryana",
    state: "Haryana",
    tpdCapacity: "7.0 TPD",
    feedstockType: "Napier Grass",
    status: "Commissioned",
    description: "Active EPC facility in Western Haryana utilizing energy crops to produce high-grade bio-CNG.",
    highlights: ["7.0 TPD Capacity", "Dedicated energy crop feedstock", "Grid-injection ready"],
    x: 150,
    y: 196
  },
  {
    id: "proj-hr-safidon",
    clientName: "Safidon CBG Facility",
    location: "Safidon, Haryana",
    state: "Haryana",
    tpdCapacity: "4.5 TPD",
    feedstockType: "Paddy Straw",
    status: "Commissioned",
    description: "Operational plant in Jind district addressing stubble burning by processing paddy straw into clean bio-CNG.",
    highlights: ["4.5 TPD Capacity", "Paddy straw management", "Combats crop residue burning"],
    x: 170,
    y: 182
  },
  {
    id: "proj-hr-gohana",
    clientName: "Gohana Upcoming Facility",
    location: "Gohana, Haryana",
    state: "Haryana",
    tpdCapacity: "5.0 TPD",
    feedstockType: "Paddy Straw & Press Mud",
    status: "Planning",
    description: "Upcoming CBG facility in Sonipat district combining sugar mill press mud with paddy straw.",
    highlights: ["5.0 TPD Planned Capacity", "Press mud co-digestion", "Engineering phase"],
    x: 174,
    y: 194
  },
  {
    id: "proj-hr-panipat",
    clientName: "Panipat Active CBG Plant",
    location: "Panipat, Haryana",
    state: "Haryana",
    tpdCapacity: "12.0 TPD",
    feedstockType: "Mix Waste & Paddy Straw",
    status: "Commissioned",
    description: "Large scale running facility processing mixed organic solid waste and agricultural straw.",
    highlights: ["12.0 TPD Capacity", "Mixed feedstock processing", "High-efficiency digesters"],
    x: 182,
    y: 186
  },

  // UTTAR PRADESH (1 Project) - Verified strictly inside Uttar Pradesh state boundary
  {
    id: "proj-up-kanpur",
    clientName: "Kanpur MSW-to-Energy Facility",
    location: "Kanpur, Uttar Pradesh",
    state: "Uttar Pradesh",
    tpdCapacity: "15.0 TPD",
    feedstockType: "Municipal Solid Waste (MSW)",
    status: "Commissioned",
    description: "Major urban waste-to-energy operational facility in Central UP processing municipal organic waste streams.",
    highlights: ["15.0 TPD Capacity", "Municipal organic waste sorting", "Urban waste reduction"],
    x: 253,
    y: 248
  },

  // UTTARAKHAND (1 Project) - Verified strictly inside Uttarakhand state boundary
  {
    id: "proj-uk-bazpur",
    clientName: "Bazpur Upcoming Plant",
    location: "Bazpur, Uttarakhand",
    state: "Uttarakhand",
    tpdCapacity: "10.0 TPD",
    feedstockType: "Press Mud & Paddy Straw",
    status: "Coming Soon",
    description: "Planned facility in Udham Singh Nagar district tapping into rich sugar-belt press mud and paddy straw.",
    highlights: ["10.0 TPD Capacity", "Press mud utilization", "Coming soon"],
    x: 229,
    y: 188
  },

  // MAHARASHTRA (4 Listings / 3 Cities) - Verified strictly inside Maharashtra state boundary
  {
    id: "proj-mh-shahpur",
    clientName: "Shahpur Upcoming Facility",
    location: "Shahpur, Maharashtra",
    state: "Maharashtra",
    tpdCapacity: "6.0 TPD",
    feedstockType: "Napier Grass & Cattle Dung",
    status: "Planning",
    description: "Upcoming CBG facility in Thane district strategically located to supply the Mumbai industrial corridor.",
    highlights: ["6.0 TPD Planned Capacity", "Strategic corridor supply", "In planning phase"],
    x: 114,
    y: 421
  },
  {
    id: "proj-mh-nashik-1",
    clientName: "Nashik CBG Facility Unit I",
    location: "Nashik, Maharashtra",
    state: "Maharashtra",
    tpdCapacity: "10.0 TPD",
    feedstockType: "Food Waste & Dung",
    status: "Commissioned",
    description: "Active operational unit in North-West Maharashtra processing canteen food waste and dairy manure.",
    highlights: ["10.0 TPD Capacity", "Food waste recycling", "Bio-fertilizer extraction"],
    x: 132,
    y: 407
  },
  {
    id: "proj-mh-nashik-2",
    clientName: "Nashik CBG Facility Unit II",
    location: "Nashik, Maharashtra",
    state: "Maharashtra",
    tpdCapacity: "10.0 TPD",
    feedstockType: "Food Waste & Agri Waste",
    status: "Commissioned",
    description: "Second operational facility in Nashik expanding organic waste recovery and bio-fertilizer supply.",
    highlights: ["10.0 TPD Capacity", "Dual unit expansion", "Operational plant"],
    x: 136,
    y: 409
  },
  {
    id: "proj-mh-shirdi",
    clientName: "Shirdi Bio-CNG Facility",
    location: "Shirdi, Maharashtra",
    state: "Maharashtra",
    tpdCapacity: "5.0 TPD",
    feedstockType: "Temple Offerings & Food Waste",
    status: "Commissioned",
    description: "Operational plant in Ahmednagar district recycling temple flower offerings and pilgrim kitchen food waste.",
    highlights: ["5.0 TPD Capacity", "Circular temple economy", "Zero-waste pilgrim model"],
    x: 154,
    y: 419
  },

  // BIHAR (1 Project) - Verified strictly inside Bihar state boundary
  {
    id: "proj-br-motipur",
    clientName: "Motipur Upcoming CBG Facility",
    location: "Motipur, Bihar",
    state: "Bihar",
    tpdCapacity: "5.0 TPD",
    feedstockType: "Napier Grass & Dung",
    status: "Coming Soon",
    description: "Upcoming plant in Muzaffarpur district establishing green energy footprint in North Bihar.",
    highlights: ["5.0 TPD Planned Capacity", "Farming residue processing", "Coming soon"],
    x: 353,
    y: 264
  },

  // MADHYA PRADESH (1 Project) - Verified strictly inside Madhya Pradesh state boundary
  {
    id: "proj-mp-sagar",
    clientName: "Sagar Upcoming Facility",
    location: "Sagar, Madhya Pradesh",
    state: "Madhya Pradesh",
    tpdCapacity: "7.5 TPD",
    feedstockType: "Cattle Dung & Agri Straw",
    status: "Under Construction",
    description: "Upcoming waste-to-wealth project in Central MP integrated with local mega dairy farms.",
    highlights: ["7.5 TPD Capacity", "Dairy integration", "Under construction"],
    x: 211,
    y: 297
  }
];

export const projectStats = {
  totalPlants: "17",
  totalCapacity: "138",
  statesPresent: "7",
  yearsExperience: "6+",
  feedstockTypes: "5+",
  clientSatisfaction: "100%",
};
