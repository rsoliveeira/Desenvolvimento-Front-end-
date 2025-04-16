import Contador from "./components/Contador/Contador";
import Saudacao from "./components/Saudacao/Saudacao";
import ListaTarefas from "./components/ListaTarefas/ListaTarefas";
import ToggleVisibilidade from "./components/ToggleVisibilidade/ToggleVisibilidade";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Exercício 1: Contador Simples</h1>
      <Contador valorInicial={0} />
      <h1>Exercício 2: Saudação Personalizada</h1>
      <Saudacao nomeInicial="Rodrigo" />
      <h1>Exercício 3: Lista de Tarefas</h1>
      <ListaTarefas tarefasIniciais={["Estudar React", "Fazer café"]} />
      <h1>Exercício 4: Controle de Visibilidade</h1>
      <ToggleVisibilidade texto="Este conteúdo está visível!" />
    </div>
  );
}

export default App;
