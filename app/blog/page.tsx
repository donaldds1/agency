import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

// SEO Metadata
export const metadata: Metadata = {
  title: "SaaS Blog | Expert Tips & Strategies for Startups | DARA Agency",
  description:
    "Discover expert advice for launching and scaling your SaaS startup. Practical guides, case studies and marketing strategies for entrepreneurs.",
  keywords: "saas blog, startup advice, saas marketing, mvp development, growth hacking, b2b strategies",
  openGraph: {
    title: "SaaS Blog - Expert Advice for Startups",
    description: "Practical guides and strategies to successfully launch your SaaS startup",
    type: "website",
    url: "https://dara-agency.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Blog - Expert Advice for Startups",
    description: "Practical guides and strategies to successfully launch your SaaS startup",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
