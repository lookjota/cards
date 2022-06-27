import React from "react";
import styles from "./Home.module.css";
import { ReactComponent as Sun } from "../Assets/sun01.svg";
import { ReactComponent as Libra } from "../Assets/libra.svg";
import { ReactComponent as Card } from "../Assets/card01.svg";
import About from "./About";
import Price from "./Price";
import Contact from "./Contact";

const Home = () => {
  return (
    <body>
      <br id="about" />
      <br />
      <div className={styles.div}>
        <p className={styles.p1}>Bem-Vindo</p>
        <h1 className={styles.h1}>Baralho Cigano</h1>
        <h2 className={styles.h2}>Online - ao vivo</h2>
        <br />
        <p className={styles.p2}>
          {" "}
          A Magia das cartas do Baralho Cigano / Tarot, vem do Universo. As
          cartas sao instrumentos que podem nos revelar todos os aspectos da
          experiencia humana. As cartas sao guias, que tratam de assuntos tais
          como Amor, Financas, Trabalho, Espiritualidade, Decisoes, o limite e
          ate onde sua imaginacao pode chegar...
        </p>
      </div>
      <Sun className={styles.sun} />
      <div className={styles.box1}>
        <Libra className={styles.libra} />
        <h2 className={styles.h3}>Atendimentos</h2>
        <p className={styles.line}></p>
        <p className={styles.p3}>
          iaas auishihuasihusaui huias uih ashui asihuu iasuhias uhisada ujh
          ajisod ijaoisjdo ijk aushiauhsiauhs aiushasi uhasiuh a
          isuhiuashaisuhaisuh ahsiuahsiu asuohdjao joa soiaj sioaj sohnuio oajn
          n n ana iajsnoa ins
        </p>
      </div>
      <Card className={styles.card} />
      <div className={styles.box00}>
        <h3 className={styles.h4}>Missao / Objectivo</h3>
        <p className={styles.p4}>
          uahsdiuahsi duhaisud haisudhia iuah siuha iuh saiuhsa iuhas{" "}
        </p>
        <br />
        <h3 className={styles.h5}> Visao </h3>
        <p className={styles.p5}>
          uasihj iuash aia uhsa shaiushasiu haisuh iashiau shiansjasn on asno
        </p>
      </div>
      <div>
        <About />
      </div>
      <div id="price">
        <Price />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="contact">
        <Contact />
      </div>
    </body>
  );
};

export default Home;
