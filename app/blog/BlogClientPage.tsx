"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { NavbarNew } from "@/components/navbar-new"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to validate your SaaS idea in 7 days",
    excerpt:
      "Discover our proven method to quickly validate your SaaS concept before investing time and money in development.",
    content: "",
    author: {
      name: "Sarah Martinez",
      avatar: "/images/authors/sarah.png",
      role: "Product Strategy Lead",
    },
    publishedAt: "2024-12-15",
    readTime: "8 min",
    category: "Strategy",
    tags: ["Validation", "MVP", "Product-Market Fit"],
    image: "/images/blog/validate-saas-idea.png",
    featured: true,
    slug: "how-to-validate-saas-idea-7-days",
  },
  {
    id: "2",
    title: "MVP in 14 days: Our step-by-step method",
    excerpt:
      "Complete guide to develop a functional MVP in 2 weeks. Techniques, tools and best practices used by our team.",
    content: "",
    author: {
      name: "Thomas Dubois",
      avatar: "/images/authors/thomas.png",
      role: "Lead Developer",
    },
    publishedAt: "2024-12-10",
    readTime: "12 min",
    category: "Development",
    tags: ["MVP", "Agile Development", "Next.js"],
    image: "/images/blog/mvp-14-days.png",
    featured: true,
    slug: "mvp-14-days-step-by-step-method",
  },
  {
    id: "3",
    title: "SaaS Landing Page: 10 elements that convert",
    excerpt:
      "Analyze the essential components of a high-performing SaaS landing page. Concrete examples and templates included.",
    content: "",
    author: {
      name: "Marie Leroy",
      avatar: "/images/authors/marie.png",
      role: "UX/UI Designer",
    },
    publishedAt: "2024-12-05",
    readTime: "6 min",
    category: "Design",
    tags: ["Landing Page", "Conversion", "UX Design"],
    image: "/images/blog/landing-page-converts.png",
    featured: false,
    slug: "saas-landing-page-conversion-elements",
  },
  {
    id: "4",
    title: "Growth Hacking for B2B SaaS: 15 tactics that work",
    excerpt: "Tested and approved growth strategies to launch your B2B SaaS. Guaranteed ROI on these techniques.",
    content: "",
    author: {
      name: "Alex Chen",
      avatar: "/images/authors/alex.png",
      role: "Growth Marketing Manager",
    },
    publishedAt: "2024-11-28",
    readTime: "10 min",
    category: "Marketing",
    tags: ["Growth Hacking", "B2B", "Acquisition"],
    image: "/images/blog/growth-hacking-b2b.png",
    featured: false,
    slug: "growth-hacking-b2b-saas-tactics",
  },
  {
    id: "5",
    title: "SaaS Pricing: How to set the right price from the start",
    excerpt: "Complete methodology to define your SaaS pricing strategy. Avoid costly pricing mistakes.",
    content: "",
    author: {
      name: "Julie Moreau",
      avatar: "/images/authors/julie.png",
      role: "Business Strategy Consultant",
    },
    publishedAt: "2024-11-20",
    readTime: "9 min",
    category: "Business",
    tags: ["Pricing", "Strategy", "Monetization"],
    image: "/images/blog/saas-pricing-strategy.png",
    featured: false,
    slug: "saas-pricing-set-right-price",
  },
  {
    id: "6",
    title: "SaaS Onboarding: Reduce churn by 40% in 3 steps",
    excerpt: "Optimize your onboarding process to turn users into loyal customers. Case study included.",
    content: "",
    author: {
      name: "David Kim",
      avatar: "/images/authors/david.png",
      role: "Customer Success Manager",
    },
    publishedAt: "2024-11-15",
    readTime: "7 min",
    category: "Customer Success",
    tags: ["Onboarding", "Churn", "Retention"],
    image: "/images/blog/saas-onboarding-churn.png",
    featured: false,
    slug: "saas-onboarding-reduce-churn",
  },
]

const categories = ["All", "Strategy", "Development", "Design", "Marketing", "Business", "Customer Success"]

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full overflow-hidden border-white/10 bg-muted/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-muted/50">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={post.image || "/placeholder.svg?height=300&width=500"}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Category Badge */}
            <div className="absolute left-4 top-4">
              <Badge className="bg-primary/90 text-white">{post.category}</Badge>
            </div>
          </div>

          <CardHeader className="pb-3">
            <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-primary">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-3 text-muted-foreground">{post.excerpt}</CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar || "/placeholder.svg?height=32&width=32"}
                  alt={post.author.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.article>
  )
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
              <img
                src={post.image || "/placeholder.svg?height=400&width=600"}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-3">
                <Badge className="bg-primary text-white">Featured Article</Badge>
                <Badge variant="outline">{post.category}</Badge>
              </div>

              <h2 className="mb-4 text-3xl font-bold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">{post.excerpt}</p>

              <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.article>
  )
}

export default function BlogClientPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
              <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">( SaaS Blog )</p>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
                <span className="text-muted-foreground">Expert advice for </span>
                <span className="text-foreground">SaaS startups</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Discover our practical guides, case studies and proven strategies to successfully launch and scale your
                SaaS startup.
              </p>

              {/* Search Bar */}
              <div className="mt-8 mx-auto max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search articles..." className="pl-10 bg-muted/30 border-white/10" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold">Featured Articles</h2>
              <p className="mt-4 text-muted-foreground">Our most popular guides for SaaS entrepreneurs</p>
            </motion.div>

            <div className="space-y-16">
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold">All our articles</h2>
              <p className="mt-4 text-muted-foreground">Explore our complete library of SaaS resources</p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="mb-12 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  <Tag className="mr-2 h-3 w-3" />
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Posts Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-muted/30 p-8 text-center backdrop-blur-sm md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-3xl font-bold">Stay informed about the latest SaaS trends</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Receive our best tips and case studies directly in your inbox. 1 email per week, unsubscribe in 1 click.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:max-w-md sm:mx-auto">
                <Input placeholder="Your email..." className="flex-1 bg-background/50 border-white/20" />
                <Button size="lg">Subscribe</Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Join 2,500+ entrepreneurs who trust us</p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
