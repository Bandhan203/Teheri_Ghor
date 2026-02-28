import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuItems = [
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

const mainDishItems = [
  {
    name: "Special Beef Tehari (Half)",
    price: "180",
    image: "/images/special-beef-tehari-half.jpg",
    desc: "Fragrant beef tehari — half portion",
  },
  {
    name: "Special Beef Tehari (Quarter)",
    price: "180",
    image: "/images/special-beef-tehari-quarter.jpg",
    desc: "Flavourful beef tehari — quarter portion",
  },
  {
    name: "Special Beef Tehari (Full)",
    price: "380",
    image: "/images/special-beef-tehari-full.jpg",
    desc: "Hearty full serving of our signature beef tehari",
  },
  {
    name: "Morog Polao (Half)",
    price: "180",
    image: "/images/morog-polao-half.jpg",
    desc: "Tender chicken with golden aromatic rice — half",
  },
  {
    name: "Morog Polao (Full)",
    price: "350",
    image: "/images/morog-polao-full.jpg",
    desc: "Tender chicken with golden aromatic rice — full",
  },
  {
    name: "Bhuna Khichuri",
    price: "180",
    image: "/images/bhuna-khichuri.jpg",
    desc: "Rich slow-cooked rice and lentil comfort dish",
  },
];

const beverageItems = [
  {
    name: "Borhani (250 ml)",
    price: "60",
    image: "/images/borhani-250ml.jpg",
    desc: "Spiced yogurt drink — small glass",
  },
  {
    name: "Borhani (Half Liter)",
    price: "99",
    image: "/images/borhani-half-liter.jpg",
    desc: "Spiced yogurt drink — half litre bottle",
  },
  {
    name: "Borhani (1 Liter)",
    price: "199",
    image: "/images/borhani-1-liter.jpg",
    desc: "Spiced yogurt drink — full litre bottle",
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

/* ── Compact 6-column card ────────────────────────────────────────── */
function MenuCard({
  item,
  delay,
}: {
  item: { name: string; price: string; image: string; desc: string };
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      {/* Fitts's Law: entire card is the tap target */}
      <a
        href="https://wa.me/8801763567277"
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-[#111111] overflow-hidden hover:bg-[#181818] transition-colors duration-400 cursor-pointer"
        aria-label={`Order ${item.name}`}
      >
        {/* Square image area — aspect-ratio keeps uniform height across cols */}
        <div className="relative w-full aspect-square overflow-hidden">
          <ImageWithFallback
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Bottom gradient for name legibility (Law of Figure-Ground) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Gold price badge — top-right (F-pattern scan) */}
          <div className="absolute top-3 right-3 min-w-[46px] h-[46px] bg-[#C6A75E] rounded-full flex items-center justify-center px-2">
            <span
              className="font-['Poppins',sans-serif] text-black text-[11px] text-center leading-tight"
              style={{ fontWeight: 800 }}
            >
              {item.price === "MRP" ? "MRP" : `${item.price}৳`}
            </span>
          </div>

          {/* Hover CTA overlay — Fitts's Law: large target, revealed on intent */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <span className="font-['Poppins',sans-serif] text-[#C6A75E] text-[11px] tracking-[0.2em] uppercase border border-[#C6A75E] px-4 py-2">
              Order Now
            </span>
          </div>
        </div>

        {/* Text content */}
        <div className="px-3 pt-3 pb-4">
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
      </a>
    </AnimatedSection>
  );
}

/* ── Category heading with flanking rules ────────────────────────── */
function CategoryHeading({ label }: { label: string }) {
  return (
    <AnimatedSection>
      {/* Law of Proximity: heading visually belongs to the group below it */}
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
      {/* Wider container fills the viewport better (Law of Uniform Connectedness) */}
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

        {/* ── Signature items (Kacchi & Kabab) ───────────────────── */}
        {/* Miller's Law: 4 items, easy to scan; 2-col on mobile → 4-col desktop */}
        <CategoryHeading label="Signature Items" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
          {menuItems.map((item, i) => (
            <MenuCard key={item.name} item={item} delay={i * 0.07} />
          ))}
        </div>

        {/* ── Main Dishes ─────────────────────────────────────────── */}
        {/* Hick's Law: group similar items — 6 cols shows full category at a glance */}
        <div className="mt-16">
          <CategoryHeading label="Main Dishes" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {mainDishItems.map((item, i) => (
              <MenuCard key={item.name} item={item} delay={i * 0.07} />
            ))}
          </div>
        </div>

        {/* ── Beverages & Sides ───────────────────────────────────── */}
        <div className="mt-16">
          <CategoryHeading label="Beverages & Sides" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {beverageItems.map((item, i) => (
              <MenuCard key={item.name} item={item} delay={i * 0.07} />
            ))}
          </div>
        </div>

        {/* Global CTA — Jakob's Law: single prominent action after browsing */}
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
