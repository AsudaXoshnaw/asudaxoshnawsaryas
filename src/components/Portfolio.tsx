"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FolderGit, ExternalLink, Box, Palette, Code2, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Register ScrollTrigger client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  icon: React.ReactNode;
  gridClass: string;
  gradient: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "سەکۆی گەشەپێدانی وێب (Web Dev Hub)",
    category: "Web Development",
    desc: "دروستکردنی وێبسایت و ئەپڵیکەیشنی ناوازە بۆ پڕۆژە نێودەوڵەتییەکان.",
    icon: <Code2 className="w-8 h-8 text-brand-gold" />,
    gridClass: "col-span-1 md:col-span-2 row-span-1",
    gradient: "from-[#162f4e] via-[#0d1e33] to-[#c5a059]/10",
  },
  {
    id: 2,
    title: "دیزاینی سێ ڕەهەندی (3D Commercial Renders)",
    category: "3D Rendering",
    desc: "ڕێندەر و مۆدێلسازی کارگێڕی بە بەرزترین وردەکاری مۆدێرن.",
    icon: <Box className="w-8 h-8 text-brand-gold" />,
    gridClass: "col-span-1 md:col-span-1 row-span-2",
    gradient: "from-[#162f4e] via-[#0d1e33] to-[#c5a059]/20",
  },
  {
    id: 3,
    title: "ناسنامەی براند (Logo Design)",
    category: "Branding",
    desc: "داڕشتنی لۆگۆ و شێوازی ناساندنی ناوازە بۆ بەهێزکردنی براند.",
    icon: <Palette className="w-8 h-8 text-brand-gold" />,
    gridClass: "col-span-1 md:col-span-1 row-span-1",
    gradient: "from-[#162f4e] via-[#0b1a2d] to-[#c5a059]/10",
  },
  {
    id: 4,
    title: "گرافیکی سۆشیاڵ میدیای پۆستان (Postan Aesthetics)",
    category: "Social Media Design",
    desc: "داڕشتنی پۆستی سۆشیاڵ میدیای مۆدێرن و دیزاینی گرافیک بۆ کۆمپانیای پۆستان بە بەرزترین وردەکاری.",
    icon: <FolderGit className="w-8 h-8 text-brand-gold" />,
    gridClass: "col-span-1 md:col-span-1 row-span-1",
    gradient: "from-[#162f4e] via-[#0b1a2d] to-[#c5a059]/15",
    image: "/postan-gallery.png",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scroll trigger reveal animation
    const cards = container.querySelectorAll(".portfolio-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="portfolio" className="relative z-10 py-28 border-b border-brand-gold/15 bg-brand-dark/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5">
            کارەکانمان
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            کارە دەستنیشانکراوەکانمان (Bento Grid)
          </h2>
          <p className="text-sm md:text-base text-slate-300">
            سەیری هەندێک لە ناوازەترین و پێشەنگترین پڕۆژە دیجیتاڵییەکانمان بکە. کلیک لەسەر بینینی پڕۆژە بکە بۆ دەرکەوتنی گەورەتر.
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Bento/Asymmetrical Grid Container */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => project.image && setSelectedImage(project.image)}
              className={`portfolio-card group relative rounded-3xl border border-brand-gold/10 overflow-hidden shadow-xl p-8 flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-500 cursor-pointer ${
                project.image ? "" : `bg-gradient-to-br ${project.gradient}`
              }`}
            >
              {/* Graphic background OR real user image representation */}
              {project.image ? (
                <>
                  {/* Real image rendered beautifully */}
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  {/* Dark elegant overlay for readability */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/75 to-brand-dark/30 group-hover:from-brand-dark group-hover:via-brand-dark/85 transition-all duration-500"></div>
                </>
              ) : (
                /* Graphic/Abstract Visual Background */
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-2 border-brand-gold/30 group-hover:scale-125 transition-transform duration-700"></div>
                  <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full border-2 border-brand-gold/20 group-hover:scale-125 transition-transform duration-700"></div>
                </div>
              )}

              {/* Card Header */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="p-3 rounded-xl bg-brand-dark/80 border border-brand-gold/10 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500">
                  {project.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold px-2.5 py-1 rounded bg-brand-dark/60 border border-brand-gold/10">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Slide-Up Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-dark/95 z-20 flex flex-col items-center justify-center p-8 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-500 delay-100">
                  {project.image ? <ZoomIn className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                </div>
                <h4 className="text-lg font-bold text-brand-gold mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-slate-300 max-w-xs mb-6">
                  {project.desc}
                </p>
                <span className="text-xs font-semibold text-brand-dark bg-brand-gold px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95">
                  {project.image ? "تەماشاکردنی وێنەکە بە گەورەیی" : "بینینی پڕۆژە"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Large Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden rounded-2xl border border-brand-gold/30 bg-brand-dark shadow-2xl flex items-center justify-center p-2 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 left-4 z-50 p-2 rounded-full bg-brand-dark/80 border border-brand-gold/20 text-slate-300 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Container with max-height to fit viewports */}
              <div className="w-full h-full flex items-center justify-center overflow-auto">
                <img
                  src={selectedImage}
                  alt="Postan Social Media Artworks"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              {/* Decorative title bar */}
              <div className="absolute bottom-0 inset-x-0 bg-brand-dark/90 border-t border-brand-gold/10 p-4 text-center">
                <span className="text-sm font-semibold text-brand-gold">
                  نموونەی کارە هونەرییەکان بۆ کۆمپانیای پۆستان (Postan Paint Gallery Showcase)
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
