import type React from "react"
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>WolfMail - Professional Email Marketing Templates & Services</title>
        <meta name="description" content="Elevate your email marketing with professionally crafted templates." />
      </head>
      <body className={`${rethinkSans.variable} ${bricolageGrotesque.variable} ${tenorSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

