import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "10px",
        background: "#e0e0e0",
        display: "flex",
        gap: "40px",
        alignItems: "center",
      }}
    >
      {/* Navegação principal */}
      <div>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: 10 }}>
          Sobre
        </Link>
        <Link to="/contact">Contato</Link>
      </div>

      {/* Navegação de animais */}
      <div>
        <strong>Animais:</strong>
        <Link to="/animal/cachorro" style={{ margin: "0 10px" }}>
          Cachorro
        </Link>
        <Link to="/animal/gato">Gato</Link>
      </div>

      {/* Link para Quartos */}
      <div>
        <Link to="/rooms">
          <strong>Quartos</strong>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
