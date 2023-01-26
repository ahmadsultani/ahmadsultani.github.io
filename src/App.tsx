import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import About from "./components/About";
import ButtonHome from "./components/ButtonHome";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 flex flex-col gap-40">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Connect />
      <ButtonHome />
    </main>
  );
}

export default App;