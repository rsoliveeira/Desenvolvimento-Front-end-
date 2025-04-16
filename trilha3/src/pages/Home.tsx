import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const irParaSobre = () => {
    navigate("/about");
  };

  const irParaQuartos = () => {
    navigate("/rooms");
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Bem-vindo à página inicial!</p>

      <button onClick={irParaSobre} style={{ marginRight: 10 }}>
        Ir para Sobre
      </button>

      <button onClick={irParaQuartos}>Ver Quartos</button>
    </div>
  );
};

export default Home;
