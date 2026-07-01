import type { Metadata } from "next";
import ResourcesPage from "./ResourcesPage";

export const metadata: Metadata = {
  title: "Resources & Knowledge Hub",
  description: "Expert guides on CBG, SATAT scheme, MNRE subsidies, licensing — the educational content to help you plan your Compressed Biogas project.",
};

export default function Resources() {
  return <ResourcesPage />;
}
