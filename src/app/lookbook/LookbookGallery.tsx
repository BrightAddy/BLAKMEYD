"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles } from "lucide-react";

type Category =
  | "ALL"
  | "KENTE GOWN"
  | "BRIDAL ROBE"
  | "RECEPTION OUTFIT"
  | "BRIDESMAIDS"
  | "WEDDING GUEST"
  | "PHOTOSHOOT"
  | "GRADUATION";

const CATEGORIES: Category[] = [
  "ALL",
  "KENTE GOWN",
  "BRIDAL ROBE",
  "RECEPTION OUTFIT",
  "BRIDESMAIDS",
  "WEDDING GUEST",
  "PHOTOSHOOT",
  "GRADUATION",
];

interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: Category;
  subtitle: string;
  narrative: string;
  image: string;
  alt: string;
  specs: {
    textile: string;
    hours: string;
    silhouette: string;
  };
}

const GALLERY_ITEMS: Record<Category, ProjectDetail[]> = {
  ALL: [
    {
      id: "all-01-kente",
      number: "01",
      title: "BONWIRE SOVEREIGN",
      category: "KENTE GOWN",
      subtitle: "BONWIRE SILK KENTE & PEPLUM",
      narrative:
        "Sculpted from authentic handwoven Bonwire silk Kente, featuring an off-shoulder neckline and a dramatic architectural peplum drape for traditional ceremonies.",
      image: "/images/lookbook/lookbook-kente-editorial.jpg",
      alt: "Statuesque Ghanaian muse wearing a bespoke Blak Meyd off shoulder Bonwire Kente couture gown on outdoor limestone terrace",
      specs: {
        textile: "Authentic Bonwire Silk Kente & Metallic Lurex",
        hours: "160 Handcraft Hours",
        silhouette: "Sculptural Off Shoulder Peplum Column",
      },
    },
    {
      id: "all-02-bridal",
      number: "02",
      title: "L'OR DE PENTHOUSE",
      category: "BRIDAL ROBE",
      subtitle: "ILLUSION PEARL CORSET & OSTRICH FEATHERS",
      narrative:
        "A modern masterpiece for bridal morning portraiture. Sculpted from sheer French illusion tulle and boned corset architecture, draped in cascading freshwater pearls and crystal ropes, and trimmed with billowing ostrich feathers.",
      image: "/images/lookbook/lookbook-bridal-feather-robe.jpg",
      alt: "Radiant Ghanaian bride in luxury Accra penthouse suite wearing bespoke Blak Meyd sheer pearl-encrusted corset bridal robe with cascading ostrich feathers",
      specs: {
        textile: "French Illusion Tulle, Freshwater Pearls, Crystals & Ostrich Plumes",
        hours: "175 Handcraft Hours",
        silhouette: "Corseted Illusion Bodice with Feather-Trimmed Cathedral Train",
      },
    },
    {
      id: "all-03-reception",
      number: "03",
      title: "EMERALD ARCHITECT",
      category: "RECEPTION OUTFIT",
      subtitle: "PLEATED RUFFLE SLEEVE COLUMN",
      narrative:
        "From intimate gatherings to grand celebrations, our reception outfits are tailored to make a statement with sophistication and style.",
      image: "/images/lookbook/lookbook-reception-editorial.jpg",
      alt: "Ghanaian muse in deep emerald green gown with sculptural pleated ruffle sleeve between classical stone columns",
      specs: {
        textile: "Heavyweight Emerald Silk Faille and Silk Crepe",
        hours: "185 Handcraft Hours",
        silhouette: "Sculptural Pleated Ruffle Sleeve Column",
      },
    },
  ],
  "KENTE GOWN": [
    {
      id: "kente-01-sovereign",
      number: "01",
      title: "BONWIRE SOVEREIGN",
      category: "KENTE GOWN",
      subtitle: "OFF-SHOULDER PEPLUM SILHOUETTE",
      narrative:
        "Sculpted from authentic handwoven Bonwire silk Kente, featuring an off-shoulder neckline and a dramatic architectural peplum drape for traditional ceremonies.",
      image: "/images/lookbook/lookbook-kente-editorial.jpg",
      alt: "Statuesque Ghanaian muse wearing a bespoke Blak Meyd off shoulder Bonwire Kente couture gown on outdoor limestone terrace",
      specs: {
        textile: "Authentic Bonwire Silk Kente & Metallic Lurex",
        hours: "160 Handcraft Hours",
        silhouette: "Sculptural Off Shoulder Peplum Column",
      },
    },
    {
      id: "kente-02-sapphire",
      number: "02",
      title: "SAPPHIRE CORSET MERMAID",
      category: "KENTE GOWN",
      subtitle: "ROYAL BONWIRE BRIDAL CORSET",
      narrative:
        "Handcrafted royal blue and amber-gold Bonwire Kente featuring a precision-boned sweetheart corset bodice, delicate crystal beading, and an architectural mermaid flare.",
      image: "/images/lookbook/lookbook-kente-sapphire-corset.jpg",
      alt: "Regal Ghanaian model in atelier salon wearing bespoke royal blue and amber gold Bonwire Kente corset mermaid gown",
      specs: {
        textile: "Handwoven Royal Blue & Amber Silk Kente, Crystal Beads",
        hours: "195 Atelier Hours",
        silhouette: "Precision-Boned Sweetheart Mermaid Flare",
      },
    },
    {
      id: "kente-03-crimson",
      number: "03",
      title: "CRIMSON NIKOI ASYMMETRIC",
      category: "KENTE GOWN",
      subtitle: "ONE-SHOULDER FAN DRAPE WITH TRAIN",
      narrative:
        "Bold crimson red and metallic gold silk Bonwire Kente gown showcasing an avant-garde one-shoulder fan drape and a cascading cathedral train for evening receptions.",
      image: "/images/lookbook/lookbook-kente-crimson-asymmetric.jpg",
      alt: "Graceful Ghanaian model in architectural gallery wearing bespoke crimson red and gold asymmetric one-shoulder Kente gown with train",
      specs: {
        textile: "Crimson Red & Metallic Gold Silk Kente, French Silk Faille",
        hours: "180 Handcraft Hours",
        silhouette: "One-Shoulder Sculptural Fan Drape with Cathedral Train",
      },
    },
  ],
  "BRIDAL ROBE": [
    {
      id: "bridal-01",
      number: "01",
      title: "L'OR DE PENTHOUSE",
      category: "BRIDAL ROBE",
      subtitle: "ILLUSION PEARL CORSET & OSTRICH FEATHERS",
      narrative:
        "A modern masterpiece for bridal morning portraiture. Sculpted from sheer French illusion tulle and boned corset architecture, draped in cascading freshwater pearls and crystal ropes, and trimmed with billowing ostrich feathers trailing across the marble penthouse suite.",
      image: "/images/lookbook/lookbook-bridal-feather-robe.jpg",
      alt: "Radiant Ghanaian bride in luxury Accra penthouse suite wearing bespoke Blak Meyd sheer pearl-encrusted corset bridal robe with cascading ostrich feathers",
      specs: {
        textile: "French Illusion Tulle, Freshwater Pearls, Crystals & Ostrich Plumes",
        hours: "175 Handcraft Hours",
        silhouette: "Corseted Illusion Bodice with Feather-Trimmed Cathedral Train",
      },
    },
    {
      id: "bridal-02",
      number: "02",
      title: "SOIE DUCHESSE MIROIR",
      category: "BRIDAL ROBE",
      subtitle: "HEAVYWEIGHT SILK SATIN & CHANTILLY LACE",
      narrative:
        "Tailored in luminous ivory silk duchess satin, this regal kimono robe features a structured crossover collar and an obi sash, accented with delicate hand-appliquéd French Chantilly lace down the sleeves and hemline for timeless bridal dressing.",
      image: "/images/lookbook/lookbook-bridal-satin-robe.jpg",
      alt: "Ghanaian bride in lavish dressing salon with gilded mirror wearing bespoke Blak Meyd ivory silk duchess satin wrap robe with Chantilly lace sleeves",
      specs: {
        textile: "Pure Silk Duchess Satin & French Chantilly Lace Appliqués",
        hours: "140 Atelier Hours",
        silhouette: "Floor-Length Wrap Kimono with Wide Silk Tie Sash",
      },
    },
    {
      id: "bridal-03",
      number: "03",
      title: "L'OPÉRA DE PORTICO",
      category: "BRIDAL ROBE",
      subtitle: "ARCHITECTURAL RUFFLED TULLE & CAPE TRAIN",
      narrative:
        "An avant-garde couture statement. This ethereal sheer organza and lace cape-robe features dramatic puffed shoulders, an intricately embroidered pearl waistline, and cascading floor-sweeping ruffles with a cathedral train catching the gentle breeze on sunlit marble porticos.",
      image: "/images/lookbook/lookbook-bridal-portico-robe.jpg",
      alt: "Statuesque Ghanaian bride on classical marble portico wearing bespoke Blak Meyd architectural ruffled tulle bridal cape-robe with cathedral train",
      specs: {
        textile: "French Guipure Lace, Sheer Silk Organza & Freshwater Pearls",
        hours: "195 Atelier Hours",
        silhouette: "Sculptural Off-Shoulder Puff Sleeve with Cascading Cathedral Cape",
      },
    },
  ],
  "RECEPTION OUTFIT": [
    {
      id: "reception-01",
      number: "01",
      title: "EMERALD ARCHITECT",
      category: "RECEPTION OUTFIT",
      subtitle: "SCULPTURAL PLEATED FAN RUFFLE SLEEVE",
      narrative:
        "An arresting evening reception gown tailored in heavyweight emerald silk faille. Characterized by dramatic accordion-pleated circular fan sleeves framing the décolletage, a precision-boned interior corset, and an architectural column skirt designed to command any grand ballroom entrance.",
      image: "/images/lookbook/lookbook-reception-editorial.jpg",
      alt: "Ghanaian muse in deep emerald green gown with sculptural pleated ruffle sleeve between classical stone columns",
      specs: {
        textile: "Heavyweight Emerald Silk Faille, Silk Crepe Lining",
        hours: "185 Handcraft Hours",
        silhouette: "Sculptural Pleated Fan Sleeve Column Gown",
      },
    },
    {
      id: "reception-02",
      number: "02",
      title: "L'OR NOCTURNE GALA",
      category: "RECEPTION OUTFIT",
      subtitle: "BACKLESS CRYSTAL CORSET MERMAID",
      narrative:
        "A breathtaking evening reception showstopper. Crafted from sheer champagne-gold illusion mesh, densely encrusted with thousands of micro-crystals, caviar pearls, and sequin scrolls. Features an open lace-up corset back and an architectural mermaid flare with sweeping train.",
      image: "/images/lookbook/gallery-reception.jpg",
      alt: "Stunning Ghanaian bride in champagne gold hand-beaded lace-up corset mermaid reception gown with sweeping train in grand ballroom gala",
      specs: {
        textile: "Champagne Silk Mesh, 4,200 Hand-Stitched Crystals & Pearls",
        hours: "210 Atelier Hours",
        silhouette: "Backless Lace-Up Corset with Sweeping Mermaid Flare",
      },
    },
    {
      id: "reception-03",
      number: "03",
      title: "CRIMSON VELOUR SOIRÉE",
      category: "RECEPTION OUTFIT",
      subtitle: "OFF-SHOULDER SWEETHEART VELVET & SLIT",
      narrative:
        "Sculpted for midnight celebrations and evening toasts. Rich crimson ruby silk velvet tailored into an off-shoulder sweetheart corset bodice, accented with hand-placed crystal bullion filigree, a defined hourglass waist, a daring thigh slit, and a draped metallic silk train.",
      image: "/images/lookbook/lookbook-reception-crimson-velvet.jpg",
      alt: "Statuesque Ghanaian bride in candlelit evening ballroom wearing bespoke Blak Meyd crimson ruby velvet off-shoulder corset gown with slit and side train",
      specs: {
        textile: "Rich Crimson Ruby Silk Velvet, Metallic Charmeuse & Crystal Bullion",
        hours: "175 Handcraft Hours",
        silhouette: "Off-Shoulder Sweetheart Corset with High Slit and Draped Train",
      },
    },
  ],
  "BRIDESMAIDS": [
    {
      id: "bridesmaids-01-purple",
      number: "01",
      title: "ROYAL AMETHYST QUARTET",
      category: "BRIDESMAIDS",
      subtitle: "INDIVIDUALLY SCULPTED DUCHESS SATIN",
      narrative:
        "A joyful, candid bridal party ensemble tailored in heavyweight royal purple silk duchess satin. Captured in authentic moments of laughter along the estate balustrade—featuring individually engineered cuts including a boned sweetheart corset with straps, an origami one-shoulder fold with side train, an off-shoulder cowl neckline, and a clean scoop-neck column with slit.",
      image: "/images/lookbook/lookbook-bridesmaids-candid-basket-phone.jpg",
      alt: "Four stylish Ghanaian bridesmaids laughing together on an estate terrace with flower basket, phone, and calla lilies wearing bespoke royal purple gowns",
      specs: {
        textile: "Heavyweight Royal Purple Silk Duchess Satin, Silk Charmeuse Lining",
        hours: "170 Atelier Hours per Ensemble",
        silhouette: "Boned Sweetheart Corset, Origami One-Shoulder & Off-Shoulder Cowl",
      },
    },
    {
      id: "bridesmaids-02-sage",
      number: "02",
      title: "SAGE BOTANICAL TRIO",
      category: "BRIDESMAIDS",
      subtitle: "ORIGAMI & HALTER DRAPED DUCHESS",
      narrative:
        "Commissioned for an open-air courtyard ceremony, this trio of bridesmaids gowns in sage and olive silk duchess satin balances architectural modernism with organic softness. Features a high-collar halter column, an off-shoulder wrap fold, and an asymmetric diagonal cowl.",
      image: "/images/lookbook/lookbook-bridesmaids-sage-green.jpg",
      alt: "Three smiling Ghanaian bridesmaids walking in sunlit stone courtyard wearing bespoke Blak Meyd sage green silk gowns with calla lilies",
      specs: {
        textile: "Sage & Olive Green Silk Duchess Satin",
        hours: "150 Atelier Hours per Ensemble",
        silhouette: "High-Collar Halter, Off-Shoulder Fold & Diagonal Origami Column",
      },
    },
    {
      id: "bridesmaids-03-bronze",
      number: "03",
      title: "COPPER & BRONZE DUET",
      category: "BRIDESMAIDS",
      subtitle: "LIQUID CHARMEUSE & BONED PEPLUM",
      narrative:
        "A masterclass in warm metallics tailored for sun-drenched colonnade receptions. Pairings include a bias-cut liquid champagne bronze cowl gown with a cathedral leg slit, and a rich burnt copper strapless corset gown featuring an architectural geometric waist fold.",
      image: "/images/lookbook/lookbook-bridesmaids-bronze-copper.jpg",
      alt: "Two joyful Ghanaian bridesmaids in colonnade wearing bespoke Blak Meyd liquid champagne bronze cowl gown and burnt copper corset gown",
      specs: {
        textile: "Liquid Champagne Bronze Silk Charmeuse & Burnt Copper Duchess Satin",
        hours: "145 Atelier Hours per Ensemble",
        silhouette: "Bias-Cut Cowl Slit Column & Precision-Boned Strapless Peplum",
      },
    },
  ],
  "WEDDING GUEST": [
    {
      id: "wedding-guest-01",
      number: "01",
      title: "BRONZE DUSK SOIRÉE",
      category: "WEDDING GUEST",
      subtitle: "METALLIC SILK CREPE & PUFF SLEEVES",
      narrative:
        "A striking guest gown tailored for high-society nuptials, catching golden hour sunlight with sculpted ease. Cut from heavyweight metallic bronze silk crepe, featuring structured Juliet puff sleeves, a wrapped crossover bodice, and a graceful trailing side drape.",
      image: "/images/lookbook/lookbook-05-wedding-guest-candid-hd.jpg",
      alt: "Glamorous Ghanaian wedding guest wearing bespoke bronze and gold metallic silk crepe couture gown at an outdoor garden wedding in Accra",
      specs: {
        textile: "Heavyweight Metallic Bronze & Gold Silk Crepe",
        hours: "165 Handcraft Hours",
        silhouette: "Structured Juliet Puff Sleeve Column with Trailing Side Drape",
      },
    },
    {
      id: "wedding-guest-02",
      number: "02",
      title: "ROSE CHAMPAGNE PETAL",
      category: "WEDDING GUEST",
      subtitle: "SCULPTURAL ORGANZA RUFFLES & LACE CORSET",
      narrative:
        "A showstopping statement for milestone garden celebrations. Featuring monumental sculptural organza ruffles framing the décolletage and shoulders, a sheer boned corset bodice embroidered in French corded lace and micro-pearls, falling into a flowing duchess satin mermaid skirt with sweeping petal train.",
      image: "/images/lookbook/gallery-wedding-guest.jpg",
      alt: "Statuesque Ghanaian wedding guest in luxury garden estate wearing bespoke rose champagne gown with dramatic sculptural organza ruffles and lace corset",
      specs: {
        textile: "Sculpted French Organza, Corded Chantilly Lace & Silk Duchess Satin",
        hours: "190 Atelier Hours",
        silhouette: "Monumental Ruffle-Shoulder Corset with Petal Mermaid Train",
      },
    },
    {
      id: "wedding-guest-03",
      number: "03",
      title: "SAPPHIRE SUNSET GALA",
      category: "WEDDING GUEST",
      subtitle: "ASYMMETRIC SCULPTED FAN & HIGH SLIT",
      narrative:
        "Tailored for sunset celebrations and outdoor ballroom receptions in Accra. Sculpted from heavyweight royal sapphire blue silk mikado, featuring an avant-garde one-shoulder fan drape, an intricately boned corset waist accented with crystal bullion filigree, and a daring architectural slit skirt with cathedral flare.",
      image: "/images/lookbook/lookbook-wedding-guest-sapphire.jpg",
      alt: "Radiant Ghanaian wedding guest walking across a sunset terrace reception wearing bespoke royal sapphire blue silk mikado gown with architectural fan shoulder",
      specs: {
        textile: "Heavyweight Royal Sapphire Silk Mikado & Crystal Bullion",
        hours: "175 Atelier Hours",
        silhouette: "One-Shoulder Sculptural Fan Corset with Slit and Trailing Train",
      },
    },
  ],
  "PHOTOSHOOT": [
    {
      id: "photoshoot-01",
      number: "01",
      title: "SCARLET HIGH COUTURE",
      category: "PHOTOSHOOT",
      subtitle: "MONUMENTAL RUFFLE SLEEVE BALLGOWN",
      narrative:
        "A monumental editorial ballgown crafted in crimson scarlet silk faille and crisp structured organza. Captured between the historic stone cloisters of Accra, featuring multi-tiered accordion-ruffled puff sleeves that frame a precision-boned corset bodice and voluminous pleated ballgown skirt designed for high-impact fashion photography.",
      image: "/images/lookbook/lookbook-06-photoshoot-editorial-hd.jpg",
      alt: "Ghanaian muse in ancient stone cloister wearing bespoke Blak Meyd scarlet red couture ballgown with monumental pleated ruffle sleeves",
      specs: {
        textile: "Heavyweight Scarlet Silk Faille & Structured French Organza",
        hours: "195 Atelier Hours",
        silhouette: "Monumental Pleated Ruffle Sleeve Corset Ballgown",
      },
    },
    {
      id: "photoshoot-02",
      number: "02",
      title: "GILDED SUNBURST MONOLITH",
      category: "PHOTOSHOOT",
      subtitle: "SCULPTURAL RUFF COLLAR & ACCORDION TRAIN",
      narrative:
        "An avant-garde architectural masterpiece sculpted from molten gold silk taffeta and metallic pleated organza. Features a towering sculptural sunburst ruff collar framing the head, a boned corset waist, and cascading multi-tiered accordion pleats that cascade into a dramatic floor-sweeping cathedral train.",
      image: "/images/lookbook/lookbook-photoshoot-gilded-gold.jpg",
      alt: "Statuesque Ghanaian muse in minimalist gallery pavilion wearing bespoke Blak Meyd molten gold couture gown with sculptural sunburst ruff collar",
      specs: {
        textile: "Molten Gold Silk Taffeta & Metallic Pleated Organza",
        hours: "220 Atelier Hours",
        silhouette: "Architectural Sunburst Ruff Collar with Multi-Tiered Accordion Train",
      },
    },
    {
      id: "photoshoot-03",
      number: "03",
      title: "OBSIDIAN SILVER WING",
      category: "PHOTOSHOOT",
      subtitle: "BRUSHED SILVER WING & VELVET CAPE COLUMN",
      narrative:
        "High-art conceptual couture combining liquid brushed metallic silver with deep obsidian silk velvet. An avant-garde geometric wing collar ascends dramatically over one shoulder, balanced by an ultra-fitted velvet corset column skirt with a daring thigh slit and an expansive, floor-sweeping silk cape that catches dynamic motion.",
      image: "/images/lookbook/lookbook-photoshoot-obsidian-wing.jpg",
      alt: "Fierce Ghanaian muse in minimalist colonnade wearing bespoke Blak Meyd obsidian velvet gown with sculptural brushed silver wing collar and cape",
      specs: {
        textile: "Obsidian Black Silk Velvet, Liquid Brushed Silver Taffeta & Silk Charmeuse",
        hours: "205 Atelier Hours",
        silhouette: "Asymmetric Sculptural Silver Wing Collar, Corset Slit Column & Billowing Cape",
      },
    },
  ],
  "GRADUATION": [
    {
      id: "graduation-01",
      number: "01",
      title: "HONORS KENTE CORSET",
      category: "GRADUATION",
      subtitle: "HANDWOVEN BONWIRE SWEETHEART GOWN",
      narrative:
        "A celebratory commencement gown honoring heritage and distinction. Handwoven Bonwire silk Kente cut into an architectural sweetheart corset bodice with precision boning, designed to be worn beneath the university academic gown and mortarboard for milestone graduation ceremonies across Ghana.",
      image: "/images/lookbook/lookbook-07-grad-kente-hero-v1.jpg",
      alt: "Smiling Ghanaian graduate at University of Ghana in bespoke handwoven Bonwire Kente sweetheart corset gown under academic graduation gown",
      specs: {
        textile: "Authentic Bonwire Silk & Gold Metallic Lurex Kente",
        hours: "145 Atelier Hours",
        silhouette: "Precision-Boned Sweetheart Corset Column",
      },
    },
    {
      id: "graduation-02",
      number: "02",
      title: "IVORY SCHOLAR TUXEDO",
      category: "GRADUATION",
      subtitle: "PEAKED GOLD LAPEL SILK SUIT",
      narrative:
        "An empowering tailored commencement suit in luminous ivory silk wool crepe. Features structured peaked lapels accented in pale gold duchess satin, covered silk buttons, and high-waisted wide-leg trousers, photographed on the historic university campus steps in Accra.",
      image: "/images/lookbook/lookbook-07-grad-ivory-suit-v1.jpg",
      alt: "Ghanaian graduate sitting on University of Ghana stone steps in bespoke tailored ivory silk crepe suit with gold peaked lapels and mortarboard",
      specs: {
        textile: "Heavyweight Ivory Silk Wool Crepe & Pale Gold Duchess Satin",
        hours: "135 Atelier Hours",
        silhouette: "Sculpted Peaked Lapel Blazer with Wide-Leg Tailored Trousers",
      },
    },
    {
      id: "graduation-03",
      number: "03",
      title: "EMERALD LACE-UP CORSET",
      category: "GRADUATION",
      subtitle: "BEADED FRENCH LACE & GOLD SASH",
      narrative:
        "Created for valedictorian dinners and graduation celebrations. Intricately beaded deep emerald green corded lace tailored into a sweetheart bodice with an open lace-up corset back, paired with long sheer lace sleeves and a regal academic stole.",
      image: "/images/lookbook/lookbook-07-grad-emerald-back-v1.jpg",
      alt: "Joyful Ghanaian graduate looking over shoulder wearing bespoke emerald green beaded lace-up corset gown with long sleeves and gold academic stole",
      specs: {
        textile: "Beaded French Corded Lace, Micro-Crystals & Emerald Crepe",
        hours: "160 Atelier Hours",
        silhouette: "Open Lace-Up Back Sweetheart Corset with Long Sheer Sleeves",
      },
    },
  ],
};

export default function LookbookGallery() {
  const [activeSection, setActiveSection] = useState<string>("session-kente-gown");
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll spy to update active category tab as user scrolls down
  useEffect(() => {
    const sectionIds = [
      "session-kente-gown",
      "session-bridal-robe",
      "session-reception-outfit",
      "session-bridesmaids",
      "session-wedding-guest",
      "session-photoshoot",
      "session-graduation",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (targetId: string) => {
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { label: "KENTE GOWN", targetId: "session-kente-gown" },
    { label: "BRIDAL ROBE", targetId: "session-bridal-robe" },
    { label: "RECEPTION OUTFIT", targetId: "session-reception-outfit" },
    { label: "BRIDESMAIDS", targetId: "session-bridesmaids" },
    { label: "WEDDING GUEST", targetId: "session-wedding-guest" },
    { label: "PHOTOSHOOT", targetId: "session-photoshoot" },
    { label: "GRADUATION", targetId: "session-graduation" },
  ];

  const kenteItems = GALLERY_ITEMS["KENTE GOWN"];
  const bridalItems = GALLERY_ITEMS["BRIDAL ROBE"];
  const receptionItems = GALLERY_ITEMS["RECEPTION OUTFIT"];
  const bridesmaidsItems = GALLERY_ITEMS["BRIDESMAIDS"];
  const weddingGuestItems = GALLERY_ITEMS["WEDDING GUEST"];
  const photoshootItems = GALLERY_ITEMS["PHOTOSHOOT"];
  const graduationItems = GALLERY_ITEMS["GRADUATION"];

  return (
    <section
      id="lookbook-gallery"
      className="relative z-10 bg-[#FBF9F4] text-[#15150F] w-full selection:bg-[#0E3B2E] selection:text-[#FBF9F4]"
      aria-label="Lookbook Editorial Couture Runway"
    >
      {/* ── STICKY EDITORIAL CATEGORY NAVIGATION BAR ── */}
      <div className="sticky top-20 sm:top-24 z-30 w-full bg-[#FBF9F4]/95 backdrop-blur-md py-3 px-4 sm:px-8 lg:px-12 border-b border-[#15150F]/10 shadow-sm transition-all">
        <nav
          aria-label="Lookbook editorial categories"
          className="max-w-7xl mx-auto flex items-center justify-start lg:justify-center gap-x-2 sm:gap-x-4 lg:gap-x-6 overflow-x-auto no-scrollbar py-1 text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.22em] uppercase text-[#6B6358]"
        >
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.targetId;
            return (
              <div key={item.label} className="flex items-center shrink-0">
                <button
                  type="button"
                  onClick={() => scrollToSection(item.targetId)}
                  className={`relative py-1.5 px-1.5 transition-colors focus:outline-none cursor-pointer ${
                    isActive
                      ? "text-[#15150F] font-semibold"
                      : "hover:text-[#15150F]"
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="stickyActiveCategory"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9E7B3B]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
                {idx < navItems.length - 1 && (
                  <span
                    className="ml-2 sm:ml-4 lg:ml-6 text-[#D4CEBF] select-none text-[10.5px] font-light"
                    aria-hidden="true"
                  >
                    |
                  </span>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-14 lg:py-16 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* ══════════════════════════════════════════════════════════════
            SESSION 01: KENTE GOWN SESSION
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="session-kente-gown"
          className="scroll-mt-36 sm:scroll-mt-40 w-full max-w-7xl mx-auto pb-14 sm:pb-16 border-b border-[#15150F]/10"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-[#15150F]/10">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="w-6 h-[1.5px] bg-[#9E7B3B]" aria-hidden="true" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#9E7B3B]">
                  ATELIER ARCHIVE &bull; EDITORIAL COLLECTION
                </span>
              </div>
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-tight text-[#15150F]">
                KENTE GOWN
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E]">
              <span>ACCRA ATELIER</span>
              <span className="text-[#D4CEBF]">&bull;</span>
              <span>3 BESPOKE LOOKS</span>
            </div>
          </div>

          {/* 3-Column Gallery */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
            {kenteItems.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveProject(item)}
                className="group cursor-pointer flex flex-col bg-white border border-[#15150F]/8 hover:border-[#9E7B3B]/60 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ECE8DF]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 bg-[#FBF9F4]/95 text-[#15150F] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-[#15150F]/10 shadow-lg flex items-center gap-1.5">
                      <span>VIEW COUTURE</span>
                      <ArrowRight className="w-3 h-3 text-[#9E7B3B]" />
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#FBF9F4] border-t border-[#15150F]/5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-fraunces text-base sm:text-lg text-[#9E7B3B] leading-none shrink-0">
                        {item.number}
                      </span>
                      <span className="w-3.5 h-[1px] bg-[#C29D59]/60 shrink-0" aria-hidden="true" />
                      <h3 className="font-fraunces text-sm sm:text-base font-normal uppercase tracking-wide text-[#15150F] truncate">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[9px] sm:text-[9.5px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E] truncate">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="w-8 h-8 rounded-full border border-[#15150F]/15 flex items-center justify-center text-[#15150F] group-hover:bg-[#0E3B2E] group-hover:text-[#FBF9F4] group-hover:border-[#0E3B2E] transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SESSION 02: BRIDAL ROBE SESSION (BENEATH KENTE GOWN)
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="session-bridal-robe"
          className="scroll-mt-36 sm:scroll-mt-40 w-full max-w-7xl mx-auto pb-14 sm:pb-16 border-b border-[#15150F]/10"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-[#15150F]/10">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="w-6 h-[1.5px] bg-[#9E7B3B]" aria-hidden="true" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#9E7B3B]">
                  ATELIER ARCHIVE &bull; BRIDAL MORNING COUTURE
                </span>
              </div>
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-tight text-[#15150F]">
                BRIDAL ROBE
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E]">
              <span>ACCRA ATELIER</span>
              <span className="text-[#D4CEBF]">&bull;</span>
              <span>3 BESPOKE CREATIONS</span>
            </div>
          </div>

          {/* Asymmetric Editorial Spread for Bridal Robe */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
            {/* Left Hero Plate */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveProject(bridalItems[0])}
              className="lg:col-span-7 group cursor-pointer flex flex-col bg-[#FCFAF7] border border-[#C29D59]/25 hover:border-[#9E7B3B] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-[#ECE8DF]">
                <Image
                  src={bridalItems[0].image}
                  alt={bridalItems[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 bg-[#FBF9F4]/90 backdrop-blur-md text-[#9E7B3B] text-[9px] font-sans font-semibold tracking-[0.22em] uppercase border border-[#C29D59]/30 shadow-sm">
                    SIGNATURE BRIDAL MASTERPIECE
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 bg-[#FBF9F4]/95 text-[#15150F] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-[#15150F]/10 shadow-lg flex items-center gap-1.5">
                    <span>VIEW ROBE</span>
                    <ArrowRight className="w-3 h-3 text-[#9E7B3B]" />
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#FCFAF7] border-t border-[#15150F]/5">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-fraunces text-base sm:text-lg text-[#9E7B3B] leading-none shrink-0">
                      {bridalItems[0].number}
                    </span>
                    <span className="w-3.5 h-[1px] bg-[#C29D59]/60 shrink-0" aria-hidden="true" />
                    <h3 className="font-fraunces text-sm sm:text-base font-normal uppercase tracking-wide text-[#15150F] truncate">
                      {bridalItems[0].title}
                    </h3>
                  </div>
                  <p className="text-[9px] sm:text-[9.5px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E] truncate">
                    {bridalItems[0].subtitle}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="w-8 h-8 rounded-full border border-[#15150F]/15 flex items-center justify-center text-[#15150F] group-hover:bg-[#0E3B2E] group-hover:text-[#FBF9F4] group-hover:border-[#0E3B2E] transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>

            {/* Right Diptych */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col justify-between gap-5 sm:gap-6 lg:gap-8">
              {bridalItems.slice(1, 3).map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
                  onClick={() => setActiveProject(item)}
                  className="flex-1 group cursor-pointer flex flex-col bg-[#FCFAF7] border border-[#C29D59]/20 hover:border-[#9E7B3B] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative w-full aspect-[4/3] sm:aspect-[3/4] lg:aspect-[16/11] xl:aspect-[3/2] overflow-hidden bg-[#ECE8DF]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-top sm:object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-3.5 py-1.5 bg-[#FBF9F4]/95 text-[#15150F] text-[9.5px] font-sans font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-[#15150F]/10 shadow-lg flex items-center gap-1.5">
                        <span>VIEW PIECE</span>
                        <ArrowRight className="w-3 h-3 text-[#9E7B3B]" />
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3 bg-[#FCFAF7] border-t border-[#15150F]/5">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-fraunces text-base text-[#9E7B3B] leading-none shrink-0">
                          {item.number}
                        </span>
                        <span className="w-3 h-[1px] bg-[#C29D59]/60 shrink-0" aria-hidden="true" />
                        <h3 className="font-fraunces text-sm font-normal uppercase tracking-wide text-[#15150F] truncate">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[8.5px] sm:text-[9px] font-sans font-medium tracking-[0.16em] uppercase text-[#736B5E] truncate">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="w-7 h-7 rounded-full border border-[#15150F]/15 flex items-center justify-center text-[#15150F] group-hover:bg-[#0E3B2E] group-hover:text-[#FBF9F4] group-hover:border-[#0E3B2E] transition-all duration-300">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SESSION 03: RECEPTION OUTFIT SESSION (BENEATH BRIDAL ROBE)
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="session-reception-outfit"
          className="scroll-mt-36 sm:scroll-mt-40 w-full max-w-7xl mx-auto pb-14 sm:pb-16 border-b border-[#15150F]/10"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-[#15150F]/10">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="w-6 h-[1.5px] bg-[#9E7B3B]" aria-hidden="true" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#9E7B3B]">
                  ATELIER ARCHIVE &bull; EVENING RECEPTION COUTURE
                </span>
              </div>
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-tight text-[#15150F]">
                RECEPTION OUTFIT
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E]">
              <span>ACCRA ATELIER</span>
              <span className="text-[#D4CEBF]">&bull;</span>
              <span>3 BESPOKE CREATIONS</span>
            </div>
          </div>

          {/* Gala Runway Trio for Reception Outfit */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
            {receptionItems.map((item, idx) => {
              const isCenterpiece = idx === 1;
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.09 }}
                  onClick={() => setActiveProject(item)}
                  className={`group cursor-pointer flex flex-col bg-[#FAF8F5] border shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    isCenterpiece
                      ? "border-[#9E7B3B]/60 lg:-translate-y-2 ring-1 ring-[#9E7B3B]/20"
                      : "border-[#15150F]/10 hover:border-[#9E7B3B]/50"
                  }`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ECE8DF]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />

                    {isCenterpiece && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 bg-[#15150F]/85 backdrop-blur-md text-[#C29D59] text-[9px] font-sans font-semibold tracking-[0.22em] uppercase border border-[#C29D59]/30 shadow-md">
                          GALA HIGHLIGHT
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 bg-[#FBF9F4]/95 text-[#15150F] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-[#15150F]/10 shadow-lg flex items-center gap-1.5">
                        <span>VIEW GOWN</span>
                        <ArrowRight className="w-3 h-3 text-[#9E7B3B]" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#FAF8F5] border-t border-[#15150F]/5">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-fraunces text-base sm:text-lg text-[#9E7B3B] leading-none shrink-0">
                          {item.number}
                        </span>
                        <span className="w-3.5 h-[1px] bg-[#C29D59]/60 shrink-0" aria-hidden="true" />
                        <h3 className="font-fraunces text-sm sm:text-base font-normal uppercase tracking-wide text-[#15150F] truncate">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[9px] sm:text-[9.5px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E] truncate">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <span className="w-8 h-8 rounded-full border border-[#15150F]/15 flex items-center justify-center text-[#15150F] group-hover:bg-[#0E3B2E] group-hover:text-[#FBF9F4] group-hover:border-[#0E3B2E] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SESSION 04: BRIDESMAIDS (BENEATH RECEPTION OUTFIT)
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="session-bridesmaids"
          className="scroll-mt-36 sm:scroll-mt-40 w-full max-w-7xl mx-auto pb-14 sm:pb-16 border-b border-[#15150F]/10"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-[#15150F]/10">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="w-6 h-[1.5px] bg-[#9E7B3B]" aria-hidden="true" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#9E7B3B]">
                  ATELIER ARCHIVE &bull; BRIDAL PARTY COUTURE
                </span>
              </div>
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-tight text-[#15150F]">
                BRIDESMAIDS
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E]">
              <span>ACCRA ATELIER</span>
              <span className="text-[#D4CEBF]">&bull;</span>
              <span>3 COORDINATED CREATIONS</span>
            </div>
          </div>

          {/* Architectural Bridal Party Spread */}
          {/* Hero Wide Panorama Card: Royal Purple Quintet */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55 }}
            onClick={() => setActiveProject(bridesmaidsItems[0])}
            className="group cursor-pointer flex flex-col bg-[#FCFAF7] border border-[#15150F]/10 hover:border-[#9E7B3B] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#ECE8DF]">
              <Image
                src={bridesmaidsItems[0].image}
                alt={bridesmaidsItems[0].alt}
                fill
                sizes="100vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1.5 bg-[#FBF9F4]/90 backdrop-blur-md text-[#9E7B3B] text-[9px] font-sans font-semibold tracking-[0.22em] uppercase border border-[#C29D59]/30 shadow-sm">
                  COUTURE SUITE 01 &bull; BRIDAL PARTY ENSEMBLE
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 bg-[#FBF9F4]/95 text-[#15150F] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-[#15150F]/10 shadow-lg flex items-center gap-1.5">
                  <span>VIEW ENSEMBLE</span>
                  <ArrowRight className="w-3 h-3 text-[#9E7B3B]" />
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#FCFAF7] border-t border-[#15150F]/5">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-fraunces text-base sm:text-lg text-[#9E7B3B] leading-none shrink-0">
                    {bridesmaidsItems[0].number}
                  </span>
                  <span className="w-3.5 h-[1px] bg-[#C29D59]/60 shrink-0" aria-hidden="true" />
                  <h3 className="font-fraunces text-sm sm:text-base font-normal uppercase tracking-wide text-[#15150F] truncate">
                    {bridesmaidsItems[0].title}
                  </h3>
                </div>
                <p className="text-[9px] sm:text-[9.5px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E] truncate">
                  {bridesmaidsItems[0].subtitle}
                </p>
              </div>
              <div className="shrink-0">
                <span className="w-8 h-8 rounded-full border border-[#15150F]/15 flex items-center justify-center text-[#15150F] group-hover:bg-[#0E3B2E] group-hover:text-[#FBF9F4] group-hover:border-[#0E3B2E] transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </motion.article>

          {/* Diptych: Sage Botanical Trio & Copper Bronze Duet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mt-5 sm:mt-6 lg:mt-8">
            {bridesmaidsItems.slice(1, 3).map((item, idx) => {
              const suiteBadge = idx === 0 ? "COUTURE SUITE 02 • COURTYARD TRIO" : "COUTURE SUITE 03 • COLONNADE DUET";
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
                  onClick={() => setActiveProject(item)}
                  className="group cursor-pointer flex flex-col bg-[#FCFAF7] border border-[#15150F]/10 hover:border-[#9E7B3B] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#ECE8DF]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-2.5 py-1 bg-[#FBF9F4]/90 backdrop-blur-md text-[#9E7B3B] text-[8.5px] font-sans font-semibold tracking-[0.2em] uppercase border border-[#C29D59]/30 shadow-sm">
                        {suiteBadge}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-3.5 py-1.5 bg-[#FBF9F4]/95 text-[#15150F] text-[9.5px] font-sans font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-[#15150F]/10 shadow-lg flex items-center gap-1.5">
                        <span>VIEW CREATION</span>
                        <ArrowRight className="w-3 h-3 text-[#9E7B3B]" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#FCFAF7] border-t border-[#15150F]/5">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-fraunces text-base sm:text-lg text-[#9E7B3B] leading-none shrink-0">
                          {item.number}
                        </span>
                        <span className="w-3.5 h-[1px] bg-[#C29D59]/60 shrink-0" aria-hidden="true" />
                        <h3 className="font-fraunces text-sm sm:text-base font-normal uppercase tracking-wide text-[#15150F] truncate">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[9px] sm:text-[9.5px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E] truncate">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="w-8 h-8 rounded-full border border-[#15150F]/15 flex items-center justify-center text-[#15150F] group-hover:bg-[#0E3B2E] group-hover:text-[#FBF9F4] group-hover:border-[#0E3B2E] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SESSION 05: WEDDING GUEST (BENEATH BRIDESMAIDS)
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="session-wedding-guest"
          className="scroll-mt-36 sm:scroll-mt-40 w-full max-w-7xl mx-auto pb-14 sm:pb-16 border-b border-[#15150F]/10"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-[#15150F]/10">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="w-6 h-[1.5px] bg-[#9E7B3B]" aria-hidden="true" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#9E7B3B]">
                  ATELIER ARCHIVE &bull; WEDDING GUEST COUTURE
                </span>
              </div>
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-tight text-[#15150F]">
                WEDDING GUEST
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E]">
              <span>ACCRA ATELIER</span>
              <span className="text-[#D4CEBF]">&bull;</span>
              <span>3 BESPOKE CREATIONS</span>
            </div>
          </div>

          {/* Wedding Guest Curated Salon Triptych */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
            {weddingGuestItems.map((item, idx) => {
              const guestBadges = [
                "GUEST SALON 01 • GARDEN RECEPTION",
                "GUEST SALON 02 • PALATIAL BALLROOM",
                "GUEST SALON 03 • SUNSET TERRACE GALA",
              ];
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => setActiveProject(item)}
                  className="group cursor-pointer flex flex-col bg-[#FCFAF7] border border-[#15150F]/10 hover:border-[#9E7B3B] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ECE8DF]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-2.5 py-1 bg-[#FBF9F4]/90 backdrop-blur-md text-[#9E7B3B] text-[8.5px] font-sans font-semibold tracking-[0.2em] uppercase border border-[#C29D59]/30 shadow-sm">
                        {guestBadges[idx]}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 bg-[#FBF9F4]/95 text-[#15150F] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-[#15150F]/10 shadow-lg flex items-center gap-1.5">
                        <span>VIEW GUEST COUTURE</span>
                        <ArrowRight className="w-3 h-3 text-[#9E7B3B]" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#FCFAF7] border-t border-[#15150F]/5">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-fraunces text-base sm:text-lg text-[#9E7B3B] leading-none shrink-0">
                          {item.number}
                        </span>
                        <span className="w-3.5 h-[1px] bg-[#C29D59]/60 shrink-0" aria-hidden="true" />
                        <h3 className="font-fraunces text-sm sm:text-base font-normal uppercase tracking-wide text-[#15150F] truncate">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[9px] sm:text-[9.5px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E] truncate">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="w-8 h-8 rounded-full border border-[#15150F]/15 flex items-center justify-center text-[#15150F] group-hover:bg-[#0E3B2E] group-hover:text-[#FBF9F4] group-hover:border-[#0E3B2E] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SESSION 06: PHOTOSHOOT (BENEATH WEDDING GUEST)
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="session-photoshoot"
          className="scroll-mt-36 sm:scroll-mt-40 w-full max-w-7xl mx-auto pb-14 sm:pb-16 border-b border-[#15150F]/10"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-[#15150F]/10">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="w-6 h-[1.5px] bg-[#9E7B3B]" aria-hidden="true" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#9E7B3B]">
                  ATELIER ARCHIVE &bull; EDITORIAL PHOTOSHOOT COUTURE
                </span>
              </div>
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-tight text-[#15150F]">
                PHOTOSHOOT
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E]">
              <span>ACCRA ATELIER</span>
              <span className="text-[#D4CEBF]">&bull;</span>
              <span>3 AVANT-GARDE CREATIONS</span>
            </div>
          </div>

          {/* Editorial Photoshoot Showcase */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
            {photoshootItems.map((item, idx) => {
              const photoshootBadges = [
                "EDITORIAL 01 • HISTORIC CLOISTER",
                "EDITORIAL 02 • MODERNIST PAVILION",
                "EDITORIAL 03 • MONOLITHIC COLONNADE",
              ];
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => setActiveProject(item)}
                  className="group cursor-pointer flex flex-col bg-[#FCFAF7] border border-[#15150F]/10 hover:border-[#9E7B3B] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ECE8DF]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-2.5 py-1 bg-[#15150F]/85 backdrop-blur-md text-[#E8D4A2] text-[8.5px] font-sans font-semibold tracking-[0.2em] uppercase border border-[#C29D59]/30 shadow-sm">
                        {photoshootBadges[idx]}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 bg-[#FBF9F4]/95 text-[#15150F] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-[#15150F]/10 shadow-lg flex items-center gap-1.5">
                        <span>VIEW EDITORIAL</span>
                        <ArrowRight className="w-3 h-3 text-[#9E7B3B]" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#FCFAF7] border-t border-[#15150F]/5">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-fraunces text-base sm:text-lg text-[#9E7B3B] leading-none shrink-0">
                          {item.number}
                        </span>
                        <span className="w-3.5 h-[1px] bg-[#C29D59]/60 shrink-0" aria-hidden="true" />
                        <h3 className="font-fraunces text-sm sm:text-base font-normal uppercase tracking-wide text-[#15150F] truncate">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[9px] sm:text-[9.5px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E] truncate">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="w-8 h-8 rounded-full border border-[#15150F]/15 flex items-center justify-center text-[#15150F] group-hover:bg-[#0E3B2E] group-hover:text-[#FBF9F4] group-hover:border-[#0E3B2E] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SESSION 07: GRADUATION (BENEATH PHOTOSHOOT)
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="session-graduation"
          className="scroll-mt-36 sm:scroll-mt-40 w-full max-w-7xl mx-auto pb-14 sm:pb-16"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-[#15150F]/10">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="w-6 h-[1.5px] bg-[#9E7B3B]" aria-hidden="true" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.25em] uppercase text-[#9E7B3B]">
                  ATELIER ARCHIVE &bull; COMMENCEMENT COUTURE
                </span>
              </div>
              <h2 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-tight text-[#15150F]">
                GRADUATION
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E]">
              <span>ACCRA ATELIER</span>
              <span className="text-[#D4CEBF]">&bull;</span>
              <span>3 COMMENCEMENT CREATIONS</span>
            </div>
          </div>

          {/* Academic Honors Runway Triptych */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
            {graduationItems.map((item, idx) => {
              const gradBadges = [
                "HONORS 01 • BONWIRE KENTE CORSET",
                "HONORS 02 • TAILORED SILK TUXEDO",
                "HONORS 03 • VALEDICTORIAN EMERALD",
              ];
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => setActiveProject(item)}
                  className="group cursor-pointer flex flex-col bg-[#FCFAF7] border border-[#15150F]/10 hover:border-[#9E7B3B] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ECE8DF]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-2.5 py-1 bg-[#FBF9F4]/90 backdrop-blur-md text-[#9E7B3B] text-[8.5px] font-sans font-semibold tracking-[0.2em] uppercase border border-[#C29D59]/30 shadow-sm">
                        {gradBadges[idx]}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 bg-[#FBF9F4]/95 text-[#15150F] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase backdrop-blur-sm border border-[#15150F]/10 shadow-lg flex items-center gap-1.5">
                        <span>VIEW COMMENCEMENT</span>
                        <ArrowRight className="w-3 h-3 text-[#9E7B3B]" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#FCFAF7] border-t border-[#15150F]/5">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-fraunces text-base sm:text-lg text-[#9E7B3B] leading-none shrink-0">
                          {item.number}
                        </span>
                        <span className="w-3.5 h-[1px] bg-[#C29D59]/60 shrink-0" aria-hidden="true" />
                        <h3 className="font-fraunces text-sm sm:text-base font-normal uppercase tracking-wide text-[#15150F] truncate">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[9px] sm:text-[9.5px] font-sans font-medium tracking-[0.18em] uppercase text-[#736B5E] truncate">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="w-8 h-8 rounded-full border border-[#15150F]/15 flex items-center justify-center text-[#15150F] group-hover:bg-[#0E3B2E] group-hover:text-[#FBF9F4] group-hover:border-[#0E3B2E] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── BESPOKE PROJECT DETAIL MODAL (QUICK-VIEW EDITORIAL) ── */}
      <AnimatePresence>
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FBF9F4] text-[#15150F] p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project view"
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-[#15150F] hover:text-[#9E7B3B] hover:rotate-90 transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Garment Image */}
              <div className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden bg-[#F5F2EB] shrink-0">
                <Image
                  src={activeProject.image}
                  alt={activeProject.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Garment Details & Atelier Specs */}
              <div className="flex-1 flex flex-col justify-between h-full pt-2">
                <div>
                  {/* Number & Category */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-fraunces text-2xl text-[#15150F]">
                      {activeProject.number}
                    </span>
                    <span
                      className="inline-block w-8 h-[1px] bg-[#C29D59]"
                      aria-hidden="true"
                    />
                    <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#9E7B3B]">
                      {activeProject.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-fraunces text-3xl sm:text-4xl font-normal uppercase tracking-tight text-[#15150F] mb-2">
                    {activeProject.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#9E7B3B] mb-4">
                    {activeProject.subtitle}
                  </p>

                  {/* Narrative */}
                  <p className="text-xs sm:text-[13px] font-sans text-[#524D45] leading-relaxed mb-6">
                    {activeProject.narrative}
                  </p>

                  {/* Atelier Specifications */}
                  <div className="border-t border-[#15150F]/10 pt-5 space-y-3 mb-8">
                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        TEXTILE AND EMBELLISHMENT
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeProject.specs.textile}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        ATELIER CRAFT HOURS
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeProject.specs.hours}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B6358] block mb-0.5">
                        SILHOUETTE ARCHITECTURE
                      </span>
                      <span className="text-xs font-sans text-[#15150F]">
                        {activeProject.specs.silhouette}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Consultation Inquiry Link */}
                <div className="pt-2 border-t border-[#15150F]/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#0E3B2E] text-[#FBF9F4] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#07241A] transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C29D59]" />
                    <span>BOOK AN ATELIER CONSULTATION</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
