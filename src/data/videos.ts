export type VideoItem = {
  id: string;
  title: string;
  category: string;
  orientation: "portrait" | "landscape";
  poster: string;
} & (
  | { type: "file"; src: string }
  | { type: "youtube"; youtubeId: string }
);

// Produções reais da IUP usadas na galeria do portfólio.
export const videos: VideoItem[] = [
  {
    id: "jp-marcal",
    title: "JP Marçal · Clipe",
    category: "Música",
    type: "youtube",
    youtubeId: "XF5xJe313WA",
    orientation: "landscape",
    poster: "https://img.youtube.com/vi/XF5xJe313WA/maxresdefault.jpg",
  },
  {
    id: "sergio-bolao",
    title: "Sérgio Bolão · Jiu-Jitsu",
    category: "Documentário",
    type: "youtube",
    youtubeId: "CF2OkrYiwWE",
    orientation: "landscape",
    poster: "https://img.youtube.com/vi/CF2OkrYiwWE/maxresdefault.jpg",
  },
  {
    id: "silas",
    title: "Silas · Institucional",
    category: "Institucional",
    type: "file",
    src: "/videos/silas-institucional.mp4",
    orientation: "portrait",
    poster: "/videos/silas-institucional.jpg",
  },
  {
    id: "rock-festival",
    title: "Rock Festival",
    category: "Evento",
    type: "file",
    src: "/videos/rock-festival.mp4",
    orientation: "portrait",
    poster: "/videos/rock-festival.jpg",
  },
  {
    id: "enel",
    title: "Enel · Partida do Coração",
    category: "Marca",
    type: "file",
    src: "/videos/enel-partida-do-coracao.mp4",
    orientation: "landscape",
    poster: "/videos/enel-partida-do-coracao.jpg",
  },
  {
    id: "drone",
    title: "Captação Aérea · Drone",
    category: "Aéreo",
    type: "file",
    src: "/videos/drone-iup.mp4",
    orientation: "landscape",
    poster: "/videos/drone-iup.jpg",
  },
];
