import { Link } from "@tanstack/react-router";
import { ArrowRight, Loader2 } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";
import { useListProducts } from "../hooks/useQueries";

const PRODUCT_IMAGES: Record<string, string> = {
  "Premium Acrylic UV Print Frames":
    "/assets/generated/product-uv-print.dim_600x600.jpg",
  "Islamic Wall Art Frames":
    "/assets/generated/product-islamic.dim_600x600.jpg",
  "Custom Photo Frames":
    "/assets/generated/product-custom-photo.dim_600x600.jpg",
  "3D Acrylic Frames": "/assets/generated/product-3d-acrylic.dim_600x600.jpg",
  "Home Decor Acrylic Frames":
    "/assets/generated/product-home-decor.dim_600x600.jpg",
};

const FALLBACK_PRODUCTS = [
  {
    name: "Premium Acrylic UV Print Frames",
    description:
      "Vivid UV printing on optical-grade acrylic for stunning clarity and color depth. Perfect for modern interiors.",
  },
  {
    name: "Islamic Wall Art Frames",
    description:
      "Elegant Arabic calligraphy and geometric Islamic art on premium acrylic with gold accent details.",
  },
  {
    name: "Custom Photo Frames",
    description:
      "Turn your cherished memories into stunning wall art with our bespoke photo frame service.",
  },
  {
    name: "3D Acrylic Frames",
    description:
      "Layered acrylic panels create breathtaking three-dimensional depth for truly show-stopping wall pieces.",
  },
  {
    name: "Home Decor Acrylic Frames",
    description:
      "Curated home decor collections that complement any interior design style, from minimalist to maximalist.",
  },
];

export function ProductsPage() {
  const { data: products, isLoading } = useListProducts();
  const ref = useFadeIn();
  const displayProducts =
    products && products.length > 0 ? products : FALLBACK_PRODUCTS;
  const ocids = [
    "product.item.1",
    "product.item.2",
    "product.item.3",
    "product.item.4",
    "product.item.5",
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 text-center bg-card">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase gold-text mb-4 font-body">
            Our Range
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            Our <span className="gold-text">Products</span>
          </h1>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Products Grid */}
      <section ref={ref} className="py-24 container mx-auto px-6">
        {isLoading ? (
          <div className="flex items-center justify-center py-24 gap-4 text-muted-foreground">
            <Loader2 className="animate-spin gold-text" size={24} />
            <span>Loading collection...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProducts.map((product, i) => (
              <div
                key={product.name}
                data-ocid={ocids[i] ?? `product.item.${i + 1}`}
                className={`fade-in stagger-${Math.min(i + 1, 5)} group border border-border bg-card overflow-hidden card-hover`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={
                      PRODUCT_IMAGES[product.name] ??
                      "/assets/generated/product-uv-print.dim_600x600.jpg"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="w-6 h-0.5 gold-bg mb-4" />
                  <h3 className="font-display text-2xl mb-3">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <Link
                    to="/custom-orders"
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-body gold-text border-b border-current pb-0.5 hover:opacity-70 transition-opacity"
                  >
                    Order This <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="gold-divider" />

      <section className="py-24 text-center bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-6">
            Don't See What You Need?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We specialize in custom orders. Any size, any design, any vision.
          </p>
          <Link
            to="/custom-orders"
            className="inline-flex items-center gap-2 px-10 py-4 gold-bg text-background font-body font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
          >
            Custom Order <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
