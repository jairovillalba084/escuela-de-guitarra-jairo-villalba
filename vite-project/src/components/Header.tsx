import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // La ruta ahora es relativa a components/Header.tsx

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Escuela de Guitarra Jairo</Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/clases">Clases 1 a 1</Link></li>
          <li><Link to="/comunidad">Comunidad</Link></li>
          <li><Link to="/recursos">Recursos</Link></li>
          <li><Link to="/sobre-mi">Sobre Mí</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
