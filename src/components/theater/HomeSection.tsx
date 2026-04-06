import { useRef } from "react";
import Icon from "@/components/ui/icon";
import { Section, GALLERY } from "./data";

interface HomeSectionProps {
  setActiveSection: (s: Section) => void;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={heroRef}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a04] to-[#0d0d1a]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px]" />
        </div>
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-red-950/80 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-red-950/80 to-transparent pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
            <p className="font-display text-primary tracking-[0.5em] text-sm md:text-base uppercase mb-6">
              Культурная жизнь города
            </p>
          </div>
          <div className="opacity-0 animate-fade-up delay-200" style={{ animationFillMode: "forwards" }}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-4 leading-none">
              <span className="shimmer-text">ТЕАТРЫ</span>
            </h1>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-foreground/70 uppercase">
              ОРЕНБУРГА
            </h2>
          </div>
          <div className="opacity-0 animate-fade-up delay-400" style={{ animationFillMode: "forwards" }}>
            <p className="font-body text-xl md:text-2xl italic text-foreground/60 mt-8 mb-12 max-w-2xl mx-auto">
              «Театр — это место, где тысячи людей слышат биение одного сердца»
            </p>
          </div>
          <div className="opacity-0 animate-fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationFillMode: "forwards" }}>
            <button
              onClick={() => setActiveSection("theaters")}
              className="px-10 py-4 bg-primary text-primary-foreground font-display tracking-widest uppercase text-sm hover:bg-primary/80 transition-all hover:scale-105 animate-glow-pulse"
            >
              Все театры
            </button>
            <button
              onClick={() => setActiveSection("events")}
              className="px-10 py-4 border border-foreground/30 text-foreground font-display tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-all"
            >
              Афиша
            </button>
          </div>

          <div className="opacity-0 animate-fade-up delay-600 mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto" style={{ animationFillMode: "forwards" }}>
            {[
              { num: "5", label: "Театров" },
              { num: "127+", label: "Спектаклей" },
              { num: "155", label: "Лет истории" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-primary font-light">{stat.num}</div>
                <div className="font-body text-sm text-foreground/50 mt-1 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator opacity-50">
          <Icon name="ChevronDown" size={24} className="text-primary" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-primary tracking-[0.4em] text-sm uppercase mb-3">Открой для себя</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wide">Мир театра</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "Sparkles", title: "Спектакли", desc: "Классика и современные постановки лучших режиссёров страны", action: "events", label: "Смотреть афишу" },
            { icon: "Camera", title: "Фотогалерея", desc: "Яркие моменты спектаклей и закулисная жизнь театров", action: "gallery", label: "Смотреть фото" },
            { icon: "BookOpen", title: "История", desc: "Более 155 лет театральной жизни Оренбурга", action: "about", label: "Узнать больше" },
          ].map((card, i) => (
            <button
              key={card.title}
              onClick={() => setActiveSection(card.action as Section)}
              className={`group relative p-8 border border-border hover:border-primary/50 transition-all duration-500 text-left opacity-0 animate-fade-up delay-${(i + 1) * 200}`}
              style={{ animationFillMode: "forwards" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon name={card.icon as "Sparkles"} size={32} className="text-primary mb-6" />
              <h3 className="font-display text-xl uppercase tracking-widest mb-3">{card.title}</h3>
              <p className="font-body text-foreground/60 text-lg italic mb-6">{card.desc}</p>
              <span className="font-display text-xs tracking-widest text-primary uppercase flex items-center gap-2">
                {card.label}
                <Icon name="ArrowRight" size={14} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-display text-primary tracking-[0.4em] text-sm uppercase mb-2">Моменты</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide">Фотогалерея</h2>
          </div>
          <button
            onClick={() => setActiveSection("gallery")}
            className="font-display text-xs tracking-widest text-primary uppercase flex items-center gap-2 hover:gap-4 transition-all"
          >
            Все фото <Icon name="ArrowRight" size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY.slice(0, 4).map((photo) => (
            <div
              key={photo.id}
              className="gallery-item aspect-square relative overflow-hidden cursor-pointer"
              onClick={() => setActiveSection("gallery")}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${photo.gradient}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl mb-2">{photo.overlay}</span>
                <span className="font-display text-xs tracking-widest text-white/60 uppercase">{photo.category}</span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <p className="font-display text-white text-sm tracking-wide">{photo.title}</p>
                  <p className="font-body text-white/60 text-xs">{photo.theater}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}