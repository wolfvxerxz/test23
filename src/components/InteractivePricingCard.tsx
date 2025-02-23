"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CalButton } from "@/components/cal-button"

interface PricingCardProps {
  title: string
  price: string
  description: string
  icon: string
}

const InteractivePricingCard: React.FC<PricingCardProps> = ({ title, price, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center relative overflow-hidden"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-4">{price}</div>
      <p className="text-gray-600 mb-6">{description}</p>
      <CalButton className="w-full bg-[#181818] text-white hover:bg-[#181818]/90 shadow-md hover:shadow-lg transition-shadow">
        Book a call
      </CalButton>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default InteractivePricingCard

