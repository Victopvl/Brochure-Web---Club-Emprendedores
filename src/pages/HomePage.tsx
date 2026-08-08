import { useEffect } from "react";
import { Hero } from "../components/sections/Hero.tsx";
import { Stats } from "../components/sections/Stats.tsx";
import { About } from "../components/sections/About.tsx";
import { Benefits } from "../components/sections/Benefits.tsx";
import { Board } from "../components/sections/Board.tsx";
import { PastEvents } from "../components/sections/PastEvents.tsx";
import { Agenda } from "../components/sections/Agenda.tsx";
import { Testimonials } from "../components/sections/Testimonials.tsx";
import { HowToJoin } from "../components/sections/HowToJoin.tsx";
import { Application } from "../components/sections/Application.tsx";
import { Faq } from "../components/sections/Faq.tsx";
import { FinalCta } from "../components/sections/FinalCta.tsx";
import { consumePendingSection } from "../router/hash.ts";

export function HomePage() {
  useEffect(() => {
    const sectionId = consumePendingSection();

    if (!sectionId) {
      window.scrollTo(0, 0);
      return;
    }

    const frame = requestAnimationFrame(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Benefits />
      <Board />
      <PastEvents />
      <Agenda />
      <Testimonials />
      <HowToJoin />
      <Application />
      <Faq />
      <FinalCta />
    </>
  );
}
