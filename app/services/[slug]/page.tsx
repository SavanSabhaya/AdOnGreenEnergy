import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";

export const dynamicParams = false;
import ServicePageClient from "@/components/services/ServicePageClient";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}

