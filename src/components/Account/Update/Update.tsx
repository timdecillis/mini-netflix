import { useState } from "react";

const Update = () => {
  const [name, setName] = useState("");
  return (
    <form>
      <input onChange={(e) => setName(e.target.value)} type="text"></input>
      <input type="submit"></input>
    </form>
  );
};

export default Update;
