export type ServiceContent = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: { title: string; description: string }[];
};

export const servicesData: Record<string, ServiceContent> = {
  "turnkey-solution": {
    id: "turnkey-solution",
    title: "Turnkey Solution",
    shortDescription: "End-to-end solutions for setting up Compressed Biogas (CBG) manufacturing plants.",
    description: "A CBG turnkey solution is a comprehensive service that helps set up a Compressed Biogas (CBG) manufacturing plant from inception to operation. CBG is a clean, renewable fuel produced from organic waste through bio-methanation. At AdON Green Energy, we offer complete end-to-end solutions including project conceptualization, design, engineering, procurement, construction, and commissioning.",
    benefits: [
      { 
        title: "Sustainable Energy", 
        description: "CBG is a clean, renewable, and carbon-neutral fuel that can reduce greenhouse gas emissions and air pollution." 
      },
      { 
        title: "Waste Management", 
        description: "Helps effectively manage organic waste, reducing the strain on municipal landfills and environment." 
      },
      { 
        title: "Energy Security", 
        description: "Reduces reliance on imported fossil fuels by generating localized clean energy resources." 
      },
      { 
        title: "Rural Development", 
        description: "Creates income opportunities for rural communities through agricultural residue procurement and plant operations." 
      }
    ]
  },
  "procurement": {
    id: "procurement",
    title: "Procurement",
    shortDescription: "Reliable and high-quality procurement of machinery and raw materials for CBG plants.",
    description: "We streamline the complex supply chain for CBG plants by offering expert procurement services. From identifying top-tier manufacturers of digesters and purification systems to securing consistent streams of organic feedstock, we ensure your plant operates with the best inputs at the most competitive costs.",
    benefits: [
      {
        title: "Cost Optimization",
        description: "Leverage our industry connections to get the best prices on heavy machinery and equipment."
      },
      {
        title: "Quality Assurance",
        description: "All procured items undergo strict quality checks to ensure they meet global safety and operational standards."
      },
      {
        title: "Feedstock Security",
        description: "Long-term agreements with agricultural and municipal entities for an uninterrupted supply of raw materials."
      },
      {
        title: "Timely Delivery",
        description: "Efficient logistics management guarantees that your project stays on schedule."
      }
    ]
  },
  "consultancy": {
    id: "consultancy",
    title: "Consultancy",
    shortDescription: "Detailed, data-driven consultancy tailored to your specific project goals and scale.",
    description: "Whether you are planning a household, community, or industrial-scale biogas project, our detailed consultancy services help you navigate the complexities. We tailor our advice based on your feedstock type and end-use goals, helping you draft robust business plans and actionable strategies.",
    benefits: [
      {
        title: "Feasibility Study & Site Assessment",
        description: "We assess site suitability, evaluate feedstock availability, and conduct detailed economic analysis including costs and expected ROI."
      },
      {
        title: "Biogas Plant Design",
        description: "Customized engineering blueprints tailored to maximize yield from your specific organic waste streams."
      },
      {
        title: "Technology Selection",
        description: "Unbiased recommendations on the best purification, compression, and distribution technologies."
      },
      {
        title: "Business Planning",
        description: "Comprehensive financial modeling and risk assessment to secure funding and ensure profitability."
      }
    ]
  },
  "rd": {
    id: "rd",
    title: "Research & Development (R&D)",
    shortDescription: "Pioneering innovations in bio-methanation and green energy technologies.",
    description: "Our dedicated R&D wing constantly works on optimizing the bio-methanation process and exploring new frontiers in green energy. By analyzing microbial cultures and testing various organic mixtures, we help increase gas yields, reduce retention times, and make renewable energy more efficient.",
    benefits: [
      {
        title: "Yield Optimization",
        description: "Advanced microbial research to increase the volume of methane produced per ton of feedstock."
      },
      {
        title: "Process Efficiency",
        description: "Developing new techniques to reduce the hydraulic retention time of digesters."
      },
      {
        title: "Byproduct Enhancement",
        description: "Improving the nutrient quality of the digestate for use as premium organic fertilizer."
      },
      {
        title: "Custom Solutions",
        description: "Solving specific operational challenges related to unique local feedstocks."
      }
    ]
  },
  "om": {
    id: "om",
    title: "Operations & Maintenance (O&M)",
    shortDescription: "Ensuring maximum uptime and efficiency for your green energy plants.",
    description: "Building a plant is only the first step. Our Operations & Maintenance (O&M) services ensure that your facility operates at peak efficiency year-round. Our team of expert engineers and technicians handle everything from routine inspections to predictive maintenance, minimizing downtime and maximizing output.",
    benefits: [
      {
        title: "Predictive Maintenance",
        description: "Advanced monitoring systems to detect and resolve potential issues before they cause downtime."
      },
      {
        title: "Performance Tracking",
        description: "Continuous tracking of gas yields and energy output against operational baselines."
      },
      {
        title: "Trained Personnel",
        description: "Deploying skilled operators trained in the latest safety and operational protocols."
      },
      {
        title: "Regulatory Compliance",
        description: "Ensuring all operational practices strictly adhere to environmental and safety regulations."
      }
    ]
  },
  "bio-cng-retails": {
    id: "bio-cng-retails",
    title: "Bio-CNG Retails",
    shortDescription: "Setting up and managing robust Bio-CNG retail dispensing networks.",
    description: "We help bridge the gap between production and consumption by establishing state-of-the-art Bio-CNG retail outlets. We manage the logistics of compressing, transporting (via cascades), and dispensing clean fuel to commercial and public vehicles, making green energy accessible to all.",
    benefits: [
      {
        title: "Infrastructure Setup",
        description: "Design and installation of high-pressure compressors, storage cascades, and dispensing units."
      },
      {
        title: "Safety Standards",
        description: "Rigorous adherence to PESO (Petroleum and Explosives Safety Organization) norms for safe fuel handling."
      },
      {
        title: "Consumer Reach",
        description: "Strategic placement of retail outlets to maximize visibility and consumer access."
      },
      {
        title: "Supply Logistics",
        description: "Efficient management of the virtual pipeline to ensure continuous fuel availability at pumps."
      }
    ]
  },
  "nocs-approvals": {
    id: "nocs-approvals",
    title: "NOCs & Approvals",
    shortDescription: "Seamless navigation of regulatory frameworks to secure all necessary clearances.",
    description: "Navigating the bureaucratic landscape can be a major hurdle for green energy projects. Our dedicated team handles all the heavy lifting required to secure No Objection Certificates (NOCs) and statutory approvals from various governmental bodies, ensuring your project starts on a strong, legal foundation.",
    benefits: [
      {
        title: "Environmental Clearances",
        description: "Assistance in securing approvals from State and Central Pollution Control Boards."
      },
      {
        title: "PESO Approvals",
        description: "Expert guidance in acquiring licenses for the storage and dispensing of compressed gases."
      },
      {
        title: "Local Authority NOCs",
        description: "Handling paperwork and liaising with municipal corporations, fire departments, and land registries."
      },
      {
        title: "End-to-End Tracking",
        description: "Complete transparency and regular updates on the status of all your pending applications."
      }
    ]
  }
};
