import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function SectionTitle({ overline, title }) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="text-xs uppercase tracking-[0.4em] text-glow"
      >
        {overline}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="mt-3 font-display text-4xl tracking-mega text-cream sm:text-6xl"
      >
        {title}
      </motion.h2>
      <div className="beam mx-auto mt-6 w-24" />
    </div>
  )
}
