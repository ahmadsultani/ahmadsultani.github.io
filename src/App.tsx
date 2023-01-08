import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Connect from "./components/Connect";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Connect />
    </main>
  );
}

export default App;
