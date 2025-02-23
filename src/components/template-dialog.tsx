"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TemplateDialogProps {
  isOpen: boolean
  onClose: () => void
  template: {
    src: string
    alt: string
  }
}

export function TemplateDialog({ isOpen, onClose, template }: TemplateDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 overflow-hidden border-0">
        <div className="relative w-full h-[95vh] bg-black/25">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 text-white hover:bg-white/20 rounded-full"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative h-full" style={{ aspectRatio: "9/16" }}>
              <Image
                src={template.src || "/placeholder.svg"}
                alt={template.alt}
                fill
                className="object-contain"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

