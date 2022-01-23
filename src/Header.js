import React from "react";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";

const Header = () => {
  return (
    <>
      <header>
        <div id="top-header">
          <img src={logo} alt="logo" />
          <img src={menu} alt="menu" />
        </div>
        <div id="content-header">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library and
            become a super Ninja developer
          </p>
          <p id="awsome">Awsome!</p>
        </div>
      </header>
    </>
  );
};

export default Header;
