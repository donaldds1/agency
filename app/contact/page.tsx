"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NavbarNew } from "@/components/navbar-new"

const consultationTypes = [
  {
    id: "discovery",
    title: "Appel Découverte",
    duration: "30 min",
    price: "Gratuit",
    description: "Analysons votre projet SaaS et définissons la stratégie optimale",
    features: [
      "Audit de votre idée",
      "Analyse concurrentielle",
      "Recommandations stratégiques",
      "Roadmap personnalisée",
    ],
    calLink: "discovery-call-30min",
    popular: true,
  },
  {
    id: "strategy",
    title: "Session Stratégie",
    duration: "60 min",
    price: "150€",
    description: "Workshop approfondi pour définir votre go-to-market",
    features: ["Personas utilisateurs", "Positionnement marché", "Stratégie pricing", "Plan de lancement"],
    calLink: "strategy-session-60min",
    popular: false,
  },
  {
    id: "technical",
    title: "Consultation Technique",
    duration: "45 min",
    price: "120€",
    description: "Revue technique de votre MVP ou architecture SaaS",
    features: ["Audit technique", "Recommandations d'architecture", "Stack technologique", "Optimisations performance"],
    calLink: "technical-consultation-45min",
    popular: false,
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@dara-agency.com",
    href: "mailto:hello@dara-agency.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Paris, France",
    href: "#",
  },
]

// Composant Cal.com intégré
function CalEmbed({ calLink, title }: { calLink: string; title: string }) {
  return (
    <div className="w-full">
      <div className="rounded-lg border border-white/10 bg-muted/30 p-6 backdrop-blur-sm">
        <div className="mb-4 flex items-center gap-3">
          <Calendar className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>

        {/* Simulation de l'interface Cal.com */}
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-2">
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              15min
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              30min
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-primary text-white">
              45min
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              1h
            </Button>
          </div>

          <div className="rounded-md border border-white/10 bg-background/50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">Créneaux disponibles</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {["09:00", "10:30", "14:00", "15:30", "17:00"].map((time, index) => (
                <Button
                  key={time}
                  variant="outline"
                  size="sm"
                  className="justify-start text-xs hover:bg-primary hover:text-white bg-transparent"
                  onClick={() => {
                    // Ici vous intégreriez la vraie logique Cal.com
                    window.open(`https://cal.com/your-username/${calLink}`, "_blank")
                  }}
                >
                  <Clock className="mr-2 h-3 w-3" />
                  {time}
                </Button>
              ))}
            </div>
          </div>

          <Button
            className="w-full"
            onClick={() => {
              // Redirection vers Cal.com
              window.open(`https://cal.com/your-username/${calLink}`, "_blank")
            }}
          >
            Réserver ce créneau
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarNew />

      <div className="pt-40">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold leading-tight tracking-tight">
                Prêt à lancer votre <span className="text-primary">SaaS</span> ?
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Parlons de votre vision. Réservez un appel gratuit de 30 minutes pour découvrir comment nous pouvons
                transformer votre idée en startup performante.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  <CheckCircle className="mr-2 h-3 w-3" />
                  Appel gratuit de 30min
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  <CheckCircle className="mr-2 h-3 w-3" />
                  Sans engagement
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  <CheckCircle className="mr-2 h-3 w-3" />
                  Conseils personnalisés
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold">Choisissez le type de consultation</h2>
              <p className="mt-4 text-muted-foreground">Sélectionnez l'option qui correspond le mieux à vos besoins</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {consultationTypes.map((consultation, index) => (
                <motion.div
                  key={consultation.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`relative h-full ${consultation.popular ? "border-primary" : "border-white/10"}`}>
                    {consultation.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-white">Populaire</Badge>
                      </div>
                    )}

                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{consultation.title}</CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{consultation.price}</div>
                          <div className="text-sm text-muted-foreground">{consultation.duration}</div>
                        </div>
                      </div>
                      <CardDescription>{consultation.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {consultation.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full"
                        variant={consultation.popular ? "default" : "outline"}
                        onClick={() => {
                          // Redirection vers Cal.com avec le bon lien
                          window.open(`https://cal.com/your-username/${consultation.calLink}`, "_blank")
                        }}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Réserver
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cal.com Integration Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold">Réservez votre créneau</h2>
                <p className="mt-4 text-muted-foreground">Choisissez le moment qui vous convient le mieux</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CalEmbed calLink="discovery-call-30min" title="Appel Découverte - 30 minutes" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold">Autres moyens de nous contacter</h2>
                <p className="mt-4 text-muted-foreground">Vous préférez nous écrire ? Voici nos coordonnées</p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-white/10 bg-muted/30 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <info.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                        <h3 className="mb-2 font-semibold">{info.label}</h3>
                        <a href={info.href} className="text-muted-foreground transition-colors hover:text-primary">
                          {info.value}
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold">Questions fréquentes</h2>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-white/10 bg-muted/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">L'appel découverte est-il vraiment gratuit ?</h3>
                    <p className="text-muted-foreground">
                      Oui, absolument ! Nous offrons 30 minutes de consultation gratuite pour comprendre votre projet et
                      vous donner des conseils personnalisés, sans aucun engagement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-white/10 bg-muted/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">Que se passe-t-il après l'appel ?</h3>
                    <p className="text-muted-foreground">
                      Nous vous envoyons un résumé de nos recommandations et, si vous le souhaitez, une proposition
                      détaillée adaptée à vos besoins et votre budget.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-white/10 bg-muted/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">Travaillez-vous avec des startups en phase d'idée ?</h3>
                    <p className="text-muted-foreground">
                      Oui ! Nous accompagnons les entrepreneurs dès la phase d'idée jusqu'au lancement et au-delà. Notre
                      expertise nous permet de valider et structurer votre concept.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
