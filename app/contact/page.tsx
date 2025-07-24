import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sage/20 to-cream" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-charcoal">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl font-light">We're here to support your wellness journey</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-charcoal mb-4">Send us a message</h2>
                <p className="text-charcoal/70">
                  Have questions about our services or ready to begin your wellness journey? We'd love to hear from you.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Name
                  </label>
                  <Input id="name" type="text" placeholder="Your full name" className="w-full" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you on your wellness journey..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button className="bg-sage hover:bg-sage/90 text-white px-8 py-3 w-full md:w-auto">Send Message</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-charcoal mb-4">Visit our sanctuary</h2>
                <p className="text-charcoal/70 mb-8">
                  Located in the heart of the city, our peaceful studio offers a tranquil escape from the everyday
                  hustle.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Address</h3>
                    <p className="text-charcoal/70">
                      123 Wellness Way
                      <br />
                      Peaceful Gardens, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <p className="text-charcoal/70">(555) 123-YOGA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-charcoal/70">hello@serenespirit.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Hours</h3>
                    <div className="text-charcoal/70 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                      <p>Saturday: 7:00 AM - 7:00 PM</p>
                      <p>Sunday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-sage/10 rounded-lg flex items-center justify-center">
                <p className="text-charcoal/60">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
