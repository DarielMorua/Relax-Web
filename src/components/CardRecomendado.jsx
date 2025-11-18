function CardRecomendado({ name, description, image }) {
  return (
    <div className="card-recomendados">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CardRecomendado;
