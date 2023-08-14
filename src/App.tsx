import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import About from "./components/About";
import ButtonHome from "./components/ButtonHome";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <main className="text-gray-400 bg-gray-900 flex flex-col gap-10 md:gap-20 lg:gap-40 pb-20 w-screen overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Connect />
        <ButtonHome />
      </main>
    </>
  );
}

export default App;
