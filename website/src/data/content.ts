// ============================================================
// DADCAMP — Edit all site content here
// ============================================================

export const site = {
  title: "DADCAMP",
  description: "En uformell overnattingstur for fedre og barn ute i naturen. 1.–3. mai 2026, Aarholt-tunet.",
  lang: "nb",
  url: "https://dadcamp.no",
};

export const event = {
  name: "DADCAMP",
  tagline: "Bli med!",
  dates: "1.–3. mai 2026",
  dateShort: "1.–3. mai",
  location: "Aarholt-tunet",
  contactUrl: "https://spond.com/invite/LJACR",
};

export const spond = {
  url: "https://spond.com/invite/LJACR",
  label: "Bli med i Spond-gruppa",
  notice: "All kommunikasjon skjer via Spond — meld deg inn der for å bli holdt oppdatert.",
};

export const nav = [
  { label: "Hva?", href: "/#hva" },
  { label: "Program", href: "/#program" },
  { label: "Praktisk", href: "/#praktisk" },
  { label: "Sted", href: "/#sted" },
  { label: "Bli med", href: "https://spond.com/invite/LJACR" },
];

export const what = {
  heading: "Hva er DADCAMP?",
  body: `Fedre og barn, på et gårdsbruk i Vestfold. Vi setter leir, tenner bål og er til stede — uten agenda.`,
  highlights: ["Rusfritt", "Gratis å delta", "Du kan bli med på deler eller alt"],
};

export const program = {
  heading: "Program",
  note: "Du bestemmer selv om du er med på deler eller hele helgen.",
  days: [
    {
      day: "Fredag 1. mai",
      items: [
        { time: "kl 18.00", text: "Vi åpner helgen med burger — vi stiller i stand. Kom som du er." },
        { time: "kvelden", text: "Leir settes opp, bål tennes, kvelden er vår" },
      ],
    },
    {
      day: "Lørdag 2. mai",
      items: [
        { time: "dagen", text: "Fri lek, turer, fellesaktiviteter" },
        { time: "kvelden", text: "Matlaging og bål — ta med din egen mat" },
      ],
    },
    {
      day: "Søndag 3. mai",
      items: [
        { time: "formiddag", text: "Rydding og avreise i eget tempo" },
      ],
    },
  ],
};

export const practical = {
  heading: "Praktisk",
  sections: [
    {
      title: "Overnatting",
      icon: "🏕",
      body: "Gapahuker, hengekøyer eller telt — du velger selv. Ta med det du er komfortabel med.",
    },
    {
      title: "Mat",
      icon: "🍔",
      body: "Fredag er vi vertskap for burger. Resten av helgen tar alle med sin egen mat og drikke. Vi har plass til felles matlaging.",
    },
    {
      title: "Pris",
      icon: "✌",
      body: "Arrangementet er gratis. Det er mulig å bli betalende medlem — mer informasjon om det finner du i Spond.",
    },
  ],
};

export const venue = {
  name: "Aarholt-tunet",
  address: "Årholtveien 80, 3160 Stokke",
  mapsUrl: "https://maps.google.com/?q=Årholtveien+80,+3160+Stokke,+Norway",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d10.28!3d59.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDEzJzEyLjAiTiAxMMKwMTYnNDguMCJF!5e0!3m2!1sen!2sno!4v1234567890",
  // Use the real embed — update this URL if needed from Google Maps
  googleMapsEmbed: `https://maps.google.com/maps?q=%C3%85rholtveien+80%2C+3160+Stokke&output=embed`,
};

export const cta = {
  heading: "Bli med.",
  body: "En helg for fedre og barn. Aarholt-tunet, 1.–3. mai 2026. Pakk sekken.",
  buttonLabel: "Meld deg på i Spond",
  buttonUrl: "https://spond.com/invite/LJACR",
};

export const contact = {
  heading: "Bli med på DADCAMP",
  intro: "All påmelding og kommunikasjon skjer via Spond. Klikk lenken for å bli med i gruppa.",
  spondUrl: "https://spond.com/invite/LJACR",
};
