"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "./testimonial-slider.module.css"

const testimonials = [
  {
    name: "Sophia M.",
    role: "Marketing Manager",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sophia-VCr4Bd5h5zIEOh6HhOccd9RBcNPXmt.png",
    content:
      "Switching to WolfMail templates was the best decision we made for our email marketing. With other services like Mailchimp, our emails often ended up in the spam folder, but with WolfMail, they consistently land in our customers' inboxes. The beautifully designed templates not only showcase our brand but also help us achieve better engagement and conversion rates. Truly a game-changer!",
  },
  {
    name: "Adrian P.",
    role: "Founder",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adrian%20-34hB0wnUE3JSAD83nnbducFgdSLScq.png",
    content:
      "We used to struggle with email deliverability using Constant Contact templates, but ever since we switched to WolfMail, it's been a different story. Our emails now always reach our subscriber's inboxes, and we've seen a 30% increase in our open rates. The designs are stunning, and the coding is flawless. WolfMail has elevated our email marketing to new heights.",
  },
  {
    name: "Emily R.",
    role: "E-commerce Manager",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emily%20-scE1MfFur6ROqG68VkSdX3aogMfbM4.png",
    content:
      "WolfMail templates are in a league of their own! Unlike Campaign Monitor templates, which caused frequent deliverability issues, our emails now reach more inboxes and are always seen. Not only do they look incredible, but they also outperform in every metric—open rates, click-through, and customer satisfaction. It's like having a secret weapon for email marketing.",
  },
  {
    name: "Michael T.",
    role: "Digital Marketing Specialist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michael%20-621Nid8OPXMWKk2VoNCWhFfosPcVQv.png",
    content:
      "I've worked with numerous email marketing tools, but WolfMail stands out for its exceptional template quality and ease of use. The responsive designs ensure our messages look great on any device, and the customization options allow us to maintain our brand identity effortlessly. Our engagement rates have soared since making the switch!",
  },
  {
    name: "Sarah L.",
    role: "Content Strategist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sarah%20-awYg3b4QCCX6kvdIH1PDfPNIIKXQTa.png",
    content:
      "As someone who focuses on creating compelling content, I appreciate how WolfMail's templates enhance our messaging. The clean, professional designs draw attention to our content without overwhelming it. Plus, the seamless integration with our CRM has streamlined our entire email marketing process. It's a content creator's dream!",
  },
  {
    name: "David K.",
    role: "Small Business Owner",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/David%20-6qH0yeNdFTefjVi8TFgdxvXX7tYiOo.png",
    content:
      "For a small business like mine, WolfMail has been a game-changer. The templates are not only beautiful but also incredibly easy to customize. I'm not a tech expert, but I can create professional-looking emails in minutes. The impact on our customer engagement and sales has been remarkable. I couldn't recommend WolfMail more highly!",
  },
]

export function TestimonialSlider() {
  const [imageLoadError, setImageLoadError] = useState<{ [key: string]: boolean }>({})

  const handleImageError = (name: string) => {
    setImageLoadError((prev) => ({ ...prev, [name]: true }))
  }

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div key={index} className={styles.slide}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg w-[300px] md:w-[400px] h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  {imageLoadError[testimonial.name] ? (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      {testimonial.name.charAt(0)}
                    </div>
                  ) : (
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name}'s profile picture`}
                      width={64}
                      height={64}
                      className="object-cover"
                      onError={() => handleImageError(testimonial.name)}
                    />
                  )}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 text-base md:text-lg font-sans leading-relaxed">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

