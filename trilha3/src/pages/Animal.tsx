import { useParams } from "react-router-dom";

const Animal = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h1>Animal</h1>
      <p>
        O animal escolhido foi: <strong>{name}</strong>
      </p>
    </div>
  );
};

export default Animal;
