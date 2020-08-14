import React from "react";
import { FiSearch, FiSettings, FiPlus, FiMenu } from "react-icons/fi";

export const Header = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__item" id="toggle-btn" onClick={toggleSidebar}>
          <FiMenu size="24" />
        </div>
        <div className="header__item" id="search-btn">
          <FiSearch size="24" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__item" id="quick-add-btn">
          <FiPlus size="24" />
        </div>
        <div className="header__item" id="settings-btn">
          <FiSettings size="24" />
        </div>
      </div>
    </header>
  );
};