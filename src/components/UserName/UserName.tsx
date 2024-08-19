import { deleteUser } from "@/lib/helpers";
import { useTransition } from "react";

type UserNameProps = { user: { id: string; name: string }; index: number };

const UserName = ({ user, index }: UserNameProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => startTransition(() => deleteUser(user.id))}>
        X
      </button>
      {`${index + 1}.
      ${user.name}`}
    </div>
  );
};

export default UserName;
