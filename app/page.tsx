import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Awards";
import Hobbies from "@/components/Hobbies";
import MyApps from "@/components/MyApps";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Awards />
      <Projects />
      <MyApps />
      <Hobbies />
      <Contact />
    </>
  );
}
