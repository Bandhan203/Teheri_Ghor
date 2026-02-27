import { MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function ContactSection() {
  return (
    <section id="contact" className="bg-black py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-[560px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p
              className="font-['Poppins',sans-serif] text-[#C6A75E] text-[12px] tracking-[0.3em] uppercase mb-6"
              style={{ fontWeight: 500 }}
            >
              Reach Out
            </p>
            <h2
              className="font-['Playfair_Display',serif] text-white text-[36px] md:text-[42px] mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Contact Us
            </h2>
            <div className="w-[50px] h-[1px] bg-[#C6A75E] mx-auto" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-col items-center gap-5 mb-16">
            <div className="flex items-center gap-4">
              <Phone size={15} className="text-[#C6A75E]" />
              <a
                href="tel:+8801763567277"
                className="font-['Poppins',sans-serif] text-white/70 text-[15px] hover:text-white transition-colors"
                style={{ fontWeight: 300 }}
              >
                01763567277
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={15} className="text-[#C6A75E]" />
              <a
                href="tel:+8801613567277"
                className="font-['Poppins',sans-serif] text-white/70 text-[15px] hover:text-white transition-colors"
                style={{ fontWeight: 300 }}
              >
                01613567277
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={15} className="text-[#C6A75E]" />
              <span
                className="font-['Poppins',sans-serif] text-white/40 text-[14px]"
                style={{ fontWeight: 300 }}
              >
                Sobhanbagh, Dhanmondi, Dhaka
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection delay={0.3}>
          <form
            className="flex flex-col gap-6 mb-14"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label
                className="font-['Poppins',sans-serif] text-white/40 text-[11px] tracking-[0.2em] uppercase"
                style={{ fontWeight: 500 }}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border border-white/15 px-5 py-4 font-['Poppins',sans-serif] text-[14px] text-white placeholder:text-white/20 outline-none focus:border-[#C6A75E]/50 transition-colors duration-300"
                style={{ fontWeight: 300 }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-['Poppins',sans-serif] text-white/40 text-[11px] tracking-[0.2em] uppercase"
                style={{ fontWeight: 500 }}
              >
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="bg-transparent border border-white/15 px-5 py-4 font-['Poppins',sans-serif] text-[14px] text-white placeholder:text-white/20 outline-none focus:border-[#C6A75E]/50 transition-colors duration-300"
                style={{ fontWeight: 300 }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-['Poppins',sans-serif] text-white/40 text-[11px] tracking-[0.2em] uppercase"
                style={{ fontWeight: 500 }}
              >
                Message
              </label>
              <textarea
                placeholder="Your message"
                rows={4}
                className="bg-transparent border border-white/15 px-5 py-4 font-['Poppins',sans-serif] text-[14px] text-white placeholder:text-white/20 outline-none resize-none focus:border-[#C6A75E]/50 transition-colors duration-300"
                style={{ fontWeight: 300 }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#25D366] text-white font-['Poppins',sans-serif] px-8 py-5 text-[13px] tracking-[0.15em] uppercase hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,211,102,0.2)]"
              style={{ fontWeight: 600 }}
            >
              Send Message
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="w-full h-[1px] bg-white/5 mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+8801763567277"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-['Poppins',sans-serif] px-8 py-4 text-[12px] tracking-[0.15em] uppercase hover:border-white hover:bg-white/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.06)] w-full sm:w-auto"
              style={{ fontWeight: 500 }}
            >
              <Phone size={14} />
              Call Now
            </a>
            <a
              href="https://wa.me/8801763567277"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#C6A75E] text-black font-['Poppins',sans-serif] px-8 py-4 text-[12px] tracking-[0.15em] uppercase hover:bg-[#d4b76a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(198,167,94,0.25)] w-full sm:w-auto"
              style={{ fontWeight: 600 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
