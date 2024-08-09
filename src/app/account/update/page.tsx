import Update from "@/components/Account/Update/Update";
import db from "@/utils/db"

const update = () => {
  const saveName = async (name: string) => {
    "use server"
    console.log("nameeee:", name);
  };
  return <Update saveName={saveName} />;
};

export default update;
