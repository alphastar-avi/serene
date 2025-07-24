import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"

const services = [
  {
    title: "Yoga",
    description: "Transform your body and mind through mindful movement and breathwork",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🧘‍♀️",
    slug: "yoga",
  },
  {
    title: "Acupuncture",
    description: "Restore natural balance through ancient Chinese healing techniques",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🌿",
    slug: "acupuncture",
  },
  {
    title: "Aroma Therapy",
    description: "Heal and rejuvenate with the power of pure essential oils",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🌸",
    slug: "aroma-therapy",
  },
  {
    title: "Holistic Healing",
    description: "Comprehensive wellness approach addressing mind, body, and spirit",
    image: "/placeholder.svg?height=300&width=400",
    icon: "✨",
    slug: "holistic-healing",
  },
  {
    title: "Sound Healing",
    description: "Experience deep relaxation through therapeutic sound vibrations",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎵",
    slug: "sound-healing",
  },
  {
    title: "Counselling",
    description: "Professional guidance for emotional wellness and personal growth",
    image: "/placeholder.svg?height=300&width=400",
    icon: "💭",
    slug: "counselling",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Our Healing Services</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Discover our comprehensive range of wellness services, each designed to support your unique journey to
            optimal health and inner harmony.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={`/services/#${service.slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="group-hover:scale-105 transition-transform duration-300"
                    fill
                  />
                  <div className="absolute top-4 left-4 text-3xl bg-white/90 rounded-full w-12 h-12 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-charcoal mb-3 group-hover:text-sage transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
