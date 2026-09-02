import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Projects from "./components/Projects";
import About from "./components/about";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Team />
        <Projects />
      </main>
    </>
  );
}

export default App;