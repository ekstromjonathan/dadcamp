// ============================================================
// DADCAMP — Edit all site content here
// ============================================================

export const site = {
  title: "DADCAMP",
  description:
    "Bli med på høyterskel uformell overnattingstur for fedre og barn!",
  lang: "nb",
  url: "https://dadcamp.no",
};

export const event = {
  name: "DADCAMP",
  tagline: "Bli med!",
  dates: "10. – 12. april 2026",
  dateShort: "10.–12. april",
  location: "TBA",
  contactUrl: "/contact",
};

export const nav = [
  { label: "Hva?", href: "/#hva" },
  { label: "Program", href: "/#program" },
  { label: "Praktisk", href: "/#praktisk" },
  { label: "Bli med", href: "/contact" },
];

export const what = {
  heading: "HVA?",
  body: `Dette er en tur hvor det viktigste er å være sammen — fedre og barn, ute i naturen. Vi setter opp telt, henger opp hengekøyer, eller sover rett under stjernene for de som ønsker det. Kvelden samles vi rundt bålet for å lage mat, dele snacks, prate og kjenne på fellesskapet.`,
  highlights: ["Rusfritt", "Helt gratis", "Åpent for alle aldre"],
};

export const program = {
  heading: "Program",
  days: [
    {
      day: "Fredag 10. april",
      items: [
        { time: "kl 18.00", text: "Samles ved... TBA" },
        { time: "kl 19.00", text: "Vi setter leir" },
      ],
    },
    {
      day: "Lørdag 11. april",
      items: [
        { time: "kl 11.00", text: "Felles lek" },
        { time: "kl 12.00", text: "Matlaging rundt bålet" },
      ],
    },
    {
      day: "Søndag 12. april",
      items: [{ time: "kl 13.00", text: "Avslutter og rusler tilbake" }],
    },
  ],
};

export const practical = {
  heading: "Praktisk",
  sections: [
    {
      title: "Overnatting",
      icon: "🏕️",
      body: "Ute i telt, hengekøye eller under åpen himmel – ta med det dere selv ønsker å bruke. Det finnes utedo på stedet — ta med eget toalettpapir.",
    },
    {
      title: "Mat",
      icon: "🍳",
      body: "Alle tar med egen mat, vann og det de trenger for turen. Vi stiller med store panner og noen tarper/presseninger for felles matlaging og samlingsområde. Ta gjerne med litt ekstra snacks eller drikke til en hyggelig kveld rundt bålet.",
    },
    {
      title: "Klær og utstyr",
      icon: "🎒",
      body: "Husk å ta med klær etter vær — men hvis det bøtter ned så må vi kanskje avlyse. Hvis barnet ditt går på skolen er de hjertelig velkommen!",
    },
  ],
};

export const cta = {
  heading: "Bli med?",
  body: "Dette er en gyllen anledning til å skape minner, oppleve naturen sammen og ta den gode drøsen rundt bålet når kvelden faller på. Pakk sekken og bli med på en tur der fellesskap, enkelhet og gode opplevelser står i sentrum!",
  buttonLabel: "Meld deg på",
  buttonUrl: "/contact",
};

export const organizers = {
  names: "Anders & Jonathan",
  tagline: "⨯⨯⨯",
};

export const contact = {
  heading: "Bli med på DADCAMP",
  intro:
    "Fyll ut skjemaet under så tar vi kontakt med mer informasjon om oppmøtested og andre detaljer.",
  // Change this to your actual form endpoint (e.g. Formspree, Netlify Forms, etc.)
  formAction: "https://formspree.io/f/YOUR_FORM_ID",
  fields: {
    name: "Fullt navn",
    email: "E-post",
    children: "Antall barn som blir med",
    message: "Spørsmål eller kommentarer (valgfritt)",
  },
  submitLabel: "Send påmelding",
};
