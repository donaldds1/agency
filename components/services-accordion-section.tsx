"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ServiceItem {
  id: string
  number: string
  title: string
  description?: string
  categories: string[]
  images?: string[]
  isExpanded?: boolean
  pricing?: string
  deliveryTime?: string
}

const servicesData: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    title: "SaaS Branding",
    description:
      "Strong and consistent brand identity for your SaaS startup. Logo, brand guidelines, style guide — everything you need to make a lasting impression.",
    categories: ["Logo & Identity", "Brand Guidelines", "Style Guide", "Marketing Assets"],
    images: [
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
    ],
    isExpanded: true,
    pricing: "$1,000",
    deliveryTime: "Less than a week",
  },
  {
    id: "02",
    number: "02",
    title: "SaaS Landing Page",
    description: "Conversion-friendly design + copywriting. Pages optimized to turn your visitors into paying users.",
    categories: ["Conversion Design", "Copywriting", "A/B Testing", "Analytics Setup"],
    images: [
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
    ],
    isExpanded: false,
    pricing: "$3,000",
    deliveryTime: "a week",
  },
  {
    id: "03",
    number: "03",
    title: "SaaS Marketing",
    description: "SEO, Ads, content to scale MRR.360 communication : Complete marketing strategy to launch your startup.",
    categories: ["Technical SEO", "Google Ads", "Content Marketing", "Growth Hacking"],
    isExpanded: false,
    pricing: "$2,000/month",
    deliveryTime: "Results in 30 days",
  },
  {
    id: "04",
    number: "04",
    title: "MVP in 14 days",
    description:
      "Complete functional product delivered in 2 weeks. From idea to prototype usable by your first customers.",
    categories: ["Rapid Development", "UI/UX Design", "User Testing", "Deployment"],
    images: [
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
    ],
    isExpanded: false,
    pricing: "$10,000",
    deliveryTime: "14 days guaranteed",
  },
  {
    id: "05",
    number: "05",
    title: " Full Startup-as-a-Service",
    description: "No team? We’ve got you covered.We build your SaaS product from A to Z — including product design, branding, UI/UX, development, and go-to-market strategy.You'll also benefit from 3 months of tailored marketing support to define the right positioning, attract your first users, and validate your idea with real traction.Think of us as your all-in-one startup team — product, tech, and growth — all working to get your solution live and growing fast.",
    categories: ["Complete Branding", "Functional MVP", "Marketing Launch", "3-month Support"],
    images: [
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
    ],
    isExpanded: false,
    pricing: "From $22,000",
    deliveryTime: "3 months",
  },
]

export function ServicesAccordionSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>(
    servicesData.filter((item) => item.isExpanded).map((item) => item.id),
  )

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="container">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <div className="flex-1">
            <motion.p
              className="mb-6 text-[0.875rem] font-normal uppercase tracking-[0.04em] text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ( Our Services )
            </motion.p>
            <motion.h2
              className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-muted-foreground">Complete SaaS solutions to </span>
              <span className="text-foreground">launch and scale your startup</span>.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        {/* Services Accordion */}
        <div className="space-y-0">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="border-b border-white/10 last:border-b-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="flex cursor-pointer items-start gap-6 py-8 transition-colors hover:bg-white/5 md:gap-12 md:py-12"
                onClick={() => toggleItem(service.id)}
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <h3 className="text-2xl font-bold text-foreground md:text-3xl">{service.number}</h3>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Top Part */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold text-foreground">
                        {service.title}
                      </h3>

                      {/* Images - only show when expanded */}
                      {expandedItems.includes(service.id) && service.images && (
                        <motion.div
                          className="mt-6 flex gap-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.images.map((image, idx) => (
                            <div key={idx} className="h-15 w-15 overflow-hidden rounded-2xl shadow-lg">
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`${service.title} ${idx + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Expand/Collapse Icon */}
                    <motion.div
                      animate={{ rotate: expandedItems.includes(service.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-6 w-6 text-muted-foreground" />
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedItems.includes(service.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6">
                          {/* Description */}
                          {service.description && (
                            <p className="mb-8 text-[1.125rem] font-medium leading-[1.6] text-muted-foreground">
                              {service.description}
                            </p>
                          )}

                          {/* Pricing and Delivery Time */}
                          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {service.pricing && (
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                  <span className="text-sm font-bold text-primary">$</span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Price</p>
                                  <p className="text-base font-semibold text-foreground">{service.pricing}</p>
                                </div>
                              </div>
                            )}
                            {service.deliveryTime && (
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                  <span className="text-sm font-bold text-primary">⏱</span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Timeline</p>
                                  <p className="text-base font-semibold text-foreground">{service.deliveryTime}</p>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Categories */}
                          <div className="space-y-4">
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              ( Categories )
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {service.categories.map((category, idx) => (
                                <span
                                  key={idx}
                                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
