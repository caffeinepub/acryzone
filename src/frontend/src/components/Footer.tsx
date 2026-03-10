import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/acryzone-logo-transparent.dim_400x120.png"
              alt="AcryZone"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium acrylic UV print frames for home decor and gifts. Modern,
              durable, luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:gold-text transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:gold-text transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase gold-text mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Gallery", to: "/gallery" },
                { label: "Custom Orders", to: "/custom-orders" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:gold-text transition-colors tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase gold-text mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>WhatsApp: +1 234 567 890</li>
              <li>Email: hello@acryzone.com</li>
              <li>Hours: Mon–Sat 9am–7pm</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {year} AcryZone. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:gold-text transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
