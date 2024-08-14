"use client";

import { useState } from "react";
import Update from "./Update/Update";
import { saveName } from "@/lib/helpers";
import UserName from "../UserName/UserName";

export type User = {
  id: string;
  name: string;
};


type AccountProps = {
  users: User[];
};

const Account = ({ users }: AccountProps) => {
  const [updateOpen, setupdateOpen] = useState(false);
  return (
    <>
      <button onClick={() => setupdateOpen(true)}>Add user</button>
      {updateOpen && <Update saveName={saveName} />}
      <h3>These are all the users</h3>
      {users.map((user, i) => (
        <UserName key={i} user={user} />
      ))}
    </>
  );
};

export default Account;
