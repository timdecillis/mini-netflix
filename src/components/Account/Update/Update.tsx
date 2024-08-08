"use client";

import { useState } from "react";

const Update = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitting:", name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setName(e.target.value)} type="text"></input>
      <input type="submit"></input>
    </form>
  );
};

export default Update;
