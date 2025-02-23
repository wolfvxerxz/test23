"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const FloatingElements = () => {
  const elements = [
    { src: "/envelope.png", alt: "Envelope", size: 40 },
    { src: "/paper-plane.png", alt: "Paper Plane", size: 30 },
    { src: "/mail.png", alt: "Mail", size: 50 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <Image src={element.src || "/placeholder.svg"} alt={element.alt} width={element.size} height={element.size} />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements

