import React from "react";

import { movieProps } from "../movieProps";
import Details from '@/components/Details/Details';
import { fetchDetails } from '@/lib/helpers';



const Movie = async ({ params }: movieProps) => {
  const { id } = params;
  const details = await fetchDetails(id);

  return <Details details={details}/>;
};

export default Movie;