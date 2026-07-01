"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Leaf } from "lucide-react";
import Container from "@/components/ui/Container";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Plant Design & Engineering", href: "/services#plant-design" },
    { label: "Anaerobic Digestion", href: "/services#anaerobic-digestion" },
    { label: "VPSA Purification", href: "/services#vpsa-purification" },
    { label: "Compression & Bottling", href: "/services#compression-bottling" },
    { label: "Bio-Fertilizer Systems", href: "/services#bio-fertilizer" },
  ],
  industries: [
    { label: "Agriculture", href: "/industries#agriculture" },
    { label: "Sugar & Distillery", href: "/industries#sugar-distillery" },
    { label: "Food & FMCG", href: "/industries#food-fmcg" },
    { label: "Municipal Solid Waste", href: "/industries#municipal-solid-waste" },
    { label: "Dairy & Poultry", href: "/industries#dairy-poultry" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-900 text-steel-300" role="contentinfo">
      {/* Main Footer */}
      <Container className="pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-forest-600 to-forest-400 shadow-md">
                <span className="font-heading font-bold text-white text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-lg leading-tight">ADON</span>
                <span className="text-[0.625rem] font-semibold text-forest-400 tracking-widest uppercase leading-tight">
                  Green Energy
                </span>
              </div>
            </Link>
            <p className="text-body-sm leading-relaxed text-steel-400 mb-6 max-w-xs">
              India&apos;s specialist EPC company delivering end-to-end Compressed Biogas plant
              solutions — from design to commissioning.
            </p>
            <div className="space-y-3 text-body-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-forest-500 shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <a href="tel:+919825000000" className="flex items-center gap-3 hover:text-forest-400 transition-colors">
                <Phone className="h-4 w-4 text-forest-500 shrink-0" />
                <span>+91 98250 XXXXX</span>
              </a>
              <a href="mailto:info@adongreenenergy.in" className="flex items-center gap-3 hover:text-forest-400 transition-colors">
                <Mail className="h-4 w-4 text-forest-500 shrink-0" />
                <span>info@adongreenenergy.in</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-white text-body-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-steel-400 hover:text-forest-400 transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-white text-body-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-steel-400 hover:text-forest-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-white text-body-sm uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-steel-400 hover:text-forest-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SATAT Badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-forest-900/50 border border-forest-700/30">
              <Leaf className="h-4 w-4 text-forest-500" />
              <span className="text-caption font-semibold text-forest-400">SATAT Registered</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-steel-800">
        <Container className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4 text-caption text-steel-500">
          <p>
            © {currentYear} ADON Equipments Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-forest-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-forest-400 transition-colors">Terms of Service</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
