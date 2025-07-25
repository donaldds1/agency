import { NavbarNew } from "@/components/navbar-new"
import { Hero205 } from "@/components/hero205"
import { AboutSection } from "@/components/about-section"
import { ServicesAccordionSection } from "@/components/services-accordion-section"
import { RecentWorksSection } from "@/components/recent-works-section"
import { ProcessStepperSection } from "@/components/process-stepper-section"
import { TestimonialsCarouselSection } from "@/components/testimonials-carousel-section"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarNew />
      <div className="pt-40">
        <Hero205 />
      </div>
      <AboutSection />
      <ServicesAccordionSection />
      <RecentWorksSection />
      <ProcessStepperSection />
      <TestimonialsCarouselSection />
      <FaqSection />
    </main>
  )
}
