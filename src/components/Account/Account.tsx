"use client";

import { SyntheticEvent, useState } from "react";
import Update from "./Update/Update";

const Account = ({ saveName }: { saveName: (name: string) => void }) => {
  const [updateOpen, setupdateOpen] = useState(false);
  return <>{updateOpen && <Update saveName={saveName} />}</>;
};

export default Account;
