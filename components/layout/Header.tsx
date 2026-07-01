"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-forest-900 text-white">
        <Container className="flex items-center justify-between py-2 text-body-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919825000000" className="flex items-center gap-2 hover:text-forest-300 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 98250 XXXXX</span>
            </a>
            <a href="mailto:info@adongreenenergy.in" className="flex items-center gap-2 hover:text-forest-300 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>info@adongreenenergy.in</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-caption text-forest-200">
            <span>SATAT Registered EPC Partner</span>
            <span className="w-px h-4 bg-forest-700" />
            <span>Ahmedabad, India</span>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-soft border-b border-steel-100"
            : "bg-white/80 backdrop-blur-md"
        )}
      >
        <Container className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="ADON Green Energy Home">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-forest-700 to-forest-500 shadow-md group-hover:shadow-lg transition-shadow">
              <span className="font-heading font-bold text-white text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-steel-900 text-lg leading-tight tracking-tight">
                ADON
              </span>
              <span className="text-[0.625rem] font-semibold text-forest-600 tracking-widest uppercase leading-tight">
                Green Energy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 text-body-sm font-medium rounded-lg transition-colors duration-200",
                    isActive
                      ? "text-forest-700"
                      : "text-steel-600 hover:text-forest-700 hover:bg-forest-50"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-forest-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
              id="header-cta"
            >
              Get Consultation
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-steel-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-steel-700" />
              ) : (
                <Menu className="h-5 w-5 text-steel-700" />
              )}
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 w-[85%] max-w-sm h-full bg-white shadow-elevated overflow-y-auto lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-4 border-b border-steel-100">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-forest-700 to-forest-500">
                    <span className="font-heading font-bold text-white text-sm">A</span>
                  </div>
                  <span className="font-heading font-bold text-steel-900">ADON</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-steel-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-steel-700" />
                </button>
              </div>

              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-body font-medium transition-colors",
                          isActive
                            ? "bg-forest-50 text-forest-700 font-semibold"
                            : "text-steel-700 hover:bg-steel-50"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-4 mt-4 border-t border-steel-100">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Get Free Consultation
                </Button>
                <div className="mt-6 space-y-3 text-body-sm text-steel-500">
                  <a href="tel:+919825000000" className="flex items-center gap-2 hover:text-forest-600">
                    <Phone className="h-4 w-4" />
                    +91 98250 XXXXX
                  </a>
                  <a href="mailto:info@adongreenenergy.in" className="flex items-center gap-2 hover:text-forest-600">
                    <Mail className="h-4 w-4" />
                    info@adongreenenergy.in
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
