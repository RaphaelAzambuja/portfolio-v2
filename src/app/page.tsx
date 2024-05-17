import Header from "@/components/header/Header";
import Home from "@/components/home/Home";
import Abilities from "@/components/abilities/Abilities";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/projects/Projects";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <Abilities />
      <Projects />
      <Footer />
    </>
  );
}
