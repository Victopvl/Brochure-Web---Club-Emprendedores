import type {
  ApplicationForm,
  Benefit,
  FaqItem,
  JoinStep,
  Stat,
} from "../types/content.ts";
import teamPhoto from "../assets/Team.webp";

export const hero = {
  titleLine1: "Tu idea no",
  titleLine2: "necesita permiso.",
  titleAccent: "Necesita gente.",
  lead: "Somos la comunidad de estudiantes UNAB que arma, rompe y vuelve a armar proyectos. Mentorías, red real y un lugar donde equivocarse rápido está bien visto.",
  primaryCta: "Quiero entrar",
  secondaryCta: "Ver la agenda",
  image: teamPhoto,
  imageAlt:
    "Miembros del Club de Emprendedores UNAB durante una visita a la sala Bloomberg",
};

export const stats: Stat[] = [
  { value: "+120", label: "Miembros activos" },
  { value: "18", label: "Eventos al año" },
  { value: "9", label: "Proyectos lanzados" },
  { value: "14", label: "Carreras representadas" },
];

export const about = {
  title:
    "Un club hecho por estudiantes que se aburrieron de esperar el momento perfecto.",
  body: "Nacimos dentro de la Universidad Andrés Bello para juntar a quienes tienen una idea con quienes ya se atrevieron a ejecutarla. No importa tu carrera ni tu semestre: si te mueve construir algo, este es tu lugar.",
  image: teamPhoto,
  imageAlt:
    "Miembros del Club de Emprendedores UNAB durante una visita a la sala Bloomberg",
  mission:
    "Darle a cada estudiante UNAB las herramientas, la red y el empujón para convertir una idea en algo real.",
  vision:
    "Ser el semillero de emprendimiento universitario más activo de Chile.",
  values: [
    "Ejecutar antes que teorizar",
    "Comunidad sobre competencia",
    "Curiosidad sin prejuicios",
    "Fallar rápido, contarlo mejor",
  ],
};

export const benefits: Benefit[] = [
  {
    title: "Networking que sí sirve",
    description:
      "Fundadores, inversionistas y compañeros de otras carreras. Contactos reales, no tarjetas de presentación juntando polvo.",
  },
  {
    title: "Mentorías 1 a 1",
    description:
      "Sesiones con emprendedores y académicos UNAB para desatascar tu proyecto justo donde está trabado.",
  },
  {
    title: "Talleres y pitch nights",
    description:
      "Validación, finanzas, marca y ventas. Practica tu pitch frente a gente que te va a decir la verdad.",
  },
  {
    title: "Fondos y concursos",
    description:
      "Te avisamos y te preparamos para postular a fondos internos, CORFO y competencias universitarias.",
  },
];

export const joinSteps: JoinStep[] = [
  {
    title: "Postula",
    description:
      "Completa el formulario de abajo. Cinco minutos y no necesitas tener una idea todavía.",
  },
  {
    title: "Conversemos",
    description:
      "Una entrevista corta y sin corbata con alguien de la directiva para conocerte.",
  },
  {
    title: "Bienvenida",
    description:
      "Entras al grupo, te asignamos un mentor y partes en la próxima actividad.",
  },
];

export const applicationForms: ApplicationForm[] = [
  {
    id: "FORMULARIO_GENERAL",
    title: "Miembro del club",
    badge: "Abierto",
    description:
      "Para cualquier estudiante UNAB que quiera participar en actividades, mentorías y proyectos.",
    icon: "user-plus-icon",
    url: undefined,
    tone: "light",
  },
  {
    id: "FORMULARIO_DIRECTIVA",
    title: "Directiva",
    badge: "Con aprobación",
    description:
      "Para quienes quieren liderar un área del club. Toda postulación pasa por revisión y aprobación de Pablo.",
    icon: "shield-icon",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfyFLgGfvUWfH74rjSNqPM_qY5BmRK3kztAsKPugWJifFvFIg/viewform",
    tone: "dark",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "¿Necesito tener una idea para postular?",
    answer:
      "No. La mayoría llega con curiosidad y nada más. Parte de lo que hacemos es ayudarte a encontrar en qué quieres trabajar.",
  },
  {
    question: "¿De qué carreras pueden entrar?",
    answer:
      "De todas. Hoy tenemos gente de catorce carreras distintas y esa mezcla es justamente lo que hace que los proyectos avancen.",
  },
  {
    question: "¿Cuánto tiempo le tengo que dedicar?",
    answer:
      "Una actividad cada dos semanas como mínimo. Si te metes en un proyecto o en la directiva, calcula unas tres horas semanales.",
  },
  {
    question: "¿Tiene algún costo ser miembro?",
    answer:
      "Ninguno. El club es gratuito para estudiantes UNAB y las actividades se financian con la universidad y con auspicios.",
  },
  {
    question: "¿Cuándo se abren las postulaciones?",
    answer:
      "Al inicio de cada semestre. Si llegas fuera de fecha igual puedes dejar tu postulación y te escribimos en la siguiente camada.",
  },
  {
    question: "¿Cómo postulo a la directiva?",
    answer:
      "Con el segundo formulario de esta página. Se revisa caso a caso y se pide haber participado al menos un semestre en el club.",
  },
];

export const finalCta = {
  title: "¿Vamos?",
  lead: "La próxima camada parte pronto. Postular toma cinco minutos y no cuesta nada.",
  cta: "Postular al club",
};
