import { Award, ShieldCheck, Sparkles, Crown } from "lucide-react";

const trustItems = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: ShieldCheck, label: "Certified Professionals" },
  { icon: Crown, label: "Thai Massage & Bridal Experts" },
  { icon: Sparkles, label: "Premium Products" },
];

const TrustBar = () => {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-6 md:py-8 px-4 border-r border-border last:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(2)]:border-r-border [&:nth-child(2)]:border-r-0 [&:nth-child(1)]:border-b [&:nth-child(2)]:border-b md:[&:nth-child(1)]:border-b-0 md:[&:nth-child(2)]:border-b-0 border-b-border"
            >
              <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm text-foreground/80 font-medium text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
