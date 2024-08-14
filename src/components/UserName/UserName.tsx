import { deleteUser } from "@/lib/helpers";
import { useTransition } from "react";

type UserNameProps = { user: { id: string; name: string } };

const UserName = ({ user }: UserNameProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => startTransition(() => deleteUser(user.id))}>
        X
      </button>
      {user.name}
    </div>
  );
};

export default UserName;
