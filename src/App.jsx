import { AuthProvider } from "./components/AuthContext";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProtectedRoute from "./Auth/ProtectedRoute";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Exercises from "./pages/Exercises.jsx";
import ExerciseDetail from "./components/ExerciseDetail.jsx";
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Más rutas protegidas */}
        {/* <Route
          path="/calendario"
          element={
            <ProtectedRoute>
              <Layout>
                <Calendario />
              </Layout>
            </ProtectedRoute>
          }
        />
        
       
        
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Layout>
                <Chat />
              </Layout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/notificaciones"
          element={
            <ProtectedRoute>
              <Layout>
                <Notificaciones />
              </Layout>
            </ProtectedRoute>
          }
        /> */}

        {/* Ejercicios */}
        <Route
          path="/ejercicios"
          element={
            <ProtectedRoute>
              <Layout>
                <Exercises />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/ejercicios/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <ExerciseDetail />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 404 */}
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
    </AuthProvider>
  );
}

export default App;
