import React from "react";
import Image from "next/image";

import logo from "@/app/logo1.png";

const Header = () => {
  return (
    <header className="header">
      <a className="home-button" href="/">
        Home
      </a>
      <h1 className="header-greeting" >Welcome to (mini)Netflix!</h1>
      <div className="header-logo"  ></div>
      <a href='/' >
        <Image className="logo-image" src={logo} alt="the mini netflix logo"></Image>
      </a>
    </header>
  );
};

export default Header;
