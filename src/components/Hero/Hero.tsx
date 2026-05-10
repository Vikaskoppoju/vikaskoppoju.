import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, FileText, ChevronDown } from 'lucide-react'
import me1 from '../../assets/images/me1.png'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const textY  = useTransform(scrollYProgress, [0, 1], [0, -80])
  const imgY   = useTransform(scrollYProgress, [0, 1], [0, -40])
  const gridOp = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #050A18 0%, #0A1428 55%, #0D1B35 100%)' }}
      />

      {/* Grid overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: gridOp }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,47,190,0.12), transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08), transparent 70%)' }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ── Left: Text ── */}
        <motion.div
          className="flex-1 text-white lg:pr-4"
          style={{ y: textY }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-block text-xs tracking-[0.28em] mb-5"
            style={{ color: '#00D4FF', fontFamily: "'Fira Code', monospace" }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            HELLO, I'M
          </motion.span>

          <motion.h1
            className="font-black leading-none mb-4"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="gradient-text">Vikas</span>
            <br />
            <span style={{ color: '#E8F4F8' }}>Koppoju</span>
          </motion.h1>

          <motion.div
            className="text-lg lg:text-xl mb-6"
            style={{ color: '#8FA3B8', fontFamily: "'Fira Code', monospace" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span style={{ color: '#00D4FF' }}>{'// '}</span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2500,
                'Power BI Analyst', 2500,
                'WordPress Developer', 2500,
                'Data Analyst', 2500,
              ]}
              wrapper="span"
              cursor
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="text-base lg:text-lg mb-10 max-w-md leading-relaxed"
            style={{ color: '#8FA3B8', fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Crafting innovative digital experiences through code, data, and design.
            Transforming complex problems into elegant solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <a
              href="https://drive.google.com/file/d/153QfMdBJAqso_tWlKDd6rYXH64DU76XA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
            >
              <FileText size={16} />
              View Resume
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-kumar-koppoju-99b540208/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Vikaskoppoju"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { value: '7+', label: 'Projects' },
              { value: '2+', label: 'Yrs. Exp.' },
              { value: '5+', label: 'Skills' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-3xl font-black"
                  style={{ color: '#00D4FF', fontFamily: "'Orbitron', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-xs mt-0.5 tracking-wide" style={{ color: '#8FA3B8' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Image ── */}
        <motion.div
          className="flex-1 flex items-center justify-center relative"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Decorative rings */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 420,
              height: 420,
              border: '1px solid rgba(0,212,255,0.18)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 360,
              height: 360,
              border: '1px solid rgba(123,47,190,0.2)',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />

          {/* Glow behind image */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(0,212,255,0.15), rgba(123,47,190,0.1), transparent 70%)',
              filter: 'blur(20px)',
            }}
          />

          {/* Profile image with mouse parallax */}
          <motion.div
            className="relative z-10"
            style={{
              rotateY: mousePos.x * 8,
              rotateX: -mousePos.y * 6,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* Outer glow border */}
            <div
              className="rounded-full p-1"
              style={{
                background: 'linear-gradient(135deg, #00D4FF, #7B2FBE, #FFD700)',
                boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(123,47,190,0.15)',
              }}
            >
              <div
                className="rounded-full overflow-hidden"
                style={{ width: 300, height: 300, border: '3px solid #050A18' }}
              >
                <img
                  src={me1}
                  alt="Vikas Kumar Koppoju"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badge — top right */}
            <motion.div
              className="absolute -top-4 -right-6 px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5"
              style={{
                background: 'rgba(0,212,255,0.15)',
                border: '1px solid rgba(0,212,255,0.4)',
                color: '#00D4FF',
                backdropFilter: 'blur(8px)',
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Available
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              className="absolute -bottom-4 -left-8 px-3 py-2 rounded-xl text-xs font-mono"
              style={{
                background: 'rgba(13,27,42,0.9)',
                border: '1px solid rgba(123,47,190,0.4)',
                color: '#a070d0',
                backdropFilter: 'blur(8px)',
              }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              ⚡ Full Stack Dev
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span
          className="text-[10px] tracking-[0.32em]"
          style={{ color: '#4a6a9a', fontFamily: "'Fira Code', monospace" }}
        >
          SCROLL
        </span>
        <ChevronDown size={16} style={{ color: '#00D4FF' }} />
      </motion.div>
    </section>
  )
}
