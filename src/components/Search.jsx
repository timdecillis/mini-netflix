"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${input}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-input"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <input disabled={!input} type="submit" />
    </form>
  );
};

export default Search;
