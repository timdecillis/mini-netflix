"use client";

import { useState } from "react";
import Update from "./Update/Update";
import { User } from "@/app/account/page";

type AccountProps = {
  saveName: (name: string) => void;
  users: User[];
};

const Account = ({ saveName, users }: AccountProps) => {
  const [updateOpen, setupdateOpen] = useState(false);
  return (
    <>
      <button onClick={() => setupdateOpen(true)}>Add user</button>
      {updateOpen && <Update saveName={saveName} />}
      <h3>These are all the users</h3>
      {users.map((user, i) => (
        <div key={i} style={{ display: "flex" }}>
          <button>X</button>
          <div>
            {i + 1}.) {user.name}
          </div>
        </div>
      ))}
    </>
  );
};

export default Account;
