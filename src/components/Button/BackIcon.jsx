import React from 'react'
import styles from "./BackIcon.module.scss";
import { useNavigate } from 'react-router-dom'; 
import BackIconImage  from "../../assets/images/Group.png";
function BackIcon() {
    const navigate = useNavigate(); // Initialize navigate
  
    return (
      <div>
        <button
          onClick={() => navigate("/")} // Use navigate to go back
          className={styles.backButton}
        >
          <div className={styles.backButtonContent}>
            <img className={styles.BackIcon} src={BackIconImage} alt="Back Icon" />
            <span>Вернуться назад</span>
          </div>
        </button>
      </div>
    );
  }
  
  export default BackIcon;