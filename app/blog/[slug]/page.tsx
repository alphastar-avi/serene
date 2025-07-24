import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    slug: "science-behind-mindful-breathing",
  },
  {
    slug: "creating-sacred-space-home",
  },
  {
    slug: "healing-power-essential-oils",
  },
  {
    slug: "understanding-body-energy-centers",
  },
  {
    slug: "seasonal-wellness-spring-renewal",
  },
  {
    slug: "art-of-sound-healing",
  },
]

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-red-600">Blog post not found.</div>
      </main>
    )
  }

  // Example content for each post (should be expanded for real content)
  const postContent: Record<string, { title: string; date: string; image: string; content: JSX.Element }> = {
    "science-behind-mindful-breathing": {
      title: "The Science Behind Mindful Breathing",
      date: "March 15, 2024",
      image: "/placeholder.svg?height=400&width=800",
      content: (
        <>
          <p>In our fast-paced world, the simple act of breathing consciously has become a powerful tool for transformation. Recent scientific research has revealed the profound impact that mindful breathing can have on our nervous system, mental clarity, and overall well-being.</p>
          <h2>The Physiology of Breath</h2>
          <p>When we breathe mindfully, we activate the parasympathetic nervous system—our body's natural relaxation response. This shift from the sympathetic "fight or flight" mode to the parasympathetic "rest and digest" state creates measurable changes in our physiology.</p>
          <p>Studies have shown that controlled breathing practices can lower cortisol levels, reduce blood pressure, and improve heart rate variability—a key marker of resilience and health.</p>
          <h2>Simple Techniques to Get Started</h2>
          <p>Begin with the 4-7-8 technique: Inhale for 4 counts, hold for 7, and exhale for 8. This simple practice can be done anywhere and provides immediate calming effects.</p>
          <p>Remember, consistency is more important than perfection. Even five minutes of mindful breathing daily can create lasting positive changes in your life.</p>
        </>
      ),
    },
    "creating-sacred-space-home": {
      title: "Creating Sacred Space in Your Home",
      date: "March 10, 2024",
      image: "/placeholder.svg?height=400&width=800",
      content: (
        <>
          <p>Learn how to design a peaceful sanctuary in your living space that supports your daily wellness practices.</p>
        </>
      ),
    },
    "healing-power-essential-oils": {
      title: "The Healing Power of Essential Oils",
      date: "March 5, 2024",
      image: "/placeholder.svg?height=400&width=800",
      content: (
        <>
          <p>Explore the therapeutic benefits of aromatherapy and how to incorporate essential oils into your wellness routine.</p>
        </>
      ),
    },
    "understanding-body-energy-centers": {
      title: "Understanding Your Body's Energy Centers",
      date: "February 28, 2024",
      image: "/placeholder.svg?height=400&width=800",
      content: (
        <>
          <p>A beginner's guide to the chakra system and how energy work can support your physical and emotional health.</p>
        </>
      ),
    },
    "seasonal-wellness-spring-renewal": {
      title: "Seasonal Wellness: Spring Renewal",
      date: "February 20, 2024",
      image: "/placeholder.svg?height=400&width=800",
      content: (
        <>
          <p>Align your wellness practices with the natural rhythms of spring for optimal health and vitality.</p>
        </>
      ),
    },
    "art-of-sound-healing": {
      title: "The Art of Sound Healing",
      date: "February 15, 2024",
      image: "/placeholder.svg?height=400&width=800",
      content: (
        <>
          <p>Discover how vibrational therapy with singing bowls and gongs can promote deep healing and relaxation.</p>
        </>
      ),
    },
  }

  const content = postContent[params.slug]

  return (
    <main className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-20">
        <Link href="/blog/" className="inline-flex items-center text-sage hover:text-sage/80 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        <header className="mb-12">
          <div className="text-sage mb-4">{content.date}</div>
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">{content.title}</h1>
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <OptimizedImage src={content.image} alt={content.title} fill />
          </div>
        </header>
        <div className="prose prose-lg max-w-none">
          <div className="text-lg text-charcoal/80 leading-relaxed space-y-6">
            {content.content}
          </div>
        </div>
      </article>
    </main>
  )
}
