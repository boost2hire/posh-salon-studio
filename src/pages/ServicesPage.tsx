import { Scissors, Palette, Sparkles, Heart, Crown, Flower2, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import hairStyling from "@/assets/hair-styling.jpg";
import hairCut from "@/assets/hair-cut.jpg";
import hairColor from "@/assets/hair-color.jpg";
import facialSkincare from "@/assets/facial-skincare.jpg";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import thaiMassage from "@/assets/thai-massage.jpg";

const serviceCategories = [
  {
    title: "Hair",
    services: [
      { name: "Hair Styling", image: hairStyling, icon: Sparkles },
      { name: "Hair Cut", image: hairCut, icon: Scissors },
      { name: "Hair Colour", image: hairColor, icon: Palette },
      { name: "Hair Treatment", image: hairStyling, icon: Star },
    ],
  },
  {
    title: "Skin Care",
    services: [
      { name: "Facial", image: facialSkincare, icon: Heart },
      { name: "D-Tan", image: facialSkincare, icon: Sparkles },
      { name: "Bleach", image: facialSkincare, icon: Star },
      { name: "Cleanup", image: facialSkincare, icon: Heart },
    ],
  },
  {
    title: "Bridal & Party",
    services: [
      { name: "Bridal Makeup", image: bridalMakeup, icon: Crown },
      { name: "Party Makeup", image: bridalMakeup, icon: Sparkles },
      { name: "Engagement Makeup", image: bridalMakeup, icon: Crown },
    ],
  },
  {
    title: "Spa & Massage",
    services: [
      { name: "Thai Massage", image: thaiMassage, icon: Flower2 },
      { name: "Body Massage", image: thaiMassage, icon: Flower2 },
      { name: "Relaxation Therapy", image: thaiMassage, icon: Heart },
    ],
  },
  {
    title: "Grooming",
    services: [
      { name: "Beard Styling", image: hairCut, icon: User },
      { name: "Shaving", image: hairCut, icon: Scissors },
      { name: "Hair Spa", image: hairStyling, icon: Sparkles },
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="section-padding bg-card/30 text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
          What We Offer
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">
          Our Services
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Explore our comprehensive range of premium beauty, hair, and wellness services.
        </p>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`section-padding ${catIndex % 2 === 0 ? "bg-background" : "bg-card/30"}`}
        >
          <div className="container mx-auto">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-10 text-center">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.name} at Posh Salon`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h3 className="font-serif text-base font-semibold text-foreground">
                      {service.name}
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
          </div>
        </section>
      ))}
    </main>
  );
};

export default ServicesPage;
