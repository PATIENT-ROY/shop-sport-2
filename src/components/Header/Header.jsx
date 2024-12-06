import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa"; // Иконки из react-icons
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png"; // Подключаем логотип


const Header = ({ totalPrice = 0, favoritesCount = 0, cart = [] }) =>  {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="React Sneakers" className={styles.logoImage} />
        </Link>
        <div className={styles.logoHeader}>
            <h3 className={styles.logoText}>React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.cart}>
          <Link to="/cart">
            <FaShoppingCart className={styles.icon} />
          </Link>
          <span className={styles.cartPrice}>{totalPrice}  руб.</span>
          {cart.length > 0 && <span className={styles.badge}>{cart.length}</span>} 
        </div>
        <div className={styles.cart}>
        <Link to="/favorites" className={styles.iconLink}>
          <FaHeart className={styles.icon} />
          {favoritesCount > 0 && <span className={styles.badge}>{favoritesCount}</span>}
          </Link>
          <span>Закладки</span>
        </div>
        
        <div className={styles.cart}>
        <Link to="/profile" className={styles.iconLink}>
          <FaUser  className={styles.icon} />
          </Link>
          <span>Профиль</span>
        </div>
      </div>
    </header>
  );
};
   
export default Header;
