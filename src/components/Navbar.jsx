import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Camera } from 'lucide-react'
import { siteConfig } from '../data/content'

const links = [
  { to: '/',        label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-900/95 backdrop-blur-md border-b border-ink-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-rose-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Camera size={17} className="text-white" />
              </div>
              <span className="font-display text-2xl font-semibold text-ink-50 tracking-wide">
                {siteConfig.studioName}
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-200 py-1 group ${
                    location.pathname === link.to
                      ? 'text-gold-400'
                      : 'text-ink-200 hover:text-ink-50'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-gold-400 transition-all duration-300 ${
                    location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-gold-500 to-rose-500 text-white hover:from-gold-400 hover:to-rose-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/25 hover:-translate-y-0.5"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-ink-700 text-ink-200 hover:text-white hover:border-ink-500 transition-colors"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-ink-900/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.1 }}
              >
                <Link
                  to={link.to}
                  className={`font-display text-5xl font-light tracking-wide transition-colors ${
                    location.pathname === link.to ? 'text-gold-400' : 'text-ink-100 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="mt-4 px-8 py-3 rounded-full font-medium tracking-wider uppercase bg-gradient-to-r from-gold-500 to-rose-500 text-white text-sm"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
