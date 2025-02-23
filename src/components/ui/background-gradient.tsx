"use client"
import type React from "react"
import { cn } from "@/lib/utils"

interface BackgroundGradientProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ children, className, containerClassName }) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className="absolute inset-0 rounded-3xl opacity-75 blur-xl"
        style={{
          background: "radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-3xl opacity-75 blur-xl"
        style={{
          background: "radial-gradient(circle at bottom right, rgba(255,255,255,0.1), transparent 50%)",
        }}
      />
      <div className={cn("relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-4", className)}>
        {children}
      </div>
    </div>
  )
}

