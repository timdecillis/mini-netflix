import db from "@/utils/db";
import Link from "next/link";

const getData = async () => {
  const users = await db.user.findMany({})
  return users
}

const accountPage = async () => {
  const users = await getData()
  return (
    <div>
      <h3>These are all the users</h3>
      {users.map((user, i) => <div key={i}>{user.name}</div>)}
      <Link href="/account/update">Update your account</Link>
    </div>
  );
};

export default accountPage;
