import React from "react";
import styles from "./Ourdentists.module.scss";
import Container from "../../Layouts/Container/Container";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Ourdentists = () => {
  return (
    <section className={styles.ourdentists}>
      <Container>
        <div className={styles.dentistsContainer}>
          <h1>Our Dentists</h1>
          <div className={styles.dentists}>
            <div className={`${styles["dentist-1"]} ${styles.dentist}`}>
              <div className={styles.info}>
                <h3>Michael Barley</h3>
                <p>Implant Expert</p>
              </div>
              <div className={styles.social}>
                <a href="/">
                  <FaFacebookF />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaGooglePlusG />
                </a>
              </div>
            </div>
            <div className={`${styles["dentist-2"]} ${styles.dentist}`}>
              <div className={styles.info}>
                <h3>Michael Barley</h3>
                <p>Implant Expert</p>
              </div>
              <div className={styles.social}>
                <a href="/">
                  <FaFacebookF />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaGooglePlusG />
                </a>
              </div>
            </div>
            <div className={`${styles["dentist-3"]} ${styles.dentist}`}>
              <div className={styles.info}>
                <h3>Michael Barley</h3>
                <p>Implant Expert</p>
              </div>
              <div className={styles.social}>
                <a href="/">
                  <FaFacebookF />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaGooglePlusG />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Ourdentists;
