import { Award, Heart, Sparkles, Users } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in every detail",
      gradient: "from-amber-400/20 to-yellow-600/20"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by love for the art of fashion",
      gradient: "from-rose-400/20 to-pink-600/20"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Pushing boundaries while honoring tradition",
      gradient: "from-blue-400/20 to-cyan-600/20"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our clients",
      gradient: "from-purple-400/20 to-indigo-600/20"
    }
  ];

  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main About Box */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-8 backdrop-blur-2xl transition-all hover:border-white/40 sm:p-12 lg:p-16">
          {/* Decorative gradient overlay */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl transition-all group-hover:scale-110"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl transition-all group-hover:scale-110"></div>
          
          <div className="relative">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <span className="mb-6 inline-block rounded-full border border-white/40 bg-gradient-to-r from-white/15 to-white/5 px-6 py-3 text-sm tracking-widest text-white backdrop-blur-xl">
                ABOUT ÉLÉGANCE
              </span>
              <h2 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
                <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text font-serif italic text-transparent">
                  Crafting Timeless Beauty
                </span>
                <span className="mt-2 block bg-gradient-to-r from-white/80 via-white to-white bg-clip-text font-serif italic text-transparent">
                  Since 2024
                </span>
              </h2>
            </div>

            {/* Story Content */}
            <div className="mb-20">
              <div className="mx-auto max-w-3xl space-y-6 text-center">
                <p className="text-lg leading-relaxed text-white/95 drop-shadow-lg sm:text-xl">
                  Élégance was born from a singular vision: to redefine luxury fashion through 
                  the perfect harmony of artistry, craftsmanship, and innovation. We believe that 
                  true elegance is not just worn—it is experienced, felt, and remembered.
                </p>
                <div className="mx-auto flex items-center justify-center gap-2">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/40"></div>
                  <div className="h-1 w-1 rotate-45 bg-white/60"></div>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/40"></div>
                </div>
                <p className="text-white/90 drop-shadow-lg">
                  Our curated collections bring together the world's most exceptional designers and 
                  artisans, each piece telling its own story of dedication, passion, and unparalleled 
                  attention to detail. From the initial sketch to the final stitch, we ensure that 
                  every garment meets our uncompromising standards of excellence.
                </p>
              </div>
            </div>

            {/* Enhanced Values Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group/card relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
                  >
                    {/* Card gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 transition-opacity group-hover/card:opacity-100`}></div>
                    
                    <div className="relative">
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl transition-all group-hover/card:bg-white/30"></div>
                          <div className="relative rounded-2xl border border-white/30 bg-gradient-to-br from-white/20 to-white/10 p-4 backdrop-blur-xl transition-all group-hover/card:border-white/50 group-hover/card:from-white/30 group-hover/card:to-white/20">
                            <Icon className="h-7 w-7 text-white transition-transform group-hover/card:scale-110" />
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl text-white transition-all group-hover/card:text-2xl">{value.title}</h3>
                      <p className="text-sm leading-relaxed text-white/80">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Bottom Quote */}
            <div className="mt-20 text-center">
              <div className="mx-auto mb-8 flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/40"></div>
                <div className="h-1.5 w-1.5 rotate-45 bg-white/60"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/40"></div>
              </div>
              <div className="relative mx-auto max-w-3xl rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl sm:p-10">
                <div className="absolute -left-2 -top-2 text-6xl text-white/20">"</div>
                <blockquote className="relative font-serif italic text-lg leading-relaxed text-white/95 drop-shadow-lg sm:text-xl">
                  Fashion is not something that exists in dresses only. Fashion is in the sky, 
                  in the street, fashion has to do with ideas, the way we live, what is happening.
                </blockquote>
                <div className="absolute -bottom-2 -right-2 rotate-180 text-6xl text-white/20">"</div>
                <p className="mt-6 text-sm tracking-wider text-white/70">— COCO CHANEL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
