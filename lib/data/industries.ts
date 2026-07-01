export interface Industry {
  id: string;
  title: string;
  feedstockType: string;
  description: string;
  valueProposition: string;
  icon: string;
}

export const industries: Industry[] = [
  {
    id: "agriculture",
    title: "Agriculture & Agro-Based",
    feedstockType: "Crop residue, paddy straw, sugarcane trash, corn stalks, vegetable waste",
    description: "India's agricultural sector generates over 500 million tonnes of crop residue annually — most of it burned, causing severe air pollution. We convert this waste into clean fuel and organic fertilizer.",
    valueProposition: "Eliminate crop residue burning, earn carbon credits, and produce CBG + organic manure from farm waste that currently costs money to dispose of.",
    icon: "Tractor",
  },
  {
    id: "sugar-distillery",
    title: "Sugar & Distillery",
    feedstockType: "Press mud, spent wash, bagasse, molasses waste",
    description: "Sugar mills and distilleries produce enormous quantities of organic by-products. Our CBG plants turn press mud and spent wash into high-value compressed biogas and bio-fertilizer.",
    valueProposition: "Transform environmental liabilities (press mud, spent wash) into revenue-generating CBG, reduce effluent treatment costs, and meet zero liquid discharge (ZLD) mandates.",
    icon: "Factory",
  },
  {
    id: "food-fmcg",
    title: "Food & FMCG",
    feedstockType: "Food processing waste, kitchen waste, expired packaged food, organic sludge",
    description: "Food processing plants and FMCG manufacturers generate consistent volumes of organic waste. We design CBG plants that handle the variable composition of food waste streams reliably.",
    valueProposition: "Convert disposal costs into fuel revenue, achieve sustainability targets, and reduce your carbon footprint with on-site or co-located CBG production.",
    icon: "UtensilsCrossed",
  },
  {
    id: "municipal-solid-waste",
    title: "Municipal Solid Waste",
    feedstockType: "Segregated organic MSW, market waste, biodegradable urban waste",
    description: "Urban India produces over 150,000 tonnes of MSW daily. Our CBG plants process the organic fraction (40-60% of total MSW) into clean fuel, supporting Swachh Bharat and GOBARdhan objectives.",
    valueProposition: "Address urban waste management mandates, generate revenue from waste, reduce landfill dependency, and produce clean fuel for city transport fleets.",
    icon: "Building2",
  },
  {
    id: "dairy-poultry",
    title: "Dairy & Poultry",
    feedstockType: "Cattle dung, poultry litter, slaughterhouse waste, dairy effluent",
    description: "India's massive dairy and poultry sectors generate millions of tonnes of organic waste. Our CBG plants are specifically designed for the high-nitrogen, high-moisture content of animal waste streams.",
    valueProposition: "Turn waste management headaches into profit centers — produce CBG, organic manure, and liquid fertilizer while meeting CPCB waste processing requirements.",
    icon: "Milk",
  },
];
