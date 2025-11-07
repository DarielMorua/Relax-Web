import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/calendario" element={<Calendario />} /> 
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/notificaciones" element={<Notificaciones />} /> */}
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
