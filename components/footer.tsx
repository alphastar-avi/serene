import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Serene Spirit</h3>
            <p className="text-white/70 leading-relaxed">
              A sanctuary for mind, body, and soul. Discover your path to wellness with our holistic approach to
              healing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about/" className="text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services/" className="text-white/70 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/blog/" className="text-white/70 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact/" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-white/70">
              <p>
                123 Wellness Way
                <br />
                Peaceful Gardens, CA 90210
              </p>
              <p>(555) 123-YOGA</p>
              <p>hello@serenespirit.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Serene Spirit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
