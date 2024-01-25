import React from "react";
import Movies from "@/components/Movies/Movies";

import { resultsPageProps } from "./resultsPageProps";

const searchPage = ({ params }: resultsPageProps) => {
  const { term } = params;
  return <Movies term={term} />;
};

export default searchPage;
