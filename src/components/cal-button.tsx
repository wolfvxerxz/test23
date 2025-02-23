"use client"

import type React from "react"
import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface CalButtonProps {
  size?: "default" | "lg" | "xl"
  className?: string
  children: React.ReactNode
  rounded?: "default" | "full" | "custom"
  variant?: "default" | "secondary" | "outline" | "ghost"
}

export function CalButton({ size = "default", className, children, rounded, variant = "default" }: CalButtonProps) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: "30min" })
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <Button
      data-cal-namespace="30min"
      data-cal-link="vuk-m/30min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      size={size}
      rounded={rounded}
      variant={variant}
      className={cn("group relative overflow-hidden", className)}
    >
      <span className="relative z-10 flex items-center">
        {children}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/calendar%201-l4KSH3gKArToBXVUzWr2HyxddQyABF.png"
          alt="Calendar icon"
          width={24}
          height={24}
          className="ml-3 h-6 w-6 inline-block"
        />
      </span>
      <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <span className="absolute left-0 top-0 h-full w-[150%] origin-left -translate-x-full skew-x-[10deg] bg-white/25 transition-transform duration-500 ease-out group-hover:translate-x-full" />
      </span>
    </Button>
  )
}

