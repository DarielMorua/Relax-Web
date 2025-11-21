import React from 'react';

const Notificaciones = () => {
  const notifications = [
    {
      id: 1,
      icon: '🔔',
      title: 'Recordatorio',
      message: 'Es hora de tu ejercicio',
      time: 'Hace 1 hora',
      color: '#B8C5E8'
    },
    {
      id: 2,
      icon: '💬',
      title: 'Mensaje de Dra. Idaly Cruz',
      message: 'Te han mandado un mensaje',
      time: 'Hace 2 horas',
      color: '#B8C5E8'
    },
    {
      id: 3,
      icon: '🎉',
      title: 'Racha de 7 días',
      message: 'Has registrado tus emociones por 7 días seguidos',
      time: 'Hace 3 horas',
      color: '#B8C5E8'
    }
  ];

  return (
    <div className="notificaciones-container">
      <div className="notificaciones-header">
        <h1>Notificaciones</h1>
        <p className="subtitle">Mantente al día con tus actividades</p>
      </div>

      <div className="notificaciones-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-card">
            <div className="notification-content">
              <div 
                className="notification-icon"
                style={{ backgroundColor: notification.color }}
              >
              </div>
              <div className="notification-text">
                <h3>{notification.title}</h3>
                <p>{notification.message}</p>
              </div>
            </div>
            <div className="notification-time">
              {notification.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notificaciones;