import React from "react";
import Image from "next/image";

import logo from "../app/logo.png";

const Header = () => {
  return (
    <header className="header">
      <a className="home-button" href="/">
        Home
      </a>
      <h1>Welcome to (mini)Netflix!</h1>
      <a href='/' className="header-logo">
        <Image src={logo} alt="the mini netflix logo"></Image>
      </a>
    </header>
  );
};

export default Header;
