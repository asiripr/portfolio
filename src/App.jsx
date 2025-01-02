import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

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
      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="text-center">Experience</h2>
          <p>
            <strong>Society of Computer Sciences Member:</strong> Organized IT workshops and coding
            challenges at Sabaragamuwa University of Sri Lanka.
          </p>
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="py-5">
        <div className="container">
          <h2 className="text-center">Education</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>
                <a href="https://www.sab.ac.lk/computing/" target="_blank">
                  Sabaragamuwa University of Sri Lanka:
                </a>
              </strong>
              Bachelor's degree in Computing and Information Systems (Jul 2022 - 2026)
            </li>
            <li className="list-group-item">
              <strong>
                <a href="https://stcmatara.lk/" target="_blank">
                  St. Thomas' College, Matara:
                </a>
              </strong>
              Physical Science Stream (2017 - 2020)
            </li>
          </ul>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Volunteering</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Member, IEEE Student Branch of SUSL:</strong> Volunteered as IEEE Day 2024
              ambassador for Sabaragamuwa University of Sri Lanka.
            </li>
            <li className="list-group-item">
              <strong>Member, Society of Computer Sciences - SUSL:</strong> Active member since August
              2022, contributing to the university's IT and computing community.
            </li>
          </ul>
        </div>
      </section>
      
      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />


    </>
  );
}

export default App;
