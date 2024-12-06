import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackIcon from '../../components/Button/BackIcon'; // Adjust the path as necessary
import styles from "./Profile.module.scss";
const Profile = () => {
  return (
    <>
     <Header  />
      <div className={styles.profile}>
        <h1>Профиль</h1>
        <p>Добро пожаловать в ваш личный кабинет.</p>
        <div>
          <h2>У вас нет заказов</h2>
          <p>Вы нечего не купили<br /> Оформите хотя бы один заказ.</p>
          <BackIcon />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
//npm i macro-css
//npx json-server --watch db.json --port 3001