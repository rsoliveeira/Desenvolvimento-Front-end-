import { useState } from "react";
import "./ListaTarefas.css";

interface ListaTarefasProps {
  tarefasIniciais: string[];
}

const ListaTarefas = ({ tarefasIniciais }: ListaTarefasProps) => {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  const removerTarefa = (index: number) => {
    const novaLista = tarefas.filter((_, i) => i !== index);
    setTarefas(novaLista);
  };

  return (
    <div className="lista-tarefas">
      <h2>Lista de Tarefas</h2>

      <div className="input-area">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => removerTarefa(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
