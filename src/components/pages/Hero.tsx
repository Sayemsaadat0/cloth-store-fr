// import { Button } from "./ui/button";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-center mt-16">
            {/* linear Overlay for better readability - aligned with navbar */}
            <div className="absolute inset-y-0 left-0 right-0">
                <div className="h-full mx-auto max-w-7xl rounded-2xl bg-linear-to-b from-black/50 via-black/30 to-transparent "></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl w-full p-4 sm:p-6 lg:p-8 text-center">
                {/* Seasonal Badge */}
                <div className="mb-8 inline-block animate-fade-in">
                    <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/30 bg-linear-to-r from-white/10 to-white/5 px-6 py-3 text-sm tracking-widest text-white backdrop-blur-xl transition-all hover:border-white/50 hover:from-white/20 hover:to-white/10">
                        <Sparkles className="h-4 w-4 animate-pulse" />
                        WINTER 2025 COLLECTION
                        <div className="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="mb-8 animate-fade-in-up text-5xl text-white drop-shadow-2xl sm:text-6xl lg:text-8xl" style={{ animationDelay: "0.1s" }}>
                    <span className="block bg-linear-to-r from-white via-white to-white/80 bg-clip-text font-serif italic tracking-wide text-transparent">
                        Where Elegance
                    </span>
                    <span className="block bg-linear-to-r from-white/80 via-white to-white bg-clip-text font-serif italic tracking-wide text-transparent">
                        Meets Artistry
                    </span>
                </h1>

                {/* Elegant Divider */}
                <div className="mx-auto mb-8 flex items-center justify-center gap-3" style={{ animationDelay: "0.2s" }}>
                    <div className="h-px w-12 bg-linear-to-r from-transparent to-white/40"></div>
                    <div className="h-1 w-1 rotate-45 bg-white/60"></div>
                    <div className="h-px w-12 bg-linear-to-r from-white/40 to-transparent"></div>
                </div>

                {/* Subheading */}
                <p className="mx-auto mb-12 max-w-2xl animate-fade-in-up text-lg leading-relaxed text-white/95 drop-shadow-lg sm:text-xl" style={{ animationDelay: "0.3s" }}>
                    Discover our curated collection of haute couture pieces that define modern luxury.
                    Each garment is a masterpiece of design, crafted for those who appreciate timeless style.
                </p>

                {/* CTA Buttons */}
                <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.4s" }}>
                    <Button
                        className="group relative w-full overflow-hidden rounded-full border border-white/40 bg-white/20 px-10 py-7 text-white backdrop-blur-xl transition-all hover:border-white/60 hover:bg-white/30 hover:shadow-2xl hover:shadow-white/20 sm:w-auto"
                    // asChild
                    >
                        <a href="#products" className="flex items-center gap-2">
                            <span className="relative z-10">Explore Collection</span>
                            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 z-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </a>
                    </Button>

                    <Button
                        className="group w-full overflow-hidden rounded-full border-2 border-white/40 bg-transparent px-10 py-7 text-white backdrop-blur-xl transition-all hover:border-white hover:bg-white/10 sm:w-auto"
                    // asChild
                    >
                        <a href="#membership" className="relative">
                            <span className="relative z-10">Join Élégance</span>
                            <div className="absolute inset-0 z-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </a>
                    </Button>
                </div>

                {/* Enhanced Stats */}
                <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <div className="group relative overflow-hidden rounded-none border-r border-white/20 px-4 transition-all hover:scale-105">
                        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative">
                            <div className="bg-linear-to-br from-white to-white/70 bg-clip-text text-4xl text-transparent drop-shadow-lg lg:text-5xl">500+</div>
                            <div className="mt-2 text-sm text-white/80 tracking-wide">Exclusive Pieces</div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-none border-r border-white/20 px-4 transition-all hover:scale-105">
                        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative">
                            <div className="bg-linear-to-br from-white to-white/70 bg-clip-text text-4xl text-transparent drop-shadow-lg lg:text-5xl">50+</div>
                            <div className="mt-2 text-sm text-white/80 tracking-wide">Designer Brands</div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-none px-4 transition-all hover:scale-105">
                        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative">
                            <div className="bg-linear-to-br from-white to-white/70 bg-clip-text text-4xl text-transparent drop-shadow-lg lg:text-5xl">100K+</div>
                            <div className="mt-2 text-sm text-white/80 tracking-wide">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
