import { useState } from "react";

const BuscarUsuario = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    try {
      setErro("");
      setUsuario(null);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!response.ok) {
        throw new Error("Usuário não encontrado.");
      }

      const data = await response.json();
      setUsuario({ name: data.name, email: data.email });
    } catch {
      setErro("Usuário não encontrado.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Buscar Usuário</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID do usuário"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={buscarUsuario}>Buscar</button>

      {usuario && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}

      {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}
    </div>
  );
};

export default BuscarUsuario;
