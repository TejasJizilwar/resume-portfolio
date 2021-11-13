import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';



function App() {
  return (
    <>
    <div id="AppJsContainer">
    <Navbar />
    <section>
    <Home />
   <Skills />
   <Projects />
   <AboutMe />
    </section>
    </div>
   </>
  );
}

export default App;
