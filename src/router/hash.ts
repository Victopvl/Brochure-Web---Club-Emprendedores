export type Route =
  | { name: "home" }
  | { name: "event"; slug: string }
  | { name: "notFound" };

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getSnapshot() {
  return window.location.hash || "#/";
}

export function hashSubscribe(onChange: () => void) {
  return subscribe(onChange);
}

export function hashSnapshot() {
  return getSnapshot();
}

export function parseRoute(hash: string): Route {
  const path = hash.replace(/^#/, "") || "/";

  if (path === "/" || path === "") return { name: "home" };

  const match = /^\/eventos\/([\w-]+)\/?$/.exec(path);
  if (match) return { name: "event", slug: match[1] };

  return { name: "notFound" };
}

export function hrefFor(path: string) {
  return `#${path}`;
}

export function navigate(path: string) {
  window.location.hash = path;
}

let pendingSection: string | null = null;

export function goToSection(id: string) {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  pendingSection = id;
  navigate("/");
}

export function consumePendingSection() {
  const id = pendingSection;
  pendingSection = null;
  return id;
}
