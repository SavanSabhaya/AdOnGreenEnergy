import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ADON Green Energy for CBG plant consultations, SATAT registration support, and project inquiries. Ahmedabad, India.",
};

export default function Contact() {
  return <ContactPage />;
}
