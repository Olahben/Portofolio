import Image from "next/image";
import NavBar from "./components/navbar/navBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
    </main>
  );
}
