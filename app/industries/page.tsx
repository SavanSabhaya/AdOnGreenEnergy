import type { Metadata } from "next";
import IndustriesPage from "./IndustriesPage";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "ADON designs CBG plants for agriculture, sugar & distillery, food processing, municipal solid waste, and dairy & poultry waste across India.",
};

export default function Industries() {
  return <IndustriesPage />;
}
