// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "../core/ImageWithFallBack";

const testimonials = [
  {
    name: "Sophia Laurent",
    role: "VIP Member",
    image: "https://images.unsplash.com/photo-1714164929735-fc3d003d9809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhc2hpb24lMjBjdXN0b21lcnxlbnwxfHx8fDE3NjIyODcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Élégance has transformed my wardrobe and style. The personal stylist service is invaluable!",
    rating: 5,
    linear: "from-rose-500/20 to-pink-600/20"
  },
  {
    name: "Isabella Chen",
    role: "Premium Member",
    image: "https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjI2NjkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The exclusive access to limited collections and designer events is absolutely worth every penny.",
    rating: 5,
    linear: "from-purple-500/20 to-indigo-600/20"
  },
  {
    name: "Marcus Thompson",
    role: "Elite Member",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjIyNzMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Outstanding quality and service. The 24/7 concierge makes luxury shopping effortless.",
    rating: 5,
    linear: "from-blue-500/20 to-cyan-600/20"
  },
];

export function Clients() {
  return (
    <section id="clients" className="relative  py-24">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-linear-to-br from-white/10 via-white/5 to-white/10 p-8 backdrop-blur-2xl sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-linear-to-br from-rose-500/10 to-transparent blur-3xl"></div>
          <div className="absolute -left-32 bottom-1/4 h-96 w-96 rounded-full bg-linear-to-tr from-blue-500/10 to-transparent blur-3xl"></div>
          
          <div className="relative">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <span className="mb-6 inline-block rounded-full border border-white/40 bg-linear-to-r from-white/15 to-white/5 px-6 py-3 text-sm tracking-widest text-white backdrop-blur-xl">
                CLIENT TESTIMONIALS
              </span>
              <h2 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
                <span className="block bg-linear-to-r from-white via-white to-white/80 bg-clip-text font-serif italic text-transparent">
                  What Our
                </span>
                <span className="mt-2 block bg-linear-to-r from-white/80 via-white to-white bg-clip-text font-serif italic text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/95">
                Hear from our valued clients about their experiences with Élégance and our exclusive services.
              </p>
            </div>

            {/* Enhanced Testimonials Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group/card animate-scale-in relative overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Card linear overlay */}
                  <div className={`absolute inset-0 bg-linear-to-br ${testimonial.linear} opacity-0 transition-opacity group-hover/card:opacity-100`}></div>
                  
                  <div className="relative">
                    {/* Quote icon */}
                    <div className="mb-6 inline-flex rounded-2xl border border-white/30 bg-linear-to-br from-white/20 to-white/10 p-3 backdrop-blur-xl">
                      <Quote className="h-6 w-6 text-white" />
                    </div>

                    {/* Quote text */}
                    <blockquote className="mb-6 font-serif italic text-lg leading-relaxed text-white/95">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Rating stars */}
                    <div className="mb-6 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="mb-6 h-px bg-linear-to-r from-white/40 via-white/20 to-transparent"></div>

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white/30 ring-4 ring-white/10 transition-all group-hover/card:border-white/50 group-hover/card:ring-white/20">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover transition-transform group-hover/card:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg text-white">{testimonial.name}</h4>
                        <p className="text-sm tracking-wide text-white/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom stats */}
            <div className="mt-16 grid gap-8 rounded-2xl border border-white/30 bg-linear-to-br from-white/15 to-white/5 p-8 backdrop-blur-xl sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 bg-linear-to-br from-white to-white/70 bg-clip-text text-4xl text-transparent">4.9/5</div>
                <p className="text-sm text-white/80">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="mb-2 bg-linear-to-br from-white to-white/70 bg-clip-text text-4xl text-transparent">10K+</div>
                <p className="text-sm text-white/80">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="mb-2 bg-linear-to-br from-white to-white/70 bg-clip-text text-4xl text-transparent">99%</div>
                <p className="text-sm text-white/80">Would Recommend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
