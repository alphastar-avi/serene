import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Mindful Breathing",
    excerpt:
      "Discover how conscious breathing techniques can transform your nervous system and enhance your overall well-being.",
    image: "/placeholder.svg?height=300&width=400",
    date: "March 15, 2024",
    slug: "science-behind-mindful-breathing",
  },
  {
    id: 2,
    title: "Creating Sacred Space in Your Home",
    excerpt:
      "Learn how to design a peaceful sanctuary in your living space that supports your daily wellness practices.",
    image: "/placeholder.svg?height=300&width=400",
    date: "March 10, 2024",
    slug: "creating-sacred-space-home",
  },
  {
    id: 3,
    title: "The Healing Power of Essential Oils",
    excerpt:
      "Explore the therapeutic benefits of aromatherapy and how to incorporate essential oils into your wellness routine.",
    image: "/placeholder.svg?height=300&width=400",
    date: "March 5, 2024",
    slug: "healing-power-essential-oils",
  },
  {
    id: 4,
    title: "Understanding Your Body's Energy Centers",
    excerpt:
      "A beginner's guide to the chakra system and how energy work can support your physical and emotional health.",
    image: "/placeholder.svg?height=300&width=400",
    date: "February 28, 2024",
    slug: "understanding-body-energy-centers",
  },
  {
    id: 5,
    title: "Seasonal Wellness: Spring Renewal",
    excerpt: "Align your wellness practices with the natural rhythms of spring for optimal health and vitality.",
    image: "/placeholder.svg?height=300&width=400",
    date: "February 20, 2024",
    slug: "seasonal-wellness-spring-renewal",
  },
  {
    id: 6,
    title: "The Art of Sound Healing",
    excerpt: "Discover how vibrational therapy with singing bowls and gongs can promote deep healing and relaxation.",
    image: "/placeholder.svg?height=300&width=400",
    date: "February 15, 2024",
    slug: "art-of-sound-healing",
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <OptimizedImage src="/placeholder.svg?height=400&width=1200" alt="Blog" fill />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Wellness Journal</h1>
            <p className="text-xl md:text-2xl font-light">Insights for your wellness journey</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}/`} className="group">
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="group-hover:scale-105 transition-transform duration-300"
                      fill
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-sage mb-2">{post.date}</div>
                    <h2 className="text-xl font-serif text-charcoal mb-3 group-hover:text-sage transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-charcoal/70 leading-relaxed">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
