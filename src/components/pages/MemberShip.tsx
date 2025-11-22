import { Crown, Globe, Award } from "lucide-react";

const memberships = [
  {
    logo: Crown,
    title: "Luxury Brands Collective",
    description: "As members of the prestigious Luxury Brands Collective, we provide direct access to iconic fashion houses and emerging designers. This exclusive membership ensures authenticity, quality, and first-class service for every piece in our collection.",
    linear: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accentColor: "from-amber-400 to-yellow-500"
  },
  {
    logo: Globe,
    title: "International Fashion Council",
    description: "Our membership with the International Fashion Council grants us unique insights into global fashion trends and sustainable practices. We collaborate with industry leaders to bring you ethically sourced, environmentally conscious luxury fashion.",
    linear: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accentColor: "from-blue-400 to-cyan-500"
  },
  {
    logo: Award,
    title: "Premium Quality Alliance",
    description: "Certified by the Premium Quality Alliance, every item undergoes rigorous authentication and quality control. This membership guarantees that you receive only genuine, premium-grade fashion pieces backed by industry-recognized standards.",
    linear: "from-purple-500/20 via-indigo-500/10 to-transparent",
    accentColor: "from-purple-400 to-indigo-500"
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative  py-24 ">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-linear-to-br from-white/10 via-white/5 to-white/10 p-8 backdrop-blur-2xl sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-linear-to-br from-amber-500/10 to-transparent blur-3xl"></div>
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-linear-to-tl from-purple-500/10 to-transparent blur-3xl"></div>
          
          <div className="relative">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <span className="mb-6 inline-block rounded-full border border-white/40 bg-linear-to-r from-white/15 to-white/5 px-6 py-3 text-sm tracking-widest text-white backdrop-blur-xl">
                EXCLUSIVE MEMBERSHIPS
              </span>
              <h2 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
                <span className="block bg-linear-to-r from-white via-white to-white/80 bg-clip-text font-serif italic text-transparent">
                  Prestigious
                </span>
                <span className="mt-2 block bg-linear-to-r from-white/80 via-white to-white bg-clip-text font-serif italic text-transparent">
                  Affiliations
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/95">
                Our exclusive memberships with world-renowned fashion organizations ensure unparalleled quality and access.
              </p>
            </div>

            {/* Enhanced Membership Cards */}
            <div className="grid gap-8 lg:grid-cols-3">
              {memberships.map((membership, index) => {
                const Logo = membership.logo;
                return (
                  <div
                    key={index}
                    className="group/card animate-scale-in relative overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 lg:p-10"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Card linear overlay */}
                    <div className={`absolute inset-0 bg-linear-to-br ${membership.linear} opacity-0 transition-opacity group-hover/card:opacity-100`}></div>
                    
                    <div className="relative">
                      {/* Enhanced Logo */}
                      <div className="mb-8 inline-flex">
                        <div className="relative">
                          {/* Glow effect */}
                          <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${membership.accentColor} blur-2xl opacity-0 transition-opacity group-hover/card:opacity-50`}></div>
                          
                          <div className="relative rounded-2xl border border-white/30 bg-linear-to-br from-white/20 to-white/10 p-6 backdrop-blur-xl transition-all group-hover/card:border-white/50 group-hover/card:from-white/30 group-hover/card:to-white/20">
                            <Logo className="h-12 w-12 text-white transition-all group-hover/card:scale-110 lg:h-14 lg:w-14" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Title with accent */}
                      <div className="mb-6">
                        <h3 className="mb-3 text-2xl text-white transition-all group-hover/card:text-3xl lg:text-3xl">
                          {membership.title}
                        </h3>
                        <div className={`h-1 w-16 rounded-full bg-linear-to-r ${membership.accentColor} transition-all group-hover/card:w-24`}></div>
                      </div>
                      
                      {/* Description */}
                      <p className="leading-relaxed text-white/85">
                        {membership.description}
                      </p>

                      {/* Decorative corner accent */}
                      <div className="absolute bottom-4 right-4 h-20 w-20 opacity-0 transition-opacity group-hover/card:opacity-20">
                        <div className={`h-full w-full rounded-full bg-linear-to-br ${membership.accentColor} blur-2xl`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom accent */}
            <div className="mt-16 text-center">
              <div className="mx-auto flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-linear-to-r from-transparent to-white/40"></div>
                <div className="h-2 w-2 rotate-45 bg-linear-to-br from-white to-white/60"></div>
                <div className="h-px w-20 bg-linear-to-l from-transparent to-white/40"></div>
              </div>
              <p className="mt-6 text-sm tracking-wider text-white/70">
                CERTIFIED EXCELLENCE IN LUXURY FASHION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
