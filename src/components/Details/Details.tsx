import Image from "next/image";
import React from "react";
import { Metadata } from "next";

import { DetailsProps } from "./DetailsTypes";
import favicon from "@/app/favicon.ico";
import styles from "./Details.module.scss";

const Details = ({ details }: DetailsProps) => {
  const metadata: Metadata = {
    title: `${details.Title}`,
  };

  return (
    <section className={styles.details}>
      <section className={styles["details-top"]}>
        <Image
          src={details.Poster === "N/A" ? favicon : details.Poster}
          alt={
            details.Poster === "N/A"
              ? "text: no image available"
              : `a poster for ${details.Title}`
          }
          width={150}
          height={225}
          priority
        ></Image>

        <section className={styles["details-info"]}>
          <h3>{details.Title}</h3>
          <h5>Year: {details.Year}</h5>
          <h5>Rating: {details.Rated}</h5>
          <h5>Runtime: {details.Runtime}</h5>
          <h5>Written by: {details.Writer}</h5>
        </section>
      </section>
      <p>{details.Plot}</p>
    </section>
  );
};

export default Details;
