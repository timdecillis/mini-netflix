"use client";

import { useState } from "react";

const Update = ({ saveName }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting:", name);
    saveName(name)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setName(e.target.value)} type="text"></input>
      <input type="submit"></input>
    </form>
  );
};

export default Update;
