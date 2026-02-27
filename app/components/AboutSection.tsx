import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const ownerImage =
  "https://images.unsplash.com/photo-1759521296144-fe6f2d2dc769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBjaGVmJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMTQ2ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#111111] py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-20 items-center">
        <AnimatedSection>
          <div className="aspect-[3/4] max-w-[380px] mx-auto overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <ImageWithFallback
              src={ownerImage}
              alt="Tasnim Islam"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            className="font-['Poppins',sans-serif] text-[#C6A75E] text-[12px] tracking-[0.3em] uppercase mb-8"
            style={{ fontWeight: 500 }}
          >
            The Founder
          </p>

          <h2
            className="font-['Playfair_Display',serif] text-white text-[36px] md:text-[42px] mb-3"
            style={{ fontWeight: 700, lineHeight: 1.1 }}
          >
            Tasnim Islam
          </h2>

          <div className="w-[50px] h-[1px] bg-[#C6A75E] mb-6" />

          <p
            className="font-['Poppins',sans-serif] text-white/30 text-[13px] tracking-[0.2em] uppercase mb-10"
            style={{ fontWeight: 400 }}
          >
            Managing Director
          </p>

          <p
            className="font-['Poppins',sans-serif] text-[#CCCCCC] text-[15px] leading-[1.9] max-w-[400px]"
            style={{ fontWeight: 300 }}
          >
            Serving authentic Mutton Kacchi, Beef Kacchi and Kababs across
            Dhaka. Focused on taste, hygiene and quality.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
