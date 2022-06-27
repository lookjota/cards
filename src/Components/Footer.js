import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Star } from "../Assets/star.svg";

const Footer = () => {
  return (
    <footer className={styles.all}>
      <div className={styles.foot}>
        <div className={styles.box}>
          <Star />
          <div className={styles.design}>Design by J C Lisboa </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
