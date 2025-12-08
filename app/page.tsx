import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Awards";
import Hobbies from "@/components/Hobbies";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Certifications />
      <Awards />
      <Projects />
      <Hobbies />
      <Contact />
    </>
  );
}
