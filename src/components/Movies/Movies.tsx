import React from "react";

import { MoviesProps } from "./MoviesTypes";
import { movieSearch } from "@/lib/omdbTypes";
import MovieCard from "../MovieCard/MovieCard";
import { fetchMovies } from "@/lib/helpers";
import styles from "./Movies.module.scss";

const Movies = async ({ term }: MoviesProps) => {
  const movies: movieSearch[] = await fetchMovies(term);

  return (
    <section className={styles.movies}>
      {movies.length ? (
        movies.map((movie: movieSearch) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <h1>Your search did not return any results :(</h1>
      )}
    </section>
  );
};

export default Movies;
