import type { ClubEvent } from "../types/content.ts";
import { sortByDateAsc, sortByDateDesc } from "../lib/date.ts";

export const events: ClubEvent[] = [
  {
    slug: "demo-day-2025",
    title: "Visita a Bloomberg Chile",
    status: "past",
    date: "2025-04-24",
    time: "15:00 - 16:00 hrs",
    location: "Apoquindo 2827",
    excerpt: "Bloomberg L.P es una empresa líder mundial en tecnología, datos financieros, noticias y medios de comnunicación.",
    featured: true,
    instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
    body: [
      "Junto a los miembros del Club vivimos una experiencia memorable visitando las oficinas de Bloomberg Chile, contamos con más de 30 asistentes que se animaron a conocer el núclo de esta gran empresa, el cual es conectar a quienes toman desiciones en el sector financiero con una red dinámica de información, pesonas e ideas, proporcionando análisis precisos y en tiempo real.",
    ],
  },
  {
    slug: "taller-de-validacion",
    title: "Taller de validación",
    status: "past",
    date: "2026-04-16",
    time: "17:00 hrs",
    location: "Sala 302, Campus República",
    excerpt: "Dos horas para dejar de suponer y salir a preguntar.",
    instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
    body: [
      "Un taller de dos horas para dejar de suponer y salir a preguntar. Partimos con el error más común: enamorarse de la solución antes de entender el problema.",
      "Cada asistente llegó con una idea y se fue con un guion de entrevista, una lista de diez personas a las que contactar y la tarea de tener conversaciones reales antes del viernes.",
      "La mitad volvió la semana siguiente diciendo que su idea original no se sostenía. Eso, para nosotros, es que el taller funcionó.",
    ],
  },
  {
    slug: "charla-invitado", //OCULTAR//
    title: "Charla invitado",
    status: "past",
    date: "2026-05-07",
    time: "18:30 hrs",
    location: "Auditorio, Campus Casona",
    excerpt: "Un fundador que levantó capital dos veces y quebró una.",
    instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
    body: [
      "Invitamos a un fundador que levantó capital dos veces y quebró una, en ese orden. Vino a contar la parte que no sale en LinkedIn.",
      "Habló de cómo repartir la propiedad entre socios que aportan cosas distintas, de qué mirar antes de firmar con un inversionista y de por qué el primer producto casi siempre se bota.",
      "Se quedó una hora más de lo agendado respondiendo preguntas en el pasillo.",
    ],
  },
  {
    slug: "pitch-night-otono", //OCULTAR//
    title: "Pitch Night",
    status: "past",
    date: "2026-05-21",
    time: "18:30 hrs",
    location: "Auditorio, Campus Casona",
    excerpt: "Ocho equipos, cinco minutos y un jurado sin filtro.",
    instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
    body: [
      "Ocho equipos, cinco minutos cada uno y un jurado con instrucciones explícitas de no ser amable.",
      "Las pitch nights son nuestro formato favorito porque obligan a ordenar la idea. No se puede improvisar cinco minutos frente a cien personas.",
      "Después de cada presentación el jurado dio retroalimentación en vivo. Duro, pero es la práctica más útil que ofrecemos en el semestre.",
    ],
  },
  {
    slug: "visita-a-startup",//OCULTAR//
    title: "Visita a startup",
    status: "past",
    date: "2026-06-04",
    time: "16:00 hrs",
    location: "Providencia, Santiago",
    excerpt: "Cómo se ve un equipo por dentro cuando ya pasó la idea.",
    instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
    body: [
      "Fuimos a las oficinas de una startup chilena en etapa de crecimiento para ver cómo se ve un equipo por dentro cuando ya pasó la etapa de la idea.",
      "Recorrimos las áreas de producto, ventas y operaciones, y conversamos con personas que hace cinco años estaban sentadas donde estamos nosotros.",
      "La conclusión compartida al salir: se ve mucho menos glamoroso y mucho más alcanzable de lo que uno imagina.",
    ],
  },
  {
    slug: "asado-del-club", //OCULTAR//
    title: "Asado del club",
    status: "past",
    date: "2026-06-18",
    time: "13:00 hrs",
    location: "Patio, Campus Casona",
    excerpt: "Una vez por semestre paramos y nos conocemos fuera de una sala.",
    instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
    body: [
      "No todo es pitch y planilla. Una vez por semestre paramos y hacemos un asado.",
      "Sirve para lo obvio, que es conocerse fuera de una sala, y para lo no tan obvio: la mayoría de los equipos del club se formaron conversando en instancias como esta.",
      "Sin agenda, sin presentaciones y sin proyector.",
    ],
  },
  {
    slug: "feria-de-proyectos", //OCULTAR//
    title: "Feria de proyectos",
    status: "past",
    date: "2026-07-02",
    time: "11:00 hrs",
    location: "Patio central, Campus República",
    excerpt: "Doce stands mostrando prototipos y demos en vivo.",
    instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
    body: [
      "Montamos stands en el patio del campus para que cualquier estudiante pudiera pasar a ver en qué anda el club.",
      "Doce proyectos mostraron prototipos, maquetas y demos en vivo durante toda la jornada. Varios recibieron sus primeros usuarios ese mismo día.",
      "Fue también nuestra principal instancia de reclutamiento: cerca de cuarenta personas dejaron su correo para la siguiente camada.",
    ],
  },

    {
    slug: "pitch-night-ronda-de-apertura", //Cambié la información de este evento, pero no sé que hacer con slug//
    title: "Emprender bajo incertidumbre",
    status: "upcoming",
    date: "2026-08-21",
    time: "horario por confirmar",
    location: "Campus Casona",
    excerpt: "Expositor por confirmar",
    body: [
      "El objetivo de esta actividad es activar mentalidad emprendedora y dar el primer paso para levantar tu StartUp o tu Emprendimiento."
    ],
  },
  {
    slug: "taller-valida-tu-idea-en-7-dias", //Cambié la información de este evento, pero no sé que hacer con slug//
    title: "El poder del networking",
    status: "upcoming",
    date: "2026-09-25",
    time: "Horario por confirmar",
    location: "Unab Bellavista",
    excerpt: "Expositor por confirmar", 
    body: [
      "El objetivo de esta actividad es construir relaciones, crear un mapa de contactos y seguimiento.",
    ],
  },
  {
    slug: "charla-de-la-tesis-a-la-startup", //Cambié la información de este evento, pero no sé que hacer con slug//
    title: "Marketing Digital e IA aplicada",
    status: "upcoming",
    date: "2026-10-30",
    time: "Horario por confirmar",
    location: "Campus Los Leones",
    excerpt: "Egresado UNAB por confirmar",
    body: [
      "El objetivo de esta actividad es aplicar marketing digital e IA, de manera responsable a proyectos tempranos.",
    ],
  },
  {
    slug: "demo-day-del-semestre", //Cambié la información de este evento, pero no sé que hacer con slug//
    title: "Estrategia y Modelo de Negocio",
    status: "upcoming",
    date: "2026-11-27",
    time: "Horario por confirmar",
    location: "Cede por confirmar",
    excerpt: "Conoce los proyectos de los miembros",
    body: [
      "El objetivo de esta actividad es profundizar en la validación, estrategia, propuesta de valor y continuidad de proyectos estudiantiles.",
    ],
  },
];

//Agregar UNAB Emprende Summit 2026//

export const pastEvents = events
  .filter((event) => event.status === "past")
  .sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return sortByDateDesc(a, b);
  });

export const upcomingEvents = events
  .filter((event) => event.status === "upcoming")
  .sort(sortByDateAsc);

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
