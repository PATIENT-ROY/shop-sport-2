import React, { useState } from "react";
import styles from "./Footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Импорт иконок

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для подписки
    console.log(`Подписка на рассылку: ${email}`);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <p className={styles.getFullYear}>© {new Date().getFullYear()} Sneakers-Shop. Все права защищены.</p>
      
      <div className={styles.socialLinks}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      
     
    </footer>
  );
};

export default Footer;