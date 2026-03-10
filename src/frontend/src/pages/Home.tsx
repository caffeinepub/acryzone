import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Gem, Shield, Zap } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const FEATURED_PRODUCTS = [
  {
    name: "Premium Acrylic UV Print",
    desc: "Vibrant UV prints on premium grade acrylic",
    img: "/assets/generated/product-uv-print.dim_600x600.jpg",
  },
  {
    name: "Islamic Wall Art",
    desc: "Elegant Arabic calligraphy and geometric art",
    img: "/assets/generated/product-islamic.dim_600x600.jpg",
  },
  {
    name: "3D Acrylic Frames",
    desc: "Layered depth for stunning three-dimensional effect",
    img: "/assets/generated/product-3d-acrylic.dim_600x600.jpg",
  },
];

const FEATURES = [
  {
    icon: Gem,
    title: "Premium Materials",
    desc: "High-grade optical acrylic for crystal-clear clarity",
  },
  {
    icon: Zap,
    title: "UV Print Technology",
    desc: "Fade-resistant UV inks that last generations",
  },
  {
    icon: Shield,
    title: "Built to Last",
    desc: "Scratch-resistant coating for everyday durability",
  },
  {
    icon: Award,
    title: "Custom Crafted",
    desc: "Every frame tailored to your exact specifications",
  },
];

const GALLERY_IMAGES = [
  "/assets/generated/product-uv-print.dim_600x600.jpg",
  "/assets/generated/product-islamic.dim_600x600.jpg",
  "/assets/generated/product-3d-acrylic.dim_600x600.jpg",
  "/assets/generated/product-home-decor.dim_600x600.jpg",
];

export function HomePage() {
  const heroRef = useFadeIn();
  const featuredRef = useFadeIn();
  const featuresRef = useFadeIn();
  const galleryRef = useFadeIn();

  return (
    <main>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/generated/hero-frame.dim_1200x700.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 40%, transparent, oklch(10% 0 0 / 0.7))",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="fade-in">
            <p className="text-xs tracking-[0.4em] uppercase gold-text mb-6 font-body">
              Luxury Acrylic Frames
            </p>
          </div>
          <h1 className="fade-in stagger-1 text-5xl sm:text-6xl md:text-8xl font-display font-bold leading-none mb-6">
            Where Art
            <br />
            <span className="gold-text">Meets Precision</span>
          </h1>
          <p className="fade-in stagger-2 text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Handcrafted premium acrylic UV print frames that transform your
            walls into gallery-worthy statements.
          </p>
          <div className="fade-in stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-2 px-8 py-4 gold-bg text-background font-body font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
            >
              Explore Collection <ArrowRight size={16} />
            </Link>
            <Link
              to="/custom-orders"
              className="inline-flex items-center gap-2 px-8 py-4 border gold-border text-foreground font-body font-semibold tracking-widest uppercase text-sm hover:gold-bg hover:text-background transition-all"
            >
              Custom Order
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-12 gold-bg opacity-60" />
        </div>
      </section>

      {/* Divider */}
      <div className="gold-divider" />

      {/* Featured Products */}
      <section ref={featuredRef} className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3 font-body">
            Our Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, i) => (
            <div
              key={product.name}
              className={`fade-in stagger-${i + 1} group border border-border bg-card overflow-hidden card-hover`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-body gold-text border-b border-current pb-1 hover:opacity-70 transition-opacity"
          >
            View All Products <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Why Choose Us */}
      <section ref={featuresRef} className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3 font-body">
              Why AcryZone
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Crafted for Perfection
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`fade-in stagger-${i + 1} text-center`}
              >
                <div className="w-14 h-14 mx-auto mb-5 border gold-border flex items-center justify-center">
                  <feature.icon className="gold-text" size={24} />
                </div>
                <h3 className="font-display text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Gallery Preview */}
      <section ref={galleryRef} className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3 font-body">
            Inspiration
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Gallery Preview
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img}
              className={`fade-in stagger-${i + 1} aspect-square overflow-hidden group cursor-pointer`}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-body gold-text border-b border-current pb-1 hover:opacity-70 transition-opacity"
          >
            View Full Gallery <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <div className="gold-divider" />

      {/* CTA Banner */}
      <section className="py-24 text-center bg-card">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase gold-text mb-4 font-body">
            Bespoke Creations
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Your Vision, <span className="gold-text">Our Craft</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Every frame is made to order. Tell us your vision and we'll bring it
            to life with premium acrylic artistry.
          </p>
          <Link
            to="/custom-orders"
            className="inline-flex items-center gap-2 px-10 py-4 gold-bg text-background font-body font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
          >
            Start Your Custom Order <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
