import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, Calendar, Activity, MessageCircle, Bell } from "lucide-react";
import { useAuth } from "./AuthContext";
import Footer from "./Footer";
import logo from "../assets/relax.svg";
const Layout = ({ children }) => {
  const navigation = [
    { name: "Inicio", path: "/", icon: Home },
    { name: "Calendario", path: "/calendario", icon: Calendar },
    { name: "Ejercicios", path: "/ejercicios", icon: Activity },
    { name: "Chat con Doctores", path: "/chat", icon: MessageCircle },
    { name: "Notificaciones", path: "/notificaciones", icon: Bell },
  ];

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="px-6 pt-6 pb-1 border-b border-gray-100">
          <NavLink
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity mb-2"
          >
            <img src={logo} alt="RelaxApp Logo" className="w-14 h-14 mr-2" />
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold text-gray-900">RelaxApp</h1>
              <p className="text-xs text-gray-500">Tu bienestar mental</p>
            </div>
          </NavLink>
        </div>

        {/* Navegacion */}
        <nav className="flex-1 px-4 py-2">
          <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Navegación
          </p>
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-cyan-50 text-cyan-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? "text-cyan-600" : "text-gray-400"
                        }`}
                      />
                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm">👤</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.name || "Usuario"}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.email || "usuario@email.com"}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-left"
          >
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
