import React from "react";
import styles from "./Header.module.scss";
import Container from "../../Layouts/Container/Container";

const Header = () => {
  return (
    <header>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.content}>
            <h2>
              We Believe Everyone Should Have Easy Access To Great Dental Care
            </h2>
            <p>
              As a leading industry innovator, Dento is opening up exciting new
              opportunities for dental professionals, investors, employees &
              suppliers. Contact us to find out what we have to offer you.
            </p>
            <div className={styles.buttons}>
              <button className={styles.primary}>Get started</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
