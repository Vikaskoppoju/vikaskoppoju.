import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Data Analyst – Power BI Trainee',
    company: 'Persistent Systems',
    period: 'Sept 2025 – Present',
    description:
      'Working on advanced Power BI dashboards, data visualization, and analytics solutions for enterprise clients. Building DAX measures and optimizing report performance.',
    tags: ['Power BI', 'DAX', 'SQL', 'Data Analytics'],
    current: true,
  },
  {
    title: 'Data Analyst – Power BI Trainee',
    company: 'Revature',
    period: 'Mar 2025 – May 2025',
    description:
      'Developed Power BI dashboards and reports to surface data-driven insights. Built data transformation pipelines and created interactive visual analytics.',
    tags: ['Power BI', 'DAX', 'Excel', 'Reporting'],
    current: false,
  },
  {
    title: 'SQL Trainee',
    company: 'Revature',
    period: 'Nov 2024 – Jan 2025',
    description:
      'Improved SQL query performance by 25% through optimization techniques. Focused on database design, complex joins, and stored procedures.',
    tags: ['SQL', 'MySQL', 'Database Design', 'Optimization'],
    current: false,
  },
  {
    title: 'Full Stack Intern',
    company: 'OBSOFT',
    period: 'Mar 2023 – Oct 2024',
    description:
      'Built a Django-based student evaluation system integrating Python backend with responsive frontend interfaces. Handled deployment and database migrations.',
    tags: ['Django', 'Python', 'HTML/CSS', 'JavaScript'],
    current: false,
  },
]

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      style={{ background: '#050A18' }}
    >
      <div
        className="absolute right-0 top-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,47,190,0.07), transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="text-[0.68rem] tracking-[0.28em]"
            style={{ color: '#00D4FF', fontFamily: "'Fira Code', monospace" }}
          >
            CAREER PATH
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black mt-3 mb-5"
            style={{
              background: 'linear-gradient(135deg, #E8F4F8, #8FA3B8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Work Experience
          </h2>
          <div
            className="w-16 h-0.5 mx-auto"
            style={{ background: 'linear-gradient(90deg, #00D4FF, #7B2FBE)' }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10">
          <div
            className="absolute left-3 top-2 bottom-2 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent, #00D4FF 15%, #7B2FBE 80%, transparent)',
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative mb-10 last:mb-0"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
            >
              {/* Dot */}
              <div
                className="absolute -left-[29px] top-6 w-3 h-3 rounded-full border-2 z-10"
                style={{
                  background: exp.current ? '#00D4FF' : '#0D1B2A',
                  borderColor: exp.current ? '#00D4FF' : '#2a4a6a',
                  boxShadow: exp.current ? '0 0 14px rgba(0,212,255,0.7)' : 'none',
                }}
              />

              {/* Card */}
              <div
                className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(13,27,42,0.8)',
                  border: '1px solid rgba(0,212,255,0.12)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="text-base font-bold leading-snug"
                    style={{ color: '#E8F4F8', fontFamily: 'Inter, sans-serif' }}
                  >
                    {exp.title}
                  </h3>
                  {exp.current && (
                    <span
                      className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(0,212,255,0.14)',
                        color: '#00D4FF',
                        border: '1px solid rgba(0,212,255,0.3)',
                      }}
                    >
                      CURRENT
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <Briefcase size={12} style={{ color: '#00D4FF' }} />
                  <span className="text-sm font-medium" style={{ color: '#00D4FF', fontFamily: 'Inter, sans-serif' }}>
                    {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-4">
                  <Calendar size={11} style={{ color: '#8FA3B8' }} />
                  <span className="text-xs" style={{ color: '#8FA3B8', fontFamily: "'Fira Code', monospace" }}>
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: '#8FA3B8', fontFamily: 'Inter, sans-serif' }}>
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded"
                      style={{
                        background: 'rgba(123,47,190,0.18)',
                        color: '#a070d0',
                        border: '1px solid rgba(123,47,190,0.28)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
