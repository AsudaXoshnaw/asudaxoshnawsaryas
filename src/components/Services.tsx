"use client";

import React from "react";
import { motion } from "framer-motion";
import { Share2, Code, Paintbrush, ArrowLeft } from "lucide-react";

interface Service {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "بەڕێوەبردنی سۆشیاڵ میدیا",
    desc: "داڕشتنی ستراتیژی پڕۆفیشناڵ، دروستکردنی ناوەڕۆکی ناوازە، و گەشەپێدانی پەیجەکانتان لە فەیسبووک، ئینستاگرام و تیکتۆک بۆ گەیشتن بە زۆرترین جەماوەر.",
    icon: <Share2 className="w-8 h-8 text-brand-gold" />,
  },
  {
    id: 2,
    title: "دروستکردنی وێبسایت و ئەپڵیکەیشن",
    desc: "گەشەپێدانی وێبسایتی زۆر خێرا، مۆدێرن و کارا لەگەڵ ئەپلیکەیشنی تایبەت کە بە تەواوی بۆ مۆبایل و تابلێتەکان گونجێنرابێت بە کۆدی زۆر خاوێن.",
    icon: <Code className="w-8 h-8 text-brand-gold" />,
  },
  {
    id: 3,
    title: "براندینگ و دیزاینی دیجیتاڵی",
    desc: "دروستکردنی ناسنامەی ناوازەی براند و لۆگۆ بە بەرزترین کوالیتی گرافیک و جوانکاری دیجیتاڵی کە ناسنامەی کۆمپانیاکەت بەرز دەکاتەوە لە بازاڕدا.",
    icon: <Paintbrush className="w-8 h-8 text-brand-gold" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 py-28 border-b border-brand-gold/15 bg-brand-dark"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5">
            چی دەکەین؟
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            خزمەتگوزارییە سەرەکییەکانمان
          </h2>
          <p className="text-sm md:text-base text-slate-300">
            ئێمە یارمەتی بزنسەکەت دەدەین بۆ گەشەکردنی دیجیتاڵی لە هەموو ڕوویەکەوە.
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Sequentially Animated Glassmorphic Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative p-8 rounded-3xl border border-brand-gold/10 bg-brand-dark/40 backdrop-blur-2xl hover:border-brand-gold/40 hover:shadow-[0_15px_40px_rgba(197,160,89,0.1)] transition-all duration-500 flex flex-col justify-between h-[360px]"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark group-hover:scale-105 transition-all duration-500">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-gold mb-4 tracking-tight group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                  {service.desc}
                </p>
              </div>

              {/* Minimal hover trigger link */}
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold group-hover:text-white transition-colors duration-300 mt-4">
                <span>زیاتر بخوێنەرەوە</span>
                <ArrowLeft className="w-4 h-4 translate-x-0 group-hover:-translate-x-1.5 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
