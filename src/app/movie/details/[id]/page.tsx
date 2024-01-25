import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Details",
};

import Details from "@/components/Details/Details";
import { fetchDetails } from "@/lib/helpers";
import { moviePageParams } from "../../moviePageParams";

const detailsPage = async ({ params }: moviePageParams) => {
  const { id } = params;
  const details = await fetchDetails(id);

  return <Details details={details} />;
};

export default detailsPage;
