"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Sparkles } from "lucide-react";

const clients = [
  "Beauty Clinic Laser Duhok",
  "Beauty Clinic Kirkuk",
  "Bolevard Smile Center",
  "Dr. Suzan Clinic",
  "Kyan Paint",
  "Postan Paint",
  "Tabib Center Beauty",
  "X Move Home",
];

export default function TrustedBy() {
  // Duplicate list to ensure seamless transition
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section
      id="clients"
      className="relative z-10 py-16 bg-black/10 border-b border-brand-gold/15 overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-8 text-center">
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 mb-3">
          <Award className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[10px] font-semibold tracking-wider text-brand-gold uppercase">
            متمانەپێکراوان
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-300">
          هاوبەشە متمانەپێکراوەکان کە لەگەڵیان کار دەکەین
        </h2>
      </div>

      <div className="relative flex items-center justify-center w-full">
        {/* Soft fading overlays for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex w-max gap-8 overflow-hidden py-4 select-none">
          <motion.div
            animate={{
              x: ["0%", "-33.333%"],
            }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 py-4 rounded-xl border border-brand-gold/10 bg-brand-dark/40 text-sm font-semibold tracking-wide hover:border-brand-gold/40 transition-colors duration-300 group"
              >
                <div className="w-2 h-2 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors duration-300" />
                <span className="text-slate-300 group-hover:text-brand-gold transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
