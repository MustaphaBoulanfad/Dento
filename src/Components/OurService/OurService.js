import React from "react";
import styles from "./OurService.module.scss";
import Container from "../../Layouts/Container/Container";
import {
  teeth1,
  teeth2,
  teeth3,
  teeth4,
  teeth5,
  teeth6,
} from "../../Assets/index";
import serviceImage from "../../Assets/serviceImage.webp";
import { BsFillPlayFill } from "react-icons/bs";

const OurService = () => {
  return (
    <div className={styles.OurService}>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.serviceContainer}>
          <div className={styles.content}>
            <h1>Our services</h1>
            <div className={styles.services}>
              <div className={styles.item}>
                <img src={teeth1} alt="service teeth" />
                <p>Teeth Whitening</p>
              </div>
              <div className={styles.item}>
                <img src={teeth2} alt="service teeth" />
                <p>Missing Teeth</p>
              </div>
              <div className={styles.item}>
                <img src={teeth3} alt="service teeth" />
                <p>Teeth Whitening</p>
              </div>
              <div className={styles.item}>
                <img src={teeth4} alt="service teeth" />
                <p>Cosmetic Dentistry</p>
              </div>
              <div className={styles.item}>
                <img src={teeth5} alt="service teeth" />
                <p>Examination</p>
              </div>
              <div className={styles.item}>
                <img src={teeth6} alt="service teeth" />
                <p>Teeth Pain</p>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img src={serviceImage} alt="service" />
            <a href="#">
              <BsFillPlayFill />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurService;
