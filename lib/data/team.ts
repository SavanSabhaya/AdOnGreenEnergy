export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertiseTags: string[];
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ankit-jagani",
    name: "Ankit R. Jagani",
    title: "Director",
    bio: "Visionary leader driving ADON's growth in the compressed biogas sector. With deep expertise in EPC project delivery and renewable energy policy, Ankit spearheads the company's strategic partnerships and ensures every project meets the highest standards of engineering excellence.",
    expertiseTags: ["Strategic Leadership", "EPC Project Delivery", "Business Development", "SATAT Policy"],
  },
  {
    id: "chirag-bhavsar",
    name: "Chirag Bhavsar",
    title: "Technical Director",
    bio: "Chirag brings extensive technical knowledge in gas purification and process engineering. His hands-on approach to technology selection and system integration ensures ADON's CBG plants operate at peak efficiency from day one.",
    expertiseTags: ["Process Engineering", "Gas Purification", "System Integration", "Technology Selection"],
  },
  {
    id: "gajendra-saini",
    name: "Gajendra Saini",
    title: "AGM – CBG Division",
    bio: "Leading project execution across multiple states, Gajendra manages the end-to-end delivery of CBG plant installations. His deep field experience in anaerobic digestion systems and commissioning protocols has been instrumental in ADON's track record of on-time project delivery.",
    expertiseTags: ["Project Execution", "Commissioning", "Anaerobic Digestion", "Field Operations"],
  },
];

export const companyInfo = {
  name: "Adon green energy LLP.",
  brandName: "ADON Green Energy",
  tagline: "Supporting India's Green Fuel Revolution through CBG",
  description:
    "ADON is a specialist EPC company delivering end-to-end Compressed Biogas (CBG) plant solutions — from design and procurement to construction and commissioning. We combine engineering precision with deep knowledge of government incentive schemes to help clients build profitable, sustainable CBG facilities across India.",
  vision:
    "To be India's most trusted EPC partner in the Compressed Biogas sector, enabling a cleaner energy future through world-class engineering and uncompromising project delivery.",
  mission:
    "To design, build, and commission high-performance CBG plants that maximize output, minimize downtime, and deliver measurable returns — while making India's SATAT vision a reality, one plant at a time.",
  founded: 2018,
  email: "info@adongreenenergy.in",
  phone: "+91-82005 17219",
  website: "https://adongreenenergy.in",
  locations: {
    headquarters: {
      label: "Corporate Office",
      address: "B-608, Shalin Square, Vatva, Ahmedabad",
      fullAddress: "B-608, Shalin Square, Near Hathijan Circle, Vatva, Ahmedabad – 382445",
      mapUrl: "https://maps.google.com/?q=Ahmedabad+Gujarat+India",
    },
    manufacturing: {
      label: "Manufacturing Facility",
      address: "Plot No.53, RIDC, Mahemdabad",
      fullAddress: "Plot No.53, RIDC, Rohisa Village Road, Mahemdabad, Ahmedabad – 387130",
      mapUrl: "https://maps.google.com/?q=Mahemdabad+Gujarat+India",
    },
  },
  contacts: {
    sales: {
      name: "Ankit R Jagani",
      title: "Director – Sales & Marketing",
      phone: "+91-82005 17219",
      email: "info@adongreenenergy.in",
    },
    projects: {
      name: "Gajendra Saini",
      title: "AGM – CBG Division (Projects & Service)",
      phone: "+91-63570 99393",
      email: "sales@adongreenenergy.in",
    },
  },
};

export const milestones = [
  { year: "2018", title: "Company Founded", description: "ADON Green Energy established in Ahmedabad with a vision to serve the emerging CBG sector in India." },
  { year: "2019", title: "First EPC Contract", description: "Secured first end-to-end EPC contract for a CBG plant in Gujarat, marking entry into full project delivery." },
  { year: "2020", title: "Manufacturing Facility", description: "Established dedicated manufacturing plant in Mahemdabad for in-house fabrication of critical CBG components." },
  { year: "2021", title: "Multi-State Expansion", description: "Expanded operations to Haryana and Uttarakhand, delivering CBG plants across multiple feedstock categories." },
  { year: "2022", title: "SATAT Registration", description: "Registered under SATAT scheme, enabling clients to access government-backed purchase guarantees for CBG." },
  { year: "2023", title: "Technology Partnerships", description: "Forged key technology partnerships for VPSA and membrane-based gas purification systems." },
  { year: "2024", title: "6+ Plants Commissioned", description: "Crossed milestone of 6+ CBG plants successfully commissioned across Gujarat, Haryana, and Uttarakhand." },
];
