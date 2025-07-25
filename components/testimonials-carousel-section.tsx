"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"

interface TestimonialData {
  id: string
  name: string
  title: string
  company: string
  image: string
  companyLogo: string
  quote: string
  stats: {
    metric1: {
      value: string
      label: string
      description: string
    }
    metric2: {
      value: string
      label: string
      description: string
    }
  }
}

const testimonialsData: TestimonialData[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "CEO",
    company: "TechFlow Solutions",
    image: "/placeholder.svg?height=400&width=300",
    companyLogo: "/placeholder.svg?height=40&width=40",
    quote:
      "DARA transformed our SaaS startup from A to Z. In 3 months, we went from a simple idea to a functional platform with 500+ paying users.",
    stats: {
      metric1: {
        value: "3.2x",
        label: "Sign-ups",
        description: "Since launch",
      },
      metric2: {
        value: "285%",
        label: "ROI Ads",
        description: "Return on investment",
      },
    },
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Founder",
    company: "Forge AI",
    image: "/placeholder.svg?height=400&width=300",
    companyLogo: "/placeholder.svg?height=40&width=40",
    quote:
      "MVP delivered in 14 days as promised. 300 beta users in 1 month and $500K raised thanks to their structured approach. An exceptional team.",
    stats: {
      metric1: {
        value: "300",
        label: "Beta Users",
        description: "First month",
      },
      metric2: {
        value: "$500K",
        label: "Funding raised",
        description: "Seed round",
      },
    },
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    title: "Co-founder",
    company: "Nexus Analytics",
    image: "/placeholder.svg?height=400&width=300",
    companyLogo: "/placeholder.svg?height=40&width=40",
    quote:
      "Their landing page multiplied our conversions by 4. The copywriting and design are perfectly aligned with our B2B audience.",
    stats: {
      metric1: {
        value: "4x",
        label: "Conversions",
        description: "Conversion rate",
      },
      metric2: {
        value: "320%",
        label: "MRR Growth",
        description: "Monthly growth",
      },
    },
  },
]

function TestimonialCard({ testimonial }: { testimonial: TestimonialData }) {
  return (
    <div className="grid grid-cols-1 gap-y-10 p-8 sm:p-12 lg:grid-cols-3 lg:gap-10 lg:p-20">
      {/* Left Column - Person Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center lg:items-start"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="h-80 w-full object-cover lg:h-auto lg:max-h-none"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=400&width=300"
            }}
          />
        </div>
        <div className="mt-6 text-center lg:text-left">
          <h3 className="text-[1.125rem] font-semibold text-foreground">{testimonial.name}</h3>
          <p className="text-muted-foreground">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </motion.div>

      {/* Right Column - Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="col-span-2"
      >
        {/* Company Logo */}
        <div className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
          <img
            src={testimonial.companyLogo || "/placeholder.svg"}
            alt={`${testimonial.company} logo`}
            className="h-10 w-10 rounded-lg"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=40&width=40"
            }}
          />
          <span className="text-2xl font-semibold text-foreground lg:text-3xl">{testimonial.company}</span>
        </div>

        {/* Quote */}
        <blockquote className="text-center text-[1.125rem] font-medium leading-[1.6] text-foreground lg:text-left">
          "{testimonial.quote}"
        </blockquote>

        <Separator className="my-10" />

        {/* Statistics */}
        <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col"
          >
            <span className="mb-4 text-[2rem] font-bold text-primary">{testimonial.stats.metric1.value}</span>
            <span className="font-semibold text-foreground">{testimonial.stats.metric1.label}</span>
            <span className="text-[0.875rem] font-normal tracking-[0.02em] text-muted-foreground">
              {testimonial.stats.metric1.description}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col"
          >
            <span className="mb-4 text-[2rem] font-bold text-primary">{testimonial.stats.metric2.value}</span>
            <span className="font-semibold text-foreground">{testimonial.stats.metric2.label}</span>
            <span className="text-[0.875rem] font-normal tracking-[0.02em] text-muted-foreground">
              {testimonial.stats.metric2.description}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export function TestimonialsCarouselSection() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center md:mb-24">
          <motion.p
            className="mb-6 text-[0.875rem] font-normal uppercase tracking-[0.04em] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ( What Our Clients Say )
          </motion.p>
          <motion.h2
            className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Success Stories
            <span className="text-muted-foreground">.</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-3xl bg-muted/30 backdrop-blur-sm"
        >
          <Carousel className="static">
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 right-6 z-10 lg:bottom-10 lg:right-10">
              <div className="flex items-center gap-4">
                <CarouselPrevious className="static translate-y-0 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" />
                <CarouselNext className="static translate-y-0 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" />
              </div>
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
