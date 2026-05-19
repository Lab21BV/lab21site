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
    label: "Houten vloeren",
    href: "/houten-vloeren",
    feature: {
      title: "Eiken visgraat — tijdloos karakter",
      href: "/houten-vloeren#visgraat",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=70",
    },
    columns: [
      {
        heading: "Categorieën",
        items: [
          { label: "Eiken vloeren", href: "/houten-vloeren#eiken" },
          { label: "Eiken visgraat", href: "/houten-vloeren#visgraat" },
          { label: "Parketvloeren", href: "/houten-vloeren#parket" },
          { label: "Lamelparket", href: "/houten-vloeren#lamel" },
          { label: "Restpartijen", href: "/houten-vloeren#restpartijen" },
        ],
      },
      {
        heading: "Collecties",
        items: [
          { label: "Original Dutch", href: "/houten-vloeren#original-dutch" },
          { label: "Nordic", href: "/houten-vloeren#nordic" },
          { label: "Country", href: "/houten-vloeren#country" },
          { label: "Highland", href: "/houten-vloeren#highland" },
          { label: "Click Urban", href: "/houten-vloeren#click-urban" },
        ],
      },
      {
        heading: "Service",
        items: [
          { label: "Legservice", href: "/houten-vloeren#legservice" },
          { label: "Onderhoud", href: "/houten-vloeren#onderhoud" },
          { label: "Vloerverwarming", href: "/houten-vloeren#verwarming" },
          { label: "Productinformatie", href: "/houten-vloeren#info" },
        ],
      },
    ],
  },
  {
    label: "PVC vloeren",
    href: "/pvc-vloeren",
    feature: {
      title: "PVC visgraat vanaf €29,95",
      href: "/pvc-vloeren#visgraat",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=70",
    },
    columns: [
      {
        heading: "Soorten",
        items: [
          { label: "Klik PVC", href: "/pvc-vloeren#klik" },
          { label: "Lijm PVC", href: "/pvc-vloeren#lijm" },
          { label: "PVC visgraat", href: "/pvc-vloeren#visgraat" },
          { label: "Hongaarse punt", href: "/pvc-vloeren#hongaars" },
          { label: "PVC tegel", href: "/pvc-vloeren#tegel" },
        ],
      },
      {
        heading: "Merken",
        items: [
          { label: "Moduleo", href: "/pvc-vloeren#moduleo" },
          { label: "Floorlife", href: "/pvc-vloeren#floorlife" },
          { label: "Ambiant", href: "/pvc-vloeren#ambiant" },
          { label: "Belakos", href: "/pvc-vloeren#belakos" },
          { label: "mFlor", href: "/pvc-vloeren#mflor" },
        ],
      },
      {
        heading: "Service",
        items: [
          { label: "Legdienst", href: "/pvc-vloeren#legdienst" },
          { label: "Onderhoud", href: "/pvc-vloeren#onderhoud" },
          { label: "Productinformatie", href: "/pvc-vloeren#info" },
        ],
      },
    ],
  },
  {
    label: "Laminaat",
    href: "/laminaat",
    feature: {
      title: "Watervast laminaat — sterk & stijlvol",
      href: "/laminaat#watervast",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=70",
    },
    columns: [
      {
        heading: "Soorten",
        items: [
          { label: "Klik laminaat", href: "/laminaat#klik" },
          { label: "Visgraat laminaat", href: "/laminaat#visgraat" },
          { label: "Tegel laminaat", href: "/laminaat#tegel" },
          { label: "Wit laminaat", href: "/laminaat#wit" },
          { label: "Watervast", href: "/laminaat#watervast" },
        ],
      },
      {
        heading: "Merken",
        items: [
          { label: "Poseidon", href: "/laminaat#poseidon" },
          { label: "Neptune", href: "/laminaat#neptune" },
          { label: "Floorlife", href: "/laminaat#floorlife" },
          { label: "Heritage", href: "/laminaat#heritage" },
          { label: "Portwood", href: "/laminaat#portwood" },
        ],
      },
      {
        heading: "Service",
        items: [
          { label: "Legservice", href: "/laminaat#legservice" },
          { label: "Onderhoud", href: "/laminaat#onderhoud" },
          { label: "Restpartijen", href: "/laminaat#restpartijen" },
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
      { label: "Werken bij", href: "/over-lab21#werken-bij" },
      { label: "Duurzaamheid", href: "/over-lab21#duurzaamheid" },
    ],
  },
  {
    heading: "Collectie",
    items: [
      { label: "Houten vloeren", href: "/houten-vloeren" },
      { label: "PVC vloeren", href: "/pvc-vloeren" },
      { label: "Laminaat", href: "/laminaat" },
      { label: "Restpartijen", href: "/laminaat#restpartijen" },
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
