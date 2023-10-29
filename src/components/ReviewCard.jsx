import React from "react";
import styles from "../pages/home/home.module.css";

export default function ReviewCard({ review }) {
  return (
    <div className={styles.reviewCard}>
      <p className={styles.reviewRating}>{"⭐".repeat(review.rating)}</p>
      <p>{review.desc}</p>
    </div>
  );
}
