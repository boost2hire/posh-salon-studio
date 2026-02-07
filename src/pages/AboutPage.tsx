import { CheckCircle2, Award, Heart, Users, Gem } from "lucide-react";
import heroSalon from "@/assets/hero-salon.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every service we offer, continuously upgrading our skills and techniques.",
  },
  {
    icon: Heart,
    title: "Client First",
    description: "Every client is unique. We listen, understand, and customize our services to match your vision.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're proud to be part of the Mohali community, serving generations of families with love and care.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "We use only international-grade products from trusted brands to ensure the best results.",
  },
];

const AboutPage = () => {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="section-padding bg-card/30 text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
          Our Story
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">
          About Us
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Discover the passion and people behind Posh Salon Spa & Makeup Studio.
        </p>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src={heroSalon}
                alt="Inside Posh Salon Spa luxury interior"
                className="w-full h-80 md:h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Decade of
                <span className="gold-text-gradient"> Beauty Excellence</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded over 10 years ago, Posh Salon Spa & Makeup Studio has grown
                from a small beauty parlour into one of Mohali's most trusted and
                premium salon destinations. Our journey began with a simple belief:
                everyone deserves to look and feel their best.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Located in the vibrant Sector 70 of Mohali, we offer a comprehensive
                range of beauty and wellness services — from hair transformations and
                bridal makeovers to rejuvenating Thai massages and advanced skin care
                treatments. Our team of 15+ certified professionals is dedicated to
                delivering an experience that's as luxurious as it is personal.
              </p>
              <ul className="space-y-3">
                {[
                  "10+ Years of Trusted Service",
                  "750+ Satisfied Clients & Counting",
                  "Rated 4.5★ on Google",
                  "Government Verified & Certified",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Mission & Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            To provide world-class beauty and wellness experiences that empower
            our clients with confidence, using the finest techniques and products
            in a warm, hygienic environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-left hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our dedicated team of 15+ certified beauty professionals brings together
            expertise in hair artistry, bridal styling, skincare, and spa therapy.
            Each member undergoes regular training to stay at the forefront of beauty
            trends and techniques.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Led by our founder, the team shares a common passion for making every
            client feel special and confident. Whether it's a quick trim or a
            complete bridal transformation, you're in expert hands.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
