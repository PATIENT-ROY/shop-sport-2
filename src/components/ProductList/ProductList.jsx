import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader"; // Импортируем ContentLoader
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = ({ addToCart, addToFavorites, searchText = "" }) => {
  const [products, setProducts] = useState([]); // Состояние для хранения продуктов
  const [loading, setLoading] = useState(true); // Индикатор загрузки
  const [error, setError] = useState(null); // Состояние для обработки ошибок

  useEffect(() => {
    // Функция для загрузки продуктов из JSON Server
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) {
          throw new Error("Ошибка при загрузке продуктов");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Фильтрация продуктов
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    // Отображение ContentLoader, пока идет загрузка
    return (
      <div className={styles.loader}>
        {Array.from({ length: 4 }).map((_, index) => (
          <ContentLoader
            key={index}
            speed={2}
            width={150}
            height={260}
            viewBox="0 0 150 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="5" rx="10" ry="10" width="150" height="94" />
            <rect x="0" y="110" rx="3" ry="3" width="120" height="15" />
            <rect x="0" y="130" rx="3" ry="3" width="80" height="15" />
            <rect x="0" y="165" rx="8" ry="8" width="80" height="30" />
            <rect x="110" y="160" rx="8" ry="8" width="40" height="40" />
          </ContentLoader>
        ))}
      </div>
    );
  }

  if (error) return <p className="error">Ошибка: {error}</p>;

  return (
    <div className={styles.productList}>
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          product={product}
          addToCart={addToCart}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
};

export default ProductList;
