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
              <FaFacebookF />
            </a>
            <a href="#">
              <FaGooglePlusG />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoNav;
