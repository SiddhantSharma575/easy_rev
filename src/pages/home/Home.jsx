import React, { useState } from "react";
import styles from "./home.module.css";
import { COLORS } from "../../themes/colors";
import { Card, Review, products } from "../../constants/data";
import CardHeader from "../../components/CardHeader";
import ReviewCard from "../../components/ReviewCard";
import ProductCard from "../../components/ProductCard";
import Faqs from "../../components/Faqs";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"

const Home = () => {
  const [productLeftIndex, setproductLeftIndex] = useState(0);
  const [productRightIndex, setproductRightIndex] = useState(6);
  const [reviewLeftIndex,  setReviewLeftIndex] = useState(0);
  const [reviewRightIndex,  setReviewRightIndex] = useState(6);


  const handleProductRightChevron = () => {
    setproductLeftIndex(productRightIndex);
    setproductRightIndex(productRightIndex + 6);
  }
  const handleProductLeftChevron = () => {
    setproductLeftIndex(productLeftIndex - 6);
    setproductRightIndex(productRightIndex - 6);
  }
  const handleReviewLeftChevron = () => {
    setReviewLeftIndex(reviewLeftIndex-6);
    setReviewRightIndex(reviewRightIndex-6);
  }
  const handleReviewRightChevron = () => {
    setReviewLeftIndex(reviewRightIndex);
    setReviewRightIndex(reviewRightIndex + 6);
  }
  return (
    <div>
      <div className={styles.box}></div>
      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
      <div className={styles.box3}></div>
      <div className={styles.box4}></div>
      <div className={styles.topFeedContainer}>
        <div className={styles.topInnerContainer}>
          <h3 style={{ color: COLORS.TEXTCOLOR }}>Easy Rev</h3>
          <p style={{ color: COLORS.TEXTCOLOR }}>
            Easy Rev is a review card for business owners, making it convenient
            for business owners to collect reviews and insights from customers.
          </p>
        </div>
      </div>
      <div className={styles.cardFeedContainer}>
        <h1>Why Easy Rev ?</h1>
        <div className={styles.cardFeedInnerContainer}>
          {Card.map((card) => (
            <CardHeader card={card} />
          ))}
        </div>
      </div>
      <div className={styles.setup}>
        <div>
          <h1>How does it work?</h1>
          <p>
            You set up the card in 2 minutes by adding relevant words for your
            business. Your Customers taps on NFC or scans QR code to access the
            review page. A personalised review will be written for the user
            based on what he selected and he’ll post on your page effortlessly.
          </p>
        </div>
        <div>
          <h1>How to Setup the card?</h1>
          <p>
            A card setup can be done within 2 minutes. Easy step by step guide
            will be given to you. Review can be given to any Google Business:
            Swiggy, Zomato, Instagram, Facebook page.
          </p>
        </div>
      </div>
      <div style={{
        position: "relative"
      }}>
        <div className={styles.reviews}>
          <h1>Our Generated Review Samples</h1>
          {
            reviewLeftIndex > 0 && (
              <HiOutlineChevronLeft size={22} className={styles.leftIcon} onClick={handleReviewLeftChevron} />
            )
          }
          <div className={styles.reviewsContainer}>
            {Review.slice(reviewLeftIndex,reviewRightIndex).map((review) => (
              <ReviewCard review={review} />
            ))}
          </div>
          {
            Review.length > reviewRightIndex && (
              <HiOutlineChevronRight size={22} className={styles.rightIcon} onClick={handleReviewRightChevron} />
            )
          }
        </div>
      </div>
      <div style={{
        position: "relative"
      }}>
        <div className={styles.reviews}>
          <h1>Product Catalogue</h1>
          {
            productLeftIndex > 0 && (
              <HiOutlineChevronLeft size={22} className={styles.leftIcon} onClick={handleProductLeftChevron} />
            )
          }
          <div className={`${styles.reviewsContainer}`} >
            {
              products.slice(productLeftIndex, productRightIndex).map((product) => (
                <ProductCard product={product} />
              ))
            }
          </div>
          {
            products.length > productRightIndex && (
              <HiOutlineChevronRight size={22} className={styles.rightIcon} onClick={handleProductRightChevron} />
            )
          }
        </div>
      </div>
      <div className={styles.reviews}>
        <h1>FAQ</h1>
        <div className={styles.faqContainer}>
          <Faqs />
        </div>
      </div>
    </div>
  );
};

export default Home;
