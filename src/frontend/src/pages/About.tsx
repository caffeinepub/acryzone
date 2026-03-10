import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const VALUES = [
  {
    title: "Quality First",
    desc: "We source only premium grade acrylic and use industry-leading UV print technology for results that surpass expectations.",
  },
  {
    title: "Custom Crafted",
    desc: "Every piece is made to order, ensuring each frame is uniquely yours with dimensions and finishes tailored perfectly.",
  },
  {
    title: "Artistic Excellence",
    desc: "Our design team blends modern aesthetics with timeless elegance to create frames that are truly works of art.",
  },
  {
    title: "Customer Delight",
    desc: "We believe in building lasting relationships, providing dedicated support from concept to delivery.",
  },
];

export function AboutPage() {
  const heroRef = useFadeIn();
  const storyRef = useFadeIn();
  const valuesRef = useFadeIn();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/gallery-wall.dim_1200x700.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="fade-in text-xs tracking-[0.3em] uppercase gold-text mb-4 font-body">
            Our Story
          </p>
          <h1 className="fade-in stagger-1 text-5xl md:text-7xl font-display font-bold">
            About <span className="gold-text">AcryZone</span>
          </h1>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Story */}
      <section ref={storyRef} className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/assets/generated/gallery-wall.dim_1200x700.jpg"
                alt="AcryZone craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="fade-in text-xs tracking-[0.3em] uppercase gold-text mb-4 font-body">
              Who We Are
            </p>
            <h2 className="fade-in stagger-1 text-4xl md:text-5xl font-display font-bold mb-6">
              Premium Acrylic,
              <br />
              <span className="gold-text">Extraordinary Art</span>
            </h2>
            <p className="fade-in stagger-2 text-muted-foreground leading-relaxed mb-6">
              AcryZone was born from a passion for bringing gallery-quality art
              into everyday spaces. We believe that the frames you choose are as
              important as the art within them — they set the tone for your
              entire space.
            </p>
            <p className="fade-in stagger-3 text-muted-foreground leading-relaxed mb-8">
              Using state-of-the-art UV printing technology and premium optical
              acrylic, we craft frames that are not just holders of memories but
              works of art in their own right. From Islamic calligraphy to
              modern photography, every piece we create carries the hallmark of
              AcryZone quality.
            </p>
            <div className="fade-in stagger-4 flex gap-12">
              <div>
                <p className="text-4xl font-display gold-text font-bold">
                  500+
                </p>
                <p className="text-muted-foreground text-sm tracking-wide">
                  Happy Clients
                </p>
              </div>
              <div>
                <p className="text-4xl font-display gold-text font-bold">5+</p>
                <p className="text-muted-foreground text-sm tracking-wide">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-display gold-text font-bold">
                  1000+
                </p>
                <p className="text-muted-foreground text-sm tracking-wide">
                  Frames Crafted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3 font-body">
              What Drives Us
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className={`fade-in stagger-${i + 1} p-8 border border-border bg-background card-hover`}
              >
                <div className="w-8 h-1 gold-bg mb-6" />
                <h3 className="font-display text-2xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to <span className="gold-text">Transform</span> Your Space?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Explore our products or place a custom order today.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-10 py-4 gold-bg text-background font-body font-semibold tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
          >
            View Products <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
