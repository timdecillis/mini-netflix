import Image from "next/image";
import React from "react";
import favicon from "../app/favicon.ico";
import "../styles/main.scss";

const Details = ({ details }) => {
  return (
    <div className="details">
      <div className="details-top">
        <div>
          <Image
            src={details.Poster === "N/A" ? favicon : details.Poster}
            alt={
              details.Poster === "N/A"
                ? "text: no image available"
                : `a poster for ${details.Title}`
            }
            width={150}
            height={225}
            priority
          ></Image>
        </div>
        <div className="details-info">
          <h3>{details.Title}</h3>
          <h5>Year: {details.Year}</h5>
          <h5>Rating: {details.Rated}</h5>
          <h5>Runtime: {details.Runtime}</h5>
          <h5>Written by: {details.Writer}</h5>
        </div>
      </div>
      <p>{details.Plot}</p>
    </div>
  );
};

export default Details;
