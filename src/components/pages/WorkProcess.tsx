import { Search, ShoppingCart, Palette, Package, Truck, Smile } from "lucide-react";

export function WorkProcess() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Browse & Discover",
      description: "Explore our curated collection of luxury fashion pieces from world-renowned designers.",
      linear: "from-blue-500/20 to-cyan-600/20"
    },
    {
      number: "02",
      icon: Palette,
      title: "Personalized Styling",
      description: "Consult with our expert stylists to find the perfect pieces that match your unique style.",
      linear: "from-purple-500/20 to-pink-600/20"
    },
    {
      number: "03",
      icon: ShoppingCart,
      title: "Secure Purchase",
      description: "Complete your order with our secure payment system and enjoy exclusive member benefits.",
      linear: "from-emerald-500/20 to-green-600/20"
    },
    {
      number: "04",
      icon: Package,
      title: "Premium Packaging",
      description: "Each item is carefully packaged in our signature luxury packaging with authenticity certificate.",
      linear: "from-amber-500/20 to-orange-600/20"
    },
    {
      number: "05",
      icon: Truck,
      title: "Express Delivery",
      description: "Receive your purchase through our complimentary express shipping with real-time tracking.",
      linear: "from-indigo-500/20 to-blue-600/20"
    },
    {
      number: "06",
      icon: Smile,
      title: "Enjoy & Return",
      description: "Love your purchase! If not, enjoy hassle-free returns within 30 days, no questions asked.",
      linear: "from-rose-500/20 to-pink-600/20"
    },
  ];

  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-linear-to-br from-white/10 via-white/5 to-white/10 p-8 backdrop-blur-2xl sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-linear-to-br from-cyan-500/10 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-linear-to-tr from-purple-500/10 to-transparent blur-3xl"></div>
          
          <div className="relative">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <span className="mb-6 inline-block rounded-full border border-white/40 bg-linear-to-r from-white/15 to-white/5 px-6 py-3 text-sm tracking-widest text-white backdrop-blur-xl">
                HOW IT WORKS
              </span>
              <h2 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
                <span className="block bg-linear-to-r from-white via-white to-white/80 bg-clip-text font-serif italic text-transparent">
                  Your Journey to
                </span>
                <span className="mt-2 block bg-linear-to-r from-white/80 via-white to-white bg-clip-text font-serif italic text-transparent">
                  Luxury Fashion
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/95">
                From discovery to delivery, we've perfected every step to ensure an exceptional experience.
              </p>
            </div>

            {/* Enhanced Process Steps */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group/card animate-scale-in relative overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Card linear overlay */}
                    <div className={`absolute inset-0 bg-linear-to-br ${step.linear} opacity-0 transition-opacity group-hover/card:opacity-100`}></div>
                    
                    <div className="relative">
                      {/* Step Number Badge */}
                      <div className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 bg-linear-to-br from-white/30 to-white/10 backdrop-blur-xl transition-all group-hover/card:scale-110 group-hover/card:border-white/60">
                        <span className="bg-linear-to-br from-white to-white/80 bg-clip-text text-lg text-transparent">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-6 inline-flex">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl transition-all group-hover/card:bg-white/30"></div>
                          <div className="relative rounded-2xl border border-white/30 bg-linear-to-br from-white/20 to-white/10 p-5 backdrop-blur-xl transition-all group-hover/card:border-white/50 group-hover/card:from-white/30 group-hover/card:to-white/20">
                            <Icon className="h-8 w-8 text-white transition-transform group-hover/card:scale-110" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="mb-3 text-xl text-white transition-all group-hover/card:text-2xl">
                        {step.title}
                      </h3>
                      <div className="mb-4 h-px w-12 bg-linear-to-r from-white/40 to-transparent transition-all group-hover/card:w-20"></div>
                      <p className="leading-relaxed text-white/85">{step.description}</p>
                    </div>

                    {/* Connector (desktop only) */}
                    {index < steps.length - 1 && index % 3 !== 2 && (
                      <div className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-linear-to-r from-white/40 to-transparent lg:block"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Enhanced Bottom CTA */}
            <div className="mt-20 text-center">
              <div className="mx-auto mb-8 flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-linear-to-r from-transparent to-white/40"></div>
                <div className="h-2 w-2 rotate-45 bg-linear-to-br from-white to-white/60"></div>
                <div className="h-px w-20 bg-linear-to-l from-transparent to-white/40"></div>
              </div>
              <div className="mx-auto max-w-3xl rounded-2xl border border-white/30 bg-linear-to-br from-white/15 to-white/5 p-8 backdrop-blur-xl">
                <p className="text-lg leading-relaxed text-white/95 sm:text-xl">
                  Ready to experience luxury fashion redefined? Start your journey with Élégance today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
