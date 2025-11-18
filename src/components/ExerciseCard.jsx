import { useNavigate } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ejercicios/${exercise.id}`);
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Badge de tiempo */}
      <div className="flex justify-end mb-4">
        <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-600">
          {exercise.time} min
        </span>
      </div>

      {/* Icono circular */}
      <div className="flex justify-center mb-4">
        <div className="w-25 h-25 bg-cyan-100 rounded-full flex items-center justify-center">
          <img
            className="w-20 h-20  rounded-full"
            src={exercise.image}
            alt={exercise.name}
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="text-center mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">{exercise.name}</h3>
        <p className="text-sm text-gray-600">{exercise.description}</p>
      </div>

      {/* Botón */}
      <button
        onClick={handleClick}
        className="w-full bg-white text-gray-700 py-2 px-4 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium"
      >
        Ver ejercicio
      </button>
    </div>
  );
};

export default ExerciseCard;
