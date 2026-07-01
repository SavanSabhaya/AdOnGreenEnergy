"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactInfo() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full justify-between">
      <div>
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-steel-900 mb-4">Get in Touch</h2>
          <p className="text-steel-600 text-lg leading-relaxed">
            Whether you have a question about technology selection, need a quote for an EPC contract, or want to explore subsidy eligibility, our team is ready to answer all your questions.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div variants={fadeInUp} className="flex gap-4">
            <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0 text-forest-600">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-steel-900 mb-1">Sales & Business Development</h3>
              <p className="text-steel-600 mb-1 font-medium">+91 98XXX XXXXX</p>
              <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider bg-amber-50 inline-block px-2 py-0.5 rounded border border-amber-200 mt-1">Contact details pending client confirmation</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0 text-forest-600">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-steel-900 mb-1">Technical / Project Support</h3>
              <p className="text-steel-600 mb-1 font-medium">projects@adongreenenergy.in</p>
              <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider bg-amber-50 inline-block px-2 py-0.5 rounded border border-amber-200 mt-1">Contact details pending client confirmation</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0 text-forest-600">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-steel-900 mb-1">Corporate Office</h3>
              <p className="text-steel-600 mb-1">Ahmedabad, Gujarat, India</p>
              <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider bg-amber-50 inline-block px-2 py-0.5 rounded border border-amber-200 mt-1">Address pending client confirmation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
