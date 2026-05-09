import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// replace with your actual image path
import CertificateImg from "../About/Udacity.jpg";
import "../About/About.css";

export default function About() {
  return (
    <section id="about" className="container py-5">
      <h2 className="text-center mb-4 fw-bold">About Me</h2>
      <section className="row align-items-center">
        {/* Description */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <p className="mt-3 text-muted">
            I am a passionate{" "}
            <strong>Full-Stack Web-Site Developer and UI/UX Designer.</strong>{" "}
            specializing in
            <strong> Front-End development</strong> — creating dynamic,
            responsive, and user-friendly web applications using{" "}
            <strong>React.js</strong> and modern web technologies. My strong
            foundation in
            <strong>
              {" "}
              HTML, CSS, Media Query, Bootstrap, JavaScript, and jQuery
            </strong>
            enables me to design clean, high-performance interfaces that deliver
            exceptional user experiences.
            <br />
            <br />
            On the <strong>Back-End</strong>, I work with
            <strong> Node.js, Express.js, and MySQL</strong> to build robust,
            secure, and scalable server-side applications that integrate
            seamlessly with modern front-end frameworks.
            <br />
            <br />
            As a <strong>Full-Stack Developer (Front-End Focused)</strong>, I am
            passionate about building complete solutions — from concept to
            deployment — with strong attention to design, functionality, and
            performance optimization.
          </p>
          <p>
            I have skills in <strong>UI/UX design</strong> using Figma, where I
            create clean, user-friendly designs and prototypes. I also use
            React.js to turn these designs into responsive and interactive web
            applications.
          </p>
        </div>

        {/* Skills Section */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow bg-light">
            <h4 className="mb-3 fw-semibold text-center">
              Tech Stack & Skills
            </h4>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              <span className="badge bg-primary p-2">HTML</span>
              <span className="badge bg-secondary p-2">CSS</span>
              <span className="badge bg-success p-2">Media Query</span>
              <span className="badge bg-danger p-2">Bootstrap</span>
              <span className="badge bg-warning text-dark p-2">JavaScript</span>
              <span className="badge bg-info text-dark p-2">jQuery</span>
              <span className="badge bg-dark p-2">React.js</span>
              <span className="badge bg-success p-2">Git & GitHub</span>
              <span className="badge bg-primary p-2">Node.js</span>
              <span className="badge bg-secondary p-2">Express.js</span>
              <span className="badge bg-warning text-dark p-2">MySQL</span>
              <span className="badge bg-info text-dark p-2">REST APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certificate-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 cert-title">Certifications</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div
                style={{ background: "#f8f8f8" }}
                className="card shadow-lg p-4 text-center cert-card border-0 bg-light"
              >
                <h5 className="fw-bold">Fundamentals of Programming</h5>
                <p className="text-muted">
                  Awarded by{" "}
                  <a
                    href="https://www.udacity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    Udacity
                  </a>
                </p>
                <a
                  href="https://www.udacity.com/certificate/e/a1614098-f286-11ef-9d79-fba352ced2fb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="container my-1">
        <div className="bg-white shadow-md p-4 m-2 rounded-3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Full-Stack Web-Site Development Training at
          </h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-3">
            Evangadi Tech
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Successfully completed an immersive Full-Stack Development program,
            mastering:
          </p>
          <ul className="ul mb-4">
            <li>
              <strong>Front-end:</strong> HTML, CSS, JavaScript, Bootstrap,
              React.js, Media Query
            </li>
            <li>
              <strong>Back-end:</strong> Node.js, Express.js, REST APIs, MySQL
            </li>
            <li>
              <strong>Other Skills:</strong> UI/UX design, responsive layouts,
              version control (Git & GitHub), project deployment
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Built multiple{" "}
            <span className="font-semibold">real-world projects</span> applying
            agile workflows and full-stack principles.
          </p>
          <a
            href="https://www.evangadi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="Evan"
          >
            Learn more at Evangadi
          </a>
        </div>
      </section>
    </section>
  );
}
