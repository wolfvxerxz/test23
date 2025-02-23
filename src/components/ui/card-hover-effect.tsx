"use client"

import type React from "react"
import { motion } from "framer-motion"

interface CardHoverEffectProps {
  children: React.ReactNode
  className?: string
}

export const CardHoverEffect = ({ children, className }: CardHoverEffectProps) => {
  return (
    <motion.div
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default CardHoverEffect

