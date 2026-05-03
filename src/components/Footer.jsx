import { Link } from 'react-router-dom'
import { Camera, Instagram, Facebook, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 border-t border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-rose-500 flex items-center justify-center">
                <Camera size={17} className="text-white" />
              </div>
              <span className="font-display text-2xl text-ink-50">{siteConfig.studioName}</span>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              Capturing stories, preserving memories. Based in {siteConfig.location}.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ink-800 flex items-center justify-center text-ink-400 hover:text-white hover:bg-gradient-to-br hover:from-gold-500 hover:to-rose-500 transition-all duration-300">
                <Instagram size={15} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ink-800 flex items-center justify-center text-ink-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                <Facebook size={15} />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ink-800 flex items-center justify-center text-ink-400 hover:text-white hover:bg-red-600 transition-all duration-300">
                <Youtube size={15} />
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ink-800 flex items-center justify-center text-ink-400 hover:text-white hover:bg-green-600 transition-all duration-300">
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-ink-400 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/',        label: 'Home' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ink-300 hover:text-gold-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-ink-400 mb-5">Get in Touch</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3 text-sm text-ink-300">
                <Phone size={14} className="text-gold-500 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold-400 transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-300">
                <Mail size={14} className="text-gold-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400 transition-colors">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-300">
                <MapPin size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-600">
          <span>© {year} {siteConfig.studioName}. All rights reserved.</span>
          <span>Made with ♥ for storytellers</span>
        </div>
      </div>
    </footer>
  )
}
