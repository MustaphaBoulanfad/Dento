import React from "react";
import styles from "./Footer.module.scss";
import Container from "../../Layouts/Container/Container";
import logo from "../../Assets/logo.webp";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.info}>
            <a href="/" className={styles.logo}>
              <img src={logo} alt="logo of dento" />
            </a>
            <p>
              Etiam sutor risus, dapibus act elefend katen, lacinia sitamet
              denim. Mauris sagittis kansa interdum dignissim.
            </p>
            <a href="#">
              <FaMapMarkerAlt />
              28 Jackson Street, Chicago, 7788569 USA
            </a>
            <a href="#">
              <FaPhoneAlt />
              +84. 2252. 2250. 122
            </a>
            <a href="#">
              <FaEnvelope />
              info.dento@gmail.com
            </a>
          </div>
          <div className={styles.hours}>
            <h3>Opening hours</h3>
            <p>
              <span>Mon-Wed</span>
              <span>8.00-18.00</span>
            </p>
            <p>
              <span>Thu-Fri</span>
              <span>8.00-17.00</span>
            </p>
            <p>
              <span>Sat</span>
              <span>9.00-17.00</span>
            </p>
            <p>
              <span>Sun</span>
              <span>10.00-17.00</span>
            </p>
            <p>
              <span>Holiday</span>
              <span>Closed</span>
            </p>
          </div>
          <div className={styles.links}>
            <h3>Quick Links</h3>
            <nav>
              <li>About</li>
              <li>FAQs</li>
              <li>Contact</li>
              <li>Policy</li>
              <li>News</li>
              <li>Advisors</li>
              <li>Careers</li>
              <li>Dentist</li>
              <li>Services</li>
              <li>Legals</li>
            </nav>
          </div>
          <div className={styles.news}>
            <h3>Newsletter</h3>
            <p>We will send out weekly newest article and some great offers</p>
            <form>
              <input type="email" placeholder="Email Address" />
              <button type="submit">
                <FaTelegramPlane />
              </button>
            </form>
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
        </div>
      </Container>
      <Container>
        <div className={styles.copyRight}>
          <p>
            Copyright ©2022 All rights reserved | This template is made with{" "}
            <FaRegHeart /> by
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
