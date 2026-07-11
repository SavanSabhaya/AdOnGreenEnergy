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
  { 
    label: "Services", 
    href: "/services",
    subLinks: [
      { label: "Turnkey Solution", href: "/services/turnkey-solution" },
      { label: "Procurement", href: "/services/procurement" },
      { label: "Consultancy", href: "/services/consultancy" },
      { label: "R&D", href: "/services/rd" },
      { label: "O&M", href: "/services/om" },
      { label: "Bio-CNG Retails", href: "/services/bio-cng-retails" },
      { label: "NOCs & Approvals", href: "/services/nocs-approvals" },
    ]
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMobileSubmenu = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMobileSubmenus(prev => 
      prev.includes(href) ? prev.filter(item => item !== href) : [...prev, href]
    );
  };

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
        <Container className="flex items-center justify-between h-18 lg:h-20 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0" aria-label="ADON Green Energy Home">
            <div className="relative flex items-center justify-start w-32 h-10 sm:w-40 sm:h-12 lg:w-48 lg:h-14">
              <img src="/images/assets/logo.png" alt="ADON Green Energy" className="object-contain w-full h-full object-left" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.subLinks && pathname.startsWith(link.href));
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-3 py-2 text-body-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-1",
                      isActive
                        ? "text-forest-700"
                        : "text-steel-600 hover:text-forest-700 hover:bg-forest-50"
                    )}
                  >
                    {link.label}
                    {link.subLinks && <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-forest-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {link.subLinks && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:scale-100 scale-95 z-50">
                      <div className="bg-white rounded-xl shadow-elevated border border-steel-100 py-2 w-56 flex flex-col">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className={cn(
                              "px-4 py-2.5 text-sm font-medium transition-colors hover:bg-forest-50 hover:text-forest-700",
                              pathname === subLink.href ? "text-forest-700 bg-forest-50/50" : "text-steel-600"
                            )}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="whitespace-nowrap text-[10px] px-2 py-1.5 sm:text-xs sm:px-3 sm:py-2 lg:text-sm lg:px-4 lg:py-2 h-auto"
              id="header-cta"
            >
              Get Consultation
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg hover:bg-steel-100 transition-colors"
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
                  <div className="relative flex items-center justify-center w-40 h-12">
                    <img src="/images/assets/logo.png" alt="ADON Green Energy" className="object-contain w-full h-full" />
                  </div>
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
                  const isActive = pathname === link.href || (link.subLinks && pathname.startsWith(link.href));
                  const isSubmenuOpen = openMobileSubmenus.includes(link.href);
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex flex-col"
                    >
                      <div className="flex items-center w-full relative">
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex-1 flex items-center px-4 py-3 rounded-xl text-body font-medium transition-colors",
                            isActive && !link.subLinks
                              ? "bg-forest-50 text-forest-700 font-semibold"
                              : "text-steel-700 hover:bg-steel-50",
                            isActive && link.subLinks ? "text-forest-700 font-semibold" : ""
                          )}
                        >
                          {link.label}
                        </Link>
                        
                        {link.subLinks && (
                          <button 
                            onClick={(e) => toggleMobileSubmenu(e, link.href)}
                            className="absolute right-2 p-2 rounded-lg text-steel-500 hover:bg-steel-100 hover:text-steel-800 transition-colors"
                          >
                            <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", isSubmenuOpen && "rotate-180")} />
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile Submenu Accordion */}
                      {link.subLinks && (
                        <AnimatePresence>
                          {isSubmenuOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-8 pr-4 py-2 flex flex-col space-y-1">
                                {link.subLinks.map((subLink) => (
                                  <Link
                                    key={subLink.href}
                                    href={subLink.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                      "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                      pathname === subLink.href
                                        ? "bg-forest-50 text-forest-700 font-semibold"
                                        : "text-steel-600 hover:bg-steel-50 hover:text-steel-900"
                                    )}
                                  >
                                    {subLink.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-4 mt-4 border-t border-steel-100">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Get Free Consultation
                </Button>
                <div className="mt-6 space-y-3 text-body-sm text-steel-500">
                  <a href="tel:+918200517219" className="flex items-center gap-2 hover:text-forest-600">
                    <Phone className="h-4 w-4" />
                    +91-82005 17219
                  </a>
                  <a href="mailto:info@adonequipment.com" className="flex items-center gap-2 hover:text-forest-600">
                    <Mail className="h-4 w-4" />
                    info@adonequipment.com
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
