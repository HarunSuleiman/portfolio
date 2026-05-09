import React from "react";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import "../Contact/Contact.css";
export default function Contact() {

//Form state


   const [formData, setFormData] = useState({
     name: "",
     email: "",
     subject: "",
     message: "",
   });

   // STATUS MESSAGE
   const [status, setStatus] = useState("");

   // HANDLE INPUT CHANGE
   const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     });
   };

   // HANDLE FORM SUBMIT
   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       const response = await axios.post(
         "http://localhost:5000/contact",
         formData,
       );

       setStatus(response.data.message);

       // CLEAR FORM
       setFormData({
         name: "",
         email: "",
         subject: "",
         message: "",
       });
     } catch (error) {
       console.log(error);

       setStatus("Failed to send message");
     }
   };

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p> Have a project idea or want to work together? Send me a message. </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
        
      </form>

      <div className="contact-grid">
        <a
          href="mailto:harunsuleiman55@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaEnvelope className="icon" style={{ color: "#D44638" }} />
          <span>Email</span>
          <p>harunsuleiman55@gmail.com</p>
        </a>

        <a
          href="https://github.com/HarunSuleiman"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="icon" style={{ color: "#181717" }} />
          <span>GitHub</span>
          <p>/HarunSuleiman</p>
        </a>

        <a
          href="https://www.linkedin.com/in/harun-suleiman-52760935a"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="icon" style={{ color: "#0077B5" }} />
          <span>LinkedIn</span>
          <p>/harun-suleiman-52760935a</p>
        </a>

        <a
          href="https://t.me/H_S_1100"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaTelegram className="icon" style={{ color: "#0088CC" }} />
          <span>Telegram</span>
          <p>@H_S_1100</p>
        </a>
      </div>

      <div className="phone_no">
        <h2>Phone Numbers</h2>
        <h3>+251967834837</h3>
        <h3>+251722197710</h3>
      </div>
      <div className="row align-items-center justify-content-center flex-column flex-sm-row">
        <div className="col-auto">
          <div className="small m-0">
            {" "}
            Copyright&copy; {new Date().getFullYear()} Harun Suleiman | All
            Rights Reserved
          </div>
        </div>
        <div className="col-auto">
          <a className="small" href="#!">
            Privacy
          </a>
          <span className="mx-1">&middot;</span>
          <a className="small" href="#!">
            Terms
          </a>
          <span className="mx-1">&middot;</span>
          <a className="small" href="#!">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
