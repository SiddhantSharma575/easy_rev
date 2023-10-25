import React from 'react'
import styles from "./home.module.css"
import { COLORS } from '../../themes/colors'

const Home = () => {
  return (
    <>
      <div className={styles.box} ></div>
      <div className={styles.box1} ></div>
      <div className={styles.box2} ></div>
      <div className={styles.box3} ></div>
      <div className={styles.box4} ></div>
      <div className={styles.topFeedContainer}>
        <div className={styles.topInnerContainer}>
          <h3 style={{ color: COLORS.TEXTCOLOR }} >Easy Rev</h3>
          <p style={{ color: COLORS.TEXTCOLOR }}>
            Easy Rev is a review card for business owners, making it convenient for business owners to collect reviews and insights from customers.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home