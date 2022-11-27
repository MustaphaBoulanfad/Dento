import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { BsList, BsChevronDown, BsX } from "react-icons/bs";
import Container from "../../Layouts/Container/Container";
import Logo from "../../Assets/logo.webp";
import InfoNav from "./InfoNav/InfoNav";

const Navbar = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const liHasDown = [...document.getElementsByClassName(styles.hasDown)];
    if (innerWidth <= 800) {
      liHasDown.forEach((element) => {
        element.addEventListener("click", (event) => {
          console.log("yes");
          event.preventDefault();
          element.id === "1"
            ? element.childNodes[1].classList.toggle(styles.show1)
            : element.childNodes[1].classList.toggle(styles.show2);
        });
      });
    }
  }, [innerWidth]);

  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 40) {
      document.getElementById("navbarContainer").classList.add(styles.sticky);
    } else {
      document
        .getElementById("navbarContainer")
        .classList.remove(styles.sticky);
    }
  });

  const togglenavMobile = () => {
    let nav = document.getElementById("nav");
    nav.classList.toggle(styles.show);
  };

  return (
    <div className={styles.navbar}>
      <InfoNav />
      <div className={styles.mainNav} id="navbarContainer">
        <Container>
          <div className={styles.navbarContainer} id="navbarContainer">
            <div className={styles.logo}>
              <img src={Logo} alt="the logo of the page" />
            </div>
            <BsList onClick={() => togglenavMobile()} />
            <div className={styles.nav} id="nav">
              <BsX onClick={() => togglenavMobile()} />
              <nav>
                <li>
                  <a href="">Home</a>
                </li>
                <li className={styles.hasDown} id="1">
                  <a href="">
                    Pages <BsChevronDown />
                  </a>
                  <nav>
                    <li>
                      <a href="">-Home</a>
                    </li>
                    <li>
                      <a href="">-About us</a>
                    </li>
                    <li>
                      <a href="">-Service</a>
                    </li>
                    <li>
                      <a href="">-Pricing</a>
                    </li>
                    <li>
                      <a href="">-Blog</a>
                    </li>
                    <li>
                      <a href="">-Blog Details</a>
                    </li>
                    <li>
                      <a href="">-Contact</a>
                    </li>
                  </nav>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li className={styles.hasDown} id="2">
                  <a href="">
                    Blog <BsChevronDown />
                  </a>
                  <nav>
                    <li>
                      <a href="">-Blog</a>
                    </li>
                    <li>
                      <a href="">-Blog Details</a>
                    </li>
                  </nav>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </nav>
            </div>
            <button className={styles.bookNow}>Booking Now</button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
