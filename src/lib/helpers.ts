import { movieSearch, details } from "./omdbTypes";

export const fetchMovies = async (term: string): Promise<movieSearch[]> => {
  const key = process.env.API_KEY;

  const res = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=${key}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("There was an error fetching the movies");
  }
  return data.Search || [];
};
export const fetchDetails = async (id: string): Promise<details> => {
  const key = process.env.API_KEY;

  const res = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${key}&plot=full`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("There was an error fetching the movie details");
  }
  return data || [];
};
