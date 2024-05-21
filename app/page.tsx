import Image from "next/image";
import NavBar from "./components/navbar/navBar";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/Skills";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-14 pt-[40px] sm:pt-[68px]">
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
