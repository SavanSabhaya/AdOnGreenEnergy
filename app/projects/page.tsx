import type { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore ADON's portfolio of 6+ commissioned CBG plants across Gujarat, Haryana & Uttarakhand — diverse feedstocks, proven results.",
};

export default function Projects() {
  return <ProjectsPage />;
}
