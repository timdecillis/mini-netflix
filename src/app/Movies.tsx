import React from "react";
import { fetchMovies } from "../../lib/helpers";
import Image from "next/image";

interface Movie {
  Title: string;
  imdbId: string;
  Poster: string;
}

const Movies = async () => {
  const movies: Movie[] = await fetchMovies();

  return (
    <>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie.imdbId}>
            <h3>{movie.Title}</h3>
            <Image
              src={movie.Poster}
              alt={`a poster for ${movie.Title}`}
              width={300}
              height={450}
              layout="responsive"
            ></Image>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
