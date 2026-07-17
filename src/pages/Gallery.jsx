import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';

const galleryImages = [
  {
    src: "/7.jpg",
    category: "rooms",
    title: "Premium Guest Room Stays"
  },
  {
    src: "/restro1.jpg",
    category: "restaurant",
    title: "Karavali Seafood Dining & Cuisine"
  },
  {
    src: "/hall1.jpg",
    category: "events",
    title: "The Royal Banquet Hall Layout"
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { t } = useLanguage();

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIdx) => (prevIdx === 0 ? filteredImages.length - 1 : prevIdx - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIdx) => (prevIdx === filteredImages.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      <PageHero
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1920&q=90"
        eyebrow="Our Moments"
        title={t('galleryTitle')}
        subtitle={t('gallerySubtitle')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'rooms', label: 'Stays & Lobby' },
            { id: 'restaurant', label: 'Karavali Restaurant' },
            { id: 'events', label: 'Banquet & Events' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-slate-950 text-gold border border-gold shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow border border-slate-200 cursor-pointer group relative shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-center justify-between w-full text-white">
                  <div>
                    <p className="text-[10px] text-gold font-bold uppercase tracking-wider">{img.category}</p>
                    <h4 className="font-serif text-sm font-semibold">{img.title}</h4>
                  </div>
                  <Maximize2 className="w-4 h-4 text-white hover:text-gold transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 font-sans select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-900/60 p-2.5 rounded-full border border-slate-800"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-slate-400 hover:text-white bg-slate-900/60 p-3 rounded-full border border-slate-800"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-slate-400 hover:text-white bg-slate-900/60 p-3 rounded-full border border-slate-800"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <div
            className="max-w-4xl max-h-[80vh] flex flex-col items-center gap-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded shadow-2xl border border-white/10"
            />
            <div className="space-y-1">
              <span className="text-gold text-[10px] uppercase font-bold tracking-widest">
                {filteredImages[lightboxIndex].category}
              </span>
              <h3 className="text-white font-serif text-lg font-semibold">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-slate-400 text-xs">
                {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
