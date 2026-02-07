import { Link } from "react-router-dom";
import { Scissors, Palette, Sparkles, Heart, Crown, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import hairStyling from "@/assets/hair-styling.jpg";
import hairCut from "@/assets/hair-cut.jpg";
import hairColor from "@/assets/hair-color.jpg";
import facialSkincare from "@/assets/facial-skincare.jpg";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import thaiMassage from "@/assets/thai-massage.jpg";

const services = [
  { title: "Hair Styling", icon: Sparkles, image: hairStyling },
  { title: "Hair Cut", icon: Scissors, image: hairCut },
  { title: "Hair Colour", icon: Palette, image: hairColor },
  { title: "Facial & Skin Care", icon: Heart, image: facialSkincare },
  { title: "Bridal Makeup", icon: Crown, image: bridalMakeup },
  { title: "Thai Massage", icon: Flower2, image: thaiMassage },
];

const Services = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From hair transformations to bridal glam, experience premium beauty services
            crafted for you.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 card-shine"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service at Posh Salon`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" size="sm">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
