import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePhoto from './assets/2024d.jpg';

function App() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <div>
            <img src={profilePhoto} alt="Asiri Pramodaya" className="profile-photo" />
          </div>
          <h1>Asiri Pramodaya</h1>
          <p>BSc (Hons) Computing and Information Systems Undergraduate</p>
        </div>
      </header>

      {/* Intro Section */}
      <section id="intro" className="py-5">
        <div className="container text-center">
          <h2>Intro</h2>
          <p>
            Hi! I’m Asiri Pramodaya, an enthusiastic and detail-oriented BSc (Hons) Computing and
            Information Systems undergraduate with a passion for crafting innovative IT solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Projects</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Hotel Management System:</strong> Developed a feature-rich hotel management
              system using Laravel and MySQL.
            </li>
            <li className="list-group-item">
              <strong>Campus Event Management System:</strong> Comprehensive event platform with role-based
              dashboards.
            </li>
            <li className="list-group-item">
              <strong>Mobile App for Stress Reduction:</strong> Flutter-based app for personalized
              stress reduction techniques.
            </li>
            <li className="list-group-item">
              <strong>Tea Plant Nursery Management:</strong> AI-driven community project for farmers.
            </li>
          </ul>
        </div>
      </section>

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

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Skills</h2>
          <ul className="list-group">
            <li className="list-group-item">Programming Languages: Java, Python, PHP, JavaScript</li>
            <li className="list-group-item">Frameworks: Spring Boot, Laravel, Flutter</li>
            <li className="list-group-item">Databases: PostgreSQL, MySQL, Firebase Firestore, MongoDB</li>
            <li className="list-group-item">Tools: Visual Studio, VS Code, Git, NetBeans</li>
          </ul>
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

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h2>Contact</h2>
          <p>Email: asiripramodaya@gmail.com</p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/asiripramodaya">linkedin.com/in/asiripramodaya</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/asiripr">github.com/asiripr</a>
          </p>
          <p>Phone: +94766938792</p>
        </div>
      </section>
    </>
  );
}

export default App;
