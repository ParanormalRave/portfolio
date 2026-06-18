import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import SectionTitle from './SectionTitle'

const ease = [0.22, 1, 0.36, 1]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle overline="What I work with" title="Skills" />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease }}
              className="group relative overflow-hidden rounded-2xl glass glass-hover p-7"
            >
              {/* glow that follows the brand colour on hover */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.1]"
                style={{ background: s.color }}
              />
              <Icon
                size={42}
                className="relative transition-transform duration-500 group-hover:-translate-y-1"
                style={{ color: s.color }}
              />
              <h3 className="relative mt-5 font-display text-lg tracking-wide text-cream">
                {s.title}
              </h3>
              <p className="relative mt-2 font-serif text-base leading-relaxed text-muted">
                {s.detail}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
