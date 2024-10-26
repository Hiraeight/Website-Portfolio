import Image from "next/image";
import { Navigation } from "@/components/sections/navigation";
import { Header } from "@/components/sections/header";
import { Certificates } from "@/components/sections/certificates";
import { Projects } from "@/components/sections/projects";
import { Skillset } from "@/components/sections/skillset";


export default function Home() {
  return (
    <div>
      <main className="bg-black">
        <Navigation />
        <Header />
        <Certificates />
        <Projects />
        <Skillset />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}