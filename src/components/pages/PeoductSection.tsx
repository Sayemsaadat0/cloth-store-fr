import { useState } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, ArrowRight, Star, Package, Shield } from "lucide-react";
import { ImageWithFallback } from "../core/ImageWithFallBack";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
// import { Button } from "./ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "./ui/dialog";

const categories = ["All", "Dresses", "Accessories", "Footwear", "Jewelry", "Outerwear"];

const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    category: "Dresses",
    shortDescription: "Elegant silk gown with hand-embroidered details",
    fullDescription: "This exquisite evening gown is crafted from the finest Italian silk, featuring intricate hand-embroidered details along the bodice. The flowing silhouette creates a timeless elegance perfect for formal occasions. Each piece is meticulously constructed by our master artisans in Paris.",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1709281961493-a9acb8558177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZHJlc3N8ZW58MXx8fHwxNzYyMjY1NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    material: "100% Italian Silk",
    designer: "Maison Laurent",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Midnight Blue", "Champagne", "Ruby Red"],
    features: ["Hand-embroidered details", "Invisible zipper closure", "Fully lined", "Dry clean only"],
  },
  {
    id: 2,
    name: "Designer Leather Handbag",
    category: "Accessories",
    shortDescription: "Handcrafted Italian leather with gold hardware",
    fullDescription: "A statement piece that combines timeless design with modern functionality. This handbag is handcrafted from premium Italian leather and features luxurious gold-tone hardware. The spacious interior includes multiple compartments for organization while maintaining its elegant silhouette.",
    price: "$3,299",
    image: "https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzYyMTkxMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    material: "Premium Italian Leather",
    designer: "Bella Couture",
    sizes: ["One Size"],
    colors: ["Black", "Cognac Brown", "Navy Blue"],
    features: ["Gold-tone hardware", "Multiple compartments", "Detachable shoulder strap", "Dust bag included"],
  },
  {
    id: 3,
    name: "Luxury Stiletto Heels",
    category: "Footwear",
    shortDescription: "Classic pointed-toe heels with crystal embellishments",
    fullDescription: "Step into luxury with these stunning stiletto heels featuring delicate crystal embellishments. The classic pointed-toe design is elevated with a modern twist, making them perfect for both day and evening wear. Cushioned insole ensures comfort throughout the day.",
    price: "$1,899",
    image: "https://images.unsplash.com/photo-1709282028322-35c1fb068ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lcyUyMGhlZWxzfGVufDF8fHx8MTc2MjIwMjcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    material: "Premium Leather & Crystals",
    designer: "Mystique Footwear",
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Nude", "Silver"],
    features: ["4-inch heel", "Crystal embellishments", "Cushioned insole", "Non-slip sole"],
  },
  {
    id: 4,
    name: "Diamond Pendant Necklace",
    category: "Jewelry",
    shortDescription: "18K white gold with certified diamond centerpiece",
    fullDescription: "An heirloom-quality piece featuring a brilliant-cut diamond set in 18K white gold. This timeless pendant necklace is perfect for everyday elegance or special occasions. Each diamond is certified and ethically sourced, ensuring the highest quality and standards.",
    price: "$5,499",
    image: "https://images.unsplash.com/photo-1652207788011-8d05ece7589f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGpld2Vscnl8ZW58MXx8fHwxNzYyMTYxMDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    material: "18K White Gold & Diamond",
    designer: "Lumière Jewelry",
    sizes: ["16 inches", "18 inches", "20 inches"],
    colors: ["White Gold"],
    features: ["Certified diamond", "18K white gold chain", "Secure lobster clasp", "Certificate of authenticity included"],
  },
  {
    id: 5,
    name: "Cashmere Winter Coat",
    category: "Outerwear",
    shortDescription: "Pure cashmere with minimalist tailored design",
    fullDescription: "Experience ultimate luxury with this pure cashmere coat. The minimalist design features expert tailoring that flatters every silhouette. Made from the finest Mongolian cashmere, this coat provides exceptional warmth while maintaining a lightweight feel. A versatile piece that transitions seamlessly from day to night.",
    price: "$4,199",
    image: "https://images.unsplash.com/photo-1546771515-3c353a3da013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0JTIwamFja2V0fGVufDF8fHx8MTc2MjIwMTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    material: "100% Mongolian Cashmere",
    designer: "Nordic Elegance",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Charcoal Gray"],
    features: ["Notched lapel", "Two side pockets", "Single-breasted", "Professional dry clean only"],
  },
  {
    id: 6,
    name: "Luxury Aviator Sunglasses",
    category: "Accessories",
    shortDescription: "Titanium frame with polarized UV protection lenses",
    fullDescription: "Iconic aviator style reimagined with modern materials and technology. These sunglasses feature lightweight titanium frames and premium polarized lenses offering 100% UV protection. The timeless design is complemented by subtle logo detailing and comes with a luxurious leather case.",
    price: "$899",
    image: "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzYyMjI1MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    material: "Titanium & Polarized Glass",
    designer: "Visionary Optics",
    sizes: ["Standard"],
    colors: ["Gold/Brown", "Silver/Gray", "Black/Green"],
    features: ["Polarized lenses", "100% UV protection", "Titanium frame", "Leather case included"],
  },
];

export function PeoductSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleReadMore = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  return (
    <section id="products" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Products Box */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-8 backdrop-blur-2xl sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl"></div>
          
          <div className="relative">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <span className="mb-6 inline-block rounded-full border border-white/40 bg-gradient-to-r from-white/15 to-white/5 px-6 py-3 text-sm tracking-widest text-white backdrop-blur-xl">
                OUR COLLECTION
              </span>
              <h2 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
                <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text font-serif italic text-transparent">
                  Curated Luxury
                </span>
                <span className="mt-2 block bg-gradient-to-r from-white/80 via-white to-white bg-clip-text font-serif italic text-transparent">
                  For Every Occasion
                </span>
              </h2>
            </div>

            {/* Enhanced Category Filter */}
            <div className="mb-16 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`group/btn relative overflow-hidden rounded-full border px-8 py-3 text-sm tracking-wide transition-all backdrop-blur-xl ${
                    selectedCategory === category
                      ? "border-white/60 bg-white/30 text-white shadow-lg shadow-white/20"
                      : "border-white/30 bg-white/10 text-white/80 hover:border-white/50 hover:bg-white/20"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  {selectedCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Enhanced Products Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group/card animate-scale-in overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"></div>
                    
                    {/* Wishlist button */}
                    <button className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/20 p-3 backdrop-blur-xl opacity-0 transition-all hover:scale-110 hover:bg-white/30 group-hover/card:opacity-100">
                      <Heart className="h-5 w-5 text-white" />
                    </button>

                    {/* Category badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs tracking-wider text-white backdrop-blur-xl">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="mb-3 text-xl text-white transition-all group-hover/card:text-2xl">
                        {product.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/80">
                        {product.shortDescription}
                      </p>
                    </div>
                    
                    <Button
                      onClick={() => handleReadMore(product)}
                      className="group/btn relative w-full overflow-hidden rounded-full border border-white/40 bg-white/20 px-6 py-3 text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-white/60 hover:bg-white/30 hover:shadow-lg hover:shadow-white/20"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Read More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 z-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover/btn:opacity-100"></div>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced View All Button */}
            <div className="mt-16 text-center">
              <Button className="group/btn relative overflow-hidden rounded-full border-2 border-white/40 bg-white/20 px-16 py-7 text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-white/60 hover:bg-white/30 hover:shadow-2xl hover:shadow-white/20">
                <span className="relative z-10">View All Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover/btn:opacity-100"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-7xl overflow-y-auto border border-gray-200 bg-white z-[100]">
          {selectedProduct && (
            <div className="grid gap-8 md:grid-cols-2">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-[500px] w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/60 px-4 py-2 text-xs tracking-wider text-white backdrop-blur-xl">
                  {selectedProduct.category}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                <DialogHeader className="mb-6">
                  <DialogTitle className="font-serif text-3xl italic text-gray-900">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="mt-4 text-base leading-relaxed text-gray-600">
                    {selectedProduct.fullDescription}
                  </DialogDescription>
                </DialogHeader>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="mb-4 text-sm tracking-wider text-gray-900">KEY FEATURES</h4>
                  <div className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Star className="mt-0.5 h-4 w-4 flex-shrink-0 fill-amber-400 text-amber-400" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>


                {/* Trust Badges */}
                <div className="mt-6 flex items-center justify-center gap-6 border-t border-gray-200 pt-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Shield className="h-6 w-6 text-gray-400" />
                    <span className="text-xs text-gray-500">Authenticity<br/>Guaranteed</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Package className="h-6 w-6 text-gray-400" />
                    <span className="text-xs text-gray-500">Premium<br/>Packaging</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Star className="h-6 w-6 text-gray-400" />
                    <span className="text-xs text-gray-500">Expert<br/>Curated</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
