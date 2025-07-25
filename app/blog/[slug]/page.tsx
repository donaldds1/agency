"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { NavbarNew } from "@/components/navbar-new"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock data - in real app, this would come from a CMS or API
const blogPostData = {
  "how-to-validate-saas-idea-7-days": {
    title: "How to validate your SaaS idea in 7 days",
    excerpt:
      "Discover our proven method to quickly validate your SaaS concept before investing time and money in development.",
    content: `
      <h2>Why validate your SaaS idea?</h2>
      <p>Too many entrepreneurs dive headfirst into developing their SaaS without validating their idea. Result: 90% of startups fail within the first 2 years.</p>
      
      <p>Idea validation allows you to:</p>
      <ul>
        <li>Avoid wasting time and money</li>
        <li>Understand the real needs of your market</li>
        <li>Refine your value proposition</li>
        <li>Identify your first potential customers</li>
      </ul>

      <h2>Our 7-step method</h2>
      
      <h3>Day 1-2: Define the problem</h3>
      <p>Start by clearly identifying the problem you want to solve. Ask yourself these questions:</p>
      <ul>
        <li>What specific problem are you solving?</li>
        <li>Who encounters this problem?</li>
        <li>How often does this problem occur?</li>
        <li>How much does this problem currently cost?</li>
      </ul>

      <h3>Day 3-4: Market research</h3>
      <p>Analyze your target market and competitors. Use tools like:</p>
      <ul>
        <li>Google Trends for search trends</li>
        <li>SEMrush for competitive analysis</li>
        <li>LinkedIn to identify your audience</li>
        <li>Reddit and specialized forums for discussions</li>
      </ul>

      <h3>Day 5-6: User interviews</h3>
      <p>Conduct 10-15 interviews with your target audience. Key questions:</p>
      <ul>
        <li>"Describe your current process for [problem]"</li>
        <li>"What's your biggest challenge with [problem]?"</li>
        <li>"How much would you pay to solve this problem?"</li>
        <li>"How do you currently evaluate solutions?"</li>
      </ul>

      <h3>Day 7: Landing page test</h3>
      <p>Create a simple landing page presenting your solution and measure interest:</p>
      <ul>
        <li>Email conversion rate</li>
        <li>Time spent on page</li>
        <li>Comments and questions</li>
        <li>Social media shares</li>
      </ul>

      <h2>Validation metrics</h2>
      <p>Your idea is validated if:</p>
      <ul>
        <li>70%+ of people interviewed confirm the problem</li>
        <li>50%+ would be willing to pay for a solution</li>
        <li>Landing page conversion rate > 2%</li>
        <li>At least 3 competitors exist (proof of market)</li>
      </ul>

      <h2>Next steps</h2>
      <p>Once your idea is validated, you can move on to developing your MVP. Our team can support you in this crucial step with our "MVP in 14 days" offer.</p>
    `,
    author: {
      name: "Sarah Martinez",
      avatar: "/images/authors/sarah.png",
      role: "Product Strategy Lead",
      bio: "10+ years of experience in SaaS product launches. Has supported over 50 startups in their idea validation.",
    },
    publishedAt: "2024-12-15",
    readTime: "8 min",
    category: "Strategy",
    tags: ["Validation", "MVP", "Product-Market Fit", "Startup"],
    image: "/images/blog/validate-saas-idea-large.png",
    relatedPosts: [
      {
        title: "MVP in 14 days: Our step-by-step method",
        slug: "mvp-14-days-step-by-step-method",
        image: "/images/blog/mvp-14-days.png",
      },
      {
        title: "SaaS Landing Page: 10 elements that convert",
        slug: "saas-landing-page-conversion-elements",
        image: "/images/blog/landing-page-converts.png",
      },
    ],
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPostData[slug as keyof typeof blogPostData]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <NavbarNew />
        <div className="flex min-h-screen items-center justify-center pt-40">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Article not found</h1>
            <Link href="/blog">
              <Button className="mt-4">Back to blog</Button>
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
            <Link href="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <header className="mb-12">
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <Badge className="bg-primary text-white">{post.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        Practical guide
                      </div>
                    </div>
                  </div>

                  <h1 className="mb-6 text-[clamp(2rem,5vw,3rem)] font-bold leading-tight">{post.title}</h1>

                  <p className="mb-8 text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={post.author.avatar || "/placeholder.svg?height=50&width=50"}
                        alt={post.author.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{post.author.name}</p>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="mb-12 aspect-[16/9] overflow-hidden rounded-2xl">
                  <img
                    src={post.image || "/placeholder.svg?height=600&width=1000"}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg prose-neutral dark:prose-invert max-w-none mb-12"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <Separator className="my-12" />

                {/* Author Bio */}
                <Card className="mb-12 border-white/10 bg-muted/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <img
                        src={post.author.avatar || "/placeholder.svg?height=80&width=80"}
                        alt={post.author.name}
                        className="h-20 w-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold text-foreground">
                          <User className="mr-2 inline h-5 w-5" />
                          {post.author.name}
                        </h3>
                        <p className="mb-3 text-primary">{post.author.role}</p>
                        <p className="text-muted-foreground">{post.author.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                <section className="mb-12">
                  <h2 className="mb-8 text-2xl font-bold">Related articles</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {post.relatedPosts.map((relatedPost, index) => (
                      <motion.div
                        key={relatedPost.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Card className="group overflow-hidden border-white/10 bg-muted/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
                            <div className="aspect-[16/9] overflow-hidden">
                              <img
                                src={relatedPost.image || "/placeholder.svg?height=200&width=350"}
                                alt={relatedPost.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <CardContent className="p-6">
                              <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                                {relatedPost.title}
                              </h3>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.article>
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
              <h2 className="mb-4 text-3xl font-bold">Ready to validate your SaaS idea?</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Book a free call to discuss your project and get personalized advice.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Book a free call</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/blog">Read more articles</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}
