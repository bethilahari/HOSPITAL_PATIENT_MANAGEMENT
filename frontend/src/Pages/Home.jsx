import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hospital Patient Management System</h1>
          <p>
            Welcome to the Hospital Patient Management System. This application
            helps hospitals efficiently manage patient records by allowing staff
            to register new patients, update medical information, view patient
            details, and maintain records in an organized manner.
          </p>

          <div className="buttons">
            <Link to="/register">
              <button className="btn">Register Patient</button>
            </Link>

            <Link to="/patients">
              <button className="btn btn-secondary">
                View Patients
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700"
            alt="Hospital"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Our Features</h2>

        <div className="feature-container">

          <div className="card">
            <h3>Patient Registration</h3>
            <p>
              Register new patients quickly with personal and medical
              information.
            </p>
          </div>

          <div className="card">
            <h3>Medical Records</h3>
            <p>
              Store and update patient diagnosis, treatment, and doctor
              information.
            </p>
          </div>

          <div className="card">
            <h3>Easy Updates</h3>
            <p>
              Modify patient information whenever necessary using simple forms.
            </p>
          </div>

          <div className="card">
            <h3>Patient Database</h3>
            <p>
              View all patient records in a well-organized table with update and
              delete options.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="about-home">
        <h2>About This Project</h2>

        <p>
          This Hospital Patient Management System is developed using React,
          Spring Boot, and MySQL. It provides an easy-to-use interface for
          managing patient information while ensuring fast and secure access to
          hospital records.
        </p>
      </section>

    </div>
  );
}

export default Home;