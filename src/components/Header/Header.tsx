import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo1.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles["home-button"]} href="/">
        Home
      </Link>
      <h1 className={styles["header-greeting"]}>Welcome to (mini)Netflix!</h1>
      <Link href="/">
        <Image
          className={styles["logo-image"]}
          src={logo}
          alt="the mini netflix logo"
        ></Image>
      </Link>
    </header>
  );
};

export default Header;
