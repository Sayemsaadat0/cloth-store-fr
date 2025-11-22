import { Shield, Truck, Award, HeadphonesIcon, RefreshCw, Star } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Every piece is verified and comes with a certificate of authenticity from our expert team.",
      linear: "from-emerald-500/20 to-green-600/20"
    },
    {
      icon: Truck,
      title: "Worldwide Shipping",
      description: "Complimentary express delivery to over 150 countries with premium packaging.",
      linear: "from-blue-500/20 to-cyan-600/20"
    },
    {
      icon: Award,
      title: "Exclusive Collections",
      description: "Access to limited edition pieces from world-renowned designers before anyone else.",
      linear: "from-amber-500/20 to-yellow-600/20"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Concierge Service",
      description: "Dedicated personal stylists and support team available around the clock.",
      linear: "from-purple-500/20 to-indigo-600/20"
    },
    {
      icon: RefreshCw,
      title: "Hassle-Free Returns",
      description: "30-day return policy with free returns and exchanges on all purchases.",
      linear: "from-pink-500/20 to-rose-600/20"
    },
    {
      icon: Star,
      title: "VIP Experiences",
      description: "Invitations to exclusive fashion shows, private sales, and designer meet-and-greets.",
      linear: "from-orange-500/20 to-red-600/20"
    },
  ];

  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "150+", label: "Countries Served" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section id="why-us" className="relative  py-24 ">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-linear-to-br from-white/10 via-white/5 to-white/10 p-8 backdrop-blur-2xl sm:p-12 lg:p-16">
          {/* Decorative linears */}
          <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-linear-to-br from-indigo-500/10 to-transparent blur-3xl"></div>
          <div className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-linear-to-tr from-purple-500/10 to-transparent blur-3xl"></div>
          
          <div className="relative">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <span className="mb-6 inline-block rounded-full border border-white/40 bg-linear-to-r from-white/15 to-white/5 px-6 py-3 text-sm tracking-widest text-white backdrop-blur-xl">
                WHY CHOOSE US
              </span>
              <h2 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
                <span className="block bg-linear-to-r from-white via-white to-white/80 bg-clip-text font-serif italic text-transparent">
                  The Élégance
                </span>
                <span className="mt-2 block bg-linear-to-r from-white/80 via-white to-white bg-clip-text font-serif italic text-transparent">
                  Difference
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/95">
                We go beyond fashion to create an unparalleled luxury experience tailored just for you.
              </p>
            </div>

            {/* Enhanced Reasons Grid */}
            <div className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="group/card animate-scale-in overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Card linear overlay */}
                    <div className={`absolute inset-0 bg-linear-to-br ${reason.linear} opacity-0 transition-opacity group-hover/card:opacity-100`}></div>
                    
                    <div className="relative">
                      <div className="mb-6 inline-flex">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl transition-all group-hover/card:bg-white/30"></div>
                          <div className="relative rounded-2xl border border-white/30 bg-linear-to-br from-white/20 to-white/10 p-5 backdrop-blur-xl transition-all group-hover/card:border-white/50 group-hover/card:from-white/30 group-hover/card:to-white/20">
                            <Icon className="h-8 w-8 text-white transition-transform group-hover/card:scale-110" />
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl text-white transition-all group-hover/card:text-2xl">
                        {reason.title}
                      </h3>
                      <p className="leading-relaxed text-white/85">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Stats Section */}
            <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-linear-to-br from-white/15 to-white/5 p-8 backdrop-blur-xl sm:p-12">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group/stat relative text-center transition-all hover:scale-110"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/10 to-transparent opacity-0 blur-xl transition-opacity group-hover/stat:opacity-100"></div>
                    <div className="relative">
                      <div className="mb-3 bg-linear-to-br from-white to-white/70 bg-clip-text text-5xl text-transparent drop-shadow-lg lg:text-6xl">
                        {stat.value}
                      </div>
                      <div className="mx-auto mb-2 h-px w-12 bg-linear-to-r from-transparent via-white/40 to-transparent"></div>
                      <div className="text-sm tracking-wider text-white/80">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
