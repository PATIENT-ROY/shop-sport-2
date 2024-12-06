import React, { useState, useEffect, useMemo } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";



const Home = ({ products = [] }) => {
  const [cart, setCart] = useState([]);
  const [likes, setLikes] = useState([]);
  const [searchText, setSearchText] = useState(""); // Состояние для текста поиска
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      product.title?.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, products]);

  const addToCart = (product) => {
    console.log('Добавление в корзину:', product); 
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const addToFavorites = (product) => {
    console.log('is liked:', product); 
    if (!likes.some((item) => item.id === product.id)) {
      setLikes([...likes, product]);
    }
  };

  useEffect(() => {
    console.log('Корзина обновлена:', cart);
  }, [cart]);

  // Функция для расчета общей стоимости товаров в корзине
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
    <div className="home">
      <Header totalPrice={calculateTotalPrice()} favoritesCount={likes.length} cart={cart} />
      <div className={styles.homeHeader}>
        <h1 className={styles.title}>{searchText ? `Поиск: "${searchText}"` : 'Все кроссовки'}</h1>
        <SearchBar setSearchText={setSearchText} searchText={searchText} /> {/* Передаем функцию для обновления текста поиска */}
      </div>
      <ProductList
        products={filteredProducts} // Передаем отфильтрованные продукты
        addToCart={addToCart}
        addToFavorites={addToFavorites}
        searchText={searchText} // Передаем searchText
      />
      <Footer />
    </div>
    </>
);
};




export default Home;
