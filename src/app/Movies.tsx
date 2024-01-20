import React from "react";
import { fetchMovies } from "../../lib/helpers";

interface Movie {
  Title: string;
  imdbId: string;
}

const Movies = async () => {

  const movies: Movie[] = await fetchMovies();

  return (
    <>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie.imdbId}>{movie.Title}</li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
