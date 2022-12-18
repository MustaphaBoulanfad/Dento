import React, { useEffect } from "react";
import styles from "./Navbar.module.scss";
import { BsList, BsChevronDown, BsX } from "react-icons/bs";
import Container from "../../Layouts/Container/Container";
import Logo from "../../Assets/logo.webp";
import InfoNav from "./InfoNav/InfoNav";
import { useSelector, useDispatch } from "react-redux";
import { changeInnerWidth } from "../../Store/MedicalSlice";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const innerWidth = useSelector((state) => state.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeInnerWidth(window.innerWidth));
  }, [dispatch]);

  window.addEventListener("resize", () => {
    dispatch(changeInnerWidth(window.innerWidth));
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

  const liHasDown = [...document.getElementsByClassName(styles.hasDown)];
  if (innerWidth <= 800) {
    liHasDown.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        element.id === "1"
          ? element.nextElementSibling.classList.toggle(styles.show1)
          : element.nextElementSibling.classList.toggle(styles.show2);
      });
    });
  }

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
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      style={({ isActive }) =>
                        isActive ? styles.active : undefined
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <a href="#" className={styles.hasDown} id="1">
                      Pages <BsChevronDown />
                    </a>
                    <nav>
                      <li>
                        <NavLink
                          to="/"
                          style={({ isActive }) =>
                            isActive ? styles.active : undefined
                          }
                        >
                          -Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                          style={({ isActive }) =>
                            isActive ? styles.active : undefined
                          }
                        >
                          -About us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/service"
                          style={({ isActive }) =>
                            isActive ? styles.active : undefined
                          }
                        >
                          -Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pricing"
                          style={({ isActive }) =>
                            isActive ? styles.active : undefined
                          }
                        >
                          -Pricing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          style={({ isActive }) =>
                            isActive ? styles.active : undefined
                          }
                        >
                          -Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blogdetails"
                          style={({ isActive }) =>
                            isActive ? styles.active : undefined
                          }
                        >
                          -Blog Details
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          style={({ isActive }) =>
                            isActive ? styles.active : undefined
                          }
                        >
                          -Contact
                        </NavLink>
                      </li>
                    </nav>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      style={({ isActive }) =>
                        isActive ? styles.active : undefined
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service"
                      style={({ isActive }) =>
                        isActive ? styles.active : undefined
                      }
                    >
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pricing"
                      style={({ isActive }) =>
                        isActive ? styles.active : undefined
                      }
                    >
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <a href="#" className={styles.hasDown} id="2">
                      Blog <BsChevronDown />
                    </a>
                    <nav>
                      <li>
                        <NavLink
                          to="/blog"
                          style={({ isActive }) =>
                            isActive ? styles.active : undefined
                          }
                        >
                          -Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blogdetails"
                          style={({ isActive }) =>
                            isActive ? styles.active : undefined
                          }
                        >
                          -Blog Details
                        </NavLink>
                      </li>
                    </nav>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      style={({ isActive }) =>
                        isActive ? styles.active : undefined
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
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
