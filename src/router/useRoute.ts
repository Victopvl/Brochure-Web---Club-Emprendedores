import { useSyncExternalStore } from "react";
import { hashSnapshot, hashSubscribe, parseRoute, type Route } from "./hash.ts";

export function useRoute(): Route {
  const hash = useSyncExternalStore(hashSubscribe, hashSnapshot, () => "#/");
  return parseRoute(hash);
}
