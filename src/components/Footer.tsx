"use client";

import React from "react";

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-brand-gold/15 py-20 bg-black/20 text-right">
      <div className="container mx-auto px-6 flex flex-col items-center justify-between gap-10">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-extrabold tracking-wider">
            سڕیاس ئەیجنسی (<span className="text-brand-gold">Promodex</span>)
          </h3>
          <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
            پێشەنگ لە گواستنەوەی بزنسەکان بۆ ناو دنیای سەردەمیی دیجیتاڵ. کارەکانتان لەگەڵ ئێمە بێوێنە دەبن.
          </p>
        </div>   

        {/* REPEATING THE CALL TO ACTION BUTTON */}
        <div>
          <button
            onClick={onOpenModal}
            className="bg-brand-gold hover:bg-white text-brand-dark font-extrabold text-lg px-12 py-5 rounded-2xl transition-all duration-300 active:scale-95 shadow-[0_6px_20px_rgba(197,160,89,0.2)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            دەستپێبکە
          </button>
        </div>

        <div className="w-full border-t border-brand-gold/10 pt-10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="order-last md:order-first">
            © ٢٠٢٦ ئاژانسی دیجیتاڵی پرۆمۆدێکس (سڕیاس). هەموو مافەکان پارێزراون.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-brand-gold transition-colors duration-300"
            >
              مەرجەکانی بەکارهێنان
            </a>
            <a
              href="#"
              className="hover:text-brand-gold transition-colors duration-300"
            >
              پاراستنی زانیارییەکان
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
