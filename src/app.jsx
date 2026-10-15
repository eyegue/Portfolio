import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import {
  About,
  Skills,
  Education,
  Experience,
  Interests,
  Contact,
  Footer,
} from "./components/Sections";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";
import "./app.css";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Navbar />
      <main id="contenu">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Interests />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
