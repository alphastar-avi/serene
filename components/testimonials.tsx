"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Serene Spirit has transformed my approach to wellness. The combination of yoga and acupuncture has helped me find balance I never thought possible.",
    rating: 5,
    service: "Yoga & Acupuncture",
  },
  {
    name: "Michael Chen",
    text: "The sound healing sessions are absolutely incredible. I leave feeling completely renewed and centered. This place is truly a sanctuary.",
    rating: 5,
    service: "Sound Healing",
  },
  {
    name: "Emma Rodriguez",
    text: "The holistic approach here addresses not just symptoms but the whole person. I've experienced profound healing on multiple levels.",
    rating: 5,
    service: "Holistic Healing",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">What Our Clients Say</h2>
          <p className="text-lg text-charcoal/70">
            Hear from those who have experienced transformation through our services
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-sage fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-charcoal/80 text-center mb-8 leading-relaxed font-light">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="text-center">
              <div className="font-semibold text-charcoal text-lg">{testimonials[currentIndex].name}</div>
              <div className="text-sage text-sm">{testimonials[currentIndex].service}</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow text-charcoal hover:text-sage"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow text-charcoal hover:text-sage"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-sage" : "bg-sage/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
