import React from "react";
import styles from "./styles/cardheader.module.css";

const CardHeader = ({ card }) => {
  return (
    <div className={styles.cardHeaderContainer}>
      <div className={styles.cardId}>
        <h2>0{card.id}</h2>
        <div className={styles.triangle}></div>
      </div>
      <h3>{card.title}</h3>
      <p>{card.para}</p>
    </div>
  );
};

export default CardHeader;
