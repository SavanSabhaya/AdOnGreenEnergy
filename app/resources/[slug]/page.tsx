import { notFound } from "next/navigation";
import Link from "next/link";

export const runtime = "edge";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowLeft, Clock, Share2, Link as LinkIcon, MessageCircle } from "lucide-react";
import { articlesData } from "@/lib/data/articles";

// Static generation
export function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

const articleContent: Record<string, React.ReactNode> = {
  "what-is-cbg": (
    <div className="prose prose-lg prose-steel max-w-none">
      <p className="lead text-xl text-steel-600 mb-8">
        Compressed Biogas (CBG) is a green, renewable fuel produced through the anaerobic decomposition of biomass and organic waste sources. It is chemically identical to commercially available natural gas (CNG), but unlike fossil fuels, it is entirely renewable and carbon-neutral.
      </p>
      
      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">The Feedstock Ecosystem</h3>
      <p>
        CBG can be produced from a wide variety of organic materials. This versatility makes it an incredibly robust energy solution. Common feedstocks include:
      </p>
      <ul className="list-disc pl-6 mb-8 text-steel-700">
        <li><strong>Agricultural Residue:</strong> Paddy straw, wheat husk, and dedicated energy crops like Napier grass.</li>
        <li><strong>Agro-Food Waste:</strong> Press mud and spent wash from sugar mills and distilleries.</li>
        <li><strong>Animal Waste:</strong> Cattle dung and poultry litter.</li>
        <li><strong>Municipal Solid Waste (MSW):</strong> The organic, wet fraction of urban waste.</li>
      </ul>

      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">The CBG Production Process</h3>
      <p>
        Converting raw organic waste into high-purity pipeline-quality gas involves a multi-stage engineered process:
      </p>
      <ol className="list-decimal pl-6 mb-8 text-steel-700 space-y-4">
        <li><strong>Feedstock Pre-treatment:</strong> Raw waste is shredded, sorted, and mixed with water or digestate to create a homogenous slurry.</li>
        <li><strong>Anaerobic Digestion:</strong> The slurry enters a sealed digester tank (CSTR). In the absence of oxygen, bacteria break down the organic matter, producing raw biogas (roughly 55-60% Methane, 40% CO2, and traces of H2S).</li>
        <li><strong>Purification (Upgrading):</strong> This is the critical step. Raw biogas cannot be used in vehicles. It passes through advanced systems like VPSA (Vacuum Pressure Swing Adsorption) or membrane separation to strip away H2S, moisture, and CO2, resulting in biomethane with over 96% purity.</li>
        <li><strong>Compression & Bottling:</strong> The purified biomethane is compressed up to 250 bar into cascades, ready for transport, or injected directly into City Gas Distribution (CGD) pipelines.</li>
        <li><strong>Bio-Fertilizer Recovery:</strong> The leftover digestate is processed through a Solid-Liquid Separator (SLS) to yield high-quality dry organic manure and liquid fertilizer.</li>
      </ol>
    </div>
  ),
  "satat-scheme-explained": (
    <div className="prose prose-lg prose-steel max-w-none">
      <p className="lead text-xl text-steel-600 mb-8">
        Launched by the Ministry of Petroleum and Natural Gas (MoPNG), the SATAT (Sustainable Alternative Towards Affordable Transportation) scheme is the driving force behind India's CBG revolution, providing the critical commercial framework needed to make waste-to-energy projects bankable.
      </p>

      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">The Vision</h3>
      <p>
        The SATAT initiative was launched with an ambitious national target: the establishment of 5,000 CBG plants across India to produce 15 Million Metric Tonnes (MMT) of CBG annually. This aligns with national goals to reduce crude oil imports, manage urban and agricultural waste, and cut carbon emissions.
      </p>

      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">Assured Offtake via LOI</h3>
      <p>
        The biggest challenge for any energy developer is securing a buyer. SATAT solves this through a guaranteed offtake mechanism. Developers can secure a Letter of Intent (LOI) from major Oil Marketing Companies (OMCs) including IOCL, BPCL, HPCL, GAIL, ATGL, and GGL.
      </p>
      <p>
        Under this LOI, the OMC commits to purchasing the entire CBG production of the plant. This guarantee transforms a risky venture into a highly secure, bankable infrastructure project.
      </p>

      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">Long-Term Pricing Security</h3>
      <p>
        SATAT offers long-term commercial agreements spanning 10 to 15 years. The pricing structure is fixed and indexed, shielding developers from the volatile fluctuations of the global energy market. This predictable cash flow is exactly what lenders and investors look for when funding greenfield EPC projects.
      </p>
    </div>
  ),
  "mnre-subsidy-guide": (
    <div className="prose prose-lg prose-steel max-w-none">
      <p className="lead text-xl text-steel-600 mb-8">
        To accelerate the adoption of CBG, the Ministry of New and Renewable Energy (MNRE) provides substantial Central Financial Assistance (CFA) under the National Bioenergy Programme. Understanding these tiers is crucial for optimizing your project's ROI.
      </p>

      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">Base Subsidy Tiers</h3>
      <p>
        The CFA is calculated based on the production capacity of the plant. The core subsidy structure is as follows:
      </p>
      <ul className="list-disc pl-6 mb-8 text-steel-700 space-y-2">
        <li><strong>New CBG Plants:</strong> ₹4 Crore per 4,800 kg/day of CBG generation.</li>
        <li><strong>Smaller Plants:</strong> ₹2 Crore per 2,400 kg/day of CBG generation.</li>
        <li><strong>Existing Biogas Conversions:</strong> For existing plants upgrading to CBG, the subsidy is ₹3 Crore per 4,800 kg/day.</li>
      </ul>
      <p>
        <em>Note: The maximum subsidy cap per single project is set at ₹10 Crore.</em>
      </p>

      <div className="bg-forest-50 border border-forest-200 p-6 rounded-xl mb-8">
        <h4 className="font-bold text-forest-900 mb-2">Example Calculation</h4>
        <p className="text-forest-800 m-0">
          If you are developing a standard 10 TPD (10,000 kg/day) CBG plant, you are eligible for approximately ₹8 to ₹10 Crore in central subsidies, significantly reducing your initial capital expenditure.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">Additional Incentives (The 20% Bonus)</h3>
      <p>
        The government provides an extra 20% top-up on the base CFA for projects located in specific strategic or challenging areas. You qualify for this bonus if your plant is:
      </p>
      <ul className="list-disc pl-6 mb-8 text-steel-700">
        <li>Located in North-East states.</li>
        <li>Located in designated hilly regions.</li>
        <li>A registered Gaushala-based project (promoting rural dairy integration).</li>
      </ul>
    </div>
  ),
  "rcc-vs-gfs-digester-tanks": (
    <div className="prose prose-lg prose-steel max-w-none">
      <p className="lead text-xl text-steel-600 mb-8">
        The anaerobic digester tank is the heart of your CBG plant. Choosing between Reinforced Cement Concrete (RCC) and Glass Fused to Steel (GFS) technologies is one of the most critical engineering decisions you will make.
      </p>

      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">RCC (Reinforced Cement Concrete)</h3>
      <p>
        RCC tanks are the traditional backbone of heavy infrastructure. Constructed on-site using M25 to M35 grade concrete and heavy steel reinforcement.
      </p>
      <ul className="list-disc pl-6 mb-8 text-steel-700">
        <li><strong>Lifespan:</strong> 25 to 40 years. Highly durable.</li>
        <li><strong>Construction Time:</strong> 2 to 4 months. Requires extensive on-site civil work and curing time.</li>
        <li><strong>Thermal Insulation:</strong> Excellent natural thermal mass, keeping mesophilic/thermophilic temperatures stable.</li>
        <li><strong>Best For:</strong> Large capacity plants (5 to 50+ TPD) where permanence is key and construction timelines are flexible.</li>
      </ul>

      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">GFS (Glass Fused to Steel)</h3>
      <p>
        GFS tanks are modern, modular solutions. Steel panels are coated with glass enamel and fused at 850°C in a factory, then bolted together on-site.
      </p>
      <ul className="list-disc pl-6 mb-8 text-steel-700">
        <li><strong>Lifespan:</strong> 20 to 30 years. Highly resistant to the corrosive H2S environment inside the digester.</li>
        <li><strong>Construction Time:</strong> 2 to 4 weeks. Factory-manufactured precision allows for rapid deployment.</li>
        <li><strong>Modularity:</strong> Can be dismantled, relocated, or expanded in the future.</li>
        <li><strong>Best For:</strong> Fast-track projects, locations with limited civil labor, or smaller capacity plants (1 to 5 TPD) where speed to commissioning is critical.</li>
      </ul>

      <h3 className="text-2xl font-bold text-steel-900 mt-10 mb-4">The ADON Recommendation Framework</h3>
      <p>
        If your primary constraint is <strong>time-to-market</strong> or you are building on <strong>leased land</strong>, GFS is the superior choice. However, if you are building a <strong>massive, multi-feedstock facility (10+ TPD)</strong> on owned land and want to optimize for the lowest possible 30-year Total Cost of Ownership (TCO), RCC remains the undisputed champion.
      </p>
    </div>
  ),
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData.find((a) => a.slug === params.slug);
  const content = articleContent[params.slug];

  if (!article || !content) {
    notFound();
  }

  const badgeVariant = 
    article.category === "Education" ? "info" :
    article.category === "Policy" ? "warning" :
    article.category === "Finance" ? "success" : "default";

  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-steel-50 border-b border-steel-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link href="/resources" className="inline-flex items-center text-forest-600 font-semibold text-sm uppercase tracking-wider hover:text-forest-800 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <Badge variant={badgeVariant}>{article.category}</Badge>
              <div className="flex items-center gap-1.5 text-steel-500 text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-steel-900 tracking-tight leading-tight mb-6">
              {article.title}
            </h1>
          </div>
        </Container>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12">
            
            {/* Share Sidebar (Desktop) */}
            <div className="hidden md:block w-16 shrink-0 relative">
              <div className="sticky top-32 flex flex-col gap-4 items-center">
                <span className="text-xs font-bold text-steel-400 uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>Share</span>
                <div className="w-[1px] h-12 bg-steel-200 my-2" />
                <button className="w-10 h-10 rounded-full bg-steel-50 border border-steel-200 flex items-center justify-center text-steel-400 hover:text-blue-600 hover:border-blue-200 transition-colors"><LinkIcon className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-full bg-steel-50 border border-steel-200 flex items-center justify-center text-steel-400 hover:text-sky-500 hover:border-sky-200 transition-colors"><MessageCircle className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              {content}

              {/* Share (Mobile) */}
              <div className="md:hidden flex items-center gap-4 mt-12 pt-8 border-t border-steel-100">
                <span className="text-sm font-bold text-steel-400 uppercase tracking-widest flex items-center gap-2"><Share2 className="w-4 h-4" /> Share</span>
                <button className="w-10 h-10 rounded-full bg-steel-50 border border-steel-200 flex items-center justify-center text-steel-400 hover:text-blue-600 transition-colors"><LinkIcon className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-full bg-steel-50 border border-steel-200 flex items-center justify-center text-steel-400 hover:text-sky-500 transition-colors"><MessageCircle className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article CTA */}
      <section className="py-20 bg-forest-900 text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-4">Have Questions About Your CBG Project?</h2>
            <p className="text-forest-200 text-lg mb-8">Our EPC experts are ready to help you navigate technology selection, subsidies, and project planning.</p>
            <Button href="/contact" variant="accent" size="lg" showArrow>
              Talk to Our Team
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
