export const fetchMovies = async () => {
  const key = process.env.NEXT_PUBLIC_KEY;

  try {
    const res = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=terminator`
    );
    const data = await res.json();
    return data.Search;
  } catch (err) {
    console.log("There was an error fetching the movies:", err);
  }
};
