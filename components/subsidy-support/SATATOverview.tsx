"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { FileSignature, Store, TrendingUp, Handshake } from "lucide-react";

export default function SATATOverview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Guaranteed Revenue"
          title="The SATAT Scheme Explained"
          description="Sustainable Alternative Towards Affordable Transportation (SATAT) is the Ministry of Petroleum & Natural Gas initiative targeting 5,000+ CBG plants nationally."
          centered
          className="mb-16"
        />

        <div className="max-w-5xl mx-auto">
          <div className="bg-steel-50 rounded-2xl p-8 border border-steel-200 mb-12">
            <h3 className="font-heading text-2xl font-bold text-steel-900 mb-4 text-center">Assured Offtake via LOI</h3>
            <p className="text-steel-600 text-center max-w-3xl mx-auto text-lg leading-relaxed">
              The SATAT scheme mitigates market risk by offering a guaranteed purchase mechanism. Developers receive a Letter of Intent (LOI) from major Oil Marketing Companies (OMCs) ensuring that 100% of their CBG production is purchased at fixed, indexed prices for long-term viability.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeInUp} className="flex gap-4 p-6 rounded-xl border border-steel-100 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0 text-forest-600">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-steel-900 text-lg mb-1">OMC Partners</h4>
                <p className="text-steel-600 text-sm">Backed by India's largest petroleum networks including IOC, BPCL, HPCL, GAIL, ATGL, and GGL.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 p-6 rounded-xl border border-steel-100 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0 text-forest-600">
                <FileSignature className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-steel-900 text-lg mb-1">Long-Term Contracts</h4>
                <p className="text-steel-600 text-sm">Secure commercial agreements spanning 10 to 15 years, providing bankable financial security.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 p-6 rounded-xl border border-steel-100 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0 text-forest-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-steel-900 text-lg mb-1">Fixed Indexed Pricing</h4>
                <p className="text-steel-600 text-sm">Transparent pricing structure shielded from crude oil market volatility, ensuring stable cash flows.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 p-6 rounded-xl border border-steel-100 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0 text-forest-600">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-steel-900 text-lg mb-1">Priority Project Support</h4>
                <p className="text-steel-600 text-sm">SATAT registered projects receive expedited clearances and priority support from state nodal agencies.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
