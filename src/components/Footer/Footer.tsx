import { Github, Linkedin, Twitter, Instagram, Mail, Phone, Code2 } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/vikas-kumar-koppoju-99b540208/', label: 'LinkedIn'  },
  { icon: Github,    href: 'https://github.com/Vikaskoppoju',                            label: 'GitHub'    },
  { icon: Twitter,   href: 'https://x.com/VikasKoppoju',                                label: 'Twitter'   },
  { icon: Instagram, href: 'https://www.instagram.com/vikaskumarkoppoju',               label: 'Instagram' },
  { icon: Mail,      href: 'mailto:koppojuvikaskumar@gmail.com',                        label: 'Email'     },
]

const quickLinks = [
  ['Home',       '#home'],
  ['Experience', '#experience'],
  ['Projects',   '#work'],
  ['Skills',     '#skills'],
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#030712',
        borderTop: '1px solid rgba(0,212,255,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
              >
                <Code2 size={17} color="white" />
              </div>
              <span
                className="text-lg font-black"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                VK
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#8FA3B8', fontFamily: 'Inter, sans-serif' }}
            >
              Building innovative digital solutions with a passion for data,
              design, and technology.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-bold mb-5 tracking-[0.2em]"
              style={{ color: '#E8F4F8', fontFamily: 'Inter, sans-serif' }}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-cyan-400"
                    style={{ color: '#8FA3B8', fontFamily: 'Inter, sans-serif' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold mb-5 tracking-[0.2em]"
              style={{ color: '#E8F4F8', fontFamily: 'Inter, sans-serif' }}
            >
              GET IN TOUCH
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:koppojuvikaskumar@gmail.com"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-cyan-400"
                style={{ color: '#8FA3B8', fontFamily: 'Inter, sans-serif' }}
              >
                <Mail size={14} style={{ color: '#00D4FF' }} />
                koppojuvikaskumar@gmail.com
              </a>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: '#8FA3B8', fontFamily: 'Inter, sans-serif' }}
              >
                <Phone size={14} style={{ color: '#00D4FF' }} />
                +91 6305535725
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    color: '#8FA3B8',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4FF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8FA3B8')}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 text-center text-xs"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            color: '#4a6a9a',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          © {year} Vikas Kumar Koppoju. Crafted with React &amp; Three.js.
        </div>
      </div>
    </footer>
  )
}
