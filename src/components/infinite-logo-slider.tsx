"use client"

import Image from "next/image"
import styles from "./infinite-logo-slider.module.css"

const logos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/450548374_993927939067425_8704642324582911840_n%201-FBaDTVBpAhZJ0kzsoQ5uJm3MY5Rj5G.png",
    alt: "Vera Bradley",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8e46726c-03d0-4b04-9487-89e9123c75d0%201-IGiedX8MUJ5f2raZ6YZv1w1GxcIPOd.png",
    alt: "Puravida",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FF_Vert_Black%201-EmJzVZXThqQcDsrD6E2hZIaSzbyhZq.png",
    alt: "Flock Freight",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20-%20Copy%201-tnlgJBJZHbbvCG4sQZQ8Afyt3Un5OJ.png",
    alt: "Amenify",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20(2)-8SqVAmoJatLADywasaC1AR8wJxyZPh.png",
    alt: "Client Logo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bumble_and_bumble%201-wDf79hDSyAT2mTt5x9fpKYLIgffIP8.png",
    alt: "Bumble and bumble",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SABMGroup_square%201-Ykoz6JOXylKFmoROqlgn5QrJsBOTJN.png",
    alt: "SABM Group",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%201-rRzVFUZAk1GF7J7pj1wQZoAe4NKms9.png",
    alt: "Owlet",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%202-40oWTLVVe4rSQ2qbuqkFgKpDubdPGU.png",
    alt: "Beauty Affairs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20(1)-53VugaZP1oAAZ8Dfrid4FY25AX06uj.png",
    alt: "Haven Life",
  },
]

export function InfiniteLogoSlider() {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={40}
              className={styles.logo}
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className={styles.slide}>
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={40}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

