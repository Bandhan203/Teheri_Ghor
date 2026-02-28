import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/* ── Types ────────────────────────────────────────────────────────── */
interface Variant {
  label: string;
  price: string;
}

interface MenuItem {
  name: string;
  image: string;
  desc: string;
  /** Single-size items use price; multi-size items use variants */
  price?: string;
  variants?: Variant[];
}

/* ── Data ─────────────────────────────────────────────────────────── */
const menuItems: MenuItem[] = [
  {
    name: "Mutton Kacchi",
    price: "240",
    image: "/images/mutton-kacchi.jpg",
    desc: "Premium mutton with aromatic rice",
  },
  {
    name: "Beef Kacchi",
    price: "210",
    image: "/images/beef-kacchi.jpg",
    desc: "Tender beef slow-cooked to perfection",
  },
  {
    name: "Jali Kabab",
    price: "60",
    image: "/images/jali-kabab.jpg",
    desc: "Crispy net-style grilled kabab",
  },
  {
    name: "Tikka Kabab",
    price: "50",
    image: "/images/tikka-kabab.jpg",
    desc: "Smoky charcoal-grilled tikka",
  },
];

const mainDishItems: MenuItem[] = [
  {
    name: "Special Beef Tehari",
    image: "/images/beef-tehari.jpg",
    desc: "Fragrant signature beef tehari — pick your portion",
    variants: [
      { label: "Half", price: "180" },
      { label: "Quarter", price: "180" },
      { label: "Full", price: "380" },
    ],
  },
  {
    name: "Morog Polao",
    image: "/images/morog-polao.jpg",
    desc: "Tender chicken with golden aromatic rice",
    variants: [
      { label: "Half", price: "180" },
      { label: "Full", price: "350" },
    ],
  },
  {
    name: "Bhuna Khichuri",
    price: "180",
    image: "/images/bhuna-khichuri.jpg",
    desc: "Rich slow-cooked rice and lentil comfort dish",
  },
];

const beverageItems: MenuItem[] = [
  {
    name: "Borhani",
    image: "/images/borhani.jpg",
    desc: "Traditional spiced yogurt drink",
    variants: [
      { label: "250 ml", price: "60" },
      { label: "Half Liter", price: "99" },
      { label: "1 Liter", price: "199" },
    ],
  },
  {
    name: "Phirni",
    price: "50",
    image: "/images/phirni.jpg",
    desc: "Chilled rose-scented rice pudding dessert",
  },
  {
    name: "Mahalabia",
    price: "60",
    image: "/images/mahalabia.jpg",
    desc: "Silky milk pudding with a delicate flavour",
  },
  {
    name: "Water / Coke",
    price: "MRP",
    image: "/images/water-coke.jpg",
    desc: "Chilled mineral water or Coca-Cola",
  },
];

/* ── Size Toggle Segmented Control ────────────────────────────────── */
function SizeToggle({
  variants,
  activeIndex,
  onChange,
}: {
  variants: Variant[];
  activeIndex: number;
  onChange: (i: number) => void;
}) {
  return (
    <div
      className="flex w-full rounded-lg bg-white/[0.06] border border-white/[0.06] p-1 gap-1 overflow-x-auto scrollbar-hide"
      role="radiogroup"
      aria-label="Select size"
    >
      {variants.map((v, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={v.label}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onChange(i);
            }}
            className={`
              relative flex-1 min-w-0 px-3 py-[7px] rounded-md text-[11px] font-['Poppins',sans-serif]
              whitespace-nowrap text-center
              transition-all duration-250 cursor-pointer select-none
              focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#C6A75E]
              ${
                active
                  ? "bg-[#D4AF37] text-black shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
                  : "text-white/45 hover:text-white/75 hover:bg-white/[0.06]"
              }
            `}
            style={{ fontWeight: active ? 700 : 500, letterSpacing: "0.02em" }}
          >
            {v.label}
          </button>
        );
      })}
    </div>
  );
}

/* ── Menu Card (supports both single-price & variant items) ──────── */
function MenuCard({ item, delay }: { item: MenuItem; delay: number }) {
  const hasVariants = !!item.variants && item.variants.length > 0;
  const [activeIdx, setActiveIdx] = useState(0);

  const currentPrice = hasVariants
    ? item.variants![activeIdx].price
    : item.price ?? "";

  const orderLabel = hasVariants
    ? `${item.name} (${item.variants![activeIdx].label})`
    : item.name;

  return (
    <AnimatedSection delay={delay} className="h-full">
      <a
        href="https://wa.me/8801763567277"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full bg-[#111111] overflow-hidden hover:bg-[#181818] transition-colors duration-400 cursor-pointer"
        aria-label={`Order ${orderLabel}`}
      >
        {/* Square image */}
        <div className="relative w-full aspect-square overflow-hidden">
          <ImageWithFallback
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Gold price badge — animates on variant change */}
          <div className="absolute top-3 right-3 min-w-[46px] h-[46px] bg-[#C6A75E] rounded-full flex items-center justify-center px-2 transition-transform duration-300">
            <span
              key={currentPrice}
              className="font-['Poppins',sans-serif] text-black text-[11px] text-center leading-tight animate-price-pop"
              style={{ fontWeight: 800 }}
            >
              {currentPrice === "MRP" ? "MRP" : `${currentPrice}৳`}
            </span>
          </div>

          {/* Hover CTA overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <span className="font-['Poppins',sans-serif] text-[#C6A75E] text-[11px] tracking-[0.2em] uppercase border border-[#C6A75E] px-4 py-2">
              Order Now
            </span>
          </div>
        </div>

        {/* Text + optional toggle */}
        <div className="px-3 pt-3 pb-4 flex flex-col gap-2 flex-1">
          <div>
            <h3
              className="font-['Playfair_Display',serif] text-white text-[14px] leading-snug mb-1 group-hover:text-[#C6A75E] transition-colors duration-300"
              style={{ fontWeight: 600 }}
            >
              {item.name}
            </h3>
            <p
              className="font-['Poppins',sans-serif] text-white/35 text-[11px] leading-[1.6] line-clamp-2"
              style={{ fontWeight: 300 }}
            >
              {item.desc}
            </p>
          </div>

          {/* Size toggle — full-width segmented control below description */}
          {hasVariants && (
            <SizeToggle
              variants={item.variants!}
              activeIndex={activeIdx}
              onChange={setActiveIdx}
            />
          )}
        </div>
      </a>

      {/* Keyframe for the price pop animation + scrollbar-hide utility */}
      <style>{`
        @keyframes pricePop {
          0%   { transform: scale(0.7); opacity: 0; }
          60%  { transform: scale(1.12); }
          100% { transform: scale(1);   opacity: 1; }
        }
        .animate-price-pop {
          animation: pricePop 0.3s ease-out;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </AnimatedSection>
  );
}

/* ── Category heading with flanking rules ────────────────────────── */
function CategoryHeading({ label }: { label: string }) {
  return (
    <AnimatedSection>
      <div className="flex items-center gap-5 mb-8">
        <div className="flex-1 h-px bg-white/10" />
        <h3
          className="font-['Playfair_Display',serif] text-[#C6A75E] text-[18px] md:text-[22px] whitespace-nowrap"
          style={{ fontWeight: 600, letterSpacing: "0.03em" }}
        >
          {label}
        </h3>
        <div className="flex-1 h-px bg-white/10" />
      </div>
    </AnimatedSection>
  );
}

/* ── Section ─────────────────────────────────────────────────────── */
export function MenuSection() {
  return (
    <section id="menu" className="bg-black py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Section header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <p
              className="font-['Poppins',sans-serif] text-[#C6A75E] text-[11px] tracking-[0.35em] uppercase mb-5"
              style={{ fontWeight: 500 }}
            >
              Our Specialties
            </p>
            <h2
              className="font-['Playfair_Display',serif] text-white text-[36px] md:text-[46px] mb-5"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              The Menu
            </h2>
            <div className="w-[50px] h-px bg-[#C6A75E] mx-auto" />
          </div>
        </AnimatedSection>

        {/* ── Signature Items (Kacchi & Kabab) ───────────────────── */}
        <CategoryHeading label="Signature Items" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
          {menuItems.map((item, i) => (
            <MenuCard key={item.name} item={item} delay={i * 0.07} />
          ))}
        </div>

        {/* ── Main Dishes (consolidated — 3 cards instead of 6) ─── */}
        <div className="mt-16">
          <CategoryHeading label="Main Dishes" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
            {mainDishItems.map((item, i) => (
              <MenuCard key={item.name} item={item} delay={i * 0.07} />
            ))}
          </div>
        </div>

        {/* ── Beverages & Sides (consolidated — 4 cards instead of 6) */}
        <div className="mt-16">
          <CategoryHeading label="Beverages & Sides" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {beverageItems.map((item, i) => (
              <MenuCard key={item.name} item={item} delay={i * 0.07} />
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <AnimatedSection>
          <div className="mt-16 text-center border-t border-white/8 pt-14">
            <p
              className="font-['Poppins',sans-serif] text-white/40 text-[13px] mb-6"
              style={{ fontWeight: 300 }}
            >
              Ready to order? Tap any item or message us directly.
            </p>
            <a
              href="https://wa.me/8801763567277"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C6A75E] text-black font-['Poppins',sans-serif] px-10 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-[#d4b86a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(198,167,94,0.3)]"
              style={{ fontWeight: 700 }}
            >
              Order on WhatsApp
              <svg width="14" height="9" viewBox="0 0 12 8" fill="none">
                <path
                  d="M1 4H11M11 4L8 1M11 4L8 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
