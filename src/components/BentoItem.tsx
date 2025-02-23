import type React from "react"
import Image from "next/image"
import { CardHoverEffect } from "./ui/card-hover-effect"

interface BentoItemProps {
  title: string
  description: string
  image: string
}

const BentoItem: React.FC<BentoItemProps> = ({ title, description, image }) => {
  return (
    <CardHoverEffect>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg h-full">
        <div className="aspect-[4/3] relative mb-6 rounded-xl overflow-hidden bg-gray-100">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain p-4" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </CardHoverEffect>
  )
}

export default BentoItem

