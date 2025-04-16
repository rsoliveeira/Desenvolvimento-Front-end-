import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BuscarUsuario from "./pages/BuscarUsuario";
import CadastrarUsuario from "./pages/CadastrarUsuario";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<h1>Bem-vindo à Trilha 4</h1>} />
          <Route path="/buscar-usuario" element={<BuscarUsuario />} />
          <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
