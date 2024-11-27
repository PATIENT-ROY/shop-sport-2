import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorite";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import styles from "./styles/styles.module.scss";

function App({ likes }) {
  return (
    <Router future={{ v7_startTransition: true }}>
      <div className={styles.app}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites likes={likes} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
