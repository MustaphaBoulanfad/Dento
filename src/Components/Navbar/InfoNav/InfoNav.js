import React from "react";
import styles from "./InfoNav.module.scss";
import Container from "../../../Layouts/Container/Container";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";

const InfoNav = () => {
  return (
    <div className={styles.infoNav}>
      <Container>
        <div className={styles.infoContainer}>
          <div className={styles.contact}>
            <a href="#">
              <FaMapMarkerAlt />
              <span>28 Jackson Street, Chicago, 7788569 USA</span>
            </a>
            <a href="#">
              <FaEnvelope />
              <span>info.dento@gmail.com</span>
            </a>
          </div>
          <div className={styles.icons}>
            <a href="#">
              <div className={styles.wrapper}>
                <FaFacebookF aria-describedby="tp-container" />
                <div id="tp-container" role="tooltip">
                  Faceook
                </div>
              </div>
            </a>
            <a href="#">
              <div className={styles.wrapper}>
                <FaGooglePlusG aria-describedby="tp-container" />
                <div id="tp-container" role="tooltip">
                  Google
                </div>
              </div>
            </a>
            <a href="#">
              <div className={styles.wrapper}>
                <FaTwitter aria-describedby="tp-container" />
                <div id="tp-container" role="tooltip">
                  Twitter
                </div>
              </div>
            </a>
            <a href="#">
              <div className={styles.wrapper}>
                <FaLinkedinIn aria-describedby="tp-container" />
                <div id="tp-container" role="tooltip">
                  LinkedIn
                </div>
              </div>
            </a>
            <a href="#">
              <div className={styles.wrapper}>
                <FaPinterestP aria-describedby="tp-container" />
                <div id="tp-container" role="tooltip">
                  Pinterest
                </div>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoNav;
