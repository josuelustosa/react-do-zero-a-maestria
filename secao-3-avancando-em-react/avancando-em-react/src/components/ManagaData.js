import { useState } from "react";

export const ManagaData = () => {
  
    const [number, setNumber] = useState(15);
    console.log(number);
    return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar state</button>
    </div>
  )
}
