import { Section, NAV_ITEMS } from "./data";

interface SiteNavProps {
  activeSection: Section;
  scrolled: boolean;
  setActiveSection: (s: Section) => void;
}

export default function SiteNav({ activeSection, scrolled, setActiveSection }: SiteNavProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setActiveSection("home")}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold animate-glow-pulse">
            🎭
          </div>
          <span className="font-display text-lg tracking-widest uppercase text-foreground/90 group-hover:text-primary transition-colors">
            Театры Оренбурга
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`nav-link font-display text-sm tracking-widest uppercase transition-colors ${activeSection === item.id ? "text-primary active" : "text-foreground/60 hover:text-foreground"}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setActiveSection("events")}
            className="px-5 py-2 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/80 transition-all hover:scale-105 animate-glow-pulse"
          >
            Купить билет
          </button>
        </div>

        <div className="md:hidden flex gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`font-display text-xs tracking-wide uppercase transition-colors ${activeSection === item.id ? "text-primary" : "text-foreground/50"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

interface SiteFooterProps {
  setActiveSection: (s: Section) => void;
}

export function SiteFooter({ setActiveSection }: SiteFooterProps) {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎭</span>
          <div>
            <p className="font-display text-sm tracking-widest uppercase">Театры Оренбурга</p>
            <p className="font-body text-xs text-foreground/40 italic">С 1869 года</p>
          </div>
        </div>
        <div className="flex gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="font-display text-xs tracking-widest uppercase text-foreground/40 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="font-body text-xs text-foreground/30 italic">© 2026 Театры Оренбурга</p>
      </div>
    </footer>
  );
}
