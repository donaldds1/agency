"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface ImageCarouselProps {
  images: { src: string; alt: string }[]
  interval?: number // Interval in milliseconds for auto-scroll
}

export function ImageCarousel({ images, interval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (images.length === 0 || isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval, isPaused])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <Card
      className="group mx-auto mt-24 h-100 w-full rounded-4xl border border-border bg-muted/30 p-2 shadow-none md:h-190 md:p-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CardContent className="relative size-full rounded-3xl border-2 border-background bg-muted overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.alt}
            className="absolute inset-0 size-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`size-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-primary" : "bg-gray-400 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
