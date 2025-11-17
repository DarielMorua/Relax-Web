import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Play } from "lucide-react";
import { exercises } from "../mock/exercisesMock";

const ExerciseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundExercise = exercises.find((ex) => ex.id === parseInt(id));
    setExercise(foundExercise);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-gray-600">Cargando ejercicio...</div>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">Ejercicio no encontrado</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/*  Volver */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6 font-medium"
        >
          <ArrowLeft size={20} />
          Volver a ejercicios
        </button>

        {/* Card principal */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50 p-6">
            <div className="flex items-start gap-4">
              {/* Icono */}
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">{exercise.image}</span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-gray-600">
                    {exercise.category}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-600">
                    {exercise.time} min
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {exercise.name}
                </h1>
                <p className="text-gray-600">{exercise.description}</p>
              </div>
            </div>
          </div>

          {/* Video  */}
          <div className="relative bg-gradient-to-br from-cyan-400 to-cyan-500 h-64 flex items-center justify-center">
            <button className="bg-white/90 hover:bg-white px-6 py-3 rounded-full flex items-center gap-2 font-medium text-gray-700 transition-all shadow-lg hover:shadow-xl">
              <Play size={20} className="fill-current" />
              Ver video del ejercicio
            </button>
          </div>

          {/* Contenido */}
          <div className="p-8 space-y-8">
            {/* Instrucciones */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Instrucciones
              </h2>
              <div className="space-y-3">
                {exercise.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-cyan-600">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 flex-1">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
