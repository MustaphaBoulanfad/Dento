import React from "react";
import styles from "./Path.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Container from "../../Layouts/Container/Container";

const Path = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <p className={styles.path}>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
        <span>
          &gt; {"  "}
          {pathname.slice(1)}
        </span>
      </p>
    </Container>
  );
};

export default Path;
