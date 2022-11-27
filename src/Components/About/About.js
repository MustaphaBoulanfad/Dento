import React from "react";
import styles from "./About.module.scss";
import Container from "../../Layouts/Container/Container";
import { useSelector } from "react-redux";
import AboutImage from "../../Assets/about.webp";
import AboutInfo from "./AboutInfo/AboutInfo";

const About = () => {
  const skills = useSelector((state) => state.skills);
  const skillsElement = skills.map((skill) => {
    return (
      <div className={styles.skill} key={skill.id}>
        <div className={styles.info}>
          <h4>{skill.name}</h4>
          <span>{`${skill.percentage}%`}</span>
        </div>
        <div className={styles.bar}>
          <span style={{ width: `${skill.percentage}%` }}></span>
        </div>
      </div>
    );
  });

  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.aboutContainer}>
          <div className={styles.image}>
            <img src={AboutImage} alt="dentist" />
          </div>
          <div className={styles.content}>
            <h1>About Us</h1>
            <p>
              Vestibulum condimentum, risus sedones honcus rutrum, salah lacus
              mollis zurna, nec finibusmi velit advertisis. Proin vitae odin
              quis magna aliquet laciniae. Etiam auctor, nisi vel. Pellentesque
              ultrices nisl quam iaculis, nec pulvinar augue.
            </p>
            <div className={styles.skills}>{skillsElement}</div>
          </div>
        </div>
        <AboutInfo />
      </Container>
    </section>
  );
};

export default About;
