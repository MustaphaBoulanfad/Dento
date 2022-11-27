import React from "react";
import styles from "./AboutInfo.module.scss";
import { BiBookAlt, BiAtom, BiHeart, BiIdCard } from "react-icons/bi";

const AboutInfo = () => {
  return (
    <div className={styles.AboutInfo}>
      <div className={styles.item}>
        <BiAtom />
        <p>20</p>
        <h3>Years Of experience</h3>
      </div>
      <div className={styles.item}>
        <BiHeart />
        <p>700+</p>
        <h3>Happy Patients</h3>
      </div>
      <div className={styles.item}>
        <BiBookAlt />
        <p>120</p>
        <h3>Certificate</h3>
      </div>
      <div className={styles.item}>
        <BiIdCard />
        <p>40+</p>
        <h3>Dentist</h3>
      </div>
    </div>
  );
};

export default AboutInfo;
