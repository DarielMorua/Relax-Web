import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Calendar, Activity, MessageCircle, Bell } from "lucide-react";

const Layout = ({ children }) => {
  const navigation = [
    { name: "Inicio", path: "/", icon: Home },
    { name: "Calendario", path: "/", icon: Calendar },
    { name: "Ejercicios", path: "/", icon: Activity },
    { name: "Chat con Doctores", path: "/", icon: MessageCircle },
    { name: "Notificaciones", path: "/", icon: Bell },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-lg font-bold text-gray-900">RelaxApp</h1>
              <p className="text-xs text-gray-500">Tu bienestar mental</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
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
                Usuario
              </p>
              <p className="text-xs text-gray-500 truncate">
                usuario@email.com
              </p>
            </div>
          </div>
          <button className="w-full px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-left">
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
