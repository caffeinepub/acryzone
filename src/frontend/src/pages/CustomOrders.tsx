import { InquiryForm } from "../components/InquiryForm";
import { useFadeIn } from "../hooks/useFadeIn";

export function CustomOrdersPage() {
  const ref = useFadeIn();

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 text-center bg-card">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase gold-text mb-4 font-body">
            Bespoke Service
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            Custom <span className="gold-text">Orders</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Every frame is crafted to your exact specifications. Share your
            vision and we'll bring it to life.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Form */}
      <section ref={ref} className="py-24 container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="fade-in mb-12">
            <div className="flex gap-8 mb-10">
              {[
                {
                  step: "01",
                  title: "Fill the Form",
                  desc: "Tell us your requirements",
                },
                {
                  step: "02",
                  title: "Get a Quote",
                  desc: "We'll contact you within 24h",
                },
                {
                  step: "03",
                  title: "Receive Your Frame",
                  desc: "Premium delivery to your door",
                },
              ].map((item) => (
                <div key={item.step} className="flex-1 text-center">
                  <p className="font-display text-3xl gold-text mb-1">
                    {item.step}
                  </p>
                  <p className="text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="gold-divider" />
          </div>

          <div className="fade-in stagger-1">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
