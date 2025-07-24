import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Top Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <OptimizedImage src="/placeholder.svg?height=600&width=1200" alt="Our peaceful studio space" fill />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">About Us</h1>
            <p className="text-xl md:text-2xl font-light">Discover our journey to wellness</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-charcoal">Our Journey</h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                Founded in 2018, Serene Spirit emerged from a deeply personal journey of healing and transformation. Our
                founder, Sarah Chen, discovered the profound power of holistic wellness after her own experience with
                chronic stress and burnout in the corporate world.
              </p>
              <p>
                What began as a personal quest for balance has blossomed into a sanctuary where ancient wisdom meets
                modern understanding. We believe that true wellness encompasses not just the physical body, but the
                mind, spirit, and emotional well-being of each individual.
              </p>
              <p>
                Today, we're proud to serve our community with authentic, transformative practices that honor both
                traditional healing arts and contemporary wellness science.
              </p>
            </div>
            <Button className="bg-sage hover:bg-sage/90 text-white px-8 py-3">Meet Our Team</Button>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <OptimizedImage src="/placeholder.svg?height=500&width=400" alt="Our founder in meditation" fill />
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-charcoal mb-8">Our Philosophy</h2>
          <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
            <p>
              We believe that wellness is not a destination, but a journey of continuous growth and self-discovery. Our
              approach integrates time-honored healing traditions with modern therapeutic techniques, creating a
              comprehensive path to well-being.
            </p>
            <p>
              Every individual is unique, and so is their path to wellness. We honor this by offering personalized
              experiences that meet you exactly where you are in your journey, whether you're seeking physical healing,
              emotional balance, or spiritual growth.
            </p>
            <p>
              Our commitment extends beyond individual sessions. We strive to build a community of conscious individuals
              who support each other's growth and contribute to a more peaceful, balanced world.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
