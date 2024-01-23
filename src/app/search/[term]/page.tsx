import React from "react";
import Movies from "@/components/Movies/Movies";

import { resultsPageProps } from "./resultsPageProps";

const ResultsPage = ({ params }: resultsPageProps) => {
  const { term } = params;
  return <Movies term={term} />;
};

export default ResultsPage;
