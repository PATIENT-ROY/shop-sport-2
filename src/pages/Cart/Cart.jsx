import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.scss";
import { removeFromCart } from "../../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const formatPrice = (price) =>
    price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" });

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={styles.cart}>
      <h1>Корзина</h1>
      {cart.length > 0 ? (
        <>
          <ul className={styles.productList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.card}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImage}
                />
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardPrice}>{formatPrice(item.price)}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <h2>Общая стоимость: {formatPrice(totalPrice)}</h2>
        </>
      ) : (
        <p>Ваша корзина пуста. Добавьте товары для покупки.</p>
      )}
    </div>
  );
};

export default Cart;
