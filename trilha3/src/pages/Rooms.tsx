import { Link } from "react-router-dom";

const Rooms = () => {
  const quartos = [
    { id: 1, nome: "Suíte Luxo" },
    { id: 2, nome: "Quarto Standard" },
    { id: 3, nome: "Suíte Família" },
  ];

  return (
    <div>
      <h1>Quartos Disponíveis</h1>
      <ul>
        {quartos.map((quarto) => (
          <li key={quarto.id}>
            <Link to={`/room/${quarto.id}`}>{quarto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
