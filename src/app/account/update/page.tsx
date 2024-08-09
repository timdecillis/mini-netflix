import Update from "@/components/Account/Update/Update";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

const update = () => {
  const saveName = async (name: string) => {
    "use server";
    console.log("nameeee:", name);
    try {
      await db.user.create({
        data: {
          name,
        },
      });
      revalidatePath('/account/update')
    } catch (err) {
      console.error(`There was an error saving to the database: ${err}`);
    }
  };
  return <Update saveName={saveName} />;
};

export default update;
