import React from 'react'
import styles from  "../pages/home/home.module.css"

const ProductCard = ({product}) => {
  return (
    <div className={`${styles.reviewCard} ${styles.productCardHover}`}>
        <img src={product.thumbnail} alt=""  height={200} style={{
            width : "100%",
            borderRadius : 15
        }} />
        <div className={styles.productHeadingContainer}>
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
        </div>        
    </div>
  )
}

export default ProductCard;