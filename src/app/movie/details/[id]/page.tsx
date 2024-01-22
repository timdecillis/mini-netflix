import React from "react";

import Details from "@/components/Details/Details";
import { fetchDetails } from "@/lib/helpers";

interface moviePageParams {
  params: {
    id: string;
  };
}

const MoviePage = async ({ params }: moviePageParams) => {
  const { id } = params;
  const details = await fetchDetails(id);

  return <Details details={details} />;
};

export default MoviePage;
