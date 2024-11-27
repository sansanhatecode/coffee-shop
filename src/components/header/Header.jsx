import React from "react";
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>

      <div className="search-bar">
        <div className="search-input">
          <input type="text" placeholder="Tìm kiếm" />
          <input type="text" placeholder="Vị trí của bạn" />
          <i className="fa fa-search"></i>
        </div>
        <img src="/assets/image/list-logo.png" alt="list logo" />
      </div>

      <i class="fa-solid fa-bars"></i>
    </header>
  );
};

export default Header;
