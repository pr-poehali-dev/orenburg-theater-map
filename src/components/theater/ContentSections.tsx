import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section, THEATERS, EVENTS, GALLERY } from "./data";

interface TheatersProps {
  setActiveSection: (s: Section) => void;
}

export function TheatersSection({ setActiveSection: _setActiveSection }: TheatersProps) {
  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="font-display text-primary tracking-[0.4em] text-sm uppercase mb-3">Оренбург</p>
        <h1 className="font-display text-5xl md:text-7xl font-light uppercase tracking-wide mb-6">Наши театры</h1>
        <p className="font-body text-xl italic text-foreground/60 max-w-2xl mx-auto">
          Пять театров — пять миров, каждый со своей уникальной историей и характером
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {THEATERS.map((theater, i) => (
          <div
            key={theater.id}
            className="theater-card group relative overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 opacity-0 animate-fade-up"
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
  );
}

export function AboutSection() {
  return (
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
            «Кукольный театр — это особый мир, где всё возможно, где дерево оживает,
            а тряпка становится душой»
          </p>
          <p className="font-display text-sm tracking-widest text-primary uppercase">— Сергей Образцов</p>
        </div>

        <div className="mt-20 mb-8">
          <h2 className="font-display text-3xl uppercase tracking-widest text-center mb-12">
            <span className="text-primary">—</span> Театр кукол Пьеро <span className="text-primary">—</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden border border-border p-10 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a1200, #2a1a00)" }}>
              <span className="text-[120px] animate-float">🤡</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-display text-primary tracking-[0.4em] text-xs uppercase mb-2">Камерный театр</p>
                <h3 className="font-display text-3xl uppercase tracking-wide mb-4">Театр кукол Пьеро</h3>
                <p className="font-body text-lg italic text-foreground/60 leading-relaxed">
                  Камерный театр кукол с авторскими постановками. Уникальные спектакли для детей и взрослых
                  в неповторимой атмосфере. Театр создаёт постановки, в которых кукла становится не просто
                  игрушкой, а живым персонажем с душой и характером.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-border">
                  <p className="font-display text-xs tracking-widest text-foreground/40 uppercase mb-1">Основан</p>
                  <p className="font-display text-xl" style={{ color: "#F5A623" }}>1990</p>
                </div>
                <div className="p-4 border border-border">
                  <p className="font-display text-xs tracking-widest text-foreground/40 uppercase mb-1">Спектаклей</p>
                  <p className="font-display text-xl" style={{ color: "#F5A623" }}>18</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-foreground/50">
                <Icon name="MapPin" size={14} />
                <span className="font-display text-xs tracking-wide">ул. Терешковой, 251</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EventsSection() {
  return (
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
  );
}

export function GallerySection() {
  const [galleryFilter, setGalleryFilter] = useState("Все");
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY[0] | null>(null);

  const filteredGallery = galleryFilter === "Все"
    ? GALLERY
    : GALLERY.filter(g => g.category === galleryFilter);

  return (
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
  );
}