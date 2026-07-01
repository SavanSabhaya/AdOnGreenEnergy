"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { Send, User, Building2, Zap, Wheat, MessageSquare } from "lucide-react";

export default function CTABanner() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    capacity: "",
    feedstock: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call — replace with actual fetch to backend
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", company: "", capacity: "", feedstock: "", message: "" });
  };

  return (
    <section className="py-section gradient-bg-dark text-white relative overflow-hidden" aria-label="Contact form">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-forest-500/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-[100px]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <ScrollReveal direction="left">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-caption font-semibold tracking-widest uppercase mb-4 bg-forest-900/50 text-forest-400 border border-forest-700/30">
                Start Your CBG Journey
              </span>
              <h2 className="font-heading text-h1 font-bold text-white tracking-tight">
                Ready to Build Your{" "}
                <span className="text-amber-400">CBG Plant?</span>
              </h2>
              <p className="mt-6 text-body-lg text-steel-300 leading-relaxed">
                Get a free consultation with our EPC team. We&apos;ll assess your feedstock,
                location, and capacity requirements — and provide a clear roadmap to your
                first plant.
              </p>
              <div className="mt-8 space-y-4 text-body-sm text-steel-400">
                {[
                  "Free feasibility assessment",
                  "SATAT registration guidance",
                  "MNRE subsidy eligibility check",
                  "Customized plant design proposal",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right">
            <div className="glass-card-dark rounded-2xl p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-forest-600/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-forest-400" />
                  </div>
                  <h3 className="font-heading text-h3 font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-steel-300">
                    We&apos;ve received your inquiry. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-heading text-h4 font-bold text-white mb-4">
                    Get a Free Plant Consultation
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-name" className="block text-caption font-medium text-steel-300 mb-1.5">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-steel-500" />
                        <input
                          id="cta-name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-body-sm placeholder:text-steel-500 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors"
                          placeholder="Full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cta-company" className="block text-caption font-medium text-steel-300 mb-1.5">
                        Company
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-steel-500" />
                        <input
                          id="cta-company"
                          type="text"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-body-sm placeholder:text-steel-500 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-capacity" className="block text-caption font-medium text-steel-300 mb-1.5">
                        Plant Capacity Interested
                      </label>
                      <div className="relative">
                        <Zap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-steel-500" />
                        <select
                          id="cta-capacity"
                          value={formState.capacity}
                          onChange={(e) => setFormState({ ...formState, capacity: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-body-sm focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors appearance-none"
                        >
                          <option value="" className="bg-steel-900">Select capacity</option>
                          <option value="2-5" className="bg-steel-900">2–5 TPD</option>
                          <option value="5-10" className="bg-steel-900">5–10 TPD</option>
                          <option value="10-15" className="bg-steel-900">10–15 TPD</option>
                          <option value="15+" className="bg-steel-900">15+ TPD</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cta-feedstock" className="block text-caption font-medium text-steel-300 mb-1.5">
                        Feedstock Type
                      </label>
                      <div className="relative">
                        <Wheat className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-steel-500" />
                        <select
                          id="cta-feedstock"
                          value={formState.feedstock}
                          onChange={(e) => setFormState({ ...formState, feedstock: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-body-sm focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors appearance-none"
                        >
                          <option value="" className="bg-steel-900">Select feedstock</option>
                          <option value="agricultural" className="bg-steel-900">Agricultural Residue</option>
                          <option value="dairy" className="bg-steel-900">Dairy / Cattle Waste</option>
                          <option value="poultry" className="bg-steel-900">Poultry Litter</option>
                          <option value="food" className="bg-steel-900">Food / FMCG Waste</option>
                          <option value="msw" className="bg-steel-900">Municipal Solid Waste</option>
                          <option value="sugar" className="bg-steel-900">Sugar / Distillery Waste</option>
                          <option value="mixed" className="bg-steel-900">Mixed / Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cta-message" className="block text-caption font-medium text-steel-300 mb-1.5">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-steel-500" />
                      <textarea
                        id="cta-message"
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-body-sm placeholder:text-steel-500 focus:border-forest-500 focus:ring-1 focus:ring-forest-500 outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full mt-2"
                    disabled={isSubmitting}
                    icon={Send}
                    id="cta-submit-button"
                  >
                    {isSubmitting ? "Sending..." : "Request Free Consultation"}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
