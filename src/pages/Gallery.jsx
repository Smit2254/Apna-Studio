import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { galleryImages } from '../data/content';

const CATEGORIES = ['All', 'Weddings', 'Pre-Wedding', 'Portraits', 'Events'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── LIGHTBOX ────────────────────────────────────────────────
function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  // Keyboard nav
  useState(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center'
      onClick={onClose}
    >
      {/* Close */}
      <button
        className='absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10'
        onClick={onClose}
      >
        <X size={18} />
      </button>

      {/* Counter */}
      <div className='absolute top-5 left-1/2 -translate-x-1/2 text-xs text-white/50 tracking-widest'>
        {current + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        className='absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10'
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className='relative max-w-5xl max-h-[85vh] mx-16'
      >
        <img
          src={images[current].src}
          alt={images[current].alt}
          className='max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl'
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
        <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg'>
          <p className='text-white/70 text-sm'>{images[current].alt}</p>
          <span className='text-xs text-gold-400/70 tracking-wider uppercase'>{images[current].category}</span>
        </div>
      </motion.div>

      {/* Next */}
      <button
        className='absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10'
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        <ChevronRight size={20} />
      </button>
    </motion.div>
  );
}

// ─── GALLERY ITEM ────────────────────────────────────────────
function GalleryItem({ image, index, onClick }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index}
      layout
      className='group relative overflow-hidden rounded-xl cursor-pointer bg-ink-800 aspect-[4/3]'
      onClick={() => onClick(index)}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading='lazy'
        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      {/* Zoom icon */}
      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <div className='w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/25'>
          <ZoomIn size={18} className='text-white' />
        </div>
      </div>
      {/* Category tag */}
      <div className='absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <span className='text-xs font-medium text-gold-300 tracking-wider uppercase bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full'>
          {image.category}
        </span>
      </div>
    </motion.div>
  );
}

// ─── GALLERY PAGE ────────────────────────────────────────────
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === 'All' ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <PageWrapper>
      <div className='min-h-screen bg-ink-900 pt-32 pb-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-12'>
          {/* Header */}
          <div className='text-center mb-12 space-y-4'>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='text-xs tracking-[0.25em] uppercase text-gold-400 font-medium'
            >
              Our Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className='font-display text-6xl sm:text-7xl font-light text-ink-50'
            >
              The <span className='italic text-gold-300'>Gallery</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className='text-ink-400 max-w-lg mx-auto'
            >
              A collection of moments we've had the privilege to preserve forever.
            </motion.p>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className='flex flex-wrap justify-center gap-2 mb-12'
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-gold-500 to-rose-500 text-white shadow-lg shadow-gold-500/20'
                    : 'bg-ink-800/60 text-ink-400 border border-ink-700 hover:text-ink-200 hover:border-ink-500'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className='ml-1.5 text-xs opacity-75'>
                    ({cat === 'All' ? galleryImages.length : galleryImages.filter((i) => i.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
            >
              {filtered.map((image, i) => (
                <GalleryItem key={image.id} image={image} index={i} onClick={(idx) => setLightboxIndex(idx)} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className='text-center py-24 text-ink-600'>No photos in this category yet.</div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox images={filtered} index={lightboxIndex} onClose={() => setLightboxIndex(null)} />
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
