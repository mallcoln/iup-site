export type AcervoItem = {
  src: string;
  tag: string;
  // Nome da pessoa/figura (preenchido pelo cliente). Vazio = mostra só a tag.
  nome?: string;
};

// "Quem já passou pela nossa lente" — famosos, grandes produções, moda e retratos.
// Os nomes serão preenchidos conforme o cliente informar.
export const acervo: AcervoItem[] = [
  { src: "/fotos/famoso-1.jpg", tag: "Grandes produções", nome: "" },
  { src: "/fotos/famoso-4.jpg", tag: "Música & shows", nome: "" },
  { src: "/fotos/moda-1.jpg", tag: "Moda", nome: "" },
  { src: "/fotos/producao-2.jpg", tag: "Eventos", nome: "" },
  { src: "/fotos/famoso-3.jpg", tag: "Grandes produções", nome: "" },
  { src: "/fotos/moda-2.jpg", tag: "Moda", nome: "" },
  { src: "/fotos/producao-1.jpg", tag: "Eventos", nome: "" },
  { src: "/fotos/pessoa-1.jpg", tag: "Marca pessoal", nome: "" },
  { src: "/fotos/famoso-2.jpg", tag: "Grandes produções", nome: "" },
  { src: "/fotos/moda-3.jpg", tag: "Moda", nome: "" },
  { src: "/fotos/producao-3.jpg", tag: "Eventos", nome: "" },
  { src: "/fotos/pessoa-2.jpg", tag: "Marca pessoal", nome: "" },
];
