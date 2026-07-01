import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Services & Expertise",
  description: "Explore ADON's full-spectrum CBG plant services — from anaerobic digestion and gas purification (VPSA/Membrane) to compression, bottling, and bio-fertilizer systems.",
};

export default function Services() {
  return <ServicesPage />;
}
