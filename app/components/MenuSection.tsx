import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuItems = [
  {
    name: "Mutton Kacchi",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1595977233209-aadbe21490b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBiaXJ5YW5pJTIwcGxhdGUlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjIxNzA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Premium mutton with aromatic rice",
  },
  {
    name: "Beef Kacchi",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1649777476920-0eef34169cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwYmlyeWFuaSUyMHJpY2UlMjBkaXNofGVufDF8fHx8MTc3MjE4NTE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Tender beef slow-cooked to perfection",
  },
  {
    name: "Jali Kabab",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1626323107982-177d43e5f634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwa2ViYWIlMjBtZWF0JTIwc2tld2VyfGVufDF8fHx8MTc3MjIxNzA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Crispy net-style grilled kabab",
  },
  {
    name: "Tikka Kabab",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWtrYSUyMGtlYmFiJTIwZ3JpbGxlZCUyMGFwcGV0aXplcnxlbnwxfHx8fDE3NzIyMTcwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Smoky charcoal-grilled tikka",
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="bg-black py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-[1000px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p
              className="font-['Poppins',sans-serif] text-[#C6A75E] text-[12px] tracking-[0.3em] uppercase mb-6"
              style={{ fontWeight: 500 }}
            >
              Our Specialties
            </p>
            <h2
              className="font-['Playfair_Display',serif] text-white text-[36px] md:text-[42px] mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              The Menu
            </h2>
            <div className="w-[50px] h-[1px] bg-[#C6A75E] mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.1}>
              <div className="group bg-[#111111] overflow-hidden hover:bg-[#161616] transition-all duration-500">
                {/* Image */}
                <div className="relative h-[260px] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                  {/* Gold price badge */}
                  <div className="absolute top-5 right-5 w-[60px] h-[60px] bg-[#C6A75E] rounded-full flex items-center justify-center">
                    <span
                      className="font-['Poppins',sans-serif] text-black text-[13px]"
                      style={{ fontWeight: 700 }}
                    >
                      {item.price}৳
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3
                    className="font-['Playfair_Display',serif] text-white text-[22px] mb-2"
                    style={{ fontWeight: 600 }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-['Poppins',sans-serif] text-white/40 text-[13px] mb-8 leading-[1.7]"
                    style={{ fontWeight: 300 }}
                  >
                    {item.desc}
                  </p>
                  <a
                    href="https://wa.me/8801763567277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-white/20 text-white font-['Poppins',sans-serif] px-7 py-3.5 text-[12px] tracking-[0.15em] uppercase hover:border-[#C6A75E] hover:text-[#C6A75E] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(198,167,94,0.15)]"
                    style={{ fontWeight: 500 }}
                  >
                    Order Now
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M1 4H11M11 4L8 1M11 4L8 7"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
