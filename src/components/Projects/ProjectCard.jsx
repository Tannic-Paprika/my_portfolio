import React from "react";
import styles from "./ProjectCard.module.css";

// Import project images
import galleryImage from "../../../assets/projects/gallery.jpg";
import projectImage from "../../../assets/projects/project.png";
import project1Image from "../../../assets/projects/project1.png";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  // Map the image source to the appropriate imported image
  const getImage = (imageSrc) => {
    switch (imageSrc) {
      case "gallery.jpg":
        return galleryImage;
      case "project.png":
        return projectImage;
      case "project1.png":
        return project1Image;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={getImage(imageSrc)} // Use the mapped image
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link}target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};
