import { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { EventPage } from "./pages/EventPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { useRoute } from "./router/useRoute.ts";

function App() {
  const route = useRoute();
  const routeKey = route.name === "event" ? `event:${route.slug}` : route.name;

  useEffect(() => {
    if (routeKey === "home") return;
    window.scrollTo(0, 0);
  }, [routeKey]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {route.name === "home" ? <HomePage /> : null}
        {route.name === "event" ? (
          <EventPage key={route.slug} slug={route.slug} />
        ) : null}
        {route.name === "notFound" ? <NotFoundPage /> : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;
