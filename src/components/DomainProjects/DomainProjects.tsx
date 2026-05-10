import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Project {
  id: number
  domain: string
  title: string
  description: string
  image: string
  link: string
}

interface DomainStyle {
  bg: string
  text: string
  border: string
}

const domainStyles: Record<string, DomainStyle> = {
  'Data Visualization':    { bg: 'rgba(0,212,255,0.14)',   text: '#00D4FF', border: 'rgba(0,212,255,0.3)' },
  'Machine Learning':      { bg: 'rgba(255,215,0,0.14)',   text: '#FFD700', border: 'rgba(255,215,0,0.3)' },
  'Deep Learning':         { bg: 'rgba(123,47,190,0.18)',  text: '#a070d0', border: 'rgba(123,47,190,0.35)' },
  'UI/UX Redesign':        { bg: 'rgba(0,230,120,0.14)',   text: '#00e678', border: 'rgba(0,230,120,0.3)' },
  'Wordpress Development': { bg: 'rgba(255,107,53,0.14)',  text: '#ff7c4a', border: 'rgba(255,107,53,0.3)' },
}

const domainProjects: Project[] = [
  {
    id: 1,
    domain: 'Data Visualization',
    title: 'Investment Strategy Recommendation',
    description:
      'Power BI dashboard providing comprehensive analysis of investment strategies, showcasing ROI, risk levels, and market trends for informed decision-making.',
    image: '/assets/images/powerbi1.png',
    link: 'https://drive.google.com/file/d/1UK08bGkD_RAfqh1VdIotOL_QbBIj0dcX/view?usp=sharing',
  },
  {
    id: 2,
    domain: 'Data Visualization',
    title: 'Sales Intelligence Dashboard',
    description:
      'Clear snapshot of sales performance, product and regional trends, and customer preferences to support targeted marketing and stock planning.',
    image: '/assets/images/powerbi2.png',
    link: 'https://drive.google.com/file/d/1pa2zcDElop--kfpmZm-opypzydoybSLF/view?usp=sharing',
  },
  {
    id: 3,
    domain: 'Machine Learning',
    title: 'Disease Prediction using ML',
    description:
      'Web app using Random Forest Algorithm for symptom-based predictions, integrated with Django backend. Achieved 75/25 train-test split accuracy.',
    image: '/assets/images/random.jpg',
    link: 'https://github.com/Vikaskoppoju/DiseaseML',
  },
  {
    id: 4,
    domain: 'Deep Learning',
    title: 'Deep Fake Detection',
    description:
      'Django-based app for uploading and detecting deepfake videos with confidence scores. Trained on celeb-df, DFD Challenge, and FF++ datasets using ResNeXt + LSTM.',
    image: '/assets/images/deepfake.png',
    link: 'https://github.com/Vikaskoppoju/deepfake',
  },
  {
    id: 5,
    domain: 'UI/UX Redesign',
    title: 'College Website Redesign',
    description:
      'Led a team of 5 in revamping the official college website with improved UI/UX using HTML, CSS, Bootstrap, and JavaScript for a modern responsive experience.',
    image: '/assets/images/vasavi.png',
    link: 'https://srivasaviengg.ac.in/',
  },
  {
    id: 6,
    domain: 'Wordpress Development',
    title: "Dr Khalid's Portfolio",
    description:
      "Professional portfolio website for Dr. Khalid Hakeem built with WordPress, showcasing his expertise and achievements in a clean, modern design.",
    image: '/assets/images/khalid.png',
    link: 'https://drkhalidhakeem.com/',
  },
  {
    id: 7,
    domain: 'Wordpress Development',
    title: "Dr Ibrar's Portfolio",
    description:
      "Professional portfolio website for Dr. Ibrar built with WordPress, showcasing his expertise and achievements in a clean, modern design.",
    image: '/assets/images/ibrar.png',
    link: 'https://learnwithibrar.com/',
  },
]

export default function DomainProjects() {
  return (
    <section id="work" className="py-24" style={{ background: '#0A1428' }}>
      <div className="max-w-7xl mx-auto px-6">
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
            PORTFOLIO
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black mt-3 mb-5 gradient-text"
          >
            Real-Time Projects
          </h2>
          <div
            className="w-16 h-0.5 mx-auto"
            style={{ background: 'linear-gradient(90deg, #00D4FF, #7B2FBE)' }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {domainProjects.map((project, index) => {
            const style = domainStyles[project.domain] ?? domainStyles['Data Visualization']
            return (
              <motion.div
                key={project.id}
                className="group glass-card overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: (index % 3) * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{ cursor: 'default' }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(10,20,40,0.92) 0%, rgba(10,20,40,0.1) 60%)',
                    }}
                  />
                  {/* Domain tag */}
                  <span
                    className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full"
                    style={{
                      background: style.bg,
                      color: style.text,
                      border: `1px solid ${style.border}`,
                    }}
                  >
                    {project.domain}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="text-base font-bold mb-2 leading-snug group-hover:text-cyan-400 transition-colors duration-300"
                    style={{ color: '#E8F4F8', fontFamily: 'Inter, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: '#8FA3B8', fontFamily: 'Inter, sans-serif' }}
                  >
                    {project.description.length > 110
                      ? `${project.description.slice(0, 110)}…`
                      : project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-250 hover:-translate-y-0.5 w-fit"
                    style={{
                      background: 'rgba(0,212,255,0.12)',
                      color: '#00D4FF',
                      border: '1px solid rgba(0,212,255,0.3)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    <ExternalLink size={13} />
                    View Project
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
