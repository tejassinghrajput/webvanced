/** Central source of truth for all contact information used throughout the site. */
export const CONTACT = {
  email: {
    address: "webvance.tech@gmail.com",
    href: "mailto:webvance.tech@gmail.com",
    display: "webvance.tech@gmail.com",
  },
  phone: {
    number: "+917652050611",
    href: "tel:+917652050611",
    display: "+91 76520 50611",
  },
  whatsapp: {
    number: "+91762050611",
    href: "https://wa.me/91762050611",
    display: "+91 762050611",
  },
  location: {
    address: "Caddie Commercial Tower, Novotel Pullman, Hospitality District, New Delhi, Delhi, 110037, IND",
    short: "New Delhi, Delhi 110037",
    mapsHref: "https://maps.google.com/?q=Caddie+Commercial+Tower+Novotel+Pullman+Hospitality+District+New+Delhi+Delhi+110037",
  },
} as const;