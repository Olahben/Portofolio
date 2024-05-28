import Image from "next/image";
import NavBar from "./components/navbar/navBar";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/Skills";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/Projects";
import Experience from "./components/Experience/Experience";
import MediaProjects from "./components/MediaProjects/MediaProjects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-14 pt-[40px] sm:pt-[68px]">
      <NavBar />
      <section className="w-full" id="Home"><Hero /></section>
      <section id="Projects"><Projects /></section>
      <section id="Media projects"><MediaProjects></MediaProjects></section>
      <section id="Skills" className=""><Skills /></section>
      <section id="Experience"><Experience /> </section>
      <section id="Contact"><Contact /></section>
    </main>
  );
}
