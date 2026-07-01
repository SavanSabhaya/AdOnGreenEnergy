"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Coins, IndianRupee, TrendingUp } from "lucide-react";

export default function MNRESubsidyBreakdown() {
  return (
    <section className="py-24 bg-forest-50 border-y border-forest-100">
      <Container>
        <SectionHeading
          badge="Capital Support"
          title="MNRE Central Financial Assistance (CFA)"
          description="Direct financial subsidies under the National Bioenergy Programme to lower your initial CAPEX."
          centered
          className="mb-16"
        />

        <div className="max-w-5xl mx-auto">
          {/* Main Tiers */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 border border-forest-100 shadow-sm text-center relative overflow-hidden group hover:border-forest-400 transition-colors">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-forest-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 mx-auto bg-forest-50 rounded-full flex items-center justify-center text-forest-600 mb-6">
                <Coins className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-steel-900 mb-2">New CBG Plants</h3>
              <div className="flex items-center justify-center text-3xl font-heading font-bold text-forest-700 mb-2">
                <IndianRupee className="w-7 h-7 mr-1" />
                <span>4 Crore</span>
              </div>
              <p className="text-sm font-semibold text-steel-500 uppercase tracking-wide">Per 4,800 kg/day capacity</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 border border-forest-100 shadow-sm text-center relative overflow-hidden group hover:border-forest-400 transition-colors">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-forest-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 mx-auto bg-forest-50 rounded-full flex items-center justify-center text-forest-600 mb-6">
                <Coins className="w-8 h-8 scale-75" />
              </div>
              <h3 className="font-bold text-steel-900 mb-2">Smaller Plants</h3>
              <div className="flex items-center justify-center text-3xl font-heading font-bold text-forest-700 mb-2">
                <IndianRupee className="w-7 h-7 mr-1" />
                <span>2 Crore</span>
              </div>
              <p className="text-sm font-semibold text-steel-500 uppercase tracking-wide">Per 2,400 kg/day capacity</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 border border-forest-100 shadow-sm text-center relative overflow-hidden group hover:border-forest-400 transition-colors">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-forest-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-steel-900 mb-2">Existing Conversions</h3>
              <div className="flex items-center justify-center text-3xl font-heading font-bold text-amber-600 mb-2">
                <IndianRupee className="w-7 h-7 mr-1" />
                <span>3 Crore</span>
              </div>
              <p className="text-sm font-semibold text-steel-500 uppercase tracking-wide">Per 4,800 kg/day capacity</p>
            </motion.div>
          </motion.div>

          {/* Max Cap & Example */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-forest-900 rounded-2xl p-8 text-white flex items-center gap-6">
              <div className="w-16 h-16 bg-forest-800 rounded-full flex items-center justify-center shrink-0">
                <IndianRupee className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Maximum Subsidy Cap</h4>
                <p className="text-forest-200">The total MNRE CFA is capped at <strong className="text-white">₹10 Crore</strong> per individual project.</p>
              </div>
            </div>
            
            <div className="bg-amber-100 rounded-2xl p-8 border border-amber-200 flex flex-col justify-center">
              <h4 className="font-bold text-amber-900 mb-2">Worked Example: 10 TPD Plant</h4>
              <p className="text-amber-800 m-0">
                A 10 TPD (10,000 kg/day) CBG plant generates roughly double the 4,800 kg baseline. Under the CFA, this project would be eligible for <strong>₹8 to ₹10 Crore</strong> in total direct subsidy.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
