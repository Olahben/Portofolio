import Image from "next/image";
import NavBar from "./components/navbar/navBar";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
    <Contact />
    </main>
  );
}
