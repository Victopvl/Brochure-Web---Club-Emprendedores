import type { NavItem } from "../types/content.ts";

export const club = {
  name: "Club de Emprendedores",
  university: "UNAB",
  fullName: "Club de Emprendedores UNAB",
  description:
    "Universidad Andrés Bello · Comunidad estudiantil de emprendimiento.",
};

export const nav: NavItem[] = [
  { label: "Sobre nosotros", sectionId: "quienes-somos" },
  { label: "Beneficios", sectionId: "beneficios" },
  { label: "Directiva", sectionId: "directiva" },
  { label: "Eventos", sectionId: "eventos" },
  { label: "FAQ", sectionId: "faq" },
];

export const footerNav: NavItem[] = [
  { label: "Quiénes somos", sectionId: "quienes-somos" },
  { label: "Directiva", sectionId: "directiva" },
  { label: "Eventos", sectionId: "eventos" },
  { label: "Postular", sectionId: "postulacion" },
];

export const social = {
  instagramHandle: "@clubemprendedoresunab",
  instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
  linkedinUrl: "https://www.linkedin.com/company/clubemprendedores-unab",
  email: "clubemprendedores@unab.cl",
};

export const marqueeItems = [
  "Networking",
  "Pitch Nights",
  "Fondos y concursos",
  "Comunidad",
  "Mentorías",
  "Talleres",
];
