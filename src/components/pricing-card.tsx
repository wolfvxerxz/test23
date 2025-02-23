import type React from "react"
import { CalButton } from "./cal-button"

interface PricingCardProps {
  title: string
  price: string
  description: string
  icon: string
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, icon }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center relative overflow-hidden">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-4">{price}</div>
      <p className="text-gray-600 mb-6">{description}</p>
      <CalButton className="w-full bg-[#181818] text-white hover:bg-[#181818]/90 shadow-md hover:shadow-lg transition-shadow">
        Book a call
      </CalButton>
    </div>
  )
}

export default PricingCard

