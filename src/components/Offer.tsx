import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";

const Offer = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="relative rounded-2xl overflow-hidden gold-border-glow border border-primary/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-card" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(40 45% 58%) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }} />

          <div className="relative p-8 md:p-14 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">Limited Time Offer</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Complete Beauty &<br />
              <span className="gold-text-gradient">Spa Package</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto">
              Hair &nbsp;•&nbsp; Facial &nbsp;•&nbsp; Massage &nbsp;•&nbsp; Mani/Pedi
            </p>

            <div className="mb-8">
              <span className="text-muted-foreground line-through text-lg mr-3">₹5999</span>
              <span className="font-serif text-5xl md:text-6xl font-bold gold-text-gradient">
                ₹2999/-
              </span>
            </div>

            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="xl">
                Book This Package
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
