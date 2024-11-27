import React from "react";
import styles from "./Favorite.module.scss";

const Favorites = ({ likes = [] }) => {
  return (
    <div className={styles.favorites}>
      <h1>Избранное</h1>
      {likes.length > 0 ? (
        <ul className={styles.productList}>
          {likes.map((item) => (
            <li key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.cardImage} />
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <p className={styles.cardPrice}>{item.price} руб.</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет избранных товаров.</p>
      )}
    </div>
  );
};

export default Favorites;
