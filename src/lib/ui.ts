export const container = "mx-auto w-full max-w-6xl px-6 lg:px-10";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
