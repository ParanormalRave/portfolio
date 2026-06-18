import { FaXTwitter, FaGithub, FaWhatsapp, FaLinkedin, FaDiscord } from 'react-icons/fa6'
import { FiMail, FiArrowUp } from 'react-icons/fi'

const socials = [
  { icon: FaXTwitter, href: 'https://x.com/MercyAdenu26099', label: 'X' },
  { icon: FaGithub, href: 'https://github.com/ParanormalRave', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mercy-adenubi-606619325', label: 'LinkedIn' },
  { icon: FaDiscord, href: 'https://discord.com/users/1280327511464742963', label: 'Discord' },
  { icon: FaWhatsapp, href: 'https://wa.me/2348163251422', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:mercyadenubi2@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/10">
      <div className="beam absolute inset-x-0 top-0 mx-auto w-1/2" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-14">
        <a
          href="#home"
          className="font-display text-2xl tracking-mega text-cream transition-colors hover:text-glow"
        >
          PΛRΛNORMΛL<span className="text-glow-2">RΛVE</span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-muted transition-all duration-300 hover:-translate-y-1 hover:text-glow"
            >
              <s.icon size={22} />
            </a>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-2 border-t border-cream/5 pt-6 text-center text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Adenubi Mercy Abiola — ParanormalRave</p>
          <a href="#home" className="inline-flex items-center gap-1.5 hover:text-glow">
            Back to top <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  )
}
