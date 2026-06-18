import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

// Floating, always-consistent "back to top" control. It stays hidden while the
// hero (top of page) is in view and springs in once you scroll past it.
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          // Unique entrance: drops out of nowhere with a quarter-turn spin + spring,
          // and corkscrews back down out of sight when you reach the top again.
          initial={{ opacity: 0, scale: 0.2, y: 28, rotate: -120 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.2, y: 28, rotate: 120 }}
          transition={{ type: 'spring', stiffness: 480, damping: 20, mass: 0.7 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.88 }}
          className="group fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-glow to-glow-2 text-ink shadow-[0_10px_30px_-8px] shadow-glow/50 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
        >
          {/* soft pulsing halo */}
          <span className="absolute inset-0 -z-10 rounded-full bg-glow/40 blur-md" />
          {/* thin animated ring that breathes */}
          <motion.span
            className="absolute inset-0 rounded-full border border-cream/40"
            animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <FiArrowUp className="text-xl transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-2xl" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
