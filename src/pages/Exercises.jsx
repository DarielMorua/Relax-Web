import ExerciseCard from "../components/ExerciseCard";
import { exercises } from "../mock/exercisesMock";

const Exercises = () => {
  // Agrupar ejercicios por categoría
  const groupedExercises = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.category]) {
      acc[exercise.category] = [];
    }
    acc[exercise.category].push(exercise);
    return acc;
  }, {});

  // Emojis para cada categoría
  const categoryEmojis = {
    Respiración: "🫁",
    Meditación: "🧘",
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-gray-900">Ejercicios</h1>
        </div>
        <p className="text-gray-600 ml-12">
          Explora ejercicios para mejorar tu bienestar mental
        </p>
      </div>

      {/* Secciones por categoria */}
      {Object.entries(groupedExercises).map(([category, categoryExercises]) => (
        <div key={category} className="mb-12">
          {/* Titulo de categoria */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">{categoryEmojis[category]}</span>
            <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
          </div>

          {/* Grid de ejercicios*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {categoryExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exercises;
