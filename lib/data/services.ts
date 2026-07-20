export type ServiceContent = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  benefits: { title: string; description: string }[];
};

export const servicesData: Record<string, ServiceContent> = {
  "turnkey-solution": {
    id: "turnkey-solution",
    image: "/images/services/turnkey-solution.webp",
    title: "Turnkey Solution",
    shortDescription: "End-to-end solutions for setting up Compressed Biogas (CBG) manufacturing plants.",
    description: "A CBG turnkey solution is a service that helps set up a Compressed Biogas (CBG) manufacturing plant. CBG is a clean, renewable fuel that can be used for cooking, transportation, and electricity generation. CBG is produced from organic waste like food waste, agricultural residues, and animal manure through a process called bio methanation.\n\nAt AdON Green Energy, we offer complete end-to-end solutions for setting up CBG manufacturing plants, including project conceptualization, design, engineering, procurement, construction, and commissioning.",
    benefits: [
      { 
        title: "Sustainable Energy", 
        description: "CBG is a clean, renewable, and carbon-neutral fuel that can reduce greenhouse gas emissions and air pollution." 
      },
      { 
        title: "Waste Management", 
        description: "Helps effectively manage organic waste, reducing the strain on municipal landfills and the environment." 
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
    image: "/images/services/procurement.webp",
    title: "Procurement",
    shortDescription: "Reliable and high-quality procurement of machinery and raw materials for CBG plants.",
    description: "We streamline the complex supply chain for CBG plants by offering expert procurement services. Whether you need assistance drafting a procurement plan, finding suppliers, evaluating feasibility, or looking for a detailed strategy (like contract templates, vendor sourcing, or technical guidelines), we ensure your plant operates with the best inputs at the most competitive costs.",
    benefits: [
      {
        title: "Identifying Sources",
        description: "Partner with third-party suppliers that process waste into biogas or set up on-site generation for significant organic waste."
      },
      {
        title: "Supplier Assessment",
        description: "Evaluate suppliers based on sustainability practices, production capacity, regulatory compliance, and certifications like ISO 14001."
      },
      {
        title: "Quality Standards",
        description: "Ensure the biogas meets specifications tailored for specific applications like electricity generation, vehicle fuel, or direct heating."
      },
      {
        title: "Logistics & Delivery",
        description: "Establish agreements on transportation (pipelines, containers, etc.) and factor in storage requirements for on-demand usage."
      },
      {
        title: "Regulatory Compliance",
        description: "Adhere to environmental, safety, and emissions standards, obtaining all necessary permits for procurement and utilization."
      },
      {
        title: "Economic Viability",
        description: "Compare costs against other energy sources and explore incentives, subsidies, or carbon credits that make biogas procurement attractive."
      },
      {
        title: "Long-term Contracts",
        description: "Secure supply agreements to ensure consistent availability. Negotiate terms like pricing, quantity, and quality assurances."
      },
      {
        title: "Technology & Infrastructure",
        description: "Ensure your facility is equipped with compatible boilers, generators, or fuel systems to utilize the biogas efficiently."
      }
    ]
  },
  "consultancy": {
    id: "consultancy",
    image: "/images/services/consultancy.webp",
    title: "Consultancy",
    shortDescription: "Detailed, data-driven consultancy tailored to your specific project goals and scale.",
    description: "Our consultancy services encompass a wide range of areas aimed at helping clients design, implement, and optimize biogas projects. Whether you are planning a household, community, or industrial-scale project, we tailor our advice based on your feedstock type and end-use goals, helping you draft robust business plans and actionable strategies.",
    benefits: [
      {
        title: "Feasibility Study & Site Assessment",
        description: "Assess site suitability, evaluate feedstock availability (agricultural waste, food waste, manure), and conduct economic ROI analysis."
      },
      {
        title: "Biogas Plant Design",
        description: "Choose the appropriate technology (fixed-dome, floating drum, plug-flow), size the plant, and design systems for collection, storage, and purification."
      },
      {
        title: "Regulatory Compliance",
        description: "Assist with permits, ensuring adherence to environmental standards to mitigate odor, emissions, and waste discharge."
      },
      {
        title: "Feedstock Management",
        description: "Analyze feedstock for biogas yield potential, develop logistics for collection and handling, and propose pretreatment strategies."
      },
      {
        title: "Process Optimization",
        description: "Set up the anaerobic digestion process for maximum methane production, monitoring key parameters like temperature, pH, and retention time."
      },
      {
        title: "Biogas Utilization",
        description: "Plan the end use (electricity, heating, cooking, or biomethane for vehicles) and develop a storage and distribution strategy."
      },
      {
        title: "Waste Management",
        description: "Propose solutions for digestate management like organic fertilizer production, and integrate wastewater recycling if applicable."
      },
      {
        title: "Business Planning",
        description: "Provide cost estimation, funding options, and assist in securing government incentives or subsidies for financial viability."
      },
      {
        title: "Installation & Commissioning",
        description: "Oversee the installation of the plant and equipment, conducting system testing and operational trials to guarantee performance."
      },
      {
        title: "Training & Capacity Building",
        description: "Train operators on system management and troubleshooting, providing user manuals and periodic refresher sessions."
      }
    ]
  },
  "rd": {
    id: "rd",
    image: "/images/services/rd.webp",
    title: "Research & Development (R&D)",
    shortDescription: "Pioneering innovations in bio-methanation and green energy technologies.",
    description: "The motivation behind Adon Green Energy's ongoing research and development efforts is the goal of creating better solutions to provide clients with exceptional results. We investigate and choose state-of-the-art procedures and technology, continuously updating the criteria we employ to give businesses the chance to become circular, sustainable, and profitable.",
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
        description: "Solving specific operational challenges related to unique local feedstocks and ensuring prompt return to full operational capacity."
      }
    ]
  },
  "om": {
    id: "om",
    image: "/images/services/om.webp",
    title: "Operations & Maintenance (O&M)",
    shortDescription: "Ensuring maximum uptime and efficiency for your green energy plants.",
    description: "Post commissioning, Adon Green Energy helps operators educate the plant management and provides on-site and remote assistance via proprietary software. We handle routine plant maintenance combined with relevant consulting to protect the plant from failures and downtime. In emergency scenarios, we assume responsibility for accompanying the client throughout extraordinary maintenance to promptly return the plant to full operational capacity.",
    benefits: [
      {
        title: "Predictive Maintenance",
        description: "Advanced monitoring systems to detect and resolve potential issues before they cause downtime."
      },
      {
        title: "Performance Tracking",
        description: "Continuous tracking of gas yields and energy output against operational baselines using our proprietary software."
      },
      {
        title: "Trained Personnel",
        description: "Deploying skilled operators trained in the latest safety and operational protocols to ensure smooth functioning."
      },
      {
        title: "Extraordinary Maintenance",
        description: "Prompt emergency response to return the plant to full operational capacity during unexpected failures."
      }
    ]
  },
  "bio-cng-retails": {
    id: "bio-cng-retails",
    image: "/images/services/bio-cng-retails.webp",
    title: "Bio-CNG Retails",
    shortDescription: "Setting up and managing robust Bio-CNG retail dispensing networks.",
    description: "Our Bio CNG Plants provide an environmentally friendly and sustainable fuel source. By converting organic waste into CNG, businesses can reduce their carbon footprint and operating costs. It is a green technology that enables the effective use of accumulated animal waste from food production and municipal solid waste from urbanization, saving money and the environment while providing clean-burning fuel with fewer emissions than traditional fossil fuels.",
    benefits: [
      {
        title: "Infrastructure Setup",
        description: "Design and installation of high-pressure compressors, storage cascades, and dispensing units crafted with materials like GFS, RC."
      },
      {
        title: "Emission Reduction",
        description: "Prevents organic waste in landfills from releasing potent methane gas, significantly mitigating climate change."
      },
      {
        title: "Consumer Reach",
        description: "Strategic placement of retail outlets to maximize visibility and consumer access to sustainable alternative fuels."
      },
      {
        title: "Supply Logistics",
        description: "Efficient management of the virtual pipeline to ensure continuous fuel availability at pumps and enterprise sites."
      }
    ]
  },
  "nocs-approvals": {
    id: "nocs-approvals",
    image: "/images/services/nocs-approvals.webp",
    title: "NOCs & Approvals",
    shortDescription: "Seamless navigation of regulatory frameworks to secure all necessary clearances.",
    description: "Generation of Biogas from biomethanation of urban waste, including segregated MSW, agricultural waste, industrial effluents, requires strict compliance. Adon green energy LLP. provides a one-stop destination to fulfill all NOC, authorization, and registration needs to start a biogas plant business under Solid Waste Management Authorizations. We provide all-inclusive support for every segment.",
    benefits: [
      {
        title: "Licensing & Approvals",
        description: "We provide comprehensive support to secure No Objection Certificates (NOC) and approvals from relevant authorities."
      },
      {
        title: "Environmental Clearances",
        description: "Assistance in securing approvals from State and Central Pollution Control Boards for safe waste processing."
      },
      {
        title: "PESO Approvals",
        description: "Expert guidance in acquiring licenses for the storage and dispensing of compressed gases seamlessly."
      },
      {
        title: "Local Authority NOCs",
        description: "Handling paperwork and liaising with municipal corporations, fire departments, and land registries without problems."
      }
    ]
  }
};
