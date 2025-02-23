"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { CalButton } from "@/components/cal-button"

interface MobileNavProps {
  onScrollToSection: (sectionId: string) => void
  onScrollToTop: () => void
}

export function MobileNav({ onScrollToSection, onScrollToTop }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    console.log(`MobileNav: Clicked ${sectionId}`)
    setIsOpen(false)
    onScrollToSection(sectionId)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden w-10 h-10 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full">
        <SheetHeader className="text-left">
          <SheetTitle>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-hHkHWolyZR88FVgmxdQhEiqEv3sa3q.png"
              alt="WolfMail Logo"
              width={180}
              height={36}
              className="h-12 w-auto cursor-pointer"
              onClick={() => {
                setIsOpen(false)
                onScrollToTop()
              }}
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          <SheetClose asChild>
            <Button variant="ghost" className="justify-start text-lg" onClick={() => handleNavClick("features")}>
              Features
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="justify-start text-lg" onClick={() => handleNavClick("our-work")}>
              Our Work
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="justify-start text-lg" onClick={() => handleNavClick("pricing")}>
              Pricing
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="justify-start text-lg" onClick={() => handleNavClick("faq")}>
              FAQ
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="justify-start text-lg" onClick={() => handleNavClick("contact")}>
              Contact
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <CalButton rounded="full" className="w-full bg-black text-white hover:bg-black/90">
              Book a call
            </CalButton>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

