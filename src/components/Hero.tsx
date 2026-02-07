import { Star, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppBookingUrl, PHONE_LINK } from "@/lib/whatsapp";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Posh Salon Spa luxury interior with gold-framed mirrors and styling stations"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className="text-primary font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to
        </p>

        <h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-4 opacity-0 animate-fade-in-up text-shadow-lg"
          style={{ animationDelay: "0.4s" }}
        >
          Posh Salon
          <span className="block gold-text-gradient">Spa & Makeup Studio</span>
        </h1>

        <p
          className="text-muted-foreground text-base md:text-lg tracking-[0.15em] mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Hair &nbsp;•&nbsp; Spa &nbsp;•&nbsp; Bridal &nbsp;•&nbsp; Makeup &nbsp;•&nbsp; Massage
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </Button>
          </a>
          <a href={PHONE_LINK}>
            <Button variant="outline" size="xl">
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Rating */}
        <div
          className="flex items-center justify-center gap-2 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i <= 4
                    ? "fill-primary text-primary"
                    : "fill-primary/50 text-primary/50"
                }`}
              />
            ))}
          </div>
          <span className="text-foreground font-medium text-sm">4.5 Rating</span>
          <span className="text-muted-foreground text-sm">|</span>
          <span className="text-muted-foreground text-sm">750+ Happy Clients</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
