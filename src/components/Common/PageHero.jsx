import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageHero({ image, images, eyebrow, title, subtitle }) {
  const imageList = images || (image ? [image] : []);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % imageList.length);
    }, 4000); // Cycle every 4 seconds
    return () => clearInterval(timer);
  }, [imageList.length]);

  return (
    <div className="relative h-72 sm:h-80 flex items-end justify-center overflow-hidden bg-[#070d1a]">
      {/* Background image slider */}
      {imageList.length > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${imageList[currentIdx]}')` }}
            />
          </AnimatePresence>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/30 via-[#070d1a]/40 to-[#070d1a]/90" />

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pb-10 space-y-3">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/50 px-4 py-1.5 rounded-full mb-1">
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.25em]">
              {eyebrow}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          </div>
        )}

        <h1
          className="text-4xl sm:text-6xl font-serif font-black text-white leading-tight"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7)' }}
        >
          {title}
        </h1>

        {subtitle && (
          <div className="flex items-center justify-center gap-3 mt-1">
            <div className="h-px w-8 bg-[#D4AF37]/60" />
            <p className="text-white/80 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">
              {subtitle}
            </p>
            <div className="h-px w-8 bg-[#D4AF37]/60" />
          </div>
        )}
      </div>
    </div>
  );
}
