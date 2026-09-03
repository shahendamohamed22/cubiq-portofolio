import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Projects from "./components/Projects";
import About from "./components/about";
import TeamMembers from "./components/TeamMembers";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <TeamMembers />
        <Projects />
      </main>
    </>
  );
}

export default App;