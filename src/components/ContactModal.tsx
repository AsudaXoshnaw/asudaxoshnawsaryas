"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("social");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setName("");
      setPhone("");
      onClose();
      
      // Trigger Success Toast
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/85 backdrop-blur-md p-4"
          >
            {/* Modal Body Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-md p-8 rounded-3xl border border-brand-gold bg-brand-dark shadow-2xl relative text-right"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 left-5 text-slate-400 hover:text-brand-gold transition-colors duration-300 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-gold mb-2">
                  دەستپێکردن لەگەڵ پرۆمۆدێکس
                </h3>
                <p className="text-xs text-slate-300">
                  زانیارییەکانت بنووسە و ئێمە بە زووترین کات پەیوەندیت پێوە دەکەین.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-xs font-semibold text-slate-300 mb-2"
                    htmlFor="name"
                  >
                    ناوی بەرێز / ناوی کۆمپانیا
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-brand-dark/50 border border-brand-gold/30 focus:border-brand-gold rounded-xl p-4 text-white text-sm outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-slate-300 mb-2"
                    htmlFor="phone"
                  >
                    ژمارەی تەلەفۆن
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="نموونە: 0750XXXXXXX"
                    className="w-full bg-brand-dark/50 border border-brand-gold/30 focus:border-brand-gold rounded-xl p-4 text-white text-sm outline-none transition-colors duration-300 text-left"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-slate-300 mb-2"
                    htmlFor="service"
                  >
                    جۆری خزمەتگوزاری داواکراو
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-brand-dark border border-brand-gold/30 focus:border-brand-gold rounded-xl p-4 text-white text-sm outline-none transition-colors duration-300"
                  >
                    <option value="social">بەڕێوەبردنی سۆشیاڵ میدیا</option>
                    <option value="web">دروستکردنی وێبسایت و ئەپڵیکەیشن</option>
                    <option value="branding">براندینگ و دیزاینی دیجیتاڵی</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-gold hover:bg-white text-brand-dark hover:text-brand-dark font-bold py-4 rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_12px_rgba(197,160,89,0.15)] disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>ناردن...</span>
                    </>
                  ) : (
                    <span>ڕەوانەکردنی داواکاری</span>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification Container */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-6 right-6 z-[110] bg-brand-gold text-brand-dark font-semibold px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">
              داواکارییەکەت بە سەرکەوتوویی نێردرا! سوپاس بۆ متمانەکەتان.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
