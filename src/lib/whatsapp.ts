const WHATSAPP_NUMBER = "919914399148";

export const getWhatsAppBookingUrl = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi, I want to book an appointment"
  )}`;

export const getWhatsAppFormUrl = (data: {
  name: string;
  phone: string;
  service: string;
  date: string;
  message?: string;
}) => {
  const text = `Hi, I want to book ${data.service} on ${data.date}.\nName: ${data.name}\nPhone: ${data.phone}${
    data.message ? `\nMessage: ${data.message}` : ""
  }`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const PHONE_NUMBER = "+91 99143 99148";
export const PHONE_LINK = "tel:+919914399148";
