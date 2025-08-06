import { Navbar } from "@/components/navbar";
import { AnimatedBackground } from "@/components/animated-background";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { LawyersSection } from "@/components/sections/lawyers-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <LawyersSection />
        <ContactSection />
        <Footer />
      </AnimatedBackground>
    </div>
  );
}