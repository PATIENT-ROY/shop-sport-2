import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.scss";
import { removeFromCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom"; 
import emptyBox from "../../assets/images/empty-box.png";
import BackIcon from "../../components/Button/BackIcon";
const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formatPrice = (price) =>
    price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" });

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
     <Header totalPrice={totalPrice} cart={cart} />
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
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className={styles.removeButton}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <h2>Общая стоимость: {formatPrice(totalPrice)}</h2>
        </>
      ) : (
        <div className={styles.emptyCart}>
          <img
            src={emptyBox}
            alt="Корзина пуста"
            className={styles.emptyImage}
          />
          <h2>Корзина пуста</h2>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
         <BackIcon />
        </div>
      )}
        </div>
       <Footer />
    </>
  );
};

export default Cart;
