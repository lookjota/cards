import React from "react";
import styles from "./About.module.css";
import { ReactComponent as Eye } from "../Assets/eye.svg";

const About = () => {
  return (
    <div>
      <div className={styles.box}>
        <p className={styles.p1}>Seja Bem-Vindo</p>
        <h2 className={styles.h1}>Sobre Minha Jornada</h2>
        <p className={styles.line}></p>
        <p className={styles.p2}>
          {" "}
          uaihs ahi asuh aisuah iaush iashia suhaishaisunbans oasjo aisiuah
          siauhs asnaisub aiush asdasd asd asdasasd asdqweq cqscq wqw
        </p>
      </div>
      <Eye className={styles.eye} />
    </div>
  );
};

export default About;
