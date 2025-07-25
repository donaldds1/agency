"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="container">
        {/* Title and Quote Section */}
        <div className="mb-16 md:mb-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">( Why us )</p>
          <motion.h2
            className="mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-foreground">More than an agency — a true </span>
            <span className="text-primary">SaaS launch partner</span>
          </motion.h2>
        </div>

        {/* Content and Image Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/ceo.png"
                alt="CEO Image"
                width={648}
                height={738}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-lg font-semibold text-foreground">
              CTO & Founder
            </p>
          </motion.div>

          <div className="flex flex-col justify-center gap-8">
            <motion.p
              className="text-base font-normal leading-[1.6] text-muted-foreground"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Too many SaaS startups waste time building their product wrong. Unclear branding, ineffective landing
              page, non-existent marketing.
            </motion.p>
            <motion.p
              className="text-base font-normal leading-[1.6] text-muted-foreground"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We fix all that — quickly. Our mission is to transform your idea into a high-performing startup with a
              data-driven and conversion-focused approach.
            </motion.p>
            <motion.a
              href="/about"
              className="group relative inline-flex items-center gap-2 text-sm font-semibold uppercase text-primary hover:text-primary/80 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="relative top-px text-[0.875rem] font-normal uppercase tracking-[0.04em]">
                [ DISCOVER OUR METHOD ]
              </span>
              <span className="absolute bottom-0 left-0 h-px w-full bg-primary transition-all duration-300 group-hover:w-0" />
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-24 grid grid-cols-1 gap-8 rounded-3xl bg-muted/30 p-8 md:grid-cols-3 md:p-12">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-[2rem] font-bold text-foreground md:text-[2rem]">1M+</h3>
            <p className="mt-2 text-[0.875rem] font-normal tracking-[0.02em] text-muted-foreground">Users reached</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-[2rem] font-bold text-foreground md:text-[2rem]">99%</h3>
            <p className="mt-2 text-[0.875rem] font-normal tracking-[0.02em] text-muted-foreground">
              Client satisfaction
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-[2rem] font-bold text-foreground md:text-[2rem]">18+</h3>
            <p className="mt-2 text-[0.875rem] font-normal tracking-[0.02em] text-muted-foreground">
              Startups supported
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
