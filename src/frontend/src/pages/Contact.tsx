import { Clock, Mail, MessageCircle } from "lucide-react";
import { InquiryForm } from "../components/InquiryForm";
import { useFadeIn } from "../hooks/useFadeIn";

const CONTACT_INFO = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+92 961 845 4300",
    href: "https://wa.me/9618454300",
    desc: "Chat with us directly",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@acryzone.com",
    href: "mailto:hello@acryzone.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Sat: 9am – 7pm",
    href: null,
    desc: "We're here to help",
  },
];

export function ContactPage() {
  const headerRef = useFadeIn();
  const formRef = useFadeIn();

  return (
    <main className="pt-20">
      {/* Header */}
      <section ref={headerRef} className="py-24 text-center bg-card">
        <div className="container mx-auto px-6">
          <p className="fade-in text-xs tracking-[0.3em] uppercase gold-text mb-4 font-body">
            Reach Out
          </p>
          <h1 className="fade-in stagger-1 text-5xl md:text-7xl font-display font-bold">
            Contact <span className="gold-text">Us</span>
          </h1>
          <p className="fade-in stagger-2 text-muted-foreground mt-6 max-w-xl mx-auto">
            We'd love to hear from you. Reach out through any of our channels or
            fill out the form below.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Contact Info Cards */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {CONTACT_INFO.map((info) => (
            <div
              key={info.title}
              className="p-8 border border-border bg-card text-center card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-5 border gold-border flex items-center justify-center">
                <info.icon className="gold-text" size={20} />
              </div>
              <h3 className="font-display text-lg mb-1">{info.title}</h3>
              <p className="text-muted-foreground text-xs mb-3">{info.desc}</p>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-sm gold-text hover:opacity-70 transition-opacity"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-sm text-foreground">{info.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="gold-divider" />

      {/* Form */}
      <section ref={formRef} className="py-24 container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="fade-in text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3 font-body">
              Get In Touch
            </p>
            <h2 className="text-4xl font-display font-bold">
              Send Us a Message
            </h2>
          </div>
          <div className="fade-in stagger-1">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-64 bg-card border-t border-border flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-3 border gold-border flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-5 h-5 gold-text"
              aria-hidden="true"
            >
              <title>Location</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <p className="text-muted-foreground text-sm tracking-wide">
            Location Map
          </p>
        </div>
      </section>
    </main>
  );
}
