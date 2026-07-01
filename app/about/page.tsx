import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ADON Equipments Pvt. Ltd. — India's specialist EPC company for Compressed Biogas plants. Meet our leadership team and explore our journey.",
};

export default function About() {
  return <AboutPage />;
}
