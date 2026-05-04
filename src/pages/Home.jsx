import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, ChevronDown, Instagram, Facebook, MessageCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { heroSlides, about, services, testimonials, siteConfig } from '../data/content';

// ─── Fade-up variant ─────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── HERO ────────────────────────────────────────────────────
function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='relative h-screen min-h-[640px] overflow-hidden flex items-center'>
      {/* Slideshow */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className='absolute inset-0 z-0'
        >
          <img
            src={heroSlides[current].image}
            alt={heroSlides[current].label}
            className='w-full h-full object-cover'
            loading='eager'
          />
          {/* Dark gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/30 to-ink-900/80' />
        </motion.div>
      </AnimatePresence>

      {/* Slide dots */}
      <div className='absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2'>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-1.5 bg-gold-400' : 'w-1.5 h-1.5 bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Category label */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className='absolute top-32 left-8 sm:left-16 z-20'
        >
          <span className='text-xs tracking-[0.25em] uppercase text-gold-400 font-medium'>
            {heroSlides[current].label}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Hero text */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-20'>
        {loaded && (
          <>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className='text-xs tracking-[0.3em] uppercase text-gold-400 font-medium mb-6'
            >
              Welcome to
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className='font-display font-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] tracking-tight mb-6'
            >
              Apna Digital
              <br />
              <span className='italic text-gold-300'>Studio & Colour Lab</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className='text-ink-200 text-lg sm:text-xl max-w-md leading-relaxed mb-10'
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className='flex flex-wrap gap-4 items-center'
            >
              <Link
                to='/gallery'
                className='group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-rose-500 text-white font-medium text-sm tracking-wide hover:from-gold-400 hover:to-rose-400 transition-all duration-300 shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5'
              >
                View Our Work
                <ArrowRight size={15} className='group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-medium text-sm tracking-wide hover:bg-white/10 transition-all duration-300'
              >
                Book a Session
              </Link>
            </motion.div>
          </>
        )}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5'
      >
        <span className='text-xs tracking-widest uppercase text-ink-400'>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={16} className='text-ink-400' />
        </motion.div>
      </motion.div>

      {/* Social sidebar */}
      <div className='absolute right-6 bottom-1/3 z-20 hidden lg:flex flex-col items-center gap-4'>
        <div className='w-px h-16 bg-ink-600' />
        <a
          href={siteConfig.social.instagram}
          target='_blank'
          rel='noreferrer'
          className='text-ink-400 hover:text-gold-400 transition-colors'
        >
          <Instagram size={16} />
        </a>
        <a
          href={siteConfig.social.facebook}
          target='_blank'
          rel='noreferrer'
          className='text-ink-400 hover:text-gold-400 transition-colors'
        >
          <Facebook size={16} />
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target='_blank'
          rel='noreferrer'
          className='text-ink-400 hover:text-gold-400 transition-colors'
        >
          <MessageCircle size={16} />
        </a>
        <div className='w-px h-16 bg-ink-600' />
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────
function About() {
  return (
    <section id='about' className='py-24 sm:py-32 bg-ink-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Image */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            className='relative'
          >
            <div className='aspect-[4/5] rounded-2xl overflow-hidden'>
              <img
                src={about.image}
                alt='Apna Studio team'
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                loading='lazy'
              />
            </div>
            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className='absolute -bottom-6 -right-6 bg-gradient-to-br from-gold-500 to-rose-500 text-white rounded-2xl p-5 shadow-2xl'
            >
              <div className='font-display text-4xl font-bold'>{about.stats[0].number}</div>
              <div className='text-xs mt-0.5 font-medium opacity-90'>{about.stats[0].label}</div>
            </motion.div>
            {/* Decorative ring */}
            <div className='absolute -top-4 -left-4 w-32 h-32 rounded-full border border-gold-500/20 pointer-events-none' />
          </motion.div>

          {/* Text */}
          <div className='space-y-7'>
            <motion.p
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className='text-xs tracking-[0.25em] uppercase text-gold-400 font-medium'
            >
              About Us
            </motion.p>
            <motion.h2
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className='font-display text-5xl sm:text-6xl font-light text-ink-50 leading-tight'
            >
              {about.heading}
              <br />
              <span className='italic text-gold-300'>{about.subheading}</span>
            </motion.h2>
            {about.body.map((para, i) => (
              <motion.p
                key={i}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 2}
                className='text-ink-300 leading-relaxed'
              >
                {para}
              </motion.p>
            ))}

            {/* Stats row */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4}
              className='grid grid-cols-3 gap-6 pt-4'
            >
              {about.stats.slice(1).map((s, i) => (
                <div key={i} className='border-l border-gold-500/30 pl-4'>
                  <div className='font-display text-3xl text-gold-300 font-semibold'>{s.number}</div>
                  <div className='text-xs text-ink-400 mt-0.5'>{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} variants={fadeUp} custom={5}>
              <Link
                to='/gallery'
                className='group inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors'
              >
                Explore Our Work
                <ArrowRight size={15} className='group-hover:translate-x-1 transition-transform' />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────
function Services() {
  return (
    <section id='services' className='py-24 sm:py-32 bg-ink-800/40'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-12'>
        <div className='text-center mb-16 space-y-4'>
          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            className='text-xs tracking-[0.25em] uppercase text-gold-400 font-medium'
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className='font-display text-5xl sm:text-6xl font-light text-ink-50'
          >
            Our <span className='italic text-gold-300'>Services</span>
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i * 0.5}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className='group relative bg-ink-800/60 border border-ink-700/60 rounded-2xl p-7 overflow-hidden cursor-default hover:border-ink-600 transition-colors duration-300'
            >
              {/* Gradient blob on hover */}
              <div
                className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${svc.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
              />

              <div
                className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${svc.accent} items-center justify-center text-2xl mb-5 shadow-lg`}
              >
                {svc.icon}
              </div>
              <h3 className='font-display text-xl text-ink-50 mb-2'>{svc.title}</h3>
              <p className='text-sm text-ink-400 leading-relaxed mb-4'>{svc.description}</p>
              <span className={`text-xs font-semibold bg-gradient-to-r ${svc.accent} bg-clip-text text-transparent`}>
                {svc.price}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
          className='text-center mt-12'
        >
          <Link
            to='/contact'
            className='inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-gold-500/40 text-gold-300 font-medium text-sm tracking-wide hover:bg-gold-500/10 transition-colors duration-300'
          >
            Get a Custom Quote
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────
function Testimonials() {
  return (
    <section className='py-24 sm:py-32 bg-ink-900 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-12'>
        <div className='text-center mb-16 space-y-4'>
          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            className='text-xs tracking-[0.25em] uppercase text-gold-400 font-medium'
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className='font-display text-5xl sm:text-6xl font-light text-ink-50'
          >
            What our <span className='italic text-gold-300'>clients say</span>
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className='bg-ink-800/50 border border-ink-700/50 rounded-2xl p-7 space-y-5 hover:border-ink-600 transition-colors duration-300'
            >
              <div className='flex gap-0.5'>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} className='fill-gold-400 text-gold-400' />
                ))}
              </div>
              <p className='font-display text-lg italic text-ink-200 leading-relaxed'>"{t.quote}"</p>
              <div className='flex items-center gap-3 pt-1'>
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className='text-sm font-medium text-ink-100'>{t.name}</div>
                  <div className='text-xs text-ink-500'>{t.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA BAND ────────────────────────────────────────────────
function CtaBand() {
  return (
    <section className='relative py-24 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-gold-700/20 via-rose-700/20 to-ink-900' />
      {/* Decorative circles */}
      <div className='absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-rose-500/5 blur-3xl pointer-events-none' />

      <div className='relative max-w-3xl mx-auto text-center px-6 space-y-7'>
        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className='text-xs tracking-[0.25em] uppercase text-gold-400 font-medium'
        >
          Ready to book?
        </motion.p>
        <motion.h2
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className='font-display text-5xl sm:text-6xl font-light text-white leading-tight'
        >
          Let's Capture Your <span className='italic text-gold-300'>Story.</span>
        </motion.h2>
        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className='text-ink-300 text-lg'
        >
          Reach out today and let's plan something beautiful together.
        </motion.p>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className='flex flex-wrap gap-4 justify-center pt-2'
        >
          <Link
            to='/contact'
            className='group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-rose-500 text-white font-medium tracking-wide hover:from-gold-400 hover:to-rose-400 transition-all duration-300 shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5'
          >
            Book a Session
            <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-green-500/40 text-green-400 font-medium tracking-wide hover:bg-green-500/10 transition-colors duration-300'
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── HOME PAGE ───────────────────────────────────────────────
export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CtaBand />
    </PageWrapper>
  );
}
