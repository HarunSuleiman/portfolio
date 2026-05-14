import React from "react";
import "./Projects.css";
import netflixImg from "./banners/netflix.jpg";
import AmazonImg from "./banners/amazon.png";
import AppleImg from "./banners/mac-laptop.jpg";
import GalleryImg from "./banners/gallery.jpg"
export default function Projects() {
  const projectList = [
    {
      title: "Netflix-Project",
      img: netflixImg,
      description: "Responsive Netflix-clone.",
      link: "https://netflexclone-harunsuleiman.netlify.app/",
    },
    {
      title: "Amazon-Project",
      img: AmazonImg,
      description: "Amazon frontend using API integration.",
      link: "https://amazon-website-harunsuleiman.netlify.app/",
    },
    {
      title: "  Apple-website project",
      img: AppleImg,
      description: "Apple-website Using React routing.",
      link: "https://aple-website-frontend-by-harunsuleima.netlify.app/",
    },
    {
      title: "Image Gallery",
      img: GalleryImg,
      description: "Image gallery using HTML,CSS and javascript.",
      link: "https://github.com/HarunSuleiman/gallery-updated.git",
    },
    // {
    //   title: "Project Two",
    //   img: "/images/project2.jpg",
    //   description: "A short description of your second project.",
    //   link: "https://yourlink.com",
    // },
  ];

  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
