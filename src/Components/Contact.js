import React from "react";
import styles from "./Contact.module.css";
import { ReactComponent as Email } from "../Assets/gmail.svg";
import { ReactComponent as Social } from "../Assets/instagram.svg";
import { ReactComponent as Contato } from "../Assets/contact.svg";
import { ReactComponent as Card02 } from "../Assets/card02.svg";

const Contact = () => {
  return (
    <div>
      <Card02 className={styles.card02} />
      <div className={styles.line}></div>
      <div className={styles.box00}>
        <div className={styles.box01}>
          <h3>
            {" "}
            <Email className={styles.emblem} />{" "}
          </h3>
          <p></p>
        </div>
        <div className={styles.box02}>
          <h3>
            {" "}
            <Contato className={styles.emblem} />{" "}
          </h3>
          <p></p>
        </div>
        <div className={styles.box03}>
          <a href="http://www.google.com" target="_back">
            <Social className={styles.emblem} />
          </a>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
