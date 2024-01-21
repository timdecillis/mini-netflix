import React from "react";

import MovieCard from "./MovieCard";
import { fetchMovies } from "../../lib/helpers";

interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
}

interface MoviesProps {
  term: string;
}

const Movies = async ({ term }: MoviesProps) => {
  const movies: Movie[] = await fetchMovies(term);

  return (
    <div className="movies" >
      {movies.length ? (
        movies.map((movie: Movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <h2>Your search did not return any results :(</h2>
      )}
    </div>
  );
};

export default Movies;
