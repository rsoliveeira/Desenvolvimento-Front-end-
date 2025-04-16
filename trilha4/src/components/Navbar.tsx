import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "10px",
        background: "#e0e0e0",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/buscar-usuario">Buscar Usuário</Link>
      <Link to="/cadastrar-usuario">Cadastrar Usuário</Link>
    </nav>
  );
};

export default Navbar;
