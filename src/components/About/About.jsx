import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.webp")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I am a backend developer with experience in Django, Flask, FastAPI, and NodeJs. 
              I am passionate about programming and continuously learning backend technologies like microservices architecture, API development, and cloud computing
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>FullStack Developer</h3>
              <p>
              I have experience in full-stack development, integrating React-based frontends with microservices-driven backends. 
              I’ve worked with Redux for state management and developed scalable APIs using modern backend technologies
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
