import { useNavigate } from "react-router-dom";
function CardRecomendado({ name, description, image, id }) {
  const Navigate = useNavigate();

  return (
    <div
      className="card-recomendados shadow-sm hover:shadow-md transition-shadow rounded-3xl overflow-hidden p-4 bg-white"
      onClick={() => Navigate(`/ejercicios/${id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CardRecomendado;
