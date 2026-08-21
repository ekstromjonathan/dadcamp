// ============================================================
// DADCAMP — Edit all site content here
// ============================================================

export const site = {
  title: "DADCAMP",
  description:
    "En uformell og lavterskel overnattingstur for fedre og barn. Husvika, Håkavika — 18.–20. september 2026.",
  lang: "nb",
  url: "https://dadcamp.no",
};

export const event = {
  name: "DADCAMP",
  tagline: "Bli med!",
  dates: "18.–20. september 2026",
  dateShort: "18.–20. sept",
  season: "Høst 2026",
  location: "Husvika, Håkavika",
  contactUrl: "https://spond.com/invite/LJACR",
};

export const spond = {
  url: "https://spond.com/invite/LJACR",
  label: "Bli med i Spond-gruppa",
  notice:
    "All kommunikasjon skjer via Spond — meld deg inn der for å bli holdt oppdatert.",
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
  body: `Enkelt friluftsliv, bålfyring og gode samtaler. Det viktigste er å være sammen — fedre og barn ute i naturen.`,
  accent: "Ingenting fancy. Bare vi, bålet og skogen.",
  highlights: [
    "Lavterskel for alle",
    "Du kan bli med på deler eller alt",
    "Åpent uansett bakgrunn og livssyn",
  ],
};

export const program = {
  heading: "Program",
  note: "Oppmøtetid og detaljert program kommer i Spond. Du bestemmer selv om du er med på deler eller hele helgen.",
  days: [
    {
      day: "Fredag",
      date: "18. september",
      items: [
        { time: "Ettermiddag", text: "Oppmøte og leiretablering" },
        { time: "Kveld", text: "Grill, bål og kveldskos" },
      ],
    },
    {
      day: "Lørdag",
      date: "19. september",
      items: [
        { time: "Morgen", text: "Frokost i leiren" },
        { time: "Formiddag", text: "Aktiviteter og friluftsliv" },
        { time: "Ettermiddag", text: "Mat på bål" },
        { time: "Kveld", text: "Snacksbord og bålkos i mørket — husk hodelykt" },
      ],
    },
    {
      day: "Søndag",
      date: "20. september",
      items: [
        { time: "Morgen", text: "Frokost og rolig start" },
        { time: "Formiddag", text: "Opprydding og avreise" },
      ],
    },
  ],
};

export const practical = {
  heading: "Praktisk",
  intro:
    "Enkelt og selvbetjent. Ta med det du trenger for en natt ute — resten ordner seg rundt bålet.",
  sections: [
    {
      title: "Overnatting",
      icon: "tent",
      body: "Ta med telt eller tarp og hengekøye. Sovepose, liggeunderlag og det du måtte trenge for å ha det godt ute.",
    },
    {
      title: "Mat",
      icon: "pot",
      body: "Alle står for egen mat i år. Ta med snacks til felles kos rundt bålet — det er halve poenget.",
    },
    {
      title: "Oppmøte",
      icon: "pin",
      body: "Husvika i Håkavika. Mer informasjon om oppmøtested og tid kommer i Spond-gruppa.",
    },
  ],
};

export const venue = {
  name: "Husvika, Håkavika",
  address: "Nærmere beskrivelse kommer",
  meetingPoint: "Mer informasjon kommer",
  mapsUrl: "https://maps.app.goo.gl/LmB8NUuPuxiUUFU86",
  coords: [59.06076, 10.231269] as [number, number],
  note: "Vi legger ut oppmøtested, kjørebeskrivelse og parkering i Spond-gruppa i god tid før helgen.",
};

export const cta = {
  heading: "Der magi skapes.",
  body: "Husvika, Håkavika. 18.–20. september 2026. Pakk sekken.",
  buttonLabel: "Meld deg på i Spond",
  buttonUrl: "https://spond.com/invite/LJACR",
};

export const contact = {
  heading: "Bli med på DADCAMP",
  intro:
    "All påmelding og kommunikasjon skjer via Spond. Klikk lenken for å bli med i gruppa.",
  spondUrl: "https://spond.com/invite/LJACR",
};
