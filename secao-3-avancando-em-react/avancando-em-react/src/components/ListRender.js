import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Josué", "Waldiza", "Josué Filho", "Areta"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Josué", age: 51 },
    { id: 2, name: "Waldiza", age: 49 },
    { id: 3, name: "Josué Filho", age: 21 },
    { id: 4, name: "Areta", age: 18 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
    })
  };

  return (
    <div>
      <p>Listagem sem propriedade key</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <p>Lista de Usuários do Sistema com propriedade key no objeto</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
