import { useState } from "react";

const Update = () => {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    console.log('submitting')
  }
  return (
    <form onSubmit={handleSubmit} >
      <input onChange={(e) => setName(e.target.value)} type="text"></input>
      <input type="submit"></input>
    </form>
  );
};

export default Update;
