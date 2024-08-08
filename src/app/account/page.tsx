import db from "../../../utils/db";
import Link from "next/link";

const getData = async () => {
  const users = await db.user.findMany({})
  return users
}

const accountPage = async () => {
  const users = await getData()
  console.log('USERS:', users)
  return (
    <div>
      <h3>This is your account info</h3>
      <Link href="/account/update">Update your account</Link>
    </div>
  );
};

export default accountPage;
