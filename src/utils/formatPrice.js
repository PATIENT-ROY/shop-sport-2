// src/utils/formatPrice.js

const formatPrice = (price, currency = 'руб.') => {
    return `${price.toLocaleString('ru-RU')} ${currency}`;
  };
  
  export default formatPrice;
  