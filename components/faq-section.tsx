"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Question {
  question: string
  answer: string
}

interface Category {
  title: string
  questions: Question[]
}

const faqCategories: Category[] = [
  {
    title: "Our Services & Pricing",
    questions: [
      {
        question: "What's included in your SaaS Branding package for $1,000?",
        answer:
          "Our SaaS Branding package includes: Logo & Identity design, complete Brand Guidelines, Style Guide for consistent application, and Marketing Assets. We deliver in 1 week, but provide a first version in 3 days for your feedback to refine according to your needs. You get all source files and usage guidelines.",
      },
      {
        question: "What technologies do you use for SaaS development?",
        answer:
          "We use cutting-edge technologies: Next.js and React for frontend, Hono.js, Laravel, Python, and FastAPI for backend, TypeScript for type safety, Vertex AI for AI integrations, and Swift for mobile applications. We choose the best tech stack based on your specific requirements and scalability needs.",
      },
      {
        question: "Do your prices include hosting and API costs?",
        answer:
          "No, our prices cover development and delivery only. API costs (like AI services), hosting, and domain fees are separate. We help you set up your own instances or assist you in choosing the right platforms with your own billing. This gives you full control and ownership of your infrastructure.",
      },
      {
        question: "What makes your landing pages different from Framer or Webflow?",
        answer:
          "We create custom landing pages exclusively for SaaS and AI startups using React, Next.js, or WordPress. Unlike pre-configured CMS platforms, our custom approach allows optimal performance and complete personalization without dependencies. You get the source code and can deploy on your own infrastructure for maximum control.",
      },
    ],
  },
  {
    title: "Process & Payment",
    questions: [
      {
        question: "How does your payment structure work?",
        answer:
          "We use a 50/50 payment structure: 50% upon order confirmation and 50% before delivery after all client verifications to ensure satisfaction. Exception: For our Full Startup package, you pay the remaining 50% one month after the initial launch, giving you time to see real results.",
      },
      {
        question: "What's your detailed 14-day MVP process?",
        answer:
          "Days 1-2: Information research, questionnaires, target analysis, project planning, and defining 3 key features (1 core + 2 value-added). We create UX wireframes. Days 3-4: Mockups and prototyping of all pages. Day 5: Launch waitlist for early customers. Days 7-9: Development with alpha version for client feedback. Days 10-14: We work closely with you to structure your SaaS properly, delivering the final beta MVP by day 14.",
      },
      {
        question: "How do you ensure quality with fast delivery timelines?",
        answer:
          "We provide preview versions throughout the process: Branding gets a first version in 3 days, Landing pages in 4 days, and MVPs get an alpha version by day 9. This allows for feedback and refinements before final delivery, ensuring the end result perfectly matches your vision.",
      },
      {
        question: "Can I get my source code and deploy independently?",
        answer:
          "Absolutely! You receive complete source code for all projects. We can deploy for you or provide deployment assistance. This ensures you're never locked into our services and have full ownership of your digital assets.",
      },
    ],
  },
  {
    title: "MVP Development & Features",
    questions: [
      {
        question: "How do you choose the 3 key features for my MVP?",
        answer:
          "During days 1-2, we analyze your target market and define 1 core feature (your product's main value proposition) plus 2 additional features that add significant value. This focused approach ensures your MVP is powerful yet simple, avoiding feature bloat while maximizing user impact.",
      },
      {
        question: "What happens during the alpha version review (day 9)?",
        answer:
          "By day 9, we present a functional alpha version for your feedback. This allows you to test core functionality, user flow, and overall direction. We incorporate your feedback during days 10-14 while working together to properly structure your SaaS for market success.",
      },
      {
        question: "Do you help with go-to-market strategy during MVP development?",
        answer:
          "Yes! On day 5, we launch a waitlist to start building your customer base early. During days 10-14, we work closely with you to structure your SaaS properly, including pricing strategy, user onboarding, and launch preparation. This ensures you're ready to acquire customers immediately after delivery.",
      },
      {
        question: "What if I need mobile app development?",
        answer:
          "We develop mobile applications using Swift for iOS and can create cross-platform solutions. Mobile development is typically part of our Full Startup package or can be added as a separate service. We ensure seamless integration between web and mobile platforms.",
      },
    ],
  },
  {
    title: "Technical & Deployment",
    questions: [
      {
        question: "What deployment options do you provide?",
        answer:
          "We offer flexible deployment solutions: deploy on your own infrastructure, help you set up cloud platforms (AWS, Vercel, etc.), or deploy on our recommended platforms. You always retain full control and ownership of your code and data.",
      },
      {
        question: "How do you handle AI integrations in SaaS projects?",
        answer:
          "We use Vertex AI and other leading AI platforms for integrations. We build the integration infrastructure, but API costs are separate and billed directly to you. This ensures transparency and gives you control over AI usage costs as you scale.",
      },
      {
        question: "Do you provide ongoing technical support?",
        answer:
          "Yes! Our Full Startup package includes ongoing support. For other packages, we offer maintenance plans and technical support options. We also provide documentation and can train your team for basic updates and maintenance.",
      },
      {
        question: "Why do you focus specifically on SaaS and AI startups?",
        answer:
          "We specialize exclusively in SaaS and AI startups because these markets require specific expertise in user onboarding, subscription models, scalable architecture, and conversion optimization. Our focused approach means we understand your unique challenges and can deliver solutions that actually convert visitors into paying customers.",
      },
    ],
  },
]

export function FaqSection() {
  return (
    <section className="relative bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      <div className="container relative">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="mb-4 text-[0.875rem] font-normal uppercase tracking-[0.04em] text-muted-foreground">
                ( Frequently Asked Questions )
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight tracking-tight">
                Got Questions
                <span className="text-muted-foreground">?</span>
              </h2>
            </div>

            <p className="max-w-md text-base font-normal leading-[1.6] text-muted-foreground">
              Find answers to common questions about our services, process, and approach. Can't find what you're looking
              for?{" "}
              <a
                href="/contact"
                className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
              >
                Get in touch
              </a>
              .
            </p>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-muted/30 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-2 font-semibold text-foreground">Still have questions?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Book a free 30-minute consultation to discuss your SaaS project and get personalized advice.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Book Free Call
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ Categories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="border-b border-white/10 py-4 text-[clamp(1.25rem,3vw,1.5rem)] font-semibold text-foreground">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`${categoryIndex}-${questionIndex}`}
                      className="border-white/10"
                    >
                      <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[0.9375rem] font-normal leading-[1.6] text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-muted/30 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-foreground">Ready to Launch Your SaaS?</h3>
            <p className="mb-6 text-muted-foreground">
              From idea to user-friendly startup in record time. Let's discuss how we can transform your vision into a
              successful SaaS.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-primary/90"
              >
                Book Your 30min Call
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
