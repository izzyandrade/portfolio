import React, { CSSProperties, useState } from "react";
import "./styles.css";
import { MenuItem } from "./MenuItem";

export interface StylesDictionary {
  [Key: string]: CSSProperties;
}

const NavBar = ({ click }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar-item">
      <div className="logo-container">
        <h1 className="navbar-logo">
          Israel<i className="fab fa-react"></i>
        </h1>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItem.map((item, index) => {
          return (
            <li key={index}>
              <span
                className={item.cName}
                onClick={item.title === "About" ? click : () => {}}
              >
                {item.title}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
