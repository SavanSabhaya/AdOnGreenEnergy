"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = Array.from({ length: 21 }, (_, i) => ({
    src: `/images/assets/${i + 1}.jpeg`,
    alt: `Project Gallery ${i + 1}`,
  }));

  const paginate = useCallback((direction: number) => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + direction;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  }, [images.length]);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying || isLightboxOpen) return;
    
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, isLightboxOpen, paginate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'Escape' && isLightboxOpen) setIsLightboxOpen(false);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, paginate]);

  const getOffset = (index: number) => {
    let diff = index - currentIndex;
    const len = images.length;
    // Normalize diff to be between -10 and +10 for a 21 length array
    if (diff > Math.floor(len / 2)) {
      diff -= len;
    } else if (diff < -Math.floor(len / 2)) {
      diff += len;
    }
    return diff;
  };

  return (
    <section className="py-24 bg-steel-50 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="Our Work"
          title="Project Gallery"
          centered
          className="mb-16"
        />

        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-12">
          
          {/* 3D Carousel Area */}
          <div 
            className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {images.map((image, index) => {
              const offset = getOffset(index);
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              // Render up to 2 items on each side for a smooth transition out of view
              const isVisible = Math.abs(offset) <= 2; 

              if (!isVisible) return null;

              // Calculate positions and styles based on offset
              let xPos = "0%";
              let scale = 1;
              let opacity = 1;
              let zIndex = 20;

              if (offset === -1) {
                // Adjust position based on standard percentage
                xPos = "-55%"; 
                scale = 0.8;
                opacity = 0.9;
                zIndex = 10;
              } else if (offset === 1) {
                xPos = "55%"; 
                scale = 0.8;
                opacity = 0.9;
                zIndex = 10;
              } else if (offset < -1) {
                xPos = "-90%";
                scale = 0.5;
                opacity = 0;
                zIndex = 0;
              } else if (offset > 1) {
                xPos = "90%";
                scale = 0.5;
                opacity = 0;
                zIndex = 0;
              }

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: xPos,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute w-[240px] sm:w-[360px] md:w-[450px] lg:w-[500px] aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-white cursor-pointer transition-shadow duration-300 ${isCenter ? 'ring-4 ring-forest-500/50 shadow-2xl shadow-forest-900/20' : 'ring-1 ring-black/5 shadow-xl shadow-black/10'}`}
                  onClick={() => {
                    if (isCenter) setIsLightboxOpen(true);
                    else paginate(offset); // Click side image to bring it to center
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain bg-steel-100/50" // object-contain prevents cutting off 1:1 images
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 360px, (max-width: 1024px) 450px, 500px"
                    priority={isCenter || isLeft || isRight}
                  />
                  
                  {/* View Full Indicator */}
                  {isCenter && (
                    <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:scale-110">
                      <Maximize2 size={18} className="sm:hidden" />
                      <Maximize2 size={20} className="hidden sm:block" />
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Navigation Buttons */}
            <button
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-forest-900 border border-black/5 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-110 z-30"
              onClick={() => paginate(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-forest-900 border border-black/5 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-110 z-30"
              onClick={() => paginate(1)}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          


        </div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all z-[110] rounded-full"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            <button
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all z-[110]"
              onClick={(e) => { e.stopPropagation(); paginate(-1); }}
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all z-[110]"
              onClick={(e) => { e.stopPropagation(); paginate(1); }}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
