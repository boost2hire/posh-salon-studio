import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "10+ Years of Professional Experience",
  "Verified & Government Certified Salon",
  "Trusted by 750+ Happy Clients",
  "Premium International Products Used",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Text */}
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of
              <span className="gold-text-gradient"> Beauty & Trust</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Posh Salon Spa & Makeup Studio, we believe every individual
              deserves to feel their absolute best. Located in the heart of Sector 70,
              Mohali, our team of certified professionals has been transforming looks
              and elevating confidence for over a decade. From bridal makeovers to
              rejuvenating Thai massages, we combine artistry with premium products
              to deliver an experience that&apos;s truly posh.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "750+", label: "Happy Clients" },
              { number: "15+", label: "Expert Stylists" },
              { number: "4.5★", label: "Google Rating" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors duration-300"
              >
                <p className="font-serif text-3xl md:text-4xl font-bold gold-text-gradient mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
