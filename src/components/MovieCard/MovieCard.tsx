import React from "react";
import Image from "next/image";

import Link from "next/link";
import { MovieCardProps } from "./MovieCardTypes";
import favicon from "@/app/favicon.ico";
import styles from "./MovieCard.module.scss";

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link
      className={styles["movie-card"]}
      key={movie.imdbID}
      href={`/movie/details/${movie.imdbID}`}
    >
      <Image
        src={movie.Poster === "N/A" ? favicon : movie.Poster}
        alt={
          movie.Poster === "N/A"
            ? "text: no image available"
            : `a poster for ${movie.Title}`
        }
        width={150}
        height={225}
        priority
      ></Image>
      <h3>{movie.Title}</h3>
    </Link>
  );
};

export default MovieCard;
