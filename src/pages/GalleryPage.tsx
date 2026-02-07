import { useState } from "react";
import { X } from "lucide-react";
import hairStyling from "@/assets/hair-styling.jpg";
import hairCut from "@/assets/hair-cut.jpg";
import hairColor from "@/assets/hair-color.jpg";
import facialSkincare from "@/assets/facial-skincare.jpg";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import thaiMassage from "@/assets/thai-massage.jpg";
import heroSalon from "@/assets/hero-salon.jpg";

const galleryCategories = [
  {
    title: "Bridal Looks",
    images: [
      { src: bridalMakeup, alt: "Bridal makeup by Posh Salon" },
      { src: bridalMakeup, alt: "Bridal beauty look" },
      { src: bridalMakeup, alt: "Engagement makeup" },
    ],
  },
  {
    title: "Hair Styling",
    images: [
      { src: hairStyling, alt: "Professional updo hairstyle" },
      { src: hairCut, alt: "Professional haircut" },
      { src: hairColor, alt: "Hair coloring result" },
    ],
  },
  {
    title: "Spa Therapy",
    images: [
      { src: thaiMassage, alt: "Thai massage therapy" },
      { src: facialSkincare, alt: "Luxury facial treatment" },
      { src: heroSalon, alt: "Posh Salon spa interior" },
    ],
  },
  {
    title: "Our Salon",
    images: [
      { src: heroSalon, alt: "Posh Salon luxury interior" },
      { src: heroSalon, alt: "Styling stations" },
    ],
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="section-padding bg-card/30 text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
          Our Work
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">
          Gallery
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A showcase of our finest work — from bridal transformations to relaxing spa sessions.
        </p>
      </section>

      {/* Gallery Sections */}
      {galleryCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`section-padding ${catIndex % 2 === 0 ? "bg-background" : "bg-card/30"}`}
        >
          <div className="container mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              {category.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {category.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-foreground font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
          />
        </div>
      )}
    </main>
  );
};

export default GalleryPage;
