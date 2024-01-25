import React from "react";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: moviePageParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params;

  const details = await fetchDetails(id);

  return {
    title: details.Title,
  };
}

import Details from "@/components/Details/Details";
import { fetchDetails } from "@/lib/helpers";
import { moviePageParams } from "../../moviePageParams";

const detailsPage = async ({ params }: moviePageParams) => {
  const { id } = params;
  const details = await fetchDetails(id);

  return <Details details={details} />;
};

export default detailsPage;
