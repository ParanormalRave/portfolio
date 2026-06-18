import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Navigate explicitly: closing the mobile menu collapses the header mid-jump and
  // cancels the default #hash scroll, so we scroll to the target ourselves.
  const goTo = (e, href) => {
    const el = document.querySelector(href)
    if (!el) return
    e.preventDefault()
    setOpen(false)
    el.scrollIntoView({ behavior: 'smooth' })
    window.history.replaceState(null, '', href)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-3 border-b border-cream/10 bg-ink/70 backdrop-blur-xl' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-display text-lg tracking-mega text-cream transition-colors hover:text-glow"
        >
          PΛRΛNORMΛL<span className="text-glow-2">RΛVE</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => goTo(e, l.href)}
                className="group relative text-sm uppercase tracking-[0.15em] text-muted transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-glow to-crimson transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-glow/40 px-5 py-2 text-sm uppercase tracking-[0.15em] text-glow transition-all duration-300 hover:bg-glow/10 hover:shadow-[0_0_24px_-4px] hover:shadow-glow/50"
          >
            Hire me
          </a>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-cream md:hidden"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-6 mt-3 overflow-hidden rounded-2xl glass md:hidden"
          >
            {links.map((l) => (
              <li key={l.href} className="border-b border-cream/5 last:border-0">
                <a
                  href={l.href}
                  onClick={(e) => goTo(e, l.href)}
                  className="block px-6 py-4 text-sm uppercase tracking-[0.15em] text-muted hover:text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
