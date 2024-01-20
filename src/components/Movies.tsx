import React from "react";

import MovieCard from "./MovieCard";
import { fetchMovies } from "../../lib/helpers";

export interface Movie {
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
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </>
  );
};

export default Movies;
