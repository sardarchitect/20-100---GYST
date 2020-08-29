import React, { useContext, useState } from "react";
import { FiSearch, FiSettings, FiPlus, FiMenu } from "react-icons/fi";
import { auth, db } from "../../firebase";
import { useCurrentUserValue } from "../../context";

export const Header = ({ showSidebar, setShowSidebar }) => {
  const [settingsPanel, setSettingsPanel] = useState(false);
  const { currentUser } = useCurrentUserValue();
  const signOut = () => {
    alert("Logging Out");
    auth.signOut();
  };

  return (
    <header className="header">
      <div className="header__left">
        <div
          className="header__item"
          id="toggle-btn"
          onClick={() => setShowSidebar(!showSidebar)}
        >
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
          <FiSettings
            onClick={() => setSettingsPanel(!settingsPanel)}
            size="24"
          />
          {settingsPanel && (
            <div className="panel">
              <p> Hi {currentUser.displayName} </p>
              <hr />
              <p className="sign-out" onClick={signOut}>Sign Out</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
