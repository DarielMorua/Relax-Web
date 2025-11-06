import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

// Componente Home
const Home = () => (
  <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">
      Bienvenido a RelaxApp
    </h1>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <p className="text-gray-600">Aquí debería haber algo xd </p>
    </div>
  </div>
);

// Componente Calendario
const Calendario = () => (
  <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Calendario</h1>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <p className="text-gray-600">
        Aquí irá tu calendario de citas y eventos.
      </p>
    </div>
  </div>
);

// Componente Ejercicios
const Ejercicios = () => (
  <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Ejercicios</h1>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <p className="text-gray-600">Ejercicios de relajación y mindfulness.</p>
    </div>
  </div>
);

// Componente Chat
const Chat = () => (
  <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Chat con Doctores</h1>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <p className="text-gray-600">
        Aquí podrás chatear con profesionales de la salud.
      </p>
    </div>
  </div>
);

// Componente Notificaciones
const Notificaciones = () => (
  <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Notificaciones</h1>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <p className="text-gray-600">No tienes notificaciones nuevas.</p>
    </div>
  </div>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route
          path="*"
          element={
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Página no encontrada
                </h1>
                <p className="text-gray-600">La página que buscas no existe.</p>
              </div>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
