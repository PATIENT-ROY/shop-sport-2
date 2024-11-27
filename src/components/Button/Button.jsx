import {React, useState} from "react";
import styles from "./Button.module.scss";
import { CiSquarePlus, CiSquareCheck } from "react-icons/ci";

const Button = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if (!isAdded) {
    addToCart(product);
    setIsAdded(true); // Изменяем состояние, когда продукт добавлен
  }
};

  return (
    <div className={styles.Button}>
      {isAdded ? (
        <CiSquareCheck  
        className={styles.ButtonCheck}
         /> // Иконка, если добавлено
      ) : (
        <CiSquarePlus
          className={styles.ButtonPlus}
          aria-label="Added to Cart"
          onClick={handleClick} // Обработчик клика
        />
      )}
    </div>
  );
};

export default Button;






