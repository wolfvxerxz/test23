import Image from "next/image"
import { CalButton } from "./cal-button"
import {
  BellIcon as BrandTelegram,
  PhoneIcon as BrandWhatsapp,
  InstagramIcon as BrandInstagram,
  TwitterIcon as BrandTwitter,
  LinkedinIcon as BrandLinkedin,
} from "lucide-react"
import { FooterTextSlider } from "./footer-text-slider"

export default function Footer2() {
  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="bg-white rounded-[32px] p-6 md:p-12 shadow-lg relative min-h-[600px]">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 mb-16 md:mb-32">
          {/* Left Side */}
          <div className="space-y-6 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-hHkHWolyZR88FVgmxdQhEiqEv3sa3q.png"
                alt="WolfMail Logo"
                width={240}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <div className="space-y-1">
              <p className="text-gray-600">Grow your business effortlessly.</p>
              <p className="text-gray-600">Join 10,000+ customers who have</p>
              <p className="text-gray-600">boosted their revenue with us!</p>
            </div>
            <CalButton
              variant="default"
              size="xl"
              className="bg-black hover:bg-black/90 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 w-full md:w-auto whitespace-normal md:whitespace-nowrap"
            >
              Book a 30-min call
            </CalButton>
          </div>

          {/* Right Side */}
          <div className="space-y-4 w-full md:w-auto">
            <h3 className="text-xl font-medium">Social Media</h3>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <BrandTelegram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <BrandWhatsapp className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <BrandInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <BrandTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <BrandLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Sliding Text at Bottom */}
        <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
          <FooterTextSlider />
        </div>
      </div>
    </div>
  )
}

