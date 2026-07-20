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
              <h3 className="font-bold text-steel-900 mb-1">Sales & Marketing</h3>
              <p className="text-steel-600 font-medium">Mr. Ankit R Jagani</p>
              <a href="tel:+918200517219" className="text-forest-600 font-medium hover:text-forest-700 transition-colors">+91-82005 17219</a>
              <p className="text-steel-500 text-sm">info@adongreenenergy.in</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0 text-forest-600">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-steel-900 mb-1">Project & Service</h3>
              <p className="text-steel-600 font-medium">Mr. Gajendra Saini</p>
              <a href="tel:+916357099393" className="text-forest-600 font-medium hover:text-forest-700 transition-colors">+91-63570 99393</a>
              <p className="text-steel-500 text-sm">sales@adongreenenergy.in</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center shrink-0 text-forest-600">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-steel-900 mb-1">Corporate Office</h3>
              <p className="text-steel-600 leading-relaxed">
                B-608, Shalin Square,<br />
                Near Hathijan Circle, Vatva<br />
                Ahmedabad - 382445
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
