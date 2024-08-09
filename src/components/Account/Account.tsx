"use client";

import { SyntheticEvent, useState } from "react";
import Update from "./Update/Update";

const Account = ({
  saveName, users
}: {
  saveName: (name: string) => void;
  users: { id: string; name: string }[];
}) => {
  const [updateOpen, setupdateOpen] = useState(false);
  return (
    <>
      <button onClick={() => setupdateOpen(true)}>Add user</button>
      <h3>These are all the users</h3>
      {users.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
      {updateOpen && <Update saveName={saveName} />}
    </>
  );
};

export default Account;
