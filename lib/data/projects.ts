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
}

export const projects: Project[] = [
  {
    id: "project-uk-12",
    clientName: "Upcoming CBG Facility",
    location: "Uttarakhand (UK)",
    state: "Uttarakhand",
    tpdCapacity: "12.0 TPD",
    feedstockType: "Mix Waste",
    status: "Coming Soon",
    description: "Large scale EPC project converting mix waste into clean energy.",
    highlights: ["12.0 TPD Capacity", "Mix Waste Processing"],
  },
  {
    id: "project-wb-6",
    clientName: "Upcoming CBG Facility",
    location: "West Bengal (WB)",
    state: "West Bengal",
    tpdCapacity: "6.0 TPD",
    feedstockType: "Mix Waste",
    status: "Coming Soon",
    description: "Developing a 6.0 TPD plant specializing in mix waste.",
    highlights: ["6.0 TPD Capacity", "Mix Waste Processing"],
  },
  {
    id: "project-mp-3",
    clientName: "Upcoming CBG Facility",
    location: "Madhya Pradesh (MP)",
    state: "Madhya Pradesh",
    tpdCapacity: "3.0 TPD",
    feedstockType: "Napier+Dung",
    status: "Coming Soon",
    description: "Agricultural waste-to-wealth project utilizing Napier grass and cattle dung.",
    highlights: ["3.0 TPD Capacity", "Napier+Dung Processing"],
  },
  {
    id: "project-up-3",
    clientName: "Upcoming CBG Facility",
    location: "Uttar Pradesh (UP)",
    state: "Uttar Pradesh",
    tpdCapacity: "3.0 TPD",
    feedstockType: "Napier+Dung",
    status: "Coming Soon",
    description: "Agricultural waste-to-wealth project utilizing Napier grass and cattle dung.",
    highlights: ["3.0 TPD Capacity", "Napier+Dung Processing"],
  },
];

export const projectStats = {
  totalPlants: "4",
  totalCapacity: "24",
  statesPresent: "4",
  yearsExperience: "6+",
  feedstockTypes: "2+",
  clientSatisfaction: "100%",
};
