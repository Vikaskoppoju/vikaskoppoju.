import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, MonitorSmartphone, Globe, DatabaseZap, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Skill {
  icon: LucideIcon
  name: string
  level: number
  color: string
  technologies: string[]
}

const skills: Skill[] = [
  {
    icon: Code2,
    name: 'Frontend Development',
    level: 85,
    color: '#00D4FF',
    technologies: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind'],
  },
  {
    icon: DatabaseZap,
    name: 'Backend Development',
    level: 75,
    color: '#7B2FBE',
    technologies: ['Django', 'Python', 'Node.js', 'REST APIs'],
  },
  {
    icon: BarChart3,
    name: 'Power BI & Analytics',
    level: 82,
    color: '#FFD700',
    technologies: ['Power BI', 'DAX', 'Excel', 'Data Viz'],
  },
  {
    icon: Globe,
    name: 'WordPress Development',
    level: 90,
    color: '#00e678',
    technologies: ['WordPress', 'Elementor', 'WooCommerce', 'PHP'],
  },
  {
    icon: MonitorSmartphone,
    name: 'Responsive Design',
    level: 88,
    color: '#ff7c4a',
    technologies: ['CSS Grid', 'Flexbox', 'Bootstrap', 'Mobile-first'],
  },
]

interface SkillBarProps {
  skill: Skill
  inView: boolean
  delay: number
}

function SkillBar({ skill, inView, delay }: SkillBarProps) {
  const Icon = skill.icon
  return (
    <motion.div
      className="glass-card p-5 flex gap-4 items-start transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: `${skill.color}1a`, border: `1px solid ${skill.color}33` }}
      >
        <Icon size={22} style={{ color: skill.color }} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-sm font-semibold truncate"
            style={{ color: '#E8F4F8', fontFamily: 'Inter, sans-serif' }}
          >
            {skill.name}
          </span>
          <span
            className="text-xs font-mono ml-3 shrink-0"
            style={{ color: skill.color }}
          >
            {skill.level}%
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="h-1.5 rounded-full mb-3 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.07)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
            initial={{ width: 0 }}
            animate={{ width: inView ? `${skill.level}%` : 0 }}
            transition={{ duration: 1.3, ease: 'easeOut', delay: delay + 0.2 }}
          />
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {skill.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded font-mono"
              style={{ background: 'rgba(255,255,255,0.06)', color: '#8FA3B8' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function SkillShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ background: '#050A18' }}
    >
      <div
        className="absolute left-0 bottom-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06), transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="text-[0.68rem] tracking-[0.28em]"
            style={{ color: '#00D4FF', fontFamily: "'Fira Code', monospace" }}
          >
            EXPERTISE
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black mt-3 mb-5"
            style={{
              background: 'linear-gradient(135deg, #E8F4F8, #8FA3B8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Skills
          </h2>
          <div
            className="w-16 h-0.5 mx-auto"
            style={{ background: 'linear-gradient(90deg, #00D4FF, #7B2FBE)' }}
          />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} inView={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
