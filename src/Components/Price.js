import React from "react";
import styles from "./Price.module.css";
import { ReactComponent as Cigano } from "../Assets/cigano.svg";
import { ReactComponent as Radionica } from "../Assets/radionica.svg";

const Price = () => {
  return (
    <div className={styles.box00}>
      <div className={styles.box01}>
        <p className={styles.p1}>Baralho Cigano</p>
        <h2 className={styles.h1}>Mesa Real</h2>
        <p className={styles.p2}>
          {" "}
          aushaiu sh aiushaisua jsdhnai sndiausn dausn diausnd iaun iausnd
          iausnd oauno ona nsdounas dounaou snod an haisuha isuhas
          siauhasiuhasiuhasuhas iuahsi
        </p>
        <p className={styles.descont01}> R$ 150,00 </p>
        <p className={styles.full01}> R$ 100,00 </p>
      </div>

      <div className={styles.box02}>
        <p className={styles.p3}>Mesa Radionica</p>
        <h2 className={styles.h2}>Radiestesia</h2>
        <p className={styles.p4}>
          {" "}
          uiashiauhsa iauhsiauhsaiuhs iaushiauhsais iuhasiausiaush aiushaisuh a
        </p>
        <p className={styles.descont02}> R$ 250,00 </p>
        <p className={styles.full02}> R$ 150,00 </p>
      </div>
      {/* <Radionica className={styles.rad} /> */}
      <Cigano className={styles.cigano} />
    </div>
  );
};

export default Price;
