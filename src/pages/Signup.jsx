import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import logo from "../assets/relax highsvg.svg";
import bgImage from "../assets/RelaxedEnergy.svg";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !password || !confirmPassword) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (!acceptTerms) {
      setError("Debes aceptar los términos y condiciones");
      return;
    }

    // Create user account and login
    const userData = { email, name };
    login(userData);
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#d9eced]">
      {/* Panel izquierda */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#e8f5f5] via-[#d9eced] to-[#c2e0e3] items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <img
            src={logo}
            alt="RelaxApp"
            className="w-full max-w-md mx-auto mb-8 drop-shadow-2xl"
          />
          <h2 className="text-3xl font-bold text-[#1a5f61] mb-4">
            Comienza tu viaje hacia el bienestar
          </h2>
          <p className="text-[#2d7a7c] text-lg">
            Únete a nuestra comunidad y descubre herramientas para mejorar tu
            salud mental y emocional.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-center w-full lg:w-1/2 px-6 py-12 lg:px-16 xl:px-24 relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a5f61]/85 via-[#2d7a7c]/90 to-[#0f3d3e]/95"></div>

        <div className="w-full max-w-md mx-auto relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <h1 className="text-xl font-bold text-white">RelaxApp</h1>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Crea tu cuenta
            </h2>
            <p className="text-gray-400 text-sm">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Inicia sesión
              </a>
              .
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-white-700 border border-white-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="w-full px-4 py-3 bg-white-700 border border-white-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>

            {/* Accept Terms */}
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 mt-1 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                Acepto los{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  términos y condiciones
                </a>{" "}
                y la{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  política de privacidad
                </a>
              </label>
            </div>

            {/* Error */}
            {error && (
              <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Crear cuenta
            </button>
          </form>
        </div>
      </div>

      {/* Panel derecha */}
    </div>
  );
}

export default Signup;
