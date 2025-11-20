import React from 'react';
import { Mail, Facebook, Twitter, Instagram, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contacto */}
        <div className="footer-section">
          <h3 className="footer-title">
            <Mail size={20} />
            Contacto
          </h3>
          <ul className="footer-list">
            <li>Email: contacto@relaxapp.com</li>
            <li>Teléfono: +52 123 456 7890</li>
            <li>Soporte: soporte@relaxapp.virtualkick.mx</li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="footer-section">
          <h3 className="footer-title">
            <Info size={20} />
            Redes Sociales
          </h3>
          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="footer-social-link" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="footer-social-link" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Información */}
        {/*<div className="footer-section">
          <h3 className="footer-title">
            <Info size={20} />
            Información
          </h3>
          <ul className="footer-list">
            <li><a href="#">Acerca de nosotros</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
          </ul>
        </div>
        */}
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 RelaxApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
