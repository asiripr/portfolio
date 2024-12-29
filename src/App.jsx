import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <section id="intro">
        <h1>Asiri Pramodaya</h1>
        <p>BSc (Hons) Computing and Information Systems Undergraduate</p>
      </section>
      <section id="intro">
        <h2>Intro</h2>
        <p>
          Hi! I’m Asiri Pramodaya, an enthusiastic and detail-oriented BSc (Hons) Computing and
          Information Systems undergraduate with a passion for crafting innovative IT solutions.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Hotel Management System:</strong> Developed a feature-rich hotel management
            system using Laravel and MySQL.
          </li>
          <li>
            <strong>Campus Event Management System:</strong> Comprehensive event platform with role-based
            dashboards.
          </li>
          <li>
            <strong>Mobile App for Stress Reduction:</strong> Flutter-based app for personalized
            stress reduction techniques.
          </li>
          <li>
            <strong>Tea Plant Nursery Management:</strong> AI-driven community project for farmers.
          </li>
        </ul>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>
          <strong>Society of Computer Sciences Member:</strong> Organized IT workshops and coding challenges
          at Sabaragamuwa University of Sri Lanka.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: Java, Python, PHP, JavaScript</li>
          <li>Frameworks: Spring Boot, Laravel, Flutter</li>
          <li>Databases: PostgreSQL, MySQL, Firebase Firestore, MongoDB</li>
          <li>Tools: Visual Studio, VS Code, Git, NetBeans</li>
        </ul>
      </section>

      <section id="education">
        <h2>Education</h2>
        <p>
          <strong>BSc (Hons) in Computing and Information Systems:</strong> Sabaragamuwa University of Sri Lanka
          (Graduation Expected: [Insert Year])
        </p>
      </section>

      <section id="volunteering">
        <h2>Volunteering</h2>
        <ul>
          <li>
            <strong>Community IT Solutions for Farmers:</strong> Empowered local farmers with
            technology-based solutions.
          </li>
          <li>
            <strong>Coding Workshop Organizer:</strong> Conducted sessions on programming for students.
          </li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: asiripramodaya@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/asiripramodaya">linkedin.com/in/asiripramodaya</a></p>
        <p>GitHub: <a href="https://github.com/asiripr">github.com/asiripr</a></p>
        <p>Phone: +94 71 234 5678</p>
      </section>
    </>
  )
}

export default App