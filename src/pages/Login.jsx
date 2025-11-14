import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import logo from "../assets/relax highsvg.svg";
import bgImage from "../assets/RelaxedEnergy.svg";
//import bgImage from "../assets/patricio.jpeg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Store user data and login
    const userData = { email, name: email.split("@")[0] };
    login(userData);
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#d9eced]">
      {/* Left Panel - Form */}
      <div
        className="flex flex-col justify-center w-full lg:w-1/2 px-6 py-12 lg:px-16 xl:px-24 relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a5f61]/85 via-[#2d7a7c]/90 to-[#0f3d3e]/95"></div>

        <div className="w-full max-w-md mx-auto relative z-10">
          {/* Logo and Title */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <h1 className="text-xl font-bold text-white">RelaxApp</h1>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Bienvenido de vuelta
            </h2>
            <p className="text-gray-400 text-sm">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Regístrate
              </a>
              .
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
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

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
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

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Sign in to your account
            </button>
          </form>
        </div>
      </div>

      {/* Right Panel - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#e8f5f5] via-[#d9eced] to-[#c2e0e3] items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <img
            src={logo}
            alt="RelaxApp"
            className="w-full max-w-md mx-auto mb-8 drop-shadow-2xl"
          />
          <h2 className="text-3xl font-bold text-[#1a5f61] mb-4">
            Tu bienestar mental en un solo lugar
          </h2>
          <p className="text-[#2d7a7c] text-lg">
            Accede a ejercicios de relajación, meditación y herramientas para
            mejorar tu salud mental.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
