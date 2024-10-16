import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  )
}
