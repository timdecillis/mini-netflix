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

        {movies.map((movie: Movie) => (
          <a key={movie.imdbId} href="/details">

              <h3>{movie.Title}</h3>
              <Image
                src={movie.Poster}
                alt={`a poster for ${movie.Title}`}
                width={150}
                height={225}
                layout="fixed"
              ></Image>

          </a>
        ))}

    </>
  );
};

export default Movies;
