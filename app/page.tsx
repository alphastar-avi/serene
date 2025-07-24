import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import ServicesOverview from "@/components/services-overview"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <ServicesOverview />
      <Testimonials />
    </main>
  )
}
