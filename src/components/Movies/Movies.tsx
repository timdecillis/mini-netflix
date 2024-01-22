import React from "react";

import { MoviesProps } from "./MoviesTypes";
import MovieCard from "../MovieCard/MovieCard";
import { fetchMovies } from "@/lib/helpers";
import styles from './Movies.module.scss';

interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
}

const Movies = async ({ term }: MoviesProps) => {
  const movies: Movie[] = await fetchMovies(term);

  return (
    <div className={styles.movies} >
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
