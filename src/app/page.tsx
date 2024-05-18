import Home from "@/components/home/Home";
import Abilities from "@/components/abilities/Abilities";
import Projects from "@/components/projects/Projects";
import Experiences from "@/components/experiences/Experiences";
import ScrollToTopBtn from "@/components/scrollToTopBtn/ScrollToTopBtn";
import Skills from "@/components/skills/Skills";

export default function Page() {
  return (
    <>
      <Home />
      <Abilities />
      <Projects />
      <Experiences />
      <Skills />
      <ScrollToTopBtn />
    </>
  );
}
