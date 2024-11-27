import React, { useState } from "react";
import styles from "./ProductCard.module.scss"; // Styles for the card
import Button from "../Button/Button"; // Importing the button component
import { CiHeart } from "react-icons/ci"; // Heart icon

const ProductCard = ({ image, title, price, product, addToCart, addToFavorites }) => {
  const [isLiked, setIsLiked] = useState(false);

  // Handler for clicking on the heart icon
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    addToFavorites(product); // Add product to favorites
  };

  return (
    <div className={styles.card}>
     <CiHeart
        className={`${styles.like} ${isLiked ? styles.liked : ""}`} // Apply red style if liked
        onClick={handleLikeClick} // Trigger handleLikeClick on click
      />
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.pricePlus}>
        <div className={styles.textPrice}>
          <span className={styles.text}>Цена:</span>
          <b className={styles.cardPrice}>{price} руб.</b>
        </div>
        <Button product={product} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ProductCard;
