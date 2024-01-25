import React from "react";
import Image from "next/image";

import spinner from "@/assets/spinner.svg";

import styles from "@/styles/loadingStyles.module.scss";

const loading = () => {
  return (
    <section className={styles.loading}>
      <Image src={spinner} alt="a spinning animation"></Image>
    </section>
  );
};

export default loading;
