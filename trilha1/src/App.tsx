import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Card from "./components/Card/Card";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Exercício 1: Botão Estilizado</h1>
        <Button />

        <h1>Exercício 2: Cartão de Perfil</h1>
        <ProfileCard />

        <h1>Exercício 3: Card Responsivo</h1>
        <Card />

        <h1>Exercício 4: Galeria com Grid</h1>
        <Gallery />

        <h1>Exercício 6: Formulário Estilizado</h1>
        <ContactForm />
      </main>
    </>
  );
}

export default App;
