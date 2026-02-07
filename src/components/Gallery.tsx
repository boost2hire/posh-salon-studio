import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hairStyling from "@/assets/hair-styling.jpg";
import hairCut from "@/assets/hair-cut.jpg";
import hairColor from "@/assets/hair-color.jpg";
import facialSkincare from "@/assets/facial-skincare.jpg";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import thaiMassage from "@/assets/thai-massage.jpg";
import heroSalon from "@/assets/hero-salon.jpg";

const galleryImages = [
  { src: bridalMakeup, alt: "Bridal makeup look by Posh Salon" },
  { src: hairStyling, alt: "Professional hair styling" },
  { src: heroSalon, alt: "Posh Salon interior" },
  { src: facialSkincare, alt: "Luxury facial treatment" },
  { src: hairColor, alt: "Hair coloring service" },
  { src: thaiMassage, alt: "Thai massage therapy" },
  { src: hairCut, alt: "Professional haircut" },
  { src: bridalMakeup, alt: "Bridal beauty look" },
];

const Gallery = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover the artistry and elegance we bring to every client.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 || index === 5
                  ? "row-span-2 h-64 md:h-full"
                  : "h-32 md:h-48"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500 flex items-center justify-center">
                <span className="text-foreground font-serif text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="outline" size="lg">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
