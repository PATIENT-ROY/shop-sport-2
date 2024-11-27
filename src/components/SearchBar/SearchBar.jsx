import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import styles from './SearchBar.module.scss';

const SearchBar = ({ setSearchText, searchText }) => {
  const handleInputChange = (event) => {
    setSearchText(event.target.value); // Передаем введенное значение в родительский компонент
  };

  const handleClearInput = () => {
    setSearchText(''); // Очищаем текст поиска
  };

  return (
    <div className={styles.searchBar}>
      <CiSearch className={styles.icon} />
      <input 
        type="text" 
        className={styles.input} 
        placeholder="Поиск..." 
        value={searchText} 
        onChange={handleInputChange}  // Обработчик ввода
      />
      {searchText&& ( <IoIosClose
        className={styles.toClean} 
        onClick={handleClearInput} // Очищаем текст при клике на иконку
      />)}
    </div>
  );
};

export default SearchBar;