import React from "react";

import Details from '@/components/Details/Details';
import { fetchDetails } from '@/lib/helpers';

interface MovieProps {
  params: {
    id: string;
  };
}

const Movie = async ({ params }: MovieProps) => {
  const { id } = params;
  const details = await fetchDetails(id);

  return <Details details={details}/>;
};

export default Movie;