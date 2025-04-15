import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="form">
      <h2>Entre em Contato</h2>
      <input type="text" placeholder="Seu nome" required />
      <input type="email" placeholder="Seu e-mail" required />
      <textarea placeholder="Sua mensagem" required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
