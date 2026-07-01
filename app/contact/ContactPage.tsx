"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/lib/data/team";
import { MapPin, Phone, Mail, Clock, Send, User, Building2, Zap, Wheat, MessageSquare, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    capacity: "",
    feedstock: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-28 gradient-bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-white/10 text-forest-300 border border-white/10">Get In Touch</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-h1 font-bold text-white tracking-tight max-w-3xl">
              Let&apos;s Build Your <span className="text-amber-400">CBG Plant</span> Together
            </h1>
            <p className="mt-6 text-lg text-steel-300 max-w-2xl leading-relaxed">
              Reach out for a free consultation. Our team will assess your requirements and provide a clear path to your first CBG project.
            </p>
          </motion.div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="py-section">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info — left */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <h2 className="font-heading text-h3 font-bold text-steel-950 mb-6">Contact Information</h2>

                <div className="space-y-6 mb-8">
                  {/* Corporate Office */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-forest-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-body-sm font-bold text-steel-800">Corporate Office</h3>
                      <p className="text-body-sm text-steel-500 mt-1">{companyInfo.locations.headquarters.fullAddress}</p>
                    </div>
                  </div>

                  {/* Manufacturing */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-forest-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-body-sm font-bold text-steel-800">Manufacturing Facility</h3>
                      <p className="text-body-sm text-steel-500 mt-1">{companyInfo.locations.manufacturing.fullAddress}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-forest-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-body-sm font-bold text-steel-800">Phone</h3>
                      <a href="tel:+919825000000" className="text-body-sm text-steel-500 hover:text-forest-600 transition-colors mt-1 block">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-forest-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-body-sm font-bold text-steel-800">Email</h3>
                      <a href={`mailto:${companyInfo.email}`} className="text-body-sm text-steel-500 hover:text-forest-600 transition-colors mt-1 block">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-forest-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-body-sm font-bold text-steel-800">Business Hours</h3>
                      <p className="text-body-sm text-steel-500 mt-1">Mon–Sat: 9:00 AM – 6:00 PM IST</p>
                    </div>
                  </div>
                </div>

                {/* Key Contacts */}
                <h3 className="font-heading text-body font-bold text-steel-900 mb-4">Key Contacts</h3>
                <div className="space-y-4">
                  {Object.values(companyInfo.contacts).map((contact) => (
                    <div key={contact.name} className="p-4 rounded-xl bg-forest-50 border border-forest-100">
                      <div className="font-heading text-body-sm font-bold text-steel-800">{contact.name}</div>
                      <div className="text-caption text-forest-600 font-medium">{contact.title}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Form — right */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-card border border-steel-100">
                  {isSubmitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-forest-50 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-10 w-10 text-forest-600" />
                      </div>
                      <h3 className="font-heading text-h3 font-bold text-steel-900 mb-2">Message Sent!</h3>
                      <p className="text-body text-steel-500 max-w-md mx-auto">
                        Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="font-heading text-h3 font-bold text-steel-950 mb-2">Send Us a Message</h2>
                      <p className="text-body-sm text-steel-500 mb-6">Fill out the form and our team will get back to you within 24 hours.</p>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className="block text-body-sm font-medium text-steel-700 mb-1.5">Full Name *</label>
                          <input id="contact-name" type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 border border-steel-200 rounded-xl text-body-sm text-steel-900 placeholder:text-steel-400 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors"
                            placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-body-sm font-medium text-steel-700 mb-1.5">Email *</label>
                          <input id="contact-email" type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 border border-steel-200 rounded-xl text-body-sm text-steel-900 placeholder:text-steel-400 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors"
                            placeholder="you@company.com" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-phone" className="block text-body-sm font-medium text-steel-700 mb-1.5">Phone Number</label>
                          <input id="contact-phone" type="tel" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-steel-200 rounded-xl text-body-sm text-steel-900 placeholder:text-steel-400 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors"
                            placeholder="+91..." />
                        </div>
                        <div>
                          <label htmlFor="contact-company" className="block text-body-sm font-medium text-steel-700 mb-1.5">Company</label>
                          <input id="contact-company" type="text" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            className="w-full px-4 py-3 border border-steel-200 rounded-xl text-body-sm text-steel-900 placeholder:text-steel-400 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors"
                            placeholder="Company name" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-capacity" className="block text-body-sm font-medium text-steel-700 mb-1.5">Plant Capacity</label>
                          <select id="contact-capacity" value={formState.capacity} onChange={(e) => setFormState({ ...formState, capacity: e.target.value })}
                            className="w-full px-4 py-3 border border-steel-200 rounded-xl text-body-sm text-steel-900 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors appearance-none bg-white">
                            <option value="">Select capacity</option>
                            <option value="2-5">2–5 TPD</option>
                            <option value="5-10">5–10 TPD</option>
                            <option value="10-15">10–15 TPD</option>
                            <option value="15+">15+ TPD</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="contact-feedstock" className="block text-body-sm font-medium text-steel-700 mb-1.5">Feedstock Type</label>
                          <select id="contact-feedstock" value={formState.feedstock} onChange={(e) => setFormState({ ...formState, feedstock: e.target.value })}
                            className="w-full px-4 py-3 border border-steel-200 rounded-xl text-body-sm text-steel-900 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors appearance-none bg-white">
                            <option value="">Select feedstock</option>
                            <option value="agricultural">Agricultural Residue</option>
                            <option value="dairy">Dairy / Cattle Waste</option>
                            <option value="poultry">Poultry Litter</option>
                            <option value="food">Food / FMCG Waste</option>
                            <option value="msw">Municipal Solid Waste</option>
                            <option value="sugar">Sugar / Distillery Waste</option>
                            <option value="mixed">Mixed / Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className="block text-body-sm font-medium text-steel-700 mb-1.5">Subject *</label>
                        <input id="contact-subject" type="text" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-steel-200 rounded-xl text-body-sm text-steel-900 placeholder:text-steel-400 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors"
                          placeholder="How can we help?" />
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-body-sm font-medium text-steel-700 mb-1.5">Message *</label>
                        <textarea id="contact-message" rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 border border-steel-200 rounded-xl text-body-sm text-steel-900 placeholder:text-steel-400 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors resize-none"
                          placeholder="Tell us about your project, feedstock availability, location, and any specific requirements..." />
                      </div>

                      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting} icon={Send} id="contact-submit">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
