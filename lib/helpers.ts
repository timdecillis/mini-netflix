export const fetchMovies = async () => {
  const key = process.env.API_KEY;

  const res = await fetch(
    `http://www.omdbapi.com/?s=terminator&apikey=${key}`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("There was an error fetching the movies");
  }
  return data.Search;
};
export const fetchDetails = async (id:string) => {
  const key = process.env.API_KEY;

  const res = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${key}`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("There was an error fetching the movie details");
  }
  return data;
};