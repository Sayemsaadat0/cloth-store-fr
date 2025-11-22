import { Facebook, Instagram, Twitter, Youtube, Mail, ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    shop: [
      { name: "New Arrivals", href: "#products" },
      { name: "Collections", href: "#products" },
      { name: "Designers", href: "#products" },
      { name: "Sale", href: "#products" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQs", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
    ],
    membership: [
      { name: "Join Now", href: "#membership" },
      { name: "Benefits", href: "#membership" },
      { name: "VIP Services", href: "#membership" },
      { name: "Events", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "123 Fashion Ave, New York" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: Clock, text: "Mon-Sat: 9AM-8PM" },
  ];

  return (
    <footer className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
          {/* Newsletter Section */}
          <div className="relative overflow-hidden border-b border-gray-200 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Decorative linears */}
            <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-linear-to-br from-purple-500/20 to-transparent blur-3xl"></div>
            <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-linear-to-tl from-blue-500/20 to-transparent blur-3xl"></div>
            
            <div className="relative px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
              <div className="mx-auto max-w-4xl">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Left Side - Content */}
                  <div className="text-center lg:text-left">
                    <div className="mb-6 inline-flex items-center justify-center lg:justify-start">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/20 to-blue-500/20 blur-2xl"></div>
                        <div className="relative rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
                          <Mail className="h-10 w-10 text-white sm:h-12 sm:w-12" />
                        </div>
                      </div>
                    </div>
                    <h3 className="mb-4 text-2xl text-white sm:text-3xl lg:text-4xl">
                      <span className="bg-linear-to-r from-white via-white to-white/90 bg-clip-text font-serif italic text-transparent">
                        Join Our Newsletter
                      </span>
                    </h3>
                    <p className="text-sm leading-relaxed text-white/95 sm:text-base lg:text-lg">
                      Subscribe for exclusive offers, style tips, and early access to new collections.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80 lg:justify-start">
                      <span className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-purple-400 to-blue-400"></div>
                        Weekly Updates
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-purple-400 to-blue-400"></div>
                        Exclusive Deals
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-purple-400 to-blue-400"></div>
                        VIP Access
                      </span>
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div>
                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-sm text-white placeholder:text-white/60 backdrop-blur-xl transition-all focus:border-white/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 sm:text-base"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white bg-white px-6 py-4 text-sm text-gray-900 transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-xl sm:text-base"
                      >
                        Subscribe Now
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                    <p className="mt-4 text-center text-xs text-white/70 sm:text-sm">
                      By subscribing, you agree to our Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="bg-white px-6 py-12 sm:px-8 lg:px-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-12">
              {/* Brand Column - Takes 2 columns on large screens */}
              <div className="sm:col-span-2 lg:col-span-2">
                <h3 className="mb-6 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text font-serif text-3xl italic text-transparent sm:text-4xl">
                  Élégance
                </h3>
                <p className="mb-8 max-w-xs text-sm leading-relaxed text-gray-600 sm:text-base">
                  Redefining luxury fashion with timeless elegance and modern sophistication.
                </p>
                
                {/* Contact Info */}
                <div className="mb-8 space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="group flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-white transition-all group-hover:border-gray-300 group-hover:shadow-md">
                          <Icon className="h-4 w-4 text-gray-900" />
                        </div>
                        <span>{info.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div>
                  <p className="mb-4 text-sm tracking-wider text-gray-600">FOLLOW US</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className="group flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-white transition-all hover:scale-110 hover:border-gray-900 hover:bg-gray-900 hover:shadow-lg"
                        >
                          <Icon className="h-5 w-5 text-gray-900 transition-colors group-hover:text-white" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="mb-5 text-base tracking-wider text-gray-900 sm:text-lg">COMPANY</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900"
                      >
                        <span className="transition-transform group-hover:translate-x-1">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shop Links */}
              <div>
                <h4 className="mb-5 text-base tracking-wider text-gray-900 sm:text-lg">SHOP</h4>
                <ul className="space-y-3">
                  {footerLinks.shop.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900"
                      >
                        <span className="transition-transform group-hover:translate-x-1">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h4 className="mb-5 text-base tracking-wider text-gray-900 sm:text-lg">SUPPORT</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900"
                      >
                        <span className="transition-transform group-hover:translate-x-1">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Membership Links */}
              <div>
                <h4 className="mb-5 text-base tracking-wider text-gray-900 sm:text-lg">MEMBERSHIP</h4>
                <ul className="space-y-3">
                  {footerLinks.membership.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900"
                      >
                        <span className="transition-transform group-hover:translate-x-1">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 bg-linear-to-br from-gray-50 to-white px-6 py-6 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-center text-xs text-gray-600 sm:text-left sm:text-sm">
                © 2025 Élégance. All rights reserved. Crafted with passion for fashion.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a href="#" className="text-xs text-gray-600 transition-colors hover:text-gray-900 sm:text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-gray-600 transition-colors hover:text-gray-900 sm:text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-xs text-gray-600 transition-colors hover:text-gray-900 sm:text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
