"use client";

import React from "react";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="relative z-50 border-b border-brand-gold/15 bg-brand-dark/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-wider text-white">
          <span className="text-brand-gold">S</span>ryas <span className="text-brand-gold">A</span>gency
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#hero"
            className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors duration-300"
          >
            سەرەکی
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors duration-300"
          >
            پڕۆژەکانمان
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors duration-300"
          >
            خزمەتگوزارییەکان
          </a>
        </nav>

        <button
          onClick={onOpenModal}
          className="bg-brand-gold hover:bg-white text-brand-dark font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-sm shadow-[0_4px_12px_rgba(197,160,89,0.15)] active:scale-95 cursor-pointer"
        >
          دەستپێبکە
        </button>
      </div>
    </header>
  );
}
