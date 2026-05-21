export type Showroom = { city: string; note?: string };

export const SHOWROOMS: Showroom[] = [
  { city: "Amersfoort", note: "Flagshipstore" },
  { city: "Amsterdam" },
  { city: "Breda" },
  { city: "Capelle aan den IJssel" },
  { city: "Delft" },
  { city: "Den Bosch" },
  { city: "Eindhoven" },
  { city: "Groningen" },
  { city: "Hoogeveen" },
  { city: "Leeuwarden" },
  { city: "Tilburg" },
  { city: "Utrecht" },
];

export type NavGroup = {
  label: string;
  href: string;
  feature?: { title: string; href: string; image: string };
  columns: {
    heading: string;
    items: { label: string; href: string }[];
  }[];
};

export const NAV: NavGroup[] = [
  {
    label: "Vloeren",
    href: "/houten-vloeren",
    feature: {
      title: "Eiken visgraat — tijdloos karakter",
      href: "/houten-vloeren#visgraat",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=70",
    },
    columns: [
      {
        heading: "Houten vloeren",
        items: [
          { label: "Eiken vloeren", href: "/houten-vloeren#eiken" },
          { label: "Eiken visgraat", href: "/houten-vloeren#visgraat" },
          { label: "Parketvloeren", href: "/houten-vloeren#parket" },
          { label: "Lamelparket", href: "/houten-vloeren#lamel" },
          { label: "Restpartijen", href: "/houten-vloeren#restpartijen" },
        ],
      },
      {
        heading: "PVC vloeren",
        items: [
          { label: "Klik PVC", href: "/pvc-vloeren#klik" },
          { label: "Lijm PVC", href: "/pvc-vloeren#lijm" },
          { label: "PVC visgraat", href: "/pvc-vloeren#visgraat" },
          { label: "Hongaarse punt", href: "/pvc-vloeren#hongaars" },
          { label: "PVC tegel", href: "/pvc-vloeren#tegel" },
        ],
      },
      {
        heading: "Laminaat",
        items: [
          { label: "Klik laminaat", href: "/laminaat#klik" },
          { label: "Visgraat laminaat", href: "/laminaat#visgraat" },
          { label: "Watervast", href: "/laminaat#watervast" },
          { label: "Wit laminaat", href: "/laminaat#wit" },
          { label: "Tegel laminaat", href: "/laminaat#tegel" },
        ],
      },
    ],
  },
  {
    label: "Raamdecoratie",
    href: "/raamdecoratie",
    feature: {
      title: "Op maat gemaakt — gratis ingemeten",
      href: "/raamdecoratie",
      image:
        "https://images.unsplash.com/photo-1505692433770-36f19f51681d?auto=format&fit=crop&w=900&q=70",
    },
    columns: [
      {
        heading: "Soorten",
        items: [
          { label: "Gordijnen", href: "/raamdecoratie#gordijnen" },
          { label: "Jaloezieën", href: "/raamdecoratie#jaloezieen" },
          { label: "Plissé", href: "/raamdecoratie#plisse" },
          { label: "Rolgordijnen", href: "/raamdecoratie#rol" },
        ],
      },
      {
        heading: "Service",
        items: [
          { label: "Gratis inmeten", href: "/raamdecoratie#inmeten" },
          { label: "Montage", href: "/raamdecoratie#montage" },
          { label: "Stoffenadvies", href: "/raamdecoratie#stoffen" },
        ],
      },
    ],
  },
  {
    label: "Meubels",
    href: "/meubels",
    feature: {
      title: "Europese makers — gemaakt voor het leven",
      href: "/meubels",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=70",
    },
    columns: [
      {
        heading: "Wonen",
        items: [
          { label: "Eettafels", href: "/meubels#tafels" },
          { label: "Banken", href: "/meubels#banken" },
          { label: "Kasten", href: "/meubels#kasten" },
          { label: "Stoelen", href: "/meubels#stoelen" },
        ],
      },
      {
        heading: "Accessoires",
        items: [
          { label: "Vloerkleden", href: "/meubels#vloerkleden" },
          { label: "Verlichting", href: "/meubels#verlichting" },
          { label: "Wooninspiratie", href: "/inspiratie" },
        ],
      },
    ],
  },
  {
    label: "Inspiratie",
    href: "/inspiratie",
    columns: [
      {
        heading: "Bekijk",
        items: [
          { label: "Stijlen & sferen", href: "/inspiratie#stijlen" },
          { label: "Kennisbank", href: "/inspiratie#kennisbank" },
          { label: "Nieuwbouw woning", href: "/inspiratie#nieuwbouw" },
          { label: "Download brochures", href: "/inspiratie#brochures" },
        ],
      },
    ],
  },
  {
    label: "Showrooms",
    href: "/showrooms",
    columns: [
      {
        heading: "12 vestigingen",
        items: SHOWROOMS.map((s) => ({
          label: s.city + (s.note ? ` — ${s.note}` : ""),
          href: `/showrooms#${s.city.toLowerCase().replace(/\s+/g, "-")}`,
        })),
      },
    ],
  },
];

export const FOOTER_COLS = [
  {
    heading: "Over LAB21",
    items: [
      { label: "Over ons", href: "/over-lab21" },
      { label: "Showrooms", href: "/showrooms" },
      { label: "Vacatures", href: "/over-lab21#werken-bij" },
      { label: "Duurzaamheid", href: "/over-lab21#duurzaamheid" },
    ],
  },
  {
    heading: "Collectie",
    items: [
      { label: "Vloeren", href: "/houten-vloeren" },
      { label: "Raamdecoratie", href: "/raamdecoratie" },
      { label: "Meubels", href: "/meubels" },
      { label: "Inspiratie", href: "/inspiratie" },
    ],
  },
  {
    heading: "Klantenservice",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Helpdesk", href: "/contact#helpdesk" },
      { label: "Afhalen & bezorgen", href: "/contact#afhalen" },
      { label: "Order wijzigen", href: "/contact#order" },
      { label: "Veelgestelde vragen", href: "/contact#faq" },
    ],
  },
  {
    heading: "Algemeen",
    items: [
      { label: "Algemene voorwaarden", href: "/contact#voorwaarden" },
      { label: "Privacy- & cookiebeleid", href: "/contact#privacy" },
      { label: "Klachtformulier", href: "/contact#klacht" },
      { label: "Brochures downloaden", href: "/inspiratie#brochures" },
    ],
  },
];

export const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com/lab21nederland/" },
  { label: "Pinterest", href: "https://nl.pinterest.com/lab21vloeren/" },
  { label: "YouTube", href: "https://www.youtube.com/user/LAB21Benelux" },
  { label: "Trustpilot", href: "https://nl.trustpilot.com/review/www.lab21.nl" },
];
