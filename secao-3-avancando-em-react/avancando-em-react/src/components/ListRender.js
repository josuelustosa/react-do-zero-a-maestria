import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
      "Josué",
      "Waldiza",
      "Josué Filho",
      "Areta",
  ]);

  return (  
    <div>
        <p>Lista de Usuários do Sistema</p>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
};

export default ListRender;
