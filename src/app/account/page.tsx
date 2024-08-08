import React from "react";
import Account from "@/components/Account/Account";
import Link from "next/link";

const accountPage = () => {
  return (
    <div>
      <h3>Account</h3>
      <Link href='/account/update' >Update your account</Link>

    </div>
  );
};

export default accountPage;
