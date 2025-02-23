import type React from "react"
import type { Metadata } from "next"
import { Rethink_Sans, Bricolage_Grotesque, Tenor_Sans } from "next/font/google"
import "./globals.css"
import "../styles/fonts.css"
import "../styles/animations.css"

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
})

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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-hHkHWolyZR88FVgmxdQhEiqEv3sa3q.png",
        width: 1200,
        height: 630,
        alt: "WolfMail - Professional Email Templates",
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
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-hHkHWolyZR88FVgmxdQhEiqEv3sa3q.png"],
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

// New viewport export
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
      <body className={`${rethinkSans.variable} ${bricolageGrotesque.variable} ${tenorSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

