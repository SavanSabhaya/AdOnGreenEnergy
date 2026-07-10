"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CompletedProjectsGallery() {
  const images = [
    { src: "/images/assets/p1.png", alt: "Completed Project 1" },
    { src: "/images/assets/p2.png", alt: "Completed Project 2" },
    { src: "/images/assets/p3.png", alt: "Completed Project 3" },
  ];

  return (
    <section className="py-24 bg-white border-t border-steel-100">
      <Container>
        <SectionHeading
          badge="Our Work"
          title="Completed Projects"
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-steel-50 shadow-sm hover:shadow-elevated transition-shadow border border-steel-100 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
