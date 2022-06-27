import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../Assets/logo01.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Contact } from "../Assets/contact.svg";
import { ReactComponent as Instagram } from "../Assets/instagram.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo className={`${styles.logo} ${styles.button}`} />
      </Link>
      <nav className={styles.nav}>
        <a className={`${styles.box1} ${styles.button}`} href="#about">
          Sobre
        </a>
        <a className={`${styles.box2} ${styles.button}`} href="#price">
          Preco
        </a>
        <a className={`${styles.box3} ${styles.button}`} href="#contact">
          <Contact />
        </a>
        <a
          className={`${styles.box4} ${styles.button}`}
          href="http://www.google.com"
          target="_back"
        >
          <Instagram />
        </a>
      </nav>
    </header>
  );
};

export default Header;
