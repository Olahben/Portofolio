import Image from "next/image";
import NavBar from "./components/navbar/navBar";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-14 pt-[40px] sm:pt-[68px]">
      <NavBar />
      <Skills />
    <Contact />
    </main>
  );
}
