"use client";
import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

import styles from './Search.module.scss';

const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(`/search/${input}`);
    setInput('');
  };

  return (
    <form className={styles["search-form"]} onSubmit={handleSubmit}>
      <input
        className={styles["search-input"]}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search..."
        value={input}
      />
      <input
        value="Submit"
        className={styles["search-submit"]}
        disabled={!input}
        type="submit"
      />
    </form>
  );
};

export default Search;
