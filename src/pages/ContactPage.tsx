import { useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
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
import {
  getWhatsAppBookingUrl,
  getWhatsAppFormUrl,
  PHONE_NUMBER,
  PHONE_LINK,
} from "@/lib/whatsapp";

const serviceOptions = [
  "Hair Styling",
  "Hair Cut",
  "Hair Colour",
  "Hair Treatment",
  "Facial",
  "D-Tan",
  "Bleach",
  "Cleanup",
  "Bridal Makeup",
  "Party Makeup",
  "Engagement Makeup",
  "Thai Massage",
  "Body Massage",
  "Relaxation Therapy",
  "Beard Styling",
  "Shaving",
  "Hair Spa",
  "Complete Beauty Package",
];

const ContactPage = () => {
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
    <main className="pt-20">
      {/* Page Header */}
      <section className="section-padding bg-card/30 text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
          Get in Touch
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">
          Contact Us
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Ready to book your visit? Reach out via phone, WhatsApp, or fill in the form below.
        </p>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Left - Info + Map */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Visit Us
                </h3>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">Address</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      SCO 529, Near Central Bank,
                      <br />
                      Gopal Sweets, Sector 70,
                      <br />
                      Mohali, Chandigarh – 160071
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">Phone</p>
                    <a href={PHONE_LINK}>
                      <Button variant="outline" size="sm">
                        <Phone className="h-3.5 w-3.5" />
                        {PHONE_NUMBER}
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">WhatsApp</p>
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="whatsapp" size="sm">
                        <MessageCircle className="h-3.5 w-3.5" />
                        Chat with Us
                      </Button>
                    </a>
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

                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <CheckCircle className="h-4 w-4 text-whatsapp" />
                  <span className="text-sm font-medium text-foreground">Available Now</span>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden border border-border h-72">
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
            <div className="md:col-span-3">
              <div className="bg-card border border-border rounded-lg p-6 md:p-10">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Book Your Appointment
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill in the details below and we'll connect with you on WhatsApp to confirm.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Name *
                      </label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Phone *
                      </label>
                      <Input
                        placeholder="Your phone number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Service *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(val) =>
                          setFormData({ ...formData, service: val })
                        }
                      >
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select a service" />
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
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Preferred Date *
                      </label>
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
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Message (optional)
                    </label>
                    <Textarea
                      placeholder="Any special requests or additional details..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="bg-background border-border"
                    />
                  </div>

                  <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle className="h-5 w-5" />
                    Submit & Book via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
