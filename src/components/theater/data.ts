export type Section = "home" | "theaters" | "about" | "events" | "gallery";

export const THEATERS = [
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

export const EVENTS = [
  { id: 1, title: "Гроза", theater: "Драматический театр", date: "12 апреля", time: "19:00", genre: "Драма", price: "от 500 ₽" },
  { id: 2, title: "Свадьба Фигаро", theater: "Музыкальная комедия", date: "14 апреля", time: "18:30", genre: "Оперетта", price: "от 700 ₽" },
  { id: 3, title: "Буратино", theater: "Театр кукол", date: "15 апреля", time: "12:00", genre: "Сказка", price: "от 300 ₽" },
  { id: 4, title: "Ромео и Джульетта", theater: "Драматический театр", date: "18 апреля", time: "19:00", genre: "Трагедия", price: "от 600 ₽" },
  { id: 5, title: "Весёлая вдова", theater: "Музыкальная комедия", date: "20 апреля", time: "18:30", genre: "Мюзикл", price: "от 800 ₽" },
  { id: 6, title: "Алдар Косе", theater: "Татарский театр", date: "22 апреля", time: "19:00", genre: "Комедия", price: "от 400 ₽" },
];

export const GALLERY = [
  { id: 1, title: "Гроза. Сцена 1", theater: "Драматический", category: "Спектакль", gradient: "from-red-800 via-orange-900 to-red-950", overlay: "💥" },
  { id: 2, title: "За кулисами", theater: "Музыкальная комедия", category: "Закулисье", gradient: "from-purple-800 via-fuchsia-900 to-purple-950", overlay: "🎭" },
  { id: 3, title: "Буратино", theater: "Театр кукол", category: "Спектакль", gradient: "from-emerald-700 via-teal-900 to-green-950", overlay: "🎪" },
  { id: 4, title: "Репетиция", theater: "Драматический", category: "Закулисье", gradient: "from-amber-700 via-orange-800 to-red-900", overlay: "🔦" },
  { id: 5, title: "Свадьба Фигаро", theater: "Музыкальная комедия", category: "Спектакль", gradient: "from-pink-700 via-rose-900 to-pink-950", overlay: "🎵" },
  { id: 6, title: "Мастерская кукол", theater: "Театр кукол", category: "Закулисье", gradient: "from-blue-700 via-indigo-900 to-blue-950", overlay: "✂️" },
  { id: 7, title: "Ромео и Джульетта", theater: "Драматический", category: "Спектакль", gradient: "from-red-900 via-rose-800 to-red-950", overlay: "🌹" },
  { id: 8, title: "Гримёрная", theater: "Татарский театр", category: "Закулисье", gradient: "from-violet-700 via-purple-900 to-indigo-950", overlay: "💄" },
];

export const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "theaters", label: "Театры" },
  { id: "about", label: "О театрах" },
  { id: "events", label: "События" },
];
