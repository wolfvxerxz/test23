"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { InfiniteLogoSlider } from "@/components/infinite-logo-slider"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUp, Star } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { TemplateDialog } from "@/components/template-dialog"
import { CalButton } from "@/components/cal-button"
import { TestimonialSlider } from "@/components/testimonial-slider"
import Footer from "@/components/Footer"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<{ src: string; alt: string } | null>(null)
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  const featuresRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)
  const ourWorkRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const navbarRef = useRef<HTMLDivElement>(null)

  const { scrollY, scrollYProgress } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsNavbarFixed(true)
      setShowScrollToTop(true)
    } else {
      setIsNavbarFixed(false)
      setShowScrollToTop(false)
    }
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isPageLoaded && navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight
      document.documentElement.style.setProperty("--navbar-height", `${navbarHeight}px`)
    }
  }, [isPageLoaded])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current && navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight
      const elementPosition = ref.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }, 100)
        }
      }
    }

    handleScrollToHash()
    window.addEventListener("hashchange", handleScrollToHash)

    return () => {
      window.removeEventListener("hashchange", handleScrollToHash)
    }
  }, [])

  const templates = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UNTAMED-2X7UvKBNBWjEaWuWBPCzKpbre4juHO.png",
      alt: "Untamed Pet Food Email Template",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Goldbelly-YyqWPXaigFZw7rlxgzekyQWSdBMdpj.png",
      alt: "Goldbelly Food Delivery Email Template",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buoy%20Reveiws-2S35Fx6eUg8Hk6u55cl5llxNdpvEVp.png",
      alt: "Buoy Health Supplements Email Template",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nuud-24angY6sLKkV1yU2vDQtol6NbVQCcv.png",
      alt: "Nuud Natural Deodorant Email Template",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prime-ZVaCESdFOXAaFNxFO4QYZaZ9xlIQn5.png",
      alt: "Prime Energy Drink Email Template",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Peak-y11YkDOc7EceX9I2yqmD9h0MpUcxth.png",
      alt: "Peak Mood Drinks Email Template",
    },
  ]

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus("submitting")

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch("https://formsubmit.co/ajax/wolfvxerxz@gmail.com", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setFormStatus("success")
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")
    }
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50 relative overflow-hidden"
      ref={homeRef}
    >
      {/* Static Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[300px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gradient-bg%201-7jh3wTkvW6WNwoKovUCepQQMSTPSp2.png"
            alt="Gradient background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <div
        ref={navbarRef}
        className={`${isNavbarFixed ? "fixed top-0 left-0 right-0 z-50" : "relative"} transition-all duration-300`}
        style={{
          position: isPageLoaded ? (isNavbarFixed ? "fixed" : "relative") : "absolute",
          top: isPageLoaded ? (isNavbarFixed ? "0" : "auto") : "-100%",
        }}
      >
        <div className="container mx-auto px-4 py-6">
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex items-center justify-between max-w-[900px] mx-auto bg-white/60 backdrop-blur-sm rounded-full px-4 md:px-6 py-3 shadow-lg shadow-[inset_0px_-6px_20px_rgba(255,255,255,0.6)] ${isNavbarFixed ? "shadow-md" : ""}`}          >
            <div className="flex items-center gap-2">
              <button onClick={scrollToTop} className="focus:outline-none">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-hHkHWolyZR88FVgmxdQhEiqEv3sa3q.png"
                  alt="WolfMail Logo"
                  width={200}
                  height={40}
                  className="h-8 md:h-11 w-auto"
                />
              </button>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection(featuresRef)}
                className="font-medium text-gray-900 hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform hover:after:origin-left hover:after:scale-x-100"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection(ourWorkRef)}
                className="font-medium text-gray-900 hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform hover:after:origin-left hover:after:scale-x-100"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection(pricingRef)}
                className="font-medium text-gray-900 hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform hover:after:origin-left hover:after:scale-x-100"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection(faqRef)}
                className="font-medium text-gray-900 hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform hover:after:origin-left hover:after:scale-x-100"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="font-medium text-gray-900 hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform hover:after:origin-left hover:after:scale-x-100"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:inline-flex">
                <CalButton
                  variant="default"
                  rounded="full"
                  className="bg-[#181818] text-white hover:bg-[#181818]/90 px-4 py-2 text-sm relative overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  Book a call
                </CalButton>
              </div>
              <MobileNav
                onScrollToSection={(sectionId) => {
                  if (sectionId === "features") scrollToSection(featuresRef)
                  if (sectionId === "our-work") scrollToSection(ourWorkRef)
                  if (sectionId === "pricing") scrollToSection(pricingRef)
                  if (sectionId === "faq") scrollToSection(faqRef)
                  if (sectionId === "contact") scrollToSection(contactRef)
                }}
                onScrollToTop={scrollToTop}
              />
            </div>
          </motion.nav>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-black z-50" style={{ scaleX: scrollYProgress }} />

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-[#181818] text-white p-3 rounded-full shadow-lg z-50"
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
        className="flex justify-center mt-8 animate-fade-in-up"
      >
        <div className="bg-white/50 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 flex items-center gap-2 md:gap-4 border border-gray-200 shadow-md">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shield-qR1FepRFADUTGYEgefcx3TyQWDqPTY.png"
            alt="Trust Shield"
            width={30}
            height={30}
            className="w-6 h-6 md:w-7 md:h-7 mt-[2px]"
          />
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <span className="text-xs md:text-sm font-normal whitespace-nowrap">Trusted by <b>10k+</b> customers</span>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mt-16 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
         <h1 className="text-4xl sm:text-5xl md:text-6xl font-rethink font-heading-bold leading-tight mb-6">
  Boost Your{" "}
  <Image
    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/envelope%201-yQScTe8EL2P1HH5T0WdvmTYFOhX5gf.png"
    alt="Email"
    width={100}
    height={100}
    className="inline-block -mt-2 mx-2"
  />{" "}
  Email
  <br />
  Marketing With Templates
  <br />
  That Increase Engagement
</h1>


          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hand-coded, thoroughly tested, and seamlessly optimized responsive email templates with customizable designs
            and quick turnaround time to meet your marketing schedule.
          </p>

          <CalButton
            size="lg"
            className="bg-[#181818] text-white hover:bg-[#181818]/90 text-xl py-8 px-12 rounded-xl transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-xl"
          >
            Book a 30-min call
          </CalButton>
        </motion.div>

        {/* Main Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-8 md:mt-16 relative max-w-[1600px] mx-auto z-10"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ReallHero-6rMJlJnJy3SAb4YIHnbjrLpYZeVNlS.png"
              alt="Gmail Interface with WolfMail Templates"
              width={1600}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Trusted By Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bricolage font-heading-bold text-center mb-16"
          >
            Trusted By
          </motion.h2>
          <InfiniteLogoSlider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-lg mt-16"
          >
            WolfMail has made email marketing effortless and highly effective. After trying in-house teams, freelancers,
            and various tools, nothing compares to their reliability and creativity. They don&apos;t just send
            campaigns, they create meaningful connections that leave a lasting impact.
          </motion.div>
        </div>
      </motion.section>

      {/* Here's what you'll get Section */}
      <motion.section
        ref={featuresRef}
        id="features"
        className="pt-24 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bricolage font-heading-bold text-center mb-16">
            Here&apos;s what you&apos;ll get:
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* First Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-lg flex flex-col"
            >
              <div className="flex-grow aspect-[4/3] relative mb-6 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202147223644-pyHomaqIJBAZ3BRm4fRfKQ2A7yuPIg.png"
                  alt="Responsive"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Responsive</h3>
                <p className="text-gray-600 text-lg">Responsive, Integrations, and Add-ons included in the price!</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-lg lg:col-span-2"
            >
              <div className="aspect-[16/9] relative mb-6 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202147223645-TFDtuvViG58tnm93RyOpgWNeyX98Ui.png"
                  alt="Compatible"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Compatible</h3>
              <p className="text-gray-600 text-lg">100% compatibility with all email clients, browsers and devices</p>
            </motion.div>

            {/* Second Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-lg"
            >
              <div className="aspect-[4/3] relative mb-6 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202147223646-hwjfg4C7FZcjudbgXsgsWWZsDK2oRn.png"
                  alt="Tested"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Tested</h3>
              <p className="text-gray-600 text-lg">
                Thorough testing and quality check for free! We&apos;ll send you report with screenshots
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-lg"
            >
              <div className="aspect-[4/3] relative mb-6 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshotatpm-4qSq6bVQq215FJqoZ29nqdqMLGyZnX.png"
                  alt="Easy"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Easy</h3>
              <p className="text-gray-600 text-lg">Easy-to-edit email templates</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-lg"
            >
              <div className="aspect-[4/3] relative mb-6 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202147223648-LGR6FJd2TY6AzyyBxxvCSrCpkhCQp4.png"
                  alt="Safe"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Safe</h3>
              <p className="text-gray-600 text-lg">Results you love or your money back</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Work Section */}
      <motion.section
        ref={ourWorkRef}
        id="our-work"
        className="pt-24 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bricolage font-heading-bold mb-4">Our Work</h2>
            <p className="text-xl text-gray-600">
              We&apos;ve done 5,000+ Newsletters, Transactional, Marketing Email Templates,
              <br />
              EDM&apos;s, Landing Pages and Automations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {templates.map((template, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative aspect-[9/16] rounded-lg overflow-hidden group bg-white/80 backdrop-blur-sm shadow-lg"
              >
                <Image
                  src={template.src || "/placeholder.svg"}
                  alt={template.alt}
                  width={337}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    className="bg-white text-black hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedTemplate(template)}
                  >
                    View Template
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Template Dialog */}
      {selectedTemplate && (
        <TemplateDialog
          isOpen={!!selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          template={selectedTemplate}
        />
      )}

      {/* Email Client Compatibility Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-16">
              Our code Renders Correctly on{" "}
              <span className="font-semibold">All Email Clients, browsers and devices</span>, and our templates work
              well with <span className="font-semibold">Any Service that Can Send Email</span> including:
            </p>

            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-8Nf3Q7ZKanCcwNYvUJBw9O06NqF2g0.png"
                alt="Email Service Providers"
                width={600}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Order Now Section */}
      <motion.section
        ref={pricingRef}
        id="pricing"
        className="pt-24 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bricolage font-heading-bold text-center mb-16">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Code Only",
                price: "$79",
                description: "Convert your .PSD or similar design files into responsive HTML email templates with precision.",
                icon: "💻",
              },
              {
                title: "Design & Code",
                price: "$199",
                description: "Custom-designed and coded email templates to match your brand and goals",
                icon: "🎨",
              },
              {
                title: "Other Services",
                price: "$30/hour",
                description: "Hire our experts for email campaigns, automations, landing pages, and more.",
                icon: "⚡",
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <CalButton className="w-full bg-[#181818] text-white hover:bg-[#181818]/90 shadow-md hover:shadow-lg transition-shadow">
                  Book a call
                </CalButton>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Prices are per template.</p>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-16 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bricolage font-heading-bold text-center mb-16">Testimonials</h2>
          <TestimonialSlider />
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        id="faq"
        className="pt-12 pb-16 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <FAQSection />
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        ref={contactRef}
        id="contact"
        className="pt-12 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-bricolage font-heading-bold text-center mb-12">Contact Us</h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-6"
            >
              <input type="hidden" name="_subject" value="New contact form submission" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="Your email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your message" className="min-h-[150px]" required />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#181818] text-white hover:bg-[#181818]/90 shadow-md hover:shadow-lg transition-shadow"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending..." : "Send"}
              </Button>
              {formStatus === "success" && <p className="text-green-600 text-center">Message sent successfully!</p>}
              {formStatus === "error" && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

