import React from "react";
import styles from "./Services.module.scss";
import Container from "../../Layouts/Container/Container";
import {
  teethC1,
  teethC2,
  teethC3,
  teethC4,
  teethC5,
} from "../../Assets/index";

const Services = () => {
  return (
    <section className={styles.services}>
      <Container>
        <div className={styles.servicesContainer}>
          <div className={styles.service}>
            <div className={styles.icon}>
              <img src={teethC1} alt="" />
            </div>
            <h5>Teeth Whitening</h5>
            <p>
              In pretium neque a libero congue. Elit diam lectus. Prasent
              lacinia vitae sit mattis mollis maximus.
            </p>
          </div>
          <div className={styles.service}>
            <div className={styles.icon}>
              <img src={teethC2} alt="" />
            </div>
            <h5>Dental Implants</h5>
            <p>
              In pretium neque a libero congue. Elit diam lectus. Prasent
              lacinia vitae sit mattis mollis maximus.
            </p>
          </div>
          <div className={styles.service}>
            <div className={styles.icon}>
              <img src={teethC3} alt="" />
            </div>
            <h5>Missing Teeth</h5>
            <p>
              In pretium neque a libero congue. Elit diam lectus. Prasent
              lacinia vitae sit mattis mollis maximus.
            </p>
          </div>
          <div className={styles.service}>
            <div className={styles.icon}>
              <img src={teethC4} alt="" />
            </div>
            <h5>Cosmetic Dentistryg</h5>
            <p>
              In pretium neque a libero congue. Elit diam lectus. Prasent
              lacinia vitae sit mattis mollis maximus.
            </p>
          </div>
          <div className={styles.service}>
            <div className={styles.icon}>
              <img src={teethC5} alt="" />
            </div>
            <h5>Examination</h5>
            <p>
              In pretium neque a libero congue. Elit diam lectus. Prasent
              lacinia vitae sit mattis mollis maximus.
            </p>
          </div>
          <div className={styles.service}>
            <div className={styles.icon}>
              <img src={teethC1} alt="" />
            </div>
            <h5>Teeth Pain</h5>
            <p>
              In pretium neque a libero congue. Elit diam lectus. Prasent
              lacinia vitae sit mattis mollis maximus.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
