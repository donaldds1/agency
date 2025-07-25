"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NavbarNew } from "@/components/navbar-new"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock data - in real app, this would come from a CMS or API
const projectData = {
  "forge-ai": {
    title: "Forge AI",
    subtitle: "Plateforme SaaS d'intelligence artificielle",
    category: "MVP",
    client: "Forge AI Startup",
    year: "2024",
    duration: "14 jours",
    heroImage: "/images/portfolio/forge-hero-large.png",
    images: [
      "/images/portfolio/forge-dashboard.png",
      "/images/portfolio/forge-features.png",
      "/images/portfolio/forge-mobile.png",
      "/images/portfolio/forge-analytics.png",
    ],
    overview:
      "Forge AI avait besoin d'un MVP fonctionnel en 14 jours pour présenter aux investisseurs et valider leur concept d'automatisation IA pour les processus business.",
    challenge:
      "Le défi principal était de créer une plateforme complexe intégrant l'IA en un temps record, tout en maintenant une expérience utilisateur intuitive et des performances optimales.",
    solution:
      "Nous avons adopté une approche agile avec développement en parallèle des composants critiques, intégration d'APIs IA existantes, et focus sur les fonctionnalités core pour le MVP.",
    results: [
      { metric: "Bêta Users", value: "300+", description: "Inscrits le premier mois" },
      { metric: "Levée de fonds", value: "500K€", description: "Seed round réussie" },
      { metric: "Taux conversion", value: "12%", description: "Visiteur → Utilisateur" },
      { metric: "Temps de chargement", value: "<2s", description: "Performance optimale" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS", "Framer Motion"],
    services: ["MVP Development", "UI/UX Design", "Branding", "Landing Page", "API Integration"],
    testimonial: {
      quote:
        "L'équipe DARA a dépassé toutes nos attentes. Non seulement ils ont livré en 14 jours comme promis, mais la qualité du code et l'expérience utilisateur sont exceptionnelles. Grâce à leur travail, nous avons pu lever 500K€ et attirer nos premiers clients.",
      author: "Michael Chen",
      role: "Founder & CEO, Forge AI",
      avatar: "/images/testimonials/michael-chen.png",
    },
    timeline: [
      {
        phase: "Découverte",
        duration: "Jour 1-2",
        description: "Analyse des besoins, définition des specs techniques",
      },
      {
        phase: "Architecture",
        duration: "Jour 3-4",
        description: "Setup du projet, architecture technique, design system",
      },
      {
        phase: "Développement",
        duration: "Jour 5-12",
        description: "Développement des fonctionnalités core, intégrations IA",
      },
      {
        phase: "Tests & Déploiement",
        duration: "Jour 13-14",
        description: "Tests utilisateurs, optimisations, mise en production",
      },
    ],
    links: {
      live: "https://forge-ai.com",
      github: "https://github.com/forge-ai/platform",
    },
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <NavbarNew />
        <div className="flex min-h-screen items-center justify-center pt-40">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Projet non trouvé</h1>
            <Link href="/portfolio">
              <Button className="mt-4">Retour au portfolio</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <NavbarNew />

      <div className="pt-40">
        {/* Back Button */}
        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="container">
            <Link href="/portfolio">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au portfolio
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <Badge className="bg-primary text-white">{project.category}</Badge>
                  <Badge variant="outline">{project.year}</Badge>
                </div>

                <h1 className="mb-4 text-[clamp(2rem,5vw,3rem)] font-bold leading-tight">{project.title}</h1>
                <p className="mb-6 text-xl text-muted-foreground">{project.subtitle}</p>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{project.overview}</p>

                <div className="mb-8 grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Client</h3>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Durée</h3>
                    <p className="text-muted-foreground">{project.duration}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.links.live && (
                    <Button asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Voir le site
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code source
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={project.heroImage || "/placeholder.svg?height=600&width=800"}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold">Résultats obtenus</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {project.results.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-white/10 bg-muted/30 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="mb-2 text-3xl font-bold text-primary">{result.value}</div>
                      <div className="mb-1 font-semibold text-foreground">{result.metric}</div>
                      <div className="text-sm text-muted-foreground">{result.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-white/10 bg-muted/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="mb-4 text-2xl font-bold text-foreground">Le Défi</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{project.challenge}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full border-white/10 bg-muted/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="mb-4 text-2xl font-bold text-foreground">Notre Solution</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{project.solution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold">Timeline du projet</h2>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              {project.timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  className="relative flex gap-6 pb-8 last:pb-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                      {index + 1}
                    </div>
                    {index < project.timeline.length - 1 && <div className="mt-2 h-full w-px bg-white/20" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-foreground">{phase.phase}</h3>
                      <Badge variant="outline" className="text-xs">
                        {phase.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies & Services */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-6 text-2xl font-bold">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="mb-6 text-2xl font-bold">Services fournis</h3>
                <div className="flex flex-wrap gap-3">
                  {project.services.map((service) => (
                    <Badge key={service} className="bg-primary/10 text-primary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mx-auto max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-primary/20 bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <blockquote className="mb-6 text-xl italic leading-relaxed text-foreground">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      src={project.testimonial.avatar || "/placeholder.svg?height=60&width=60"}
                      alt={project.testimonial.author}
                      className="h-15 w-15 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{project.testimonial.author}</div>
                      <div className="text-muted-foreground">{project.testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-muted/30 p-8 text-center backdrop-blur-sm md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-3xl font-bold">Votre projet pourrait être le prochain</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Discutons de votre vision et transformons-la en réalité. Réservez votre appel découverte gratuit.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Réserver un appel gratuit</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">Voir d'autres projets</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
