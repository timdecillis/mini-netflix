import Image from "next/image";
import React from "react";

const Details = ({ details }) => {
  return (
    <>
      <Image
        src={details.Poster}
        alt={`a poster for ${details.Title}`}
        width={150}
        height={225}
        priority
      ></Image>
      <h1>{details.Title}</h1>
      <h3>Year: {details.Year}</h3>
      <h3>Rating: {details.Rated}</h3>
      <h3>Runtime: {details.Runtime}</h3>
      <h5>Written by: {details.Writer}</h5>
      <p>{details.Plot}</p>
    </>
  );
};

export default Details;