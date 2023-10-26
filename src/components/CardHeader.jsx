import React from 'react'
import styles from "./styles/cardheader.module.css"

const CardHeader = ({card}) => {
  return (
    <div className={styles.cardHeaderContainer} style={{
        backgroundColor : "red"
    }}>
        <h3>hello</h3>
    </div>
  )
}

export default CardHeader