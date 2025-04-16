import { useState } from "react";
import "./Contador.css";

interface ContadorProps {
  valorInicial: number;
}

const Contador = ({ valorInicial }: ContadorProps) => {
  const [contador, setContador] = useState(valorInicial);

  return (
    <div className="contador">
      <h2>Contador: {contador}</h2>
      <div className="botoes">
        <button onClick={() => setContador(contador - 1)}>-</button>
        <button onClick={() => setContador(contador + 1)}>+</button>
      </div>
    </div>
  );
};

export default Contador;
