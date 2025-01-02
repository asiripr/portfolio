import React from 'react';

function Projects() {
  return (
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
  );
}

export default Projects;
