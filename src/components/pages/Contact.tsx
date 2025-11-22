import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@elegance.com", "support@elegance.com"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+44 (20) 7123-4567"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fashion Avenue", "New York, NY 10001"],
    },
    {
      icon: Clock,
      title: "Response Time",
      details: ["Within 24 hours", "Priority support for members"],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="relative py-24 ">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-6 inline-block rounded-full border border-white/40 bg-linear-to-r from-white/15 to-white/5 px-6 py-3 text-sm tracking-widest text-white backdrop-blur-xl">
            GET IN TOUCH
          </span>
          <h2 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
            <span className="block bg-linear-to-r from-white via-white to-white/80 bg-clip-text font-serif italic text-transparent">
              Let's Start
            </span>
            <span className="mt-2 block bg-linear-to-r from-white/80 via-white to-white bg-clip-text font-serif italic text-transparent">
              A Conversation
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/95">
            Have questions? Our dedicated team is here to assist you with personalized service and expert advice.
          </p>
        </div>

        {/* Main Contact Container */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
          <div className="grid lg:grid-cols-5">
            {/* Left Column - Dark Accent with linear */}
            <div className="relative overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-8 lg:col-span-2 lg:p-12">
              {/* Decorative linears */}
              <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-linear-to-br from-purple-500/20 to-transparent blur-3xl"></div>
              <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-linear-to-tl from-blue-500/20 to-transparent blur-3xl"></div>
              
              <div className="relative flex h-full flex-col">
                <div className="mb-10">
                  <h3 className="mb-3 text-3xl text-white sm:text-4xl">
                    <span className="font-serif italic">Contact Information</span>
                  </h3>
                  <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></div>
                </div>

                {/* Contact Details */}
                <div className="mb-auto space-y-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="group flex gap-4">
                        <div className="shrink-0">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/20 to-blue-500/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all group-hover:border-white/40 group-hover:bg-white/20">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="mb-2 text-sm tracking-wider text-white/70">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-white transition-colors group-hover:text-white/90">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-12 border-t border-white/10 pt-8">
                  <h4 className="mb-5 text-sm tracking-wider text-white/70">
                    FOLLOW US
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className="group/social flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all hover:scale-110 hover:border-white/40 hover:bg-white hover:text-gray-900 hover:shadow-lg hover:shadow-white/20"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Decorative Quote */}
                <div className="mt-10 hidden lg:block">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <div className="absolute -left-2 -top-2 text-6xl text-white/10">"</div>
                    <p className="relative font-serif italic text-sm leading-relaxed text-white/90">
                      Excellence in every interaction, elegance in every detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative z-10 p-8 lg:col-span-3 lg:p-12">
              <div className="relative z-10 mb-10">
                <h3 className="mb-3 text-3xl text-gray-900 sm:text-4xl">
                  <span className="font-serif italic">Send us a Message</span>
                </h3>
                <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-purple-600 to-blue-600"></div>
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm tracking-wider text-gray-700">
                      YOUR NAME *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm tracking-wider text-gray-700">
                      YOUR EMAIL *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm tracking-wider text-gray-700">
                    SUBJECT *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm tracking-wider text-gray-700">
                    YOUR MESSAGE *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="resize-none rounded-xl border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 transition-all focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
                    required
                  />
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <Button
                    type="submit"
                    className="group rounded-xl border border-gray-900 bg-gray-900 px-10 py-6 text-white transition-all hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
                  >
                    <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </Button>
                  <p className="pt-5 text-sm text-gray-500">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </form>

              {/* Additional Info */}
              <div className="relative z-10 mt-12 grid gap-4 border-t border-gray-200 pt-10 sm:grid-cols-2">
                <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-white p-5 transition-all hover:border-gray-300 hover:shadow-lg">
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <p className="relative z-10 mb-2 text-sm tracking-wider text-gray-600">
                    FOR URGENT MATTERS
                  </p>
                  <p className="relative z-10 text-gray-900">
                    Call: +1 (555) 123-4567
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-white p-5 transition-all hover:border-gray-300 hover:shadow-lg">
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <p className="relative z-10 mb-2 text-sm tracking-wider text-gray-600">
                    PARTNERSHIP INQUIRIES
                  </p>
                  <p className="relative z-10 text-gray-900">
                    partners@elegance.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/90">
            Prefer to visit in person?{" "}
            <a href="#" className="border-b-2 border-white/40 text-white transition-all hover:border-white">
              View our showroom locations
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
