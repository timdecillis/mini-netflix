import React from "react";
import Link from "next/link";

const accountPage = () => {
  return (
    <div>
      <h3>This is your account info</h3>
      <Link href="/account/update">Update your account</Link>
    </div>
  );
};

export default accountPage;
