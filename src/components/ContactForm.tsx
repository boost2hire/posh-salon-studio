import { useState } from "react";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getWhatsAppFormUrl, PHONE_NUMBER, PHONE_LINK } from "@/lib/whatsapp";

const serviceOptions = [
  "Hair Styling",
  "Hair Cut",
  "Hair Colour",
  "Facial & Skin Care",
  "Bridal Makeup",
  "Party Makeup",
  "Thai Massage",
  "Body Massage",
  "Beard Styling",
  "Complete Beauty Package",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date) return;
    const url = getWhatsAppFormUrl(formData);
    window.open(url, "_blank");
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Book an Appointment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left - Contact Info + Map */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">Address</p>
                  <p className="text-muted-foreground text-sm">
                    SCO 529, Near Central Bank, Gopal Sweets,
                    <br />
                    Sector 70, Mohali, Chandigarh – 160071
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">Phone</p>
                  <a href={PHONE_LINK} className="text-primary text-sm hover:underline">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">WhatsApp</p>
                  <span className="text-muted-foreground text-sm">Available Now</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">Timings</p>
                  <p className="text-muted-foreground text-sm">
                    Mon – Sun: 10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://maps.google.com/maps?q=Posh+Salon+Spa+Sector+70+Mohali+Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Posh Salon Spa location on Google Maps"
              />
            </div>
          </div>

          {/* Right - Booking Form */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Book Your Visit
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Select
                  value={formData.service}
                  onValueChange={(val) =>
                    setFormData({ ...formData, service: val })
                  }
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Any message (optional)"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="bg-background border-border"
                />
              </div>
              <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
