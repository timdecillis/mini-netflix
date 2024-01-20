export const fetchMovies = async () => {
  const key = process.env.API_KEY;

  const res = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=terminator`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("There was an error fetching the movies");
  }
  return data.Search;
};
