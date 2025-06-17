import { useEffect, useRef, useState } from "react"

interface VideoLoaderProps {
  onFinish: () => void
}

const VideoLoader: React.FC<VideoLoaderProps> = ({ onFinish }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect screen width
    setIsMobile(window.innerWidth <= 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)

    const video = videoRef.current
    if (video) {
      video.addEventListener("ended", onFinish)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      if (video) {
        video.removeEventListener("ended", onFinish)
      }
    }
  }, [onFinish])

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        src={isMobile ? "./assets/images/mobile_flash.mp4" : "./assets/images/flash.mp4"}
      />
    </div>
  )
}

export default VideoLoader
