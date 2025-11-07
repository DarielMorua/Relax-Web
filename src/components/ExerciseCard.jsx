const ExcerciseCard = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <img src={exercise.image} alt={exercise.name} />

      <h2>{exercise.name}</h2>
      <p>{exercise.time} Min</p>
      <p>{exercise.description}</p>
      <button>Ver Ejercicio</button>
    </div>
  );
};

export default ExcerciseCard;
