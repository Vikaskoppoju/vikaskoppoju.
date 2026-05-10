import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#work' },
  { label: 'Skills',     href: '#skills' },
]

export default function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,10,24,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
          >
            <Code2 size={19} color="white" />
          </div>
          <span
            className="text-xl font-black"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            VK
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-cyan-400"
              style={{ color: '#8FA3B8', fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:koppojuvikaskumar@gmail.com"
            className="text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: 'transparent',
              border: '1px solid rgba(0,212,255,0.45)',
              color: '#00D4FF',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(5,10,24,0.97)',
              borderTop: '1px solid rgba(0,212,255,0.1)',
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium"
                  style={{ color: '#8FA3B8', fontFamily: 'Inter, sans-serif' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:koppojuvikaskumar@gmail.com"
                className="text-base font-semibold"
                style={{ color: '#00D4FF', fontFamily: 'Inter, sans-serif' }}
                onClick={() => setMobileOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
