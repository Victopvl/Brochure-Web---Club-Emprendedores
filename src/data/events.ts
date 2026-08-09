import type { ClubEvent } from "../types/content.ts";
import { sortByDateAsc, sortByDateDesc } from "../lib/date.ts";

export const events: ClubEvent[] = [
  {
    slug: "demo-day-2025",
    title: "Demo Day 2025",
    status: "past",
    date: "2025-11-08",
    time: "19:00 hrs",
    location: "Auditorio, Campus Casona",
    excerpt: "Nueve equipos presentando el cierre del semestre ante sala llena.",
    featured: true,
    instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
    body: [
      "El Demo Day cerró el segundo semestre con nueve equipos presentando frente a una sala llena. Cada uno tuvo cinco minutos para mostrar en qué estuvo trabajando y tres para responder preguntas del jurado.",
      "Pasaron por el escenario proyectos de logística, salud mental, agrotech y dos aplicaciones que partieron como tarea de un ramo. El jurado lo formaron egresados UNAB, una inversionista ángel y dos profesores de la Facultad de Ingeniería.",
      "No hubo primer lugar. La idea del Demo Day no es competir sino dejar constancia de lo que se avanzó en el semestre, y varios equipos salieron con reuniones agendadas para la semana siguiente.",
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
    slug: "charla-invitado",
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
    slug: "pitch-night-otono",
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
    slug: "visita-a-startup",
    title: "Visita a startup",
    status: "past",
    date: "2026-06-04",
    time: "16:00 hrs",
    location: "Providencia, Santiago",
    excerpt: "Cómo se ve un equipo por dentro cuando ya pasó la idea.",
    instagramUrl: "https://www.instagram.com/clubemprendedoresunab/",
    body: [
      "Fuimos a las oficinas de una startup chilena en etapa de crecimiento para ver cómo se ve un equipo por dentro cuando ya pasó la etapa de la idea.",
      "Recorrimos las áreas de producto, ventas y operaciones, y conversamos con gente que hace cinco años estaba sentada donde estamos nosotros.",
      "La conclusión compartida al salir: se ve mucho menos glamoroso y mucho más alcanzable de lo que uno imagina.",
    ],
  },
  {
    slug: "asado-del-club",
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
    slug: "feria-de-proyectos",
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
    excerpt: "x",
    body: [
      "El objetivo de esta actividad es activar mentalidad emprendedora y dar el primer paso para levantar tu StartUp o tu Emprendimiento"
    ],
  },
  {
    slug: "taller-valida-tu-idea-en-7-dias",
    title: "Taller: valida tu idea en 7 días",
    status: "upcoming",
    date: "2026-09-26",
    time: "17:00 hrs",
    location: "Sala por confirmar",
    excerpt: "Expositor por confirmar",
    body: [
      "Un taller práctico para salir con un plan de validación de una semana, no con teoría.",
      "Vas a armar tu guion de entrevista, definir a quién contactar y salir con la tarea de tener conversaciones reales antes del siguiente encuentro.",
      "Trae una idea, aunque sea vaga. Se trabaja sobre casos de los propios asistentes.",
    ],
  },
  {
    slug: "charla-de-la-tesis-a-la-startup",
    title: "Charla: de la tesis a la startup",
    status: "upcoming",
    date: "2026-10-10",
    time: "18:00 hrs",
    location: "Campus República",
    excerpt: "Egresado UNAB por confirmar",
    body: [
      "Un egresado UNAB que convirtió su proyecto de título en una empresa vendrá a contar cómo fue ese salto.",
      "Vamos a cubrir qué se puede reutilizar de un trabajo académico, qué hay que botar y cómo se financian los primeros meses cuando todavía no hay ingresos.",
      "Al final habrá espacio de preguntas abiertas.",
    ],
  },
  {
    slug: "demo-day-del-semestre",
    title: "Demo Day del semestre",
    status: "upcoming",
    date: "2026-11-07",
    time: "19:00 hrs",
    location: "Lugar por confirmar",
    excerpt: "Proyectos de los miembros",
    body: [
      "El cierre del semestre. Los equipos que trabajaron durante estos meses presentan lo que lograron avanzar.",
      "Es una instancia abierta: vienen egresados, profesores, gente de la industria y estudiantes que están evaluando entrar al club.",
      "Si estás en un proyecto del club, esta es la fecha para la que hay que trabajar.",
    ],
  },
];

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
