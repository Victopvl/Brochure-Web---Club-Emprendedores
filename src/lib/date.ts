function parseISODate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function dayNumber(iso: string) {
  return String(parseISODate(iso).getDate()).padStart(2, "0");
}

export function monthName(iso: string) {
  return parseISODate(iso).toLocaleDateString("es-CL", { month: "long" });
}

export function longDate(iso: string) {
  return parseISODate(iso).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function sortByDateDesc(a: { date: string }, b: { date: string }) {
  return b.date.localeCompare(a.date);
}

export function sortByDateAsc(a: { date: string }, b: { date: string }) {
  return a.date.localeCompare(b.date);
}
