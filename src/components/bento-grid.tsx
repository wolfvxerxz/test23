"use client"

import Image from "next/image"
import { CardHoverEffect } from "./ui/card-hover-effect"
import { motion } from "framer-motion"

interface BentoItem {
  title: string
  description: string
  image: string
  delay?: number
}

const bentoItems: BentoItem[] = [
  {
    title: "Responsive Design",
    description:
      "Our templates adapt perfectly to all devices and screen sizes, ensuring your message looks great everywhere.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202147223644-pyHomaqIJBAZ3BRm4fRfKQ2A7yuPIg.png",
    delay: 0.2,
  },
  {
    title: "Client Compatibility",
    description:
      "Thoroughly tested across all major email clients for consistent rendering and optimal deliverability.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202147223645-TFDtuvViG58tnm93RyOpgWNeyX98Ui.png",
    delay: 0.3,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing process ensures your emails display perfectly across all platforms and devices.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202147223646-hwjfg4C7FZcjudbgXsgsWWZsDK2oRn.png",
    delay: 0.4,
  },
  {
    title: "Easy Customization",
    description: "Simple to edit and customize, making it easy to maintain brand consistency across campaigns.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshotatpm-4qSq6bVQq215FJqoZ29nqdqMLGyZnX.png",
    delay: 0.5,
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality, helping you meet tight marketing deadlines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202147223648-LGR6FJd2TY6AzyyBxxvCSrCpkhCQp4.png",
    delay: 0.6,
  },
  {
    title: "Ongoing Support",
    description: "Dedicated support team to help with implementation, troubleshooting, and optimizations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202147223646-hwjfg4C7FZcjudbgXsgsWWZsDK2oRn.png",
    delay: 0.7,
  },
]

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
      {bentoItems.map((item) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <CardHoverEffect>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg h-full">
              <div className="aspect-[4/3] relative mb-6 rounded-xl overflow-hidden bg-gray-100">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain p-4" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>
          </CardHoverEffect>
        </motion.div>
      ))}
    </div>
  )
}

