import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube, Send, CheckCircle, AlertCircle } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import { siteConfig } from '../data/content'

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const INITIAL = { name: '', email: '', phone: '', message: '' }
const ERRORS_INITIAL = { name: '', email: '', phone: '', message: '' }

function validate(fields) {
  const errs = { ...ERRORS_INITIAL }
  if (!fields.name.trim())    errs.name    = 'Name is required'
  if (!fields.email.trim())   errs.email   = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = 'Enter a valid email'
  if (!fields.phone.trim())   errs.phone   = 'Phone is required'
  else if (!/^\+?[\d\s\-()]{8,}$/.test(fields.phone)) errs.phone = 'Enter a valid phone number'
  if (!fields.message.trim()) errs.message = 'Please write a message'
  return errs
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-widest uppercase text-ink-400 mb-2">{label}</label>
      {children}
      {error && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
          className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
          <AlertCircle size={11} /> {error}
        </motion.p>
      )}
    </div>
  )
}

const inputCls = (err) =>
  `w-full bg-ink-800/60 border ${err ? 'border-rose-500/60' : 'border-ink-700'} rounded-xl px-4 py-3.5 text-ink-100 text-sm placeholder:text-ink-600 focus:outline-none focus:border-gold-500/60 focus:bg-ink-800 transition-colors duration-200`

export default function Contact() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState(ERRORS_INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const set = (key) => (e) => {
    setFields(f => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors(er => ({ ...er, [key]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.values(errs).some(Boolean)) { setErrors(errs); return }

    setStatus('loading')

    try {
      // ── Google Apps Script fetch ──────────────────────────
      // Replace siteConfig.formEndpoint with your Apps Script URL.
      // The script should accept POST with JSON body.
      if (siteConfig.formEndpoint && siteConfig.formEndpoint !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          mode: 'no-cors', // Apps Script requires this
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...fields, submittedAt: new Date().toISOString() }),
        })
      } else {
        // Dev mode — simulate a 1s delay
        await new Promise(r => setTimeout(r, 1000))
      }
      setStatus('success')
      setFields(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-ink-900 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-xs tracking-[0.25em] uppercase text-gold-400 font-medium"
            >
              Let's Talk
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-6xl sm:text-7xl font-light text-ink-50"
            >
              Get in <span className="italic text-gold-300">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="text-ink-400 max-w-md mx-auto"
            >
              Have a date in mind? Tell us about your dream shoot and we'll get back within 24 hours.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                <h2 className="font-display text-2xl text-ink-50 mb-6">Contact Info</h2>
                <div className="space-y-5">
                  {[
                    { icon: Phone,    label: 'Phone',    value: siteConfig.phone,    href: `tel:${siteConfig.phone}` },
                    { icon: Mail,     label: 'Email',    value: siteConfig.email,    href: `mailto:${siteConfig.email}` },
                    { icon: MapPin,   label: 'Location', value: siteConfig.location, href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500/20 to-rose-500/20 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-gold-400" />
                      </div>
                      <div>
                        <div className="text-xs tracking-widest uppercase text-ink-500 mb-0.5">{label}</div>
                        {href
                          ? <a href={href} className="text-sm text-ink-200 hover:text-gold-300 transition-colors">{value}</a>
                          : <span className="text-sm text-ink-200">{value}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                <h3 className="text-xs tracking-[0.2em] uppercase text-ink-500 mb-4 font-medium">Follow us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram,    href: siteConfig.social.instagram, color: 'hover:bg-gradient-to-br hover:from-gold-500 hover:to-rose-500', label: 'Instagram' },
                    { icon: Facebook,     href: siteConfig.social.facebook,  color: 'hover:bg-blue-600',   label: 'Facebook' },
                    { icon: Youtube,      href: siteConfig.social.youtube,   color: 'hover:bg-red-600',    label: 'YouTube' },
                    { icon: MessageCircle,href: `https://wa.me/${siteConfig.whatsapp}`, color: 'hover:bg-green-600', label: 'WhatsApp' },
                  ].map(({ icon: Icon, href, color, label }) => (
                    <a
                      key={label}
                      href={href} target="_blank" rel="noreferrer"
                      aria-label={label}
                      className={`w-10 h-10 rounded-xl bg-ink-800 border border-ink-700 flex items-center justify-center text-ink-400 hover:text-white ${color} hover:border-transparent transition-all duration-300`}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I'd like to enquire about a photography session.`}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/25 hover:bg-green-500/15 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <MessageCircle size={18} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-300">Chat on WhatsApp</div>
                    <div className="text-xs text-ink-500">Instant replies during business hours</div>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Right: form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="lg:col-span-3"
            >
              <div className="bg-ink-800/40 border border-ink-700/60 rounded-2xl p-7 sm:p-9">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="font-display text-3xl text-ink-50">Message Sent!</h3>
                    <p className="text-ink-400 text-sm max-w-xs mx-auto">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 text-sm text-gold-400 hover:text-gold-300 transition-colors underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" error={errors.name}>
                        <input
                          type="text" placeholder="Priya Sharma"
                          value={fields.name} onChange={set('name')}
                          className={inputCls(errors.name)}
                        />
                      </Field>
                      <Field label="Phone" error={errors.phone}>
                        <input
                          type="tel" placeholder="+91 98765 43210"
                          value={fields.phone} onChange={set('phone')}
                          className={inputCls(errors.phone)}
                        />
                      </Field>
                    </div>

                    <Field label="Email Address" error={errors.email}>
                      <input
                        type="email" placeholder="priya@example.com"
                        value={fields.email} onChange={set('email')}
                        className={inputCls(errors.email)}
                      />
                    </Field>

                    <Field label="Your Message" error={errors.message}>
                      <textarea
                        rows={5} placeholder="Tell us about your event — type, date, location, and any special requirements..."
                        value={fields.message} onChange={set('message')}
                        className={inputCls(errors.message) + ' resize-none'}
                      />
                    </Field>

                    {status === 'error' && (
                      <p className="text-xs text-rose-400 flex items-center gap-1.5">
                        <AlertCircle size={13} /> Something went wrong. Please try WhatsApp or email directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-rose-500 text-white font-medium tracking-wide hover:from-gold-400 hover:to-rose-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
                    >
                      {status === 'loading' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={15} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
