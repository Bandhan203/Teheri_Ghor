import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { MenuSection } from "./components/MenuSection";
import { BranchSection } from "./components/BranchSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GrainOverlay } from "./components/GrainOverlay";

export default function App() {
  return (
    <div className="min-h-screen bg-black" style={{ scrollBehavior: "smooth" }}>
      <GrainOverlay />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <BranchSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
