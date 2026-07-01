"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const capacities = ["0.5", "1.0", "2.0", "2.5", "3.0", "5.0", "6.0", "8.0", "10.0", "12.0", "15.0"];
const feedstocks = ["Agri Residue", "Napier Grass", "Cow Dung", "Food Waste", "MSW", "Press Mud / Spent Wash", "Other"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");
      
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-steel-200 shadow-elevated relative overflow-hidden">
      <AnimatePresence>
        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 right-0 bg-forest-50 border-b border-forest-200 p-4 flex items-center justify-center gap-2 text-forest-700 z-10"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">Thank you! We have received your inquiry and will contact you shortly.</span>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 right-0 bg-amber-50 border-b border-amber-200 p-4 flex items-center justify-center gap-2 text-amber-700 z-10"
          >
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Something went wrong. Please try again or contact us directly.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6 pt-4">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-steel-700 mb-1.5">Full Name *</label>
            <input required type="text" id="name" name="name" className="w-full bg-steel-50 border border-steel-200 rounded-lg px-4 py-3 text-steel-900 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-bold text-steel-700 mb-1.5">Company / Organization *</label>
            <input required type="text" id="company" name="company" className="w-full bg-steel-50 border border-steel-200 rounded-lg px-4 py-3 text-steel-900 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all" placeholder="Green Energy Solutions Ltd." />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-steel-700 mb-1.5">Email Address *</label>
            <input required type="email" id="email" name="email" className="w-full bg-steel-50 border border-steel-200 rounded-lg px-4 py-3 text-steel-900 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all" placeholder="john@example.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-steel-700 mb-1.5">Phone Number *</label>
            <input required type="tel" id="phone" name="phone" className="w-full bg-steel-50 border border-steel-200 rounded-lg px-4 py-3 text-steel-900 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all" placeholder="+91 98765 43210" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="capacity" className="block text-sm font-bold text-steel-700 mb-1.5">Plant Capacity (TPD)</label>
            <select id="capacity" name="capacity" className="w-full bg-steel-50 border border-steel-200 rounded-lg px-4 py-3 text-steel-900 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all appearance-none">
              <option value="">Select Capacity...</option>
              {capacities.map(c => <option key={c} value={c}>{c} TPD</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="feedstock" className="block text-sm font-bold text-steel-700 mb-1.5">Primary Feedstock</label>
            <select id="feedstock" name="feedstock" className="w-full bg-steel-50 border border-steel-200 rounded-lg px-4 py-3 text-steel-900 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all appearance-none">
              <option value="">Select Feedstock...</option>
              {feedstocks.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-steel-700 mb-1.5">Project Details / Message</label>
          <textarea id="message" name="message" rows={4} className="w-full bg-steel-50 border border-steel-200 rounded-lg px-4 py-3 text-steel-900 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your project location, timeline, and any specific requirements..."></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </form>
    </div>
  );
}
