// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { AspectRatio } from "./ui/aspect-ratio";

import { ImageWithFallback } from "../core/ImageWithFallBack";

export function ExportCountries() {
  const countries = [
    {
      name: "United States",
      image: "https://images.unsplash.com/photo-1561061715-ad0d1ade0b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0ZWQlMjBzdGF0ZXMlMjBmbGFnfGVufDF8fHx8MTc2MjUwMjYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "United Kingdom",
      image: "https://images.unsplash.com/photo-1724284835525-f674a1e4085b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0ZWQlMjBraW5nZG9tJTIwZmxhZ3xlbnwxfHx8fDE3NjI1MDI2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "France",
      image: "https://images.unsplash.com/photo-1551866442-64e75e911c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFuY2UlMjBmbGFnfGVufDF8fHx8MTc2MjQ2NDM1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Italy",
      image: "https://images.unsplash.com/photo-1556958540-2378bacb6f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFseSUyMGZsYWd8ZW58MXx8fHwxNzYyNTAyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "United Arab Emirates",
      image: "https://images.unsplash.com/photo-1603798994946-5ea9dbacf20e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1YWUlMjBmbGFnfGVufDF8fHx8MTc2MjQ2NDM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Japan",
      image: "https://images.unsplash.com/photo-1627045513738-b30a564a6dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMGZsYWd8ZW58MXx8fHwxNzYyNDY0MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Germany",
      image: "https://images.unsplash.com/photo-1663493955721-110e7e1ae36c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW55JTIwZmxhZ3xlbnwxfHx8fDE3NjI0NjQzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "China",
      image: "https://images.unsplash.com/photo-1718928516680-fd5f1f38bbbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluYSUyMGZsYWd8ZW58MXx8fHwxNzYyNDAxOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Australia",
      image: "https://images.unsplash.com/photo-1680173764109-bfe1a34a1877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0cmFsaWElMjBmbGFnfGVufDF8fHx8MTc2MjQyOTgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Canada",
      image: "https://images.unsplash.com/photo-1607578774871-249a5b07c380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGElMjBmbGFnfGVufDF8fHx8MTc2MjQxMjM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Singapore",
      image: "https://images.unsplash.com/photo-1585714778157-3d600c22dcaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBmbGFnfGVufDF8fHx8MTc2MjQ2NDM1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Switzerland",
      image: "https://images.unsplash.com/photo-1684401994816-aca0a51e03a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2l0emVybGFuZCUyMGZsYWd8ZW58MXx8fHwxNzYyMzk4NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <section id="export-countries" className="relative py-24 ">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-linear-to-br from-white/10 via-white/5 to-white/10 p-8 backdrop-blur-2xl sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-linear-to-br from-emerald-500/10 to-transparent blur-3xl"></div>
          <div className="absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-linear-to-tl from-blue-500/10 to-transparent blur-3xl"></div>
          
          <div className="relative">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl">
                <span className="block bg-linear-to-r from-white via-white to-white/80 bg-clip-text font-serif italic text-transparent">
                  Luxury Fashion
                </span>
                <span className="mt-2 block bg-linear-to-r from-white/80 via-white to-white bg-clip-text font-serif italic text-transparent">
                  Delivered Worldwide
                </span>
              </h2>
            </div>

            {/* Enhanced Countries Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="group/card animate-scale-in overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="h-48 w-full overflow-hidden">
                    <div className="relative h-full w-full overflow-hidden">
                      <ImageWithFallback
                        src={country.image}
                        alt={`${country.name} flag`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover/card:opacity-40"></div>
                    </div>
                  </div>
                  <div className="relative p-5">
                    <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover/card:opacity-100"></div>
                    <h3 className="relative text-center text-white transition-all group-hover/card:text-lg">
                      {country.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
