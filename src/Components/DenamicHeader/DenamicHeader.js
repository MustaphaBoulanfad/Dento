import React from "react";
import styles from "./DenamicHeader.module.scss";
import Container from "../../Layouts/Container/Container";

const DenamicHeader = ({ text }) => {
  return (
    <header className={styles.denamic}>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.content}>
            <h2>{text}</h2>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default DenamicHeader;
