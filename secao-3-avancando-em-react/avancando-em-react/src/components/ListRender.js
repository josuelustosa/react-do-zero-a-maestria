import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
      "Josué",
      "Waldiza",
      "Josué Filho",
      "Areta",
  ]);

  const [users] = useState([
      {id: 1, name: "Josué", age: 51},
      {id: 2700001, name: "Waldiza", age: 49},
      {id: 2100001, name: "Josué Filho", age: 21},
      {id: 27, name: "Areta", age: 18},
  ]);

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
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
    </div>
  )
};

export default ListRender;
