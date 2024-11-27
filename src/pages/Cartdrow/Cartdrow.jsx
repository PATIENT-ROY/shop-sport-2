import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Cartdrow.module.scss"; 

function Cartdrow() {
  return (
    <>
       <div>    <div className={styles.drawer}>
    <h2 className="mb-30">корзина</h2>
    <div className={styles.cartItem}>
    <img   alt="sneakers1" className={styles.img}/>
    <div className="mr-20">
      <p className="mb-5">Кроссовки Nike Air Max 270</p>
      <b >12999 руб.</b>
      <button className="m-10"><MdDeleteForever className={styles.remove} /></button>
    </div>
    </div>
    <div className={styles.cartItem}>
    <img alt="sneakers2" className={styles.img}/>
    <div className="mr-20">
      <p className="mb-5">Кроссовки Nike Air Max 270</p>
      <b >12999 руб.</b>
      <button className="m-10"><MdDeleteForever className={styles.remove} /></button>
    </div>
    </div>
    <div className={styles.items}>
      <div>
      <ul className={styles.total}>
        <li className="d-flex">
          <span>Итого:</span>
          <div></div>
          <b>21 498 руб.</b>
        </li>
        <li className="d-flex">
          <span>Нолог 5%:</span>
          <div></div>
          <b>1074 руб.</b>
        </li>
      </ul>
      <button className={styles.totalBtn}>офомить заказ <FaArrowRight className={styles.totalRight} /></button>
      </div>
    </div>
  </div></div>
    </>
  )
}

export default Cartdrow;