import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <OptimizedImage
        src="/placeholder.svg?height=1080&width=1920"
        alt="Peaceful yoga practice in nature"
        fill
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Rediscover Balance.
            <br />
            Reclaim Your Peace.
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Journey into wellness through ancient wisdom and modern healing practices
          </p>
          <Link href="/services/">
            <Button className="bg-sage hover:bg-sage/90 text-white px-8 py-4 text-lg">Explore Our Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
