import { Link } from "react-router-dom";
import { Phone, MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppBookingUrl, PHONE_LINK, PHONE_NUMBER } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-primary">POSH</span>
              <span className="block text-xs text-muted-foreground tracking-[0.2em] uppercase">
                Salon & Spa
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Premium beauty and wellness services in the heart of Mohali. Your
              destination for luxury hair, spa, and bridal services.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-whatsapp hover:bg-whatsapp/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Hair Styling",
                "Bridal Makeup",
                "Facial & Skin Care",
                "Thai Massage",
                "Hair Colour",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Sector 70, Mohali, Chandigarh
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href={PHONE_LINK} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href={PHONE_LINK}>
                <Button variant="outline" size="sm">
                  <Phone className="h-3.5 w-3.5" />
                  Call
                </Button>
              </a>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="sm">
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 Posh Salon Spa & Makeup Studio. All Rights Reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Made by Piyush
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
