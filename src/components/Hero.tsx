"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowLeft, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // 1. GSAP Particle Animation on Canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      alpha: number;
    }> = [];

    const colors = ["#c5a059", "#162f4e", "#ffffff"];

    // Initialize particles
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // GSAP Ticker or requestAnimationFrame loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle gradients/glows
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, "rgba(22, 47, 78, 0.4)");
      gradient.addColorStop(1, "rgba(13, 30, 51, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Boundary checks
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Connect particles close to each other
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = "rgba(197, 160, 89, 0.08)";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 2. Magnetic Button Effect
    const button = btnRef.current;
    if (button) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1.1, 0.4)",
        });
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        if (button) {
          button.removeEventListener("mousemove", handleMouseMove);
          button.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative z-10 min-h-[90vh] flex items-center justify-center border-b border-brand-gold/15 overflow-hidden py-16"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content Side */}
        <div className="space-y-8 text-right order-last lg:order-first">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/20 bg-brand-gold/5"
          >
            <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
            <span className="text-xs font-semibold text-brand-gold">
              پرۆمۆدێکس (Sryas Agency)
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            دیزاینی داهاتووت <br />
            لەسەر دەستی <span className="text-brand-gold">پرۆمۆدێکس</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed"
          >
            ئێمە بیرۆکە و خواستەکانت دەگۆڕین بۆ ڕاستی بینراوی بێوێنە. لە ڕێگەی
            دیزاین، دروستکردنی وێبسایت، و بەڕێوەبردنی براند، داهاتوویەکی شایستە بۆ
            کارەکەت بونیاد دەنێین.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="pt-4"
          >
            {/* Magnet CTA Button */}
            <button
              ref={btnRef}
              onClick={onOpenModal}
              className="glow-btn inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark font-extrabold text-xl px-12 py-5 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] active:scale-95 cursor-pointer"
            >
              <span>دەستپێبکە</span>
              <ArrowLeft className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Interactive Visual Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md p-8 rounded-3xl border border-brand-gold/15 bg-brand-dark/30 backdrop-blur-2xl shadow-2xl hover:border-brand-gold/30 hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)] transition-all duration-500 group">
            <div className="flex items-center gap-2 mb-8 border-b border-brand-gold/10 pb-4">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 group-hover:scale-110 transition-transform"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 group-hover:scale-110 transition-transform"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 group-hover:scale-110 transition-transform"></span>
              <span className="mr-auto text-xs text-slate-400 font-mono tracking-wider">
                promodex.com
              </span>
            </div>
            <div className="space-y-6">
              <div className="h-6 w-3/4 rounded bg-brand-gold/15 animate-pulse"></div>
              <div className="h-4 w-full rounded bg-brand-gold/5"></div>
              <div className="h-4 w-5/6 rounded bg-brand-gold/5"></div>
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="p-4 rounded-xl border border-brand-gold/10 bg-brand-gold/5 text-center transition-all group-hover:border-brand-gold/30">
                  <div className="text-3xl font-extrabold text-brand-gold">
                    ١٠٠٪
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 uppercase tracking-wider">
                    ڕیسپۆنسیڤ
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-brand-gold/10 bg-brand-gold/5 text-center transition-all group-hover:border-brand-gold/30">
                  <div className="text-3xl font-extrabold text-brand-gold font-mono">
                    99.8
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 uppercase tracking-wider">
                    خێرایی بارکردن
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
