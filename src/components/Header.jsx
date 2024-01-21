import React from "react";
import Image from "next/image";

import logo from '../app/logo.png';

const Header = () => {
  return (
    <header className="header" >
      <a className="home-button" href="/">Home</a>
      <div className="header-logo" >
        <Image src={logo} alt="the mini netflix logo"></Image>
      </div>
    </header>
  );
};

export default Header;
