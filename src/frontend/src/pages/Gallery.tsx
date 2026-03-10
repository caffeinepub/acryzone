import { useFadeIn } from "../hooks/useFadeIn";

const GALLERY_ITEMS = [
  {
    src: "/assets/generated/hero-frame.dim_1200x700.jpg",
    alt: "Premium acrylic frame hero",
    wide: true,
  },
  {
    src: "/assets/generated/product-uv-print.dim_600x600.jpg",
    alt: "UV Print Frame",
    wide: false,
  },
  {
    src: "/assets/generated/product-islamic.dim_600x600.jpg",
    alt: "Islamic Wall Art Frame",
    wide: false,
  },
  {
    src: "/assets/generated/product-custom-photo.dim_600x600.jpg",
    alt: "Custom Photo Frame",
    wide: false,
  },
  {
    src: "/assets/generated/product-3d-acrylic.dim_600x600.jpg",
    alt: "3D Acrylic Frame",
    wide: false,
  },
  {
    src: "/assets/generated/gallery-wall.dim_1200x700.jpg",
    alt: "Gallery wall installation",
    wide: true,
  },
  {
    src: "/assets/generated/product-home-decor.dim_600x600.jpg",
    alt: "Home Decor Frame",
    wide: false,
  },
];

const OCIDS = [
  "gallery.item.1",
  "gallery.item.2",
  "gallery.item.3",
  "gallery.item.4",
  "gallery.item.5",
  "gallery.item.6",
];

export function GalleryPage() {
  const ref = useFadeIn();

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 text-center bg-card">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase gold-text mb-4 font-body">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            Our <span className="gold-text">Gallery</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Browse our collection of premium acrylic frames, wall art, and
            custom creations.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Grid */}
      <section ref={ref} className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.src}
              data-ocid={OCIDS[i] ?? `gallery.item.${i + 1}`}
              className={`fade-in stagger-${Math.min(i + 1, 5)} relative overflow-hidden group cursor-pointer ${
                item.wide ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
              <div
                className="absolute inset-0 border border-transparent group-hover:border-gold transition-colors duration-500"
                style={{ borderColor: "var(--gold)" }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
