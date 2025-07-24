"use client"

import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"

const services = [
  {
    title: "Yoga",
    description:
      "Experience the transformative power of yoga through our diverse range of classes. From gentle Hatha to dynamic Vinyasa, we offer practices suitable for all levels. Our certified instructors guide you through mindful movement, breathwork, and meditation to cultivate strength, flexibility, and inner peace.",
    image: "/placeholder.svg?height=400&width=600",
    benefits: ["Improved flexibility and strength", "Stress reduction", "Better sleep quality", "Enhanced mindfulness"],
    slug: "yoga",
  },
  {
    title: "Acupuncture",
    description:
      "Restore your body's natural balance through the ancient art of acupuncture. Our licensed practitioners use traditional Chinese medicine principles to address a wide range of conditions, from chronic pain to emotional imbalances, promoting your body's innate healing abilities.",
    image: "/placeholder.svg?height=400&width=600",
    benefits: ["Pain relief", "Improved energy flow", "Hormonal balance", "Stress management"],
    slug: "acupuncture",
  },
  {
    title: "Aroma Therapy",
    description:
      "Immerse yourself in the healing power of pure essential oils. Our aromatherapy treatments combine therapeutic massage with carefully selected botanical essences to promote relaxation, emotional balance, and physical well-being. Each session is customized to your specific needs and preferences.",
    image: "/placeholder.svg?height=400&width=600",
    benefits: ["Deep relaxation", "Mood enhancement", "Improved circulation", "Natural detoxification"],
    slug: "aroma-therapy",
  },
  {
    title: "Holistic Healing",
    description:
      "Embrace a comprehensive approach to wellness that addresses the whole person. Our holistic healing sessions integrate multiple modalities including energy work, nutritional guidance, and lifestyle coaching to support your complete transformation and optimal health.",
    image: "/placeholder.svg?height=400&width=600",
    benefits: ["Whole-person wellness", "Energy alignment", "Emotional release", "Life balance"],
    slug: "holistic-healing",
  },
  {
    title: "Sound Healing",
    description:
      "Experience the profound healing vibrations of sound therapy. Using singing bowls, gongs, and other therapeutic instruments, our sound healing sessions help release tension, reduce anxiety, and promote deep states of relaxation and meditation.",
    image: "/placeholder.svg?height=400&width=600",
    benefits: ["Deep relaxation", "Stress relief", "Enhanced meditation", "Emotional healing"],
    slug: "sound-healing",
  },
  {
    title: "Counselling",
    description:
      "Navigate life's challenges with professional guidance and support. Our licensed counsellors provide a safe, non-judgmental space to explore your thoughts and feelings. Through evidence-based therapeutic approaches, we help you develop coping strategies, improve relationships, and achieve emotional wellness.",
    image: "/placeholder.svg?height=400&width=600",
    benefits: ["Emotional support", "Stress management", "Improved relationships", "Personal growth"],
    slug: "counselling",
  },
]

export default function Services() {
  useEffect(() => {
    // Handle hash navigation
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <OptimizedImage src="/placeholder.svg?height=500&width=1200" alt="Our services" fill />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl font-light">Holistic healing for mind, body, and spirit</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              id={service.slug}
              className={`mb-20 ${index !== services.length - 1 ? "border-b border-sage/20 pb-20" : ""}`}
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <h2 className="text-4xl font-serif text-charcoal">{service.title}</h2>
                  <p className="text-lg text-charcoal/80 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-charcoal">Benefits:</h3>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="text-charcoal/70 flex items-center">
                          <span className="w-2 h-2 bg-sage rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-sage hover:bg-sage/90 text-white px-8 py-3">Book a Session</Button>
                  </Link>
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? "md:col-start-1" : ""}`}
                >
                  <OptimizedImage src={service.image || "/placeholder.svg"} alt={service.title} fill />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
