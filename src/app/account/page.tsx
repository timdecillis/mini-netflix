import Account from "@/components/Account/Account";
import { saveName, getData } from "@/lib/helpers";

export type User = {
  id: string;
  name: string;
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
