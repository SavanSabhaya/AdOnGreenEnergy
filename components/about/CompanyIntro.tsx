"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function CompanyIntro() {
  return (
    <section className="py-24 bg-white relative">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <SectionHeading
              badge="Our Story"
              title="Pioneering India's CBG Revolution"
              className="mb-6"
            />
            <p className="text-lg text-steel-600 leading-relaxed mb-6">
              ADON Equipments is an engineering and technology-driven company focused on development of Compressed Biogas (CBG) and biogas projects in India. We provide integrated solutions converting organic waste and biomass into clean renewable energy.
            </p>
            <p className="text-lg text-steel-600 leading-relaxed">
              We specialize in EPC (Engineering, Procurement & Construction) services: plant design, equipment supply, installation, commissioning, and technical support. Our operations are fully aligned with India's SATAT Scheme (Sustainable Alternative Towards Affordable Transportation).
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-elevated">
            <ImagePlaceholder
              src="/images/company/about.png"
              alt="Engineering office"
              fill
              className="object-cover"
              isPlaceholder={true}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-forest-50 p-8 rounded-2xl border border-forest-100">
            <h3 className="font-heading text-2xl font-bold text-forest-800 mb-4">Our Vision</h3>
            <p className="text-forest-700 leading-relaxed">
              "To become a leading provider of sustainable waste-to-energy solutions and contribute to India's transition toward clean and renewable energy."
            </p>
          </div>
          <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
            <h3 className="font-heading text-2xl font-bold text-amber-800 mb-4">Our Mission</h3>
            <p className="text-amber-800 leading-relaxed">
              "To become a leading force in sustainable energy by transforming agricultural waste into clean, renewable CBG – empowering rural communities, reducing carbon emissions, and supporting India's journey toward a greener, energy-secure future."
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
