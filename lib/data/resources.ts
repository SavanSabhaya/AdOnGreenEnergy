export interface Resource {
  id: string;
  title: string;
  category: "Guide" | "Scheme" | "Technical" | "Checklist";
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  slug: string;
}

export const resources: Resource[] = [
  {
    id: "what-is-cbg",
    title: "What is Compressed Biogas (CBG)?",
    category: "Guide",
    excerpt: "A complete introduction to Compressed Biogas — how it's produced, its applications, and why it's central to India's clean energy transition.",
    content: `Compressed Biogas (CBG) is a purified and compressed form of biogas that contains more than 90% methane (CH₄). It is produced by the anaerobic decomposition of organic waste — agricultural residue, animal dung, food waste, or municipal solid waste — followed by purification to remove CO₂, H₂S, and moisture, and compression to 200-250 bar for storage and transportation.

CBG is chemically identical to Compressed Natural Gas (CNG) and can be used interchangeably in all CNG applications — vehicular fuel, industrial heating, and piped gas supply. The key difference is its origin: while CNG comes from fossil natural gas, CBG is a 100% renewable fuel derived from waste.

**Key Properties of CBG:**
- Methane content: >90% (typically 95-97% after purification)
- Calorific value: ~52 MJ/kg (comparable to CNG)
- Storage pressure: 200-250 bar
- Carbon neutral (biogenic carbon cycle)

**Applications:**
1. Vehicular fuel (direct replacement for CNG/diesel)
2. Industrial and commercial heating
3. City gas distribution pipeline injection
4. Power generation

India's SATAT initiative aims to establish 5,000 CBG plants by 2028-30, creating a massive opportunity for waste-to-energy project developers.`,
    readTime: "5 min read",
    date: "2024-12-15",
    slug: "what-is-cbg",
  },
  {
    id: "satat-scheme",
    title: "SATAT Scheme Explained: How to Get Started",
    category: "Scheme",
    excerpt: "Everything entrepreneurs need to know about India's SATAT initiative — eligibility, benefits, LOI process, and how ADON can help you get registered.",
    content: `The Sustainable Alternative Towards Affordable Transportation (SATAT) initiative was launched by the Government of India in October 2018 to promote the production and availability of Compressed Biogas as an alternative green transport fuel.

**What SATAT Offers:**
- Assured offtake by Oil Marketing Companies (OMCs) — IOC, BPCL, HPCL
- Guaranteed purchase price for CBG (currently ₹54/kg, periodically revised)
- Long-term contracts (10-15 years) providing revenue visibility
- Expression of Interest (EOI) process for project registration

**Eligibility:**
- Any entrepreneur, company, or cooperative can apply
- Minimum plant capacity: 2 TPD (tonnes per day)
- Must use organic/biomass feedstock
- Plant must meet BIS standards for CBG quality (IS 16087:2016)

**How to Apply:**
1. Submit Expression of Interest (EOI) on the SATAT portal
2. OMC evaluates feasibility and location
3. Letter of Intent (LOI) issued upon approval
4. Entrepreneur sets up plant within stipulated timeline
5. CBG procurement agreement executed with OMC

**How ADON Helps:**
As an experienced EPC partner, we guide clients through the entire SATAT registration process, prepare detailed project reports (DPRs), assist with EOI submissions, and ensure plant designs meet all BIS and OMC specifications.`,
    readTime: "7 min read",
    date: "2024-11-20",
    slug: "satat-scheme-explained",
  },
  {
    id: "mnre-subsidy",
    title: "MNRE Central Financial Assistance for CBG Projects",
    category: "Scheme",
    excerpt: "How to leverage MNRE subsidies to reduce your CBG plant capital cost by up to 50% — eligibility criteria, application process, and timelines.",
    content: `The Ministry of New and Renewable Energy (MNRE) provides Central Financial Assistance (CFA) for setting up Biogas/CBG plants under its Waste to Energy programme. This subsidy can significantly reduce the upfront capital cost of a CBG project.

**Subsidy Details:**
- CFA of up to ₹4 crore per project (varies by plant capacity and category)
- Covers up to 30-50% of project cost for eligible categories
- Additional incentives for SC/ST entrepreneurs and women-led projects
- Available for plants using various feedstocks (agricultural, industrial, MSW)

**Eligibility:**
- Plant must be set up in India
- Must use approved anaerobic digestion technology
- Plant capacity must meet minimum thresholds
- Entrepreneur must not have received similar central subsidy for the same project

**Application Process:**
1. Prepare Detailed Project Report (DPR)
2. Submit application through MNRE/State Nodal Agency
3. Technical evaluation and site inspection
4. Sanction of CFA with milestone-based disbursement
5. Commissioning verification and final installment release

**ADON's Role:**
We prepare bankable DPRs, coordinate with state nodal agencies, ensure technical compliance, and manage the subsidy application timeline alongside your plant construction schedule.`,
    readTime: "6 min read",
    date: "2024-10-10",
    slug: "mnre-subsidy-guide",
  },
  {
    id: "licensing-checklist",
    title: "Complete Licensing Checklist for CBG Projects in India",
    category: "Checklist",
    excerpt: "A step-by-step guide to all the licenses, permits, and approvals required to set up a CBG plant — from environmental clearance to PESO certification.",
    content: `Setting up a CBG plant in India requires multiple licenses and approvals from various government bodies. Missing even one can delay your project by months. Here's the complete checklist:

**Environmental & Pollution Control:**
- Environmental Clearance (EC) from SEIAA/MoEFCC
- Consent to Establish (CTE) from State Pollution Control Board
- Consent to Operate (CTO) from State Pollution Control Board
- Hazardous waste authorization (if applicable)

**Safety & Explosives:**
- PESO (Petroleum & Explosives Safety Organisation) license for gas storage
- Fire NOC from local fire department
- Factory license under Factories Act

**Land & Municipal:**
- Land use change permission (if agricultural land)
- Building plan approval from local authority
- Water supply connection approval
- Electricity connection (HT/LT)

**Industry & Commerce:**
- GST registration
- MSME/Udyam registration (if applicable)
- Company incorporation (if new entity)
- FSSAI license (for bio-fertilizer sales)

**Gas & Energy Specific:**
- SATAT LOI from OMC
- PNGRB authorization (for pipeline injection)
- BIS certification for CBG quality
- Weights & Measures approval for dispensing

**ADON's Licensing Support:**
Our team assists with preparing applications, coordinating with regulatory bodies, and managing the complete licensing timeline to ensure your project stays on track.`,
    readTime: "8 min read",
    date: "2024-09-05",
    slug: "licensing-checklist-cbg",
  },
];
