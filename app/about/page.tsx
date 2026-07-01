import CompanyIntro from "@/components/about/CompanyIntro";
import Leadership from "@/components/about/Leadership";
import Timeline from "@/components/about/Timeline";
import Locations from "@/components/about/Locations";

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-20 lg:py-28 bg-forest-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight mb-6">
            About <span className="text-amber-400">ADON</span>
          </h1>
          <p className="text-lg text-forest-200 max-w-2xl mx-auto">
            Supporting India's Green Fuel Revolution through CBG.
          </p>
        </div>
      </section>

      <CompanyIntro />
      <Leadership />
      <Timeline />
      <Locations />
    </>
  );
}
