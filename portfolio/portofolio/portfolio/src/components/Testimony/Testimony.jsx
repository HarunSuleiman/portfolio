import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Testimony.css";
import MiftahImg from "../Testimony/Miftah.jpg";
import AbduImg from "../Testimony/Abdu.jpeg";
import "../Testimony/Testimony.css";
const Testimony = () => {
  return (
    <section className="testimony-section py-5">
      <div className="container">
        <h3 className="text-center mb-5 testimony-title">
          What People Say About Me
        </h3>
        <div className="row g-4 justify-content-center">
          {/* Testimony 1 */}
          <div className="col-md-6">
            <div className="card shadow-lg p-4 testimony-card">
              <p className="testimony-text">
                “Harun is a highly skilled React developer. His ability to
                combine <strong>Bootstrap</strong> with responsive media queries
                gave our website a modern, polished look. He’s detail-oriented,
                professional, and always delivers on time.”
              </p>
              <div className="d-flex align-items-center mt-3">
                <img
                  src={MiftahImg}
                  alt="Client 1"
                  className="rounded-circle testimony-img"
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Miftah Ibrahim</h6>
                  <small className="text-muted">
                    Agentic AI Builder,Freelancer
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Testimony 2 */}
          <div className="col-md-6">
            <div className="card shadow-lg p-4 testimony-card">
              <p className="testimony-text">
                “I was impressed with Harun’s creativity and technical skills.
                He built a fast, responsive app with React and made sure the UI
                looked perfect on all devices. His dedication and
                problem-solving mindset made the whole process smooth.”
              </p>
              <div className="d-flex align-items-center mt-3">
                <img
                  src={AbduImg}
                  alt="Client 2"
                  className="rounded-circle testimony-img"
                />
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Abdurehman kero</h6>
                  <small className="text-muted">
                    {" "}
                    WebApp,Computer engineer
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-center my-5">
        <h2>My Internship Project Overview</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BdMP_q3GYGk"
          title="Internship Explanation Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
    </section>
  );
};

export default Testimony;
