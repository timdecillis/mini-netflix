import React from "react";
import Image from "next/image";

import logo from "@/app/logo1.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles["home-button"]} href="/">
        Home
      </a>
      <h1 className={styles["header-greeting"]}>Welcome to (mini)Netflix!</h1>
      <a href="/">
        <Image
          className={styles["logo-image"]}
          src={logo}
          alt="the mini netflix logo"
        ></Image>
      </a>
    </header>
  );
};

export default Header;
