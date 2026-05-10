import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WorkExperience from './components/WorkExperience/WorkExperience'
import DomainProjects from './components/DomainProjects/DomainProjects'
import SkillShowcase from './components/SkillShowcase/SkillShowcase'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <DomainProjects />
        <SkillShowcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
