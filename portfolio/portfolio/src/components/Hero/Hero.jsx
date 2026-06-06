import React, { useEffect, useState } from "react";
import "../../components/Hero/Hero.css";
import MyPhoto from "../../components/Hero/MyPhoto.jpg";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "I am Full-Stack Web-Site Developer and UI/UX Designer .Specializing in creating dynamic and responsive web applications using React.js,javascript,TypeScript, and modern web technologies.On the Back-End, I work with Node.js, Express.js, and MySQL to build robust, secure, and scalable server-side applications that integrate seamlessly with modern front-end frameworks.I love solving problems and continuously learning new tools.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        const char = fullText[index];
        if (char !== undefined) {
        
          setDisplayedText((prev) => prev + char);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="profile">
        <img src={MyPhoto} alt="Profile" className="hero-img" />
        <h1>
          Hello, I am <span>Harun Suleiman</span>
        </h1>
      </div>
      <div className="description">
        <p>{displayedText}</p>
      </div>
    </section>
  );
}
