import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = ({ addToCart, addToFavorites, searchText = "" }) => {
  const [products, setProducts] = useState([]); // Состояние для хранения продуктов
  const [loading, setLoading] = useState(true); // Индикатор загрузки
  const [error, setError] = useState(null); // Состояние для обработки ошибок
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
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

  if (loading) return <p>Загрузка продуктов...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={styles.productList}>
      {filteredProducts.map((product) => (
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
