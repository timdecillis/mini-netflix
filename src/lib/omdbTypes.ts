export interface movieSearch {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

export interface DetailsProps {
  details: {
    Director: string;
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Writer: string;
    Rated: string;
    Runtime: string;
    Plot: string;
  };
}
