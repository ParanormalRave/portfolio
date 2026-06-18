import { motion } from 'framer-motion'
import { FaXTwitter, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa6'
import { FiArrowDownRight, FiLayers, FiSend, FiMapPin } from 'react-icons/fi'

const socials = [
  { icon: FaXTwitter, href: 'https://x.com/MercyAdenu26099', label: 'X' },
  { icon: FaGithub, href: 'https://github.com/ParanormalRave', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mercy-adenubi-606619325', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/2348163251422', label: 'WhatsApp' },
]

const ease = [0.22, 1, 0.36, 1]
const rise = {
  hidden: { y: 28, opacity: 0 },
  show: (i = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.15 * i, ease } }),
}

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 md:pt-44">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — copy */}
        <div className="min-w-0">
          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 text-xs uppercase tracking-[0.4em] text-muted"
          >
            Adenubi Mercy Abiola
          </motion.p>

          <motion.h1
            variants={rise}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-[clamp(2rem,8.5vw,5.2rem)] leading-[0.95] tracking-[0.05em] text-cream sm:tracking-mega"
          >
            I ENGINEER
            <br />
            THE <span className="text-glow">FUTURE</span>
          </motion.h1>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-xl border-l border-glow/40 pl-5"
          >
            <p className="font-serif text-lg leading-relaxed text-muted sm:text-xl">
              Cloud &amp; DevOps engineer and frontend developer — I build resilient
              infrastructure on AWS, ship it with automated pipelines, and craft clean,
              interactive interfaces. Currently exploring Web3 on Solana.
            </p>
          </motion.div>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-glow to-glow-2 px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              View work
              <FiArrowDownRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cream/20 px-7 py-3 text-sm uppercase tracking-[0.15em] text-cream transition-colors duration-300 hover:border-glow/60 hover:text-glow"
            >
              Let&apos;s talk
            </a>
          </motion.div>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex items-center gap-5"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-glow"
              >
                <s.icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — portrait, background removed, blended into the page (no frame / no box) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* soft warm glow so she emerges from the dark — kept subtle */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,201,164,0.08),transparent_55%)] blur-lg" />

          <div className="relative">
            {/*
              PROFILE PHOTO: /public/displaypic.png
              Background already removed (transparent PNG); .portrait-blend feathers
              the edges so it melts into the page. Static — no motion. Swap the file
              to change the photo.
            */}
            <img
              src="/displaypic.png"
              alt="Adenubi Mercy Abiola"
              loading="eager"
              className="portrait-blend mx-auto w-full max-w-[22rem] object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Focus timeline — a vertical link-to-link chain of connected nodes */}
      <div className="relative mx-auto mt-24 max-w-2xl">
        {/* the glowing connector that links each node to the next */}
        <span className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-glow/10 via-glow/50 to-crimson/30 sm:left-7" />

        {[
          {
            Icon: FiLayers,
            k: 'What I build',
            v: 'Cloud-native infrastructure and the interfaces that sit on top of it.',
          },
          {
            Icon: FiSend,
            k: 'How I ship',
            v: 'Infrastructure as Code, containers and CI/CD — repeatable and reliable.',
          },
          {
            Icon: FiMapPin,
            k: 'Where I am',
            v: 'Open to internship, junior and collaborative engineering roles — and I work remotely.',
          },
        ].map((c, i) => (
          <motion.div
            key={c.k}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease }}
            className="relative flex items-start gap-6 pb-10 last:pb-0"
          >
            {/* node sitting on the connector */}
            <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-glow/40 bg-ink text-glow shadow-[0_0_22px_-6px] shadow-glow/60 sm:h-14 sm:w-14">
              <c.Icon className="text-lg sm:text-xl" />
            </div>
            {/* horizontal link from node into the card */}
            <span className="mt-5 hidden h-px w-6 shrink-0 bg-glow/40 sm:block" />
            <div className="-mt-0.5 flex-1 rounded-2xl glass glass-hover p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-glow">{c.k}</p>
              <p className="mt-2 font-serif text-base leading-relaxed text-muted sm:text-lg">{c.v}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
