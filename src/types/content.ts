export type NavItem = {
  label: string;
  sectionId: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type BoardMember = {
  name: string;
  role: string;
  email: string;
  linkedinUrl?: string;
  photo?: string;
};

export type EventStatus = "past" | "upcoming";

export type ClubEvent = {
  slug: string;
  title: string;
  status: EventStatus;
  date: string;
  time?: string;
  location?: string;
  excerpt: string;
  body: string[];
  cover?: string;
  instagramUrl?: string;
  signupUrl?: string;
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  career: string;
  photo?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type JoinStep = {
  title: string;
  description: string;
};

export type ApplicationForm = {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
  url?: string;
  tone: "light" | "dark";
};
