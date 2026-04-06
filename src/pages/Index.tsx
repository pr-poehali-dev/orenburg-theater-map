import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const THEATERS = [
  {
    id: 1,
    name: "Оренбургский государственный драматический театр им. М. Горького",
    short: "Драматический театр",
    founded: "1869",
    description: "Один из старейших театров России. Богатейший репертуар классики и современных постановок.",
    address: "ул. Советская, 26",
    color: "from-red-900/80 to-orange-900/80",
    accent: "#E05C2A",
    emoji: "🎭",
    shows: 42,
  },
  {
    id: 2,
    name: "Оренбургский государственный областной театр музыкальной комедии",
    short: "Музыкальная комедия",
    founded: "1946",
    description: "Театр оперетты и мюзикла, радующий зрителей яркими музыкальными спектаклями.",
    address: "ул. Пролетарская, 26",
    color: "from-purple-900/80 to-pink-900/80",
    accent: "#C84BC7",
    emoji: "🎵",
    shows: 35,
  },
  {
    id: 3,
    name: "Оренбургский государственный областной театр кукол",
    short: "Театр кукол",
    founded: "1935",
    description: "Волшебный мир кукольного искусства для детей и взрослых. Спектакли для всей семьи.",
    address: "ул. Цвиллинга, 17",
    color: "from-emerald-900/80 to-teal-900/80",
    accent: "#2AB87A",
    emoji: "🎪",
    shows: 28,
  },
  {
    id: 4,
    name: "Оренбургский государственный татарский драматический театр им. М. Файзи",
    short: "Татарский театр",
    founded: "1930",
    description: "Хранитель татарской культуры и традиций. Спектакли на татарском и русском языках.",
    address: "ул. Пролетарская, 24",
    color: "from-blue-900/80 to-indigo-900/80",
    accent: "#3A7BD5",
    emoji: "🌙",
    shows: 22,
  },
];

const EVENTS = [
  { id: 1, title: "Гроза", theater: "Драматический театр", date: "12 апреля", time: "19:00", genre: "Драма", price: "от 500 ₽" },
  { id: 2, title: "Свадьба Фигаро", theater: "Музыкальная комедия", date: "14 апреля", time: "18:30", genre: "Оперетта", price: "от 700 ₽" },
  { id: 3, title: "Буратино", theater: "Театр кукол", date: "15 апреля", time: "12:00", genre: "Сказка", price: "от 300 ₽" },
  { id: 4, title: "Ромео и Джульетта", theater: "Драматический театр", date: "18 апреля", time: "19:00", genre: "Трагедия", price: "от 600 ₽" },
  { id: 5, title: "Весёлая вдова", theater: "Музыкальная комедия", date: "20 апреля", time: "18:30", genre: "Мюзикл", price: "от 800 ₽" },
  { id: 6, title: "Алдар Косе", theater: "Татарский театр", date: "22 апреля", time: "19:00", genre: "Комедия", price: "от 400 ₽" },
];

const GALLERY = [
  { id: 1, title: "Гроза. Сцена 1", theater: "Драматический", category: "Спектакль", gradient: "from-red-800 via-orange-900 to-red-950", overlay: "💥" },
  { id: 2, title: "За кулисами", theater: "Музыкальная комедия", category: "Закулисье", gradient: "from-purple-800 via-fuchsia-900 to-purple-950", overlay: "🎭" },
  { id: 3, title: "Буратино", theater: "Театр кукол", category: "Спектакль", gradient: "from-emerald-700 via-teal-900 to-green-950", overlay: "🎪" },
  { id: 4, title: "Репетиция", theater: "Драматический", category: "Закулисье", gradient: "from-amber-700 via-orange-800 to-red-900", overlay: "🔦" },
  { id: 5, title: "Свадьба Фигаро", theater: "Музыкальная комедия", category: "Спектакль", gradient: "from-pink-700 via-rose-900 to-pink-950", overlay: "🎵" },
  { id: 6, title: "Мастерская кукол", theater: "Театр кукол", category: "Закулисье", gradient: "from-blue-700 via-indigo-900 to-blue-950", overlay: "✂️" },
  { id: 7, title: "Ромео и Джульетта", theater: "Драматический", category: "Спектакль", gradient: "from-red-900 via-rose-800 to-red-950", overlay: "🌹" },
  { id: 8, title: "Гримёрная", theater: "Татарский театр", category: "Закулисье", gradient: "from-violet-700 via-purple-900 to-indigo-950", overlay: "💄" },
];

type Section = "home" | "theaters" | "about" | "events" | "gallery";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [scrolled, setScrolled] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState("Все");
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY[0] | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { id: Section; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "theaters", label: "Театры" },
    { id: "about", label: "О театрах" },
    { id: "events", label: "События" },
  ];

  const filteredGallery = galleryFilter === "Все"
    ? GALLERY
    : GALLERY.filter(g => g.category === galleryFilter);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
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
            {navItems.map((item) => (
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
            {navItems.map((item) => (
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

      {/* ===== HOME ===== */}
      {activeSection === "home" && (
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
                  { num: "4", label: "Театра" },
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
      )}

      {/* ===== THEATERS ===== */}
      {activeSection === "theaters" && (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-primary tracking-[0.4em] text-sm uppercase mb-3">Оренбург</p>
            <h1 className="font-display text-5xl md:text-7xl font-light uppercase tracking-wide mb-6">Наши театры</h1>
            <p className="font-body text-xl italic text-foreground/60 max-w-2xl mx-auto">
              Четыре театра — четыре мира, каждый со своей уникальной историей и характером
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {THEATERS.map((theater, i) => (
              <div
                key={theater.id}
                className={`theater-card group relative overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 opacity-0 animate-fade-up`}
                style={{ animationFillMode: "forwards", animationDelay: `${i * 0.15}s` }}
              >
                <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${theater.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-30">{theater.emoji}</span>
                  </div>
                  <div
                    className="theater-card-overlay absolute inset-0 opacity-0 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: `${theater.accent}22` }}
                  >
                    <span className="text-8xl">{theater.emoji}</span>
                  </div>
                  <div className="absolute top-4 right-4 font-display text-xs tracking-widest text-white/50 uppercase">
                    с {theater.founded}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg uppercase tracking-wide mb-2 group-hover:text-primary transition-colors leading-tight">
                    {theater.short}
                  </h3>
                  <p className="font-body text-sm text-foreground/40 mb-3 uppercase tracking-widest">
                    Основан в {theater.founded}
                  </p>
                  <p className="font-body text-foreground/70 text-lg italic mb-6 leading-relaxed">
                    {theater.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-foreground/50">
                      <Icon name="MapPin" size={14} />
                      <span className="font-display text-xs tracking-wide">{theater.address}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: theater.accent }}>
                      <Icon name="Ticket" size={14} />
                      <span className="font-display text-xs tracking-wide">{theater.shows} спектаклей</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== ABOUT ===== */}
      {activeSection === "about" && (
        <div className="pt-24 pb-20">
          <div className="relative py-24 px-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
            <div className="relative z-10">
              <p className="font-display text-primary tracking-[0.4em] text-sm uppercase mb-4">История</p>
              <h1 className="font-display text-5xl md:text-7xl font-light uppercase tracking-wide mb-8">О театрах</h1>
              <p className="font-body text-xl md:text-2xl italic text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                Театральная жизнь Оренбурга насчитывает более полутора веков. С 1869 года театры города
                хранят и развивают культурные традиции Южного Урала.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24">
              <h2 className="font-display text-3xl uppercase tracking-widest text-center mb-16">
                <span className="text-primary">—</span> Ключевые даты <span className="text-primary">—</span>
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px hidden md:block" />
                {[
                  { year: "1869", event: "Открытие Оренбургского драматического театра — одного из старейших в России" },
                  { year: "1930", event: "Основание Татарского драматического театра, хранителя национальной культуры" },
                  { year: "1935", event: "Открытие Театра кукол — волшебного мира для детей и взрослых" },
                  { year: "1946", event: "Создание театра Музыкальной комедии после победы в Великой Отечественной войне" },
                  { year: "2024", event: "Театры Оренбурга продолжают радовать зрителей более чем 127 постановками" },
                ].map((item, i) => (
                  <div key={item.year} className={`flex items-center gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="font-display text-4xl text-primary font-light mb-2">{item.year}</div>
                      <p className="font-body text-lg italic text-foreground/70 max-w-sm ml-auto">{item.event}</p>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background flex-shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                { icon: "Award", title: "Признание", text: "Театры Оренбурга — лауреаты федеральных и международных театральных премий" },
                { icon: "Users", title: "Зрители", text: "Ежегодно театры посещают более 200 000 жителей и гостей Оренбурга" },
                { icon: "Globe", title: "Гастроли", text: "Труппы театров регулярно выступают на сценах России и зарубежья" },
              ].map((fact) => (
                <div key={fact.title} className="p-8 border border-border hover:border-primary/30 transition-colors group">
                  <Icon name={fact.icon as "Award"} size={36} className="text-primary mb-5 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-xl uppercase tracking-widest mb-4">{fact.title}</h3>
                  <p className="font-body text-lg italic text-foreground/60 leading-relaxed">{fact.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center py-16 border-y border-border">
              <p className="font-body text-2xl md:text-3xl italic text-foreground/70 max-w-4xl mx-auto leading-relaxed mb-6">
                «Театр — это прежде всего великая школа, и назначение его — воспитывать,
                а вовсе не только развлекать публику»
              </p>
              <p className="font-display text-sm tracking-widest text-primary uppercase">— Константин Станиславский</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== EVENTS ===== */}
      {activeSection === "events" && (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-primary tracking-[0.4em] text-sm uppercase mb-3">Апрель 2026</p>
            <h1 className="font-display text-5xl md:text-7xl font-light uppercase tracking-wide mb-6">Афиша</h1>
            <p className="font-body text-xl italic text-foreground/60">
              Ближайшие спектакли в театрах Оренбурга
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {["Все театры", ...THEATERS.map(t => t.short)].map((filter) => (
              <button
                key={filter}
                className="px-5 py-2 font-display text-xs tracking-widest uppercase border border-border hover:border-primary/50 hover:text-primary transition-all"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {EVENTS.map((event, i) => (
              <div
                key={event.id}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer opacity-0 animate-fade-up"
                style={{ animationFillMode: "forwards", animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0 text-center md:w-24">
                  <div className="font-display text-primary text-lg">{event.date.split(" ")[0]}</div>
                  <div className="font-display text-foreground/40 text-sm uppercase tracking-widest">{event.date.split(" ")[1]}</div>
                  <div className="font-body text-foreground/50 text-sm mt-1">{event.time}</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-border flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-display text-xl uppercase tracking-wide mb-1 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-body text-foreground/50 italic">{event.theater}</span>
                    <span className="px-3 py-1 text-xs font-display tracking-widest border border-border text-foreground/50 uppercase">
                      {event.genre}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-right">
                    <div className="font-display text-sm text-foreground/40 uppercase tracking-widest">Цена</div>
                    <div className="font-display text-primary font-medium">{event.price}</div>
                  </div>
                  <button className="px-6 py-3 bg-primary text-primary-foreground font-display text-xs tracking-widest uppercase hover:bg-primary/80 transition-all hover:scale-105 whitespace-nowrap">
                    Купить
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== GALLERY ===== */}
      {activeSection === "gallery" && (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-primary tracking-[0.4em] text-sm uppercase mb-3">Фотографии</p>
            <h1 className="font-display text-5xl md:text-7xl font-light uppercase tracking-wide mb-6">Галерея</h1>
            <p className="font-body text-xl italic text-foreground/60">
              Спектакли и закулисная жизнь театров Оренбурга
            </p>
          </div>

          <div className="flex gap-4 mb-10 justify-center flex-wrap">
            {["Все", "Спектакль", "Закулисье"].map((filter) => (
              <button
                key={filter}
                onClick={() => setGalleryFilter(filter)}
                className={`px-8 py-3 font-display text-xs tracking-widest uppercase transition-all ${
                  galleryFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((photo, i) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="gallery-item relative overflow-hidden cursor-pointer border border-border hover:border-primary/40 transition-all duration-300 opacity-0 animate-fade-up"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: `${i * 0.1}s`,
                  aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 0 ? "4/3" : "1/1"
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.gradient}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl mb-2">{photo.overlay}</span>
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="font-display text-white text-sm tracking-wide uppercase">{photo.title}</p>
                  <p className="font-body text-white/60 text-sm italic">{photo.theater}</p>
                  <span className="inline-block mt-2 px-2 py-1 border border-white/30 font-display text-white/60 text-xs tracking-widest uppercase w-fit">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {selectedPhoto && (
            <div
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
              onClick={() => setSelectedPhoto(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedPhoto(null)}
              >
                <Icon name="X" size={32} />
              </button>
              <div className="max-w-2xl w-full" onClick={e => e.stopPropagation()}>
                <div className={`aspect-video w-full bg-gradient-to-br ${selectedPhoto.gradient} flex items-center justify-center`}>
                  <span className="text-9xl">{selectedPhoto.overlay}</span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-display text-2xl uppercase tracking-widest text-white mb-2">{selectedPhoto.title}</h3>
                  <p className="font-body text-white/60 italic">{selectedPhoto.theater} · {selectedPhoto.category}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
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
            {navItems.map((item) => (
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
    </div>
  );
}
