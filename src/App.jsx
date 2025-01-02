import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Volunteering from './components/Vounteering';

function App() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Intro Section */}
      <Intro />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Volunteering Section */}
      <Volunteering />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

    </>
  );
}

export default App;
