import { UserCheck, ShieldCheck, IndianRupee, Zap } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Expert Stylists",
    description:
      "Our team of certified professionals brings years of experience and continuous training in the latest beauty trends.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Environment",
    description:
      "We maintain the highest standards of cleanliness and hygiene, using sterilized tools and disposable supplies.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "Premium services at competitive prices. We believe luxury beauty should be accessible to everyone.",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description:
      "We value your time. Our efficient team ensures quality results without unnecessary waiting.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Our Promise
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
