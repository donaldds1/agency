"use client"

import { motion } from "framer-motion"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"

interface StepProps {
  title: string
  imageSrc: string
  description: string
}

const steps: StepProps[] = [
  {
    title: "Discovery",
    description:
      "We analyze your market, competitors and value proposition. Complete audit of your idea and definition of the optimal launch strategy.",
  },
  {
    title: "Strategy",
    description:
      "Detailed roadmap, user personas, conversion journey. We plan every step to maximize your chances of success in the SaaS market.",
  },
  {
    title: "Production",
    description:
      "Agile development of your MVP, branding creation and marketing assets. Our teams work in parallel to accelerate time-to-market.",
  },
  {
    title: "Launch",
    description:
      "Deployment, acquisition campaigns, KPI tracking. We support you in the first months to optimize conversions and growth.",
  },
]

const ProcessBar: React.FC<{
  currentStep: number
  steps: StepProps[]
}> = ({ currentStep, steps }) => (
  <div className="relative w-full">
    <div className="flex items-center justify-between gap-2">
      {steps.map((step, index) => (
        <React.Fragment key={step.title}>
          <div className="flex flex-col items-center">
            <motion.div
              className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                index <= currentStep
                  ? "border-primary bg-primary text-white"
                  : "border-muted-foreground/30 bg-background text-muted-foreground"
              }`}
              animate={{ scale: index === currentStep ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {index < currentStep ? <Check size={20} /> : <span className="text-sm font-semibold">{index + 1}</span>}
            </motion.div>
            <motion.p
              className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                index <= currentStep ? "text-foreground" : "text-muted-foreground"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {step.title}
            </motion.p>
          </div>
          {index < steps.length - 1 && (
            <div className="relative flex-1 px-2">
              <div className="h-0.5 w-full bg-muted" />
              <motion.div
                className="absolute top-0 h-0.5 bg-primary"
                initial={{ width: "0%" }}
                animate={{
                  width: index < currentStep ? "100%" : "0%",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
)

const StepperContent: React.FC<{ step: StepProps }> = ({ step }) => {
  return (
    <motion.div
      key={step.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="my-12 flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-muted/30 p-8 text-center backdrop-blur-sm"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-8 max-w-2xl text-[1.125rem] font-medium leading-[1.6] text-muted-foreground"
      >
        {step.description}
      </motion.p>
    </motion.div>
  )
}

const NavButtons: React.FC<{
  currentStep: number
  totalSteps: number
  handlePrev: () => void
  handleNext: () => void
}> = ({ currentStep, totalSteps, handlePrev, handleNext }) => (
  <div className="flex w-full justify-between gap-4">
    <Button
      onClick={handlePrev}
      disabled={currentStep === 0}
      className="flex gap-2 transition-all duration-300 ease-in-out hover:gap-3 disabled:opacity-50 bg-transparent"
      variant="outline"
      size="lg"
    >
      <ChevronLeft size={20} />
      Previous
    </Button>

    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">
        {currentStep + 1} of {totalSteps}
      </span>
    </div>

    <Button
      onClick={handleNext}
      disabled={currentStep === totalSteps - 1}
      className="flex gap-2 transition-all duration-300 ease-in-out hover:gap-3 disabled:opacity-50"
      size="lg"
    >
      Next
      <ChevronRight size={20} />
    </Button>
  </div>
)

export function ProcessStepperSection() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

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
            ( Our Method )
          </motion.p>
          <motion.h2
            className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A clear, fast and proven method
            <span className="text-muted-foreground">.</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base font-normal leading-[1.6] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "They delivered faster than our own dev team could have planned." — Satisfied client
          </motion.p>
        </div>

        {/* Stepper Container */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProcessBar currentStep={currentStep} steps={steps} />
          <StepperContent step={steps[currentStep]} />
          <NavButtons
            handlePrev={handlePrev}
            handleNext={handleNext}
            currentStep={currentStep}
            totalSteps={steps.length}
          />
        </motion.div>
      </div>
    </section>
  )
}
