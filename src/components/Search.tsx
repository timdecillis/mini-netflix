"use client";
import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(`/search/${input}`);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <input
        value="Submit"
        className="search-submit"
        disabled={!input}
        type="submit"
      />
    </form>
  );
};

export default Search;