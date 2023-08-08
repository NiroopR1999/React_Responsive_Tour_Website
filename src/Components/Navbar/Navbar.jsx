import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [iconClicked, setIcon] = useState(false);
  const iconChange = () => {
    setIcon(!iconClicked);
  };
  return (
    <>
      <nav className="NavBarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={iconChange}>
          <i className={iconClicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={iconClicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
