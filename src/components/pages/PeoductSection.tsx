import { useState } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Star, Package, Shield } from "lucide-react";
import { ImageWithFallback } from "../core/ImageWithFallBack";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import type { TProduct } from "@/types/product.type";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import type { TCategory } from "@/types/category.type";

export function PeoductSection() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { data: productData } = useGetAllProductsQuery(
    selectedCategory ? { category_id: selectedCategory } : undefined
  );
  const { data: categoryData } = useGetAllCategoriesQuery("");
  const rawCategories: TCategory[] = categoryData?.data?.categories || [];
  const categories: TCategory[] = [
    {
      id: "",
      name: "All",
      created_at: "",
    },
    ...rawCategories,
  ];

  const products: TProduct[] = productData?.data?.products || [];

  const handleReadMore = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  return (
    <section id="products" className="relative py-24 ">
      <div className="mx-auto max-w-7xl">
        {/* Main Products Box */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-linear-to-br from-white/10 via-white/5 to-white/10 p-8 backdrop-blur-2xl sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-linear-to-br from-purple-500/10 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-linear-to-tr from-blue-500/10 to-transparent blur-3xl"></div>

          <div className="relative">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <span className="mb-6 inline-block rounded-full border border-white/40 bg-linear-to-r from-white/15 to-white/5 px-6 py-3 text-sm tracking-widest text-white backdrop-blur-xl">
                OUR COLLECTION
              </span>
              <h2 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
                <span className="block bg-linear-to-r from-white via-white to-white/80 bg-clip-text font-serif italic text-transparent">
                  Curated Luxury
                </span>
                <span className="mt-2 block bg-linear-to-r from-white/80 via-white to-white bg-clip-text font-serif italic text-transparent">
                  For Every Occasion
                </span>
              </h2>
            </div>

            {/* Enhanced Category Filter */}
            <div className="mb-16 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group/btn relative overflow-hidden rounded-full border px-8 py-3 text-sm tracking-wide transition-all backdrop-blur-xl ${
                    selectedCategory == category.id
                      ? "border-white/60 bg-white/30 text-white shadow-lg shadow-white/20"
                      : "border-white/30 bg-white/10 text-white/80 hover:border-white/50 hover:bg-white/20"
                  }`}
                >
                  <span className="relative z-10">{category.name}</span>
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 bg-linear-to-r from-white/10 via-white/20 to-white/10"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Enhanced Products Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products?.map((product, index) => (
                <div
                  key={product.id}
                  className="group/card animate-scale-in overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Product Image */}
                  <div className="relative aspect-4:4 overflow-hidden">
                    <ImageWithFallback
                      src={product?.thumbnail}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"></div>

                    {/* Wishlist button */}
                    

                    {/* Category badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs tracking-wider text-white backdrop-blur-xl">
                      {product?.category?.name}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="mb-3 text-xl text-white transition-all group-hover/card:text-2xl">
                        {product.name}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                        className="text-sm leading-relaxed text-white/80 line-clamp-2"
                      ></p>
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
            {/* <div className="mt-16 text-center">
              <Button className="group/btn relative overflow-hidden rounded-full border-2 border-white/40 bg-white/20 px-16 py-7 text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-white/60 hover:bg-white/30 hover:shadow-2xl hover:shadow-white/20">
                <span className="relative z-10">View All Products</span>
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover/btn:opacity-100"></div>
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Product Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-7xl overflow-y-auto border border-gray-200 bg-white z-100">
          {selectedProduct && (
            <div className="grid gap-8 md:grid-cols-2">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={selectedProduct.thumbnail}
                  alt={selectedProduct.name}
                  className="max-h-[500px] w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/60 px-4 py-2 text-xs tracking-wider text-white backdrop-blur-xl">
                  {selectedProduct?.category?.name}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                <DialogHeader className="mb-6">
                  <DialogTitle className="font-serif text-3xl italic text-gray-900">
                    {selectedProduct?.name}
                  </DialogTitle>
                  <DialogDescription className="mt-4 text-base leading-relaxed text-gray-600">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedProduct.description,
                      }}
                    ></div>
                  </DialogDescription>
                </DialogHeader>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="mb-4 text-sm tracking-wider text-gray-900">
                    KEY FEATURES
                  </h4>
                  {/* <div className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Star className="mt-0.5 h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div> */}
                </div>

                {/* Trust Badges */}
                <div className="mt-6 flex items-center justify-center gap-6 border-t border-gray-200 pt-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Shield className="h-6 w-6 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      Authenticity
                      <br />
                      Guaranteed
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Package className="h-6 w-6 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      Premium
                      <br />
                      Packaging
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Star className="h-6 w-6 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      Expert
                      <br />
                      Curated
                    </span>
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
