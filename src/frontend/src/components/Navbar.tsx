import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home_link" },
  { label: "About", to: "/about", ocid: "nav.about_link" },
  { label: "Products", to: "/products", ocid: "nav.products_link" },
  { label: "Gallery", to: "/gallery", ocid: "nav.gallery_link" },
  {
    label: "Custom Orders",
    to: "/custom-orders",
    ocid: "nav.custom_orders_link",
  },
  { label: "Contact", to: "/contact", ocid: "nav.contact_link" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (prevPathRef.current !== location.pathname) {
    prevPathRef.current = location.pathname;
    setOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/generated/acryzone-logo-transparent.dim_400x120.png"
            alt="AcryZone"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                data-ocid={link.ocid}
                className={`text-sm tracking-widest uppercase font-body transition-colors duration-300 hover:gold-text ${
                  location.pathname === link.to
                    ? "gold-text"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/custom-orders"
            className="px-5 py-2 text-xs tracking-widest uppercase font-body font-semibold gold-bg text-background hover:opacity-90 transition-opacity"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          data-ocid="nav.mobile_toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground hover:gold-text transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass border-t border-border">
          <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`block text-sm tracking-widest uppercase font-body py-2 transition-colors hover:gold-text ${
                    location.pathname === link.to
                      ? "gold-text"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/custom-orders"
                className="block w-full text-center px-5 py-3 text-xs tracking-widest uppercase font-body font-semibold gold-bg text-background"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
