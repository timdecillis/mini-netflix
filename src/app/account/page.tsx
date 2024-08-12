import Account from "@/components/Account/Account";
import { getData } from "@/lib/helpers";

export type User = {
  id: string;
  name: string;
};

const accountPage = async () => {
  const users = await getData();
  return (
    <div>
      <Account users={users} />
    </div>
  );
};

export default accountPage;
