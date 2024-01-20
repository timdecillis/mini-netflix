import React from "react";

import MovieCard from "./MovieCard";
import { fetchMovies } from "../../lib/helpers";

interface Movie {
  Title: string;
  imdbId: string;
  Poster: string;
}

const Movies = async () => {
  const movies: Movie[] = await fetchMovies();

  return (
    <>
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </>
  );
};

export default Movies;