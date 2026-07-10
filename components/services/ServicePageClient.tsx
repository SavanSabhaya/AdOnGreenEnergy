"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ServiceContent } from "@/lib/data/services";

export default function ServicePageClient({ service }: { service: ServiceContent }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-forest-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/patterns/topography.svg')] bg-cover bg-center" />
        </div>
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6"
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg text-forest-200">
              {service.shortDescription}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-steel-900 leading-tight">
                Empowering your business with <span className="text-forest-600">{service.title}</span>
              </h2>
              <p className="text-lg text-steel-600 leading-relaxed whitespace-pre-wrap">
                {service.description}
              </p>
              
              <div className="pt-4">
                <Button href="/contact" variant="primary" size="lg" className="gap-2">
                  Discuss Your Project <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square sm:aspect-video lg:aspect-square bg-steel-100"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-steel-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-900 mb-6">
              Key Benefits & Features
            </h2>
            <p className="text-lg text-steel-600">
              Discover how our {service.title} services can bring unparalleled value and efficiency to your next green energy project.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white p-8 rounded-3xl shadow-soft hover:shadow-elevated transition-shadow border border-steel-100 group"
              >
                <div className="h-12 w-12 rounded-xl bg-forest-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="h-6 w-6 text-forest-600" />
                </div>
                <h3 className="text-xl font-bold text-steel-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-steel-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-forest-600">
        <div className="absolute inset-0 bg-[url('/images/patterns/topography.svg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to transform your green energy vision into reality?
            </h2>
            <p className="text-xl text-forest-100 max-w-2xl mx-auto">
              Get in touch with our experts today to discuss how our {service.title} can accelerate your project's success.
            </p>
            <div className="pt-4">
              <Button href="/contact" size="lg" className="!bg-white !text-forest-700 hover:!bg-forest-700 hover:!text-white border-2 border-transparent shadow-xl shadow-forest-900/20 transition-all duration-300">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
