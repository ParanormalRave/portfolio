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
          whileHover={{ y: -4, opacity: 1 }}
          whileTap={{ scale: 0.88 }}
          className="group fixed bottom-6 right-6 z-50 grid h-9 w-9 place-items-center rounded-full border border-glow/25 bg-glow/15 text-glow opacity-60 backdrop-blur-sm transition-opacity duration-300 sm:bottom-8 sm:right-8 sm:h-11 sm:w-11"
        >
          {/* thin animated ring that breathes */}
          <motion.span
            className="absolute inset-0 rounded-full border border-glow/25"
            animate={{ scale: [1, 1.16, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <FiArrowUp className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
