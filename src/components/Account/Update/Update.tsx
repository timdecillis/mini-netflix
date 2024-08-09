"use client";

import { SyntheticEvent, useState } from "react";

const Update = ({ saveName }: {saveName: (name: string) => void}) => {
  const [name, setName] = useState("");
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submitting:", name);
    saveName(name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setName(e.target.value)} type="text"></input>
      <input type="submit"></input>
    </form>
  );
};

export default Update;
