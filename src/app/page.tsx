import Nav from "@/Components/Nav";
import Me from "@/Components/me";

import Skills from "@/Components/skills";
import Projects from "@/Components/projects";
import Contact from "@/Components/contact";
import Experience from "@/Components/experience";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="p-5 overflow-x-hidden">
        <Me />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
