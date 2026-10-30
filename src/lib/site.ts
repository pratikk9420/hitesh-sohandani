/**
 * Single source of truth for XKINOVATE clinic details, navigation and
 * WhatsApp links. Update the contact block here to change the whole site.
 */

export const site = {
  name: "XKINOVATE",
  tagline: "AESTHETICS · SKIN · YOU",
  positioning: "Dermatology & Aesthetics",
  url: "https://www.xkinovate.com",
  address: {
    line1: "25-C, Juhu Supreme Shopping Centre, First Floor",
    line2: "Above Tewari Brothers, Gulmohar Road 9, Near Bar Stock Exchange, Near Reliance Digital",
    locality: "JVPD, Juhu",
    city: "Mumbai",
    postalCode: "400049",
    region: "Maharashtra",
    country: "IN",
    short: "JVPD, Juhu, Mumbai",
    full: "Xkinovate Aesthetic Clinic, 25-C, Juhu Supreme Shopping Centre, First Floor, Above Tewari Brothers, Gulmohar Road 9, Near Bar Stock Exchange, Near Reliance Digital, JVPD, Juhu 400049",
  },
  mapsUrl: "https://maps.app.goo.gl/nCPLkdMqjcvuJqY2A",
  phoneDisplay: "9820069116",
  phoneHref: "tel:+919820069116",
  email: "Xkinovate@Xkinovate.com",
  emailHref: "mailto:Xkinovate@Xkinovate.com",
  whatsappDisplay: "9967161718",
  whatsappNumber: "919967161718",
} as const;

export function whatsappLink(message?: string): string {
  const text =
    message ??
    "Hi Xkinovate, I would like to book a consultation.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function treatmentWhatsappLink(treatmentName: string): string {
  return whatsappLink(
    `Hi Xkinovate, I would like to know more about ${treatmentName} and book a consultation.`,
  );
}

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "The X Factor", to: "/the-x-factor" },
  { label: "Doctors", to: "/doctors" },
  { label: "Results", to: "/results" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Medical Disclaimer", to: "/medical-disclaimer" },
] as const;

export const medicalDisclaimer =
  "Information on this website is provided for general educational purposes and is not a substitute for an individual consultation, diagnosis or treatment plan. Treatment suitability varies between individuals. No information here should be interpreted as a guarantee of treatment outcome, and individual results can vary.";
