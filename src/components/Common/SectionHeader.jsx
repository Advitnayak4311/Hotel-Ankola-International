/**
 * SectionHeader — Premium consistent heading pattern used site-wide.
 *
 * Props:
 *  eyebrow   — small gold label above the headline  (e.g. "ABOUT HOTEL")
 *  title     — main headline text
 *  subtitle  — optional paragraph below title (for centered variant)
 *  center    — bool, centres text (default true)
 *  light     — bool, uses white text for dark backgrounds (default false)
 */
import React from 'react';

export default function SectionHeader({ eyebrow, title, subtitle, center = true, light = false }) {
  const align = center ? 'items-center text-center' : 'items-start text-left';
  const headingColor = light ? 'text-white' : 'text-[#0a1128]';
  const subtitleColor = light ? 'text-white/70' : 'text-slate-500';
  const dividerColor = light ? 'bg-white/30' : 'bg-slate-200';

  return (
    <div className={`flex flex-col ${align} gap-3 mb-12`}>
      {/* Eyebrow pill */}
      {eyebrow && (
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/12 border border-[#D4AF37]/40 px-4 py-1.5 rounded-full">
          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.25em]">
            {eyebrow}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
        </div>
      )}

      {/* Main headline */}
      <h2
        className={`font-serif font-black text-3xl sm:text-4xl lg:text-5xl leading-tight ${headingColor}`}
        style={{ textShadow: light ? '0 2px 12px rgba(0,0,0,0.4)' : 'none' }}
      >
        {title}
      </h2>

      {/* Gold accent line */}
      <div className="flex items-center gap-3 mt-1">
        <div className={`h-px flex-1 max-w-[60px] ${center ? '' : 'hidden'} ${dividerColor}`} />
        <div className="h-[3px] w-12 rounded-full bg-[#D4AF37]" />
        <div className={`h-px flex-1 max-w-[60px] ${center ? '' : 'hidden'} ${dividerColor}`} />
      </div>

      {/* Optional subtitle */}
      {subtitle && (
        <p className={`max-w-2xl text-sm sm:text-base leading-relaxed mt-2 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
