"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Calendar, Users, TrendingUp, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NavbarNew } from "@/components/navbar-new"
import Link from "next/link"

interface ProjectData {
  id: string
  title: string
  subtitle: string
  category: "MVP" | "Branding" | "Landing Page" | "Pack Complet" | "Marketing"
  client: string
  year: string
  duration: string
  image: string
  images: string[]
  description: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  technologies: string[]
  services: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  links: {
    live?: string
    github?: string
    case_study?: string
  }
  featured: boolean
}

const projectsData: ProjectData[] = [
  {
    id: "forge-ai",
    title: "Forge AI",
    subtitle: "Plateforme SaaS d'intelligence artificielle",
    category: "MVP",
    client: "Forge AI Startup",
    year: "2024",
    duration: "14 jours",
    image: "/images/portfolio/forge-hero.png",
    images: [
      "/images/portfolio/forge-dashboard.png",
      "/images/portfolio/forge-features.png",
      "/images/portfolio/forge-mobile.png",
    ],
    description: "MVP complet d'une plateforme SaaS utilisant l'IA pour automatiser les processus business.",
    challenge: "Créer un MVP fonctionnel en 14 jours pour lever des fonds et valider le marché.",
    solution: "Développement agile avec focus sur les fonctionnalités core et UX optimisée pour la conversion.",
    results: [
      { metric: "Bêta Users", value: "300+", description: "Premier mois" },
      { metric: "Levée de fonds", value: "500K€", description: "Seed round" },
      { metric: "Taux conversion", value: "12%", description: "Visiteur → Utilisateur" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Supabase", "OpenAI API"],
    services: ["MVP Development", "UI/UX Design", "Branding", "Landing Page"],
    testimonial: {
      quote:
        "MVP livré en 14 jours comme promis. L'équipe a parfaitement compris notre vision et l'a transformée en produit fonctionnel.",
      author: "Michael Chen",
      role: "Founder, Forge AI",
    },
    links: {
      live: "https://forge-ai.com",
      case_study: "/case-studies/forge-ai",
    },
    featured: true,
  },
  {
    id: "techflow-solutions",
    title: "TechFlow Solutions",
    subtitle: "Plateforme de gestion de workflow B2B",
    category: "Pack Complet",
    client: "TechFlow Solutions",
    year: "2024",
    duration: "3 mois",
    image: "/images/portfolio/techflow-hero.png",
    images: [
      "/images/portfolio/techflow-dashboard.png",
      "/images/portfolio/techflow-analytics.png",
      "/images/portfolio/techflow-mobile.png",
    ],
    description: "Transformation complète d'une startup B2B : branding, MVP et stratégie marketing.",
    challenge: "Repositionner une startup tech avec un produit complexe sur un marché concurrentiel.",
    solution: "Approche holistique combinant rebranding, développement produit et stratégie go-to-market.",
    results: [
      { metric: "Inscriptions", value: "3.2x", description: "Augmentation" },
      { metric: "ROI Ads", value: "285%", description: "Retour investissement" },
      { metric: "MRR", value: "€45K", description: "Mensuel récurrent" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    services: ["Branding Complet", "MVP Development", "Marketing Strategy", "Landing Pages"],
    testimonial: {
      quote: "DARA a transformé notre startup de A à Z. Résultats exceptionnels en seulement 3 mois.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
    },
    links: {
      live: "https://techflow-solutions.com",
      case_study: "/case-studies/techflow",
    },
    featured: true,
  },
  {
    id: "nexus-analytics",
    title: "Nexus Analytics",
    subtitle: "Dashboard d'analytics pour SaaS",
    category: "Landing Page",
    client: "Nexus Analytics",
    year: "2024",
    duration: "2 semaines",
    image: "/images/portfolio/nexus-hero.png",
    images: [
      "/images/portfolio/nexus-landing.png",
      "/images/portfolio/nexus-features.png",
      "/images/portfolio/nexus-pricing.png",
    ],
    description: "Landing page haute conversion pour une plateforme d'analytics B2B.",
    challenge: "Améliorer le taux de conversion d'une landing page existante qui ne performait pas.",
    solution: "Refonte complète avec copywriting orienté conversion et design optimisé pour le B2B.",
    results: [
      { metric: "Conversions", value: "4x", description: "Amélioration" },
      { metric: "Temps sur page", value: "+180%", description: "Engagement" },
      { metric: "Leads qualifiés", value: "+250%", description: "Génération" },
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Analytics"],
    services: ["Landing Page Design", "Copywriting", "A/B Testing", "Conversion Optimization"],
    testimonial: {
      quote:
        "Leur landing page a multiplié nos conversions par 4. Le copywriting est parfaitement aligné sur notre audience B2B.",
      author: "Emily Rodriguez",
      role: "Co-founder, Nexus Analytics",
    },
    links: {
      live: "https://nexus-analytics.com",
      case_study: "/case-studies/nexus",
    },
    featured: false,
  },
  {
    id: "zenith-crm",
    title: "Zenith CRM",
    subtitle: "Solution CRM pour PME",
    category: "MVP",
    client: "Zenith Software",
    year: "2024",
    duration: "14 jours",
    image: "/images/portfolio/zenith-hero.png",
    images: [
      "/images/portfolio/zenith-dashboard.png",
      "/images/portfolio/zenith-contacts.png",
      "/images/portfolio/zenith-reports.png",
    ],
    description: "MVP d'un CRM simplifié pour les PME avec focus sur l'expérience utilisateur.",
    challenge: "Créer un CRM simple et intuitif dans un marché saturé de solutions complexes.",
    solution: "Design minimaliste et fonctionnalités essentielles pour un onboarding rapide.",
    results: [
      { metric: "Utilisateurs actifs", value: "1.2K", description: "Premier trimestre" },
      { metric: "Rétention", value: "85%", description: "Après 30 jours" },
      { metric: "NPS Score", value: "72", description: "Satisfaction client" },
    ],
    technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
    services: ["MVP Development", "UI/UX Design", "User Testing"],
    links: {
      live: "https://zenith-crm.com",
      case_study: "/case-studies/zenith",
    },
    featured: false,
  },
  {
    id: "quantum-brand",
    title: "Quantum Labs",
    subtitle: "Identité de marque pour startup deeptech",
    category: "Branding",
    client: "Quantum Labs",
    year: "2024",
    duration: "1 semaine",
    image: "/images/portfolio/quantum-hero.png",
    images: [
      "/images/portfolio/quantum-logo.png",
      "/images/portfolio/quantum-guidelines.png",
      "/images/portfolio/quantum-applications.png",
    ],
    description: "Création d'identité de marque complète pour une startup spécialisée en informatique quantique.",
    challenge: "Créer une identité moderne et accessible pour une technologie complexe.",
    solution: "Branding épuré combinant innovation technologique et approche humaine.",
    results: [
      { metric: "Brand Recognition", value: "+400%", description: "Visibilité marché" },
      { metric: "Investisseurs", value: "15", description: "Intérêts exprimés" },
      { metric: "Médias", value: "8", description: "Articles de presse" },
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Webflow"],
    services: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Assets"],
    links: {
      case_study: "/case-studies/quantum",
    },
    featured: false,
  },
  {
    id: "velocity-marketing",
    title: "Velocity SaaS",
    subtitle: "Stratégie marketing et growth hacking",
    category: "Marketing",
    client: "Velocity SaaS",
    year: "2024",
    duration: "6 mois",
    image: "/images/portfolio/velocity-hero.png",
    images: [
      "/images/portfolio/velocity-analytics.png",
      "/images/portfolio/velocity-campaigns.png",
      "/images/portfolio/velocity-growth.png",
    ],
    description: "Stratégie marketing complète pour scaler un SaaS B2B de 0 à 100K MRR.",
    challenge: "Faire passer un SaaS de phase de lancement à croissance soutenue.",
    solution: "Mix SEO technique, content marketing et campagnes payantes optimisées.",
    results: [
      { metric: "MRR", value: "€100K", description: "Objectif atteint" },
      { metric: "Trafic organique", value: "+500%", description: "Croissance SEO" },
      { metric: "CAC", value: "-60%", description: "Réduction coût acquisition" },
    ],
    technologies: ["Google Analytics", "SEMrush", "HubSpot", "Google Ads"],
    services: ["SEO Strategy", "Content Marketing", "Paid Advertising", "Growth Hacking"],
    links: {
      case_study: "/case-studies/velocity",
    },
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/portfolio/${project.id}`}>
        <Card className="overflow-hidden border-white/10 bg-muted/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-muted/50">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image || "/placeholder.svg?height=400&width=640"}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <div>
                  <Badge className="mb-2 bg-primary/90 text-white">{project.category}</Badge>
                  <p className="text-sm text-white/90">{project.duration}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {project.year}
              </Badge>
              <span className="text-xs text-muted-foreground">{project.client}</span>
            </div>

            <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">{project.subtitle}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.services.slice(0, 2).map((service) => (
                <Badge key={service} variant="secondary" className="text-xs">
                  {service}
                </Badge>
              ))}
              {project.services.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.services.length - 2}
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              {project.results.slice(0, 3).map((result, idx) => (
                <div key={idx}>
                  <div className="text-lg font-bold text-primary">{result.value}</div>
                  <div className="text-xs text-muted-foreground">{result.metric}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

function FeaturedProject({ project }: { project: ProjectData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
            <img
              src={project.image || "/placeholder.svg?height=500&width=600"}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="mb-4 flex items-center gap-3">
              <Badge className="bg-primary text-white">Projet Phare</Badge>
              <Badge variant="outline">{project.category}</Badge>
            </div>

            <h2 className="mb-3 text-3xl font-bold text-foreground">{project.title}</h2>
            <p className="mb-6 text-lg text-muted-foreground">{project.description}</p>

            <div className="mb-8 grid grid-cols-3 gap-6">
              {project.results.map((result, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-primary">{result.value}</div>
                  <div className="text-sm font-medium text-foreground">{result.metric}</div>
                  <div className="text-xs text-muted-foreground">{result.description}</div>
                </div>
              ))}
            </div>

            {project.testimonial && (
              <blockquote className="mb-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
                "{project.testimonial.quote}"
                <footer className="mt-2 text-sm font-medium text-foreground">
                  — {project.testimonial.author}, {project.testimonial.role}
                </footer>
              </blockquote>
            )}

            <div className="flex gap-3">
              {project.links.live && (
                <Button asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Voir le site
                  </a>
                </Button>
              )}
              {project.links.case_study && (
                <Button variant="outline" asChild>
                  <Link href={project.links.case_study}>Étude de cas</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const featuredProjects = projectsData.filter((p) => p.featured)
  const regularProjects = projectsData.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-background">
      <NavbarNew />

      <div className="pt-40">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                ( Notre Portfolio )
              </p>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
                <span className="text-muted-foreground">325+ startups </span>
                <span className="text-foreground">transformées</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Découvrez comment nous avons aidé des startups SaaS, B2B et AI à passer de l'idée au succès. Chaque
                projet raconte une histoire de transformation digitale réussie.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">10M+ utilisateurs touchés</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">99% satisfaction client</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Livraison en 14 jours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold">Projets Phares</h2>
              <p className="mt-4 text-muted-foreground">
                Nos réalisations les plus impactantes qui ont transformé des startups
              </p>
            </motion.div>

            <div className="space-y-16">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold">Toutes nos réalisations</h2>
              <p className="mt-4 text-muted-foreground">Explorez l'ensemble de nos projets par catégorie</p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
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
              <h2 className="mb-4 text-3xl font-bold">Prêt à rejoindre nos success stories ?</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Transformons votre idée en startup performante. Réservez votre appel découverte gratuit.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Réserver un appel gratuit</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
