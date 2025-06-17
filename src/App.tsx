import { useState } from "react"
import DomainProjects from "./components/DomainProjects/DomainProjects"
import EducationTimeline from "./components/EducationTimeline/EducationTimeline"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import ProjectSlideshow from "./components/ProjectSlideshow/ProjectSlideshow"
import SkillShowcase from "./components/SkillShowcase/SkillShowcase"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import VideoLoader from "./components/VideoLoader/VideoLoader" // ✅ Import VideoLoader

function App() {
  const [isLoading, setIsLoading] = useState(true) // ✅ State to toggle loader

  const handleVideoEnd = () => {
    setIsLoading(false) // ✅ Hide loader after video ends
  }

  return (
    <>
      {isLoading ? (
        <VideoLoader onFinish={handleVideoEnd} />
      ) : (
        <div className="App">
          <Header />
          <Hero />
          <WorkExperience />
          <ProjectSlideshow />
          <DomainProjects />
          <SkillShowcase />
          <EducationTimeline />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
