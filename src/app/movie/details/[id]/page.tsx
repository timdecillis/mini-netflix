import React from "react";
import { Metadata, ResolvingMetadata } from "next";


export async function generateMetadata(
  { params }: moviePageParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const {id} = params;

  // fetch data
  const details = await fetchDetails(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: details.Title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

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
