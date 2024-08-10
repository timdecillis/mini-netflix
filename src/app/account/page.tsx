import Account from "@/components/Account/Account";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export type User = {
  id: string;
  name: string;
};

const getData = async () => {
  const users = await db.user.findMany({});
  return users;
};

const saveName = async (name: string) => {
  "use server";
  try {
    await db.user.create({
      data: {
        name,
      },
    });
    revalidatePath("/account");
  } catch (err) {
    console.error(`There was an error saving to the database: ${err}`);
  }
};

const accountPage = async () => {
  const users = await getData();
  return (
    <div>
      <Account saveName={saveName} users={users} />
    </div>
  );
};

export default accountPage;
