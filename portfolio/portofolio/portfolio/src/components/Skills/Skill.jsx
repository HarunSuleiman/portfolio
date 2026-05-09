import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaDatabase,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMediafire,
  SiJquery,
  SiExpress,
  SiMysql,
  SiApollographql,
} from "react-icons/si";
import "../Skills/Skill.css";


export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> },
    { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" /> },
    { name: "Media Query", icon: <SiMediafire className="skill-icon media" /> },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="skill-icon bootstrap" />,
    },
    { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
    { name: "jQuery", icon: <SiJquery className="skill-icon jquery" /> },
    {
      name: "API Integration",
      icon: <SiApollographql className="skill-icon api" />,
    },
    { name: "React", icon: <FaReact className="skill-icon react" /> },
    {
      name: "Backend ",
      icon: <FaDatabase className="skill-icon backend" />,
    },
    //backend part
    { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
    { name: "Express.js", icon: <SiExpress className="skill-icon express" /> },
    { name: "MySQL", icon: <SiMysql className="skill-icon mysql" /> },
    // {
    //   name: "Database Design",
    //   icon: <FaDatabase className="skill-icon database" />,
    // },

    // --- Tools & Version Control ---
    { name: "Git & GitHub", icon: <FaGitAlt className="skill-icon git" /> },
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
