import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Update cursor position
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Cursor Variants
  const variants = {
    default: {
      scale: 1,
      backgroundColor: "rgba(255, 215, 0, 0.8)",
    },
    hover: {
      scale: 2,
      backgroundColor: "rgba(255, 215, 0, 0.3)",
    },
  };

  // Handle hover effect
  const handleMouseEnter = () => setCursorVariant("hover");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <>
      {/* Small Cursor Core */}
      <motion.div
        className="fixed z-50 w-3 h-3 rounded-full bg-[#FFD700] pointer-events-none"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {/* Larger Follow Cursor */}
      <motion.div
        className="fixed z-50 w-10 h-10 rounded-full border border-[#FFD700] pointer-events-none"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 40, damping: 10 }}
      />

      {/* Example Hover Area */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="fixed top-1/2 left-1/2 w-32 h-32 bg-red-500 text-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      >
        Hover Me
      </div>
    </>
  );
};

export default CustomCursor;
