import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiPhone, FiMail, FiSend } from 'react-icons/fi'
import SectionTitle from './SectionTitle'

const ease = [0.22, 1, 0.36, 1]

const fieldClass =
  'field-dark peer w-full rounded-lg border border-cream/10 px-4 py-3 outline-none transition-colors duration-300 focus:border-glow/60'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xwpgnwnb', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('sent')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle overline="Let's build" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 rounded-3xl glass p-8 md:grid-cols-2 md:p-12"
      >
        <div className="flex flex-col justify-center">
          <h3 className="font-display text-3xl leading-tight tracking-wide text-cream">
            Have a project in mind?
          </h3>
          <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
            Whether it&apos;s cloud infrastructure, a CI/CD pipeline, or a frontend that needs
            care — tell me about it and let&apos;s build it together.
          </p>
          <a
            href="mailto:mercyadenubi2@gmail.com"
            className="mt-6 inline-flex w-fit items-center gap-2 text-glow transition-colors hover:text-cream"
          >
            <FiMail /> mercyadenubi2@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted peer-focus:text-glow" />
            <input name="name" type="text" required placeholder="Your name" className={`${fieldClass} pl-11`} />
          </div>
          <div className="relative">
            <FiPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input name="telephone" type="tel" placeholder="Phone (optional)" className={`${fieldClass} pl-11`} />
          </div>
          <div className="relative">
            <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input name="email" type="email" required placeholder="Email" className={`${fieldClass} pl-11`} />
          </div>
          <textarea
            name="description"
            required
            rows={4}
            placeholder="Tell me about your project..."
            className={`${fieldClass} resize-none`}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-glow to-glow-2 px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent' : 'Send message'}
            <FiSend className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
          {status === 'error' && (
            <p className="text-sm text-crimson">Something went wrong — please email me directly.</p>
          )}
        </form>
      </motion.div>
    </section>
  )
}
