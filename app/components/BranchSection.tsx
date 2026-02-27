import { MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const branches = [
  {
    name: "Sobhanbagh Tehari Ghar",
    subtitle: "Main Branch",
    address: "House-02, Road-13, Sobhanbagh, Dhanmondi, Dhaka",
    phone: "01763567277",
    mapQuery: "Sobhanbagh+Dhanmondi+Dhaka",
  },
  {
    name: "Tehari Ghar Gulshan-1",
    subtitle: "Gulshan Branch",
    address: "R-16, Post Office Goli, Opposite DNCC Market, Gulshan-1",
    phone: "01613567277",
    mapQuery: "Gulshan+1+Dhaka",
  },
  {
    name: "Sobhanbagh Tehari Ghar",
    subtitle: "Mohammadpur Branch",
    address: "R-03, PC Culture Housing, Shekertek, Mohammadpur, Dhaka-1207",
    phone: "01763567277",
    mapQuery: "Mohammadpur+Shekertek+Dhaka",
  },
];

export function BranchSection() {
  return (
    <section id="branches" className="bg-[#111111] py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-[1000px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-20">
            <p
              className="font-['Poppins',sans-serif] text-[#C6A75E] text-[12px] tracking-[0.3em] uppercase mb-6"
              style={{ fontWeight: 500 }}
            >
              Locations
            </p>
            <h2
              className="font-['Playfair_Display',serif] text-white text-[36px] md:text-[42px] mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Our Branches
            </h2>
            <div className="w-[50px] h-[1px] bg-[#C6A75E] mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Map */}
          <AnimatedSection className="h-full">
            <div className="overflow-hidden h-[340px] md:h-[460px] lg:h-full min-h-[460px] border border-white/10">
              <iframe
                title="Tehari Ghar Location"
                src="https://maps.google.com/maps?q=23.7477,90.3728&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                style={{
                  display: "block",
                  minHeight: "460px",
                  filter: "grayscale(1) invert(0.88) brightness(0.9) contrast(1.05)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          {/* Branch Cards */}
          <div className="flex flex-col gap-6">
            {branches.map((branch, i) => (
              <AnimatedSection key={branch.subtitle} delay={i * 0.1}>
                <div className="border border-white/10 p-8 hover:border-[#C6A75E]/30 transition-all duration-500 group">
                  <span
                    className="font-['Poppins',sans-serif] text-[#C6A75E] text-[11px] tracking-[0.25em] uppercase mb-3 block"
                    style={{ fontWeight: 500 }}
                  >
                    {branch.subtitle}
                  </span>

                  <h3
                    className="font-['Playfair_Display',serif] text-white text-[20px] mb-5"
                    style={{ fontWeight: 600 }}
                  >
                    {branch.name}
                  </h3>

                  <div className="w-full h-[1px] bg-white/5 mb-5" />

                  <div className="flex items-start gap-3 mb-3">
                    <MapPin
                      size={14}
                      className="text-white/30 mt-0.5 shrink-0"
                    />
                    <p
                      className="font-['Poppins',sans-serif] text-white/50 text-[13px] leading-[1.7]"
                      style={{ fontWeight: 300 }}
                    >
                      {branch.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <Phone size={14} className="text-white/30 shrink-0" />
                    <a
                      href={`tel:+880${branch.phone}`}
                      className="font-['Poppins',sans-serif] text-white/50 text-[13px] hover:text-[#C6A75E] transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/${branch.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-white/15 text-white/60 font-['Poppins',sans-serif] px-6 py-3 text-[11px] tracking-[0.15em] uppercase hover:border-[#C6A75E] hover:text-[#C6A75E] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(198,167,94,0.1)]"
                    style={{ fontWeight: 500 }}
                  >
                    Get Direction
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
