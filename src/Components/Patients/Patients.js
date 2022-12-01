import React from "react";
import styles from "./Patients.module.scss";
import Container from "../../Layouts/Container/Container";
import patient from "../../Assets/patient.webp";

const Patients = () => {
  return (
    <div className={styles.patients}>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.patientsContainer}>
          <div className={styles.patientsHolder}>
            <div className={styles.patient}>
              <div className={styles.image}>
                <img src={patient} alt="dental patient" />
              </div>
              <div className={styles.content}>
                <p>
                  “I'd been avoiding the dentist for years due to bad
                  experiences. A reminder SMS is sent the working day
                  beforehand. I also had a call confirming appointment. I have
                  been a patient ever since. My dentist is very reassuring and
                  very helpful. Excellent treatment and advice.”
                </p>
                <p className={styles.name}>Arron Ramsey</p>
                <span>Dental patient</span>
              </div>
            </div>
            <div className={styles.patient}>
              <div className={styles.image}>
                <img src={patient} alt="dental patient" />
              </div>
              <div className={styles.content}>
                <p>
                  “I'd been avoiding the dentist for years due to bad
                  experiences. A reminder SMS is sent the working day
                  beforehand. I also had a call confirming appointment. I have
                  been a patient ever since. My dentist is very reassuring and
                  very helpful. Excellent treatment and advice.”
                </p>
                <p className={styles.name}>Arron Ramsey</p>
                <span>Dental patient</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Patients;
