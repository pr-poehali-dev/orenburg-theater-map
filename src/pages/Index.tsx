import { useState, useEffect } from "react";
import { Section } from "@/components/theater/data";
import SiteNav, { SiteFooter } from "@/components/theater/SiteNav";
import HomeSection from "@/components/theater/HomeSection";
import { TheatersSection, AboutSection, EventsSection, GallerySection } from "@/components/theater/ContentSections";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav activeSection={activeSection} scrolled={scrolled} setActiveSection={setActiveSection} />

      {activeSection === "home" && <HomeSection setActiveSection={setActiveSection} />}
      {activeSection === "theaters" && <TheatersSection setActiveSection={setActiveSection} />}
      {activeSection === "about" && <AboutSection />}
      {activeSection === "events" && <EventsSection />}
      {activeSection === "gallery" && <GallerySection />}

      <SiteFooter setActiveSection={setActiveSection} />
    </div>
  );
}
