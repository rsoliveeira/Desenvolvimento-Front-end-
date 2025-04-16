import { useState } from "react";

const CadastrarUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrarUsuario = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nome,
            email: email,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário.");
      }

      const data = await response.json();
      setMensagem(`Usuário ${data.name} cadastrado com sucesso!`);
      setNome("");
      setEmail("");
    } catch {
      setMensagem("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastrar Novo Usuário</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        style={{ padding: "8px", marginRight: "10px", marginBottom: "10px" }}
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        style={{ padding: "8px", marginRight: "10px", marginBottom: "10px" }}
      />
      <br />
      <button onClick={cadastrarUsuario}>Cadastrar</button>

      {mensagem && <p style={{ marginTop: "15px" }}>{mensagem}</p>}
    </div>
  );
};

export default CadastrarUsuario;
