import React from "react";
import Image from "next/image";

const MovieCard = ({ movie }) => {
  return (
    <a key={movie.imdbID} href={`/movie/${movie.imdbID}`}>
      <Image
        src={movie.Poster}
        alt={`a poster for ${movie.Title}`}
        width={150}
        height={225}
        layout="fixed"
      ></Image>
      <h3>{movie.Title}</h3>
    </a>
  );
};

export default MovieCard;
