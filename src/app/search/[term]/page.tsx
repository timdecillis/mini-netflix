import React from "react";
import Movies from "../../../components/Movies/Movies";

interface ResultsProps {
  params: { term: string };
}

const Results = ({ params }: ResultsProps) => {
  const { term } = params;
  return <Movies term={term} />;
};

export default Results;
