import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Bricolage_Grotesque, Tenor_Sans } from "next/font/google"
import "./globals.css"
import "../styles/fonts.css"
import "../styles/animations.css"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
})

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  variable: "--font-tenor-sans",
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wolfmail.services"),
  title: "WolfMail - Professional Email Marketing Templates & Services",
  description:
    "Elevate your email marketing with professionally crafted templates. Hand-coded, thoroughly tested, and seamlessly optimized for all email clients and devices.",
  keywords: ["email marketing", "email templates", "responsive email", "HTML email", "email design", "WolfMail"],
  authors: [{ name: "WolfMail" }],
  creator: "WolfMail",
  publisher: "WolfMail",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-hHkHWolyZR88FVgmxdQhEiqEv3sa3q.png",
        type: "image/png",
      },
    ],
    apple: [{ url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-hHkHWolyZR88FVgmxdQhEiqEv3sa3q.png" }],
  },
  openGraph: {
    type: "website",
    url: "https://wolfmail.services",
    title: "WolfMail - Professional Email Marketing Templates",
    description: "Elevate your email marketing with professionally crafted templates that drive engagement",
    siteName: "WolfMail",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ReallHero-6rMJlJnJy3SAb4YIHnbjrLpYZeVNlS.png",
        width: 1600,
        height: 675,
        alt: "WolfMail - Professional Email Templates",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wolfmail",
    creator: "@wolfmail",
    title: "WolfMail - Professional Email Marketing Templates",
    description: "Hand-coded and thoroughly tested email templates that drive engagement",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ReallHero-6rMJlJnJy3SAb4YIHnbjrLpYZeVNlS.png",
        width: 1600,
        height: 675,
        alt: "WolfMail - Professional Email Templates",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://wolfmail.services",
  },
  category: "Technology",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${bricolageGrotesque.variable} ${tenorSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

