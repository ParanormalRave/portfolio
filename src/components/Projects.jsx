import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'
import SectionTitle from './SectionTitle'

const ease = [0.22, 1, 0.36, 1]

// Shared details markup — rendered as a hover overlay on sm+ and as a
// standalone block underneath the picture on small (touch) screens.
function Details({ p }) {
  return (
    <>
      <h3 className="font-display text-xl tracking-wide text-cream">{p.title}</h3>
      <p className="mt-3 font-serif text-base leading-relaxed text-muted">{p.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-cream/10 bg-cream/[0.03] px-2.5 py-1 text-[0.7rem] tracking-wide text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-5 border-t border-cream/10 pt-4">
        {p.live ? (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.15em] text-glow transition-colors hover:text-cream"
          >
            Visit site
            <FiArrowUpRight className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        ) : (
          <span className="text-sm uppercase tracking-[0.15em] text-muted/60">Coming soon</span>
        )}
        {p.code && (
          <a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.15em] text-muted transition-colors hover:text-cream"
          >
            <FiGithub /> Code
          </a>
        )}
      </div>
    </>
  )
}

function ProjectCard({ p, index }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease }}
      className={`group ${p.featured ? 'lg:col-span-3' : 'lg:col-span-2'}`}
    >
      {/* The picture */}
      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl glass glass-hover">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-panel to-ink" />}
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 sm:group-hover:scale-[1.04]"
        />

        {/* Tag is always visible */}
        <span className="absolute right-4 top-4 z-10 rounded-full border border-glow/30 bg-ink/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-glow backdrop-blur">
          {p.tag}
        </span>

        {/* Hover overlay — sm+ only. Touch screens use the block underneath instead. */}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-ink/90 via-ink/55 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:block" />
        <div className="absolute inset-x-0 bottom-0 hidden translate-y-4 flex-col p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
          <Details p={p} />
        </div>
      </div>

      {/* Details block underneath — small screens only, no hover / cursor needed */}
      <div className="mt-4 rounded-2xl glass p-6 sm:hidden">
        <Details p={p} />
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle overline="Selected work" title="Projects" />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  )
}
