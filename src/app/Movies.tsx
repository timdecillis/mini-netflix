import React from "react";

interface Movie {
  Title: string;
  imdbId: string;
}

const Movies = async () => {
  const key = process.env.NEXT_PUBLIC_KEY;
  const res = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=5dc2584f&s=terminator`
  );
  const data = await res.json();
  const movies: Movie[] = data.Search;

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
