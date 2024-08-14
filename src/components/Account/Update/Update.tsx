const Update = ({ saveName }: {saveName: (formData: FormData) => void}) => {
  return (
    <form action={saveName}>
      <input name='user-name' type="text"></input>
      <input type="submit"></input>
    </form>
  );
};

export default Update;
