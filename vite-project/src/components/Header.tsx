import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo nav.png'; // ✅ importa el logo (ajustá el nombre según tu archivo real)
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Escuela de Guitarra Jairo" className="logo-img" />
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/cursos" onClick={() => setMenuOpen(false)}>Cursos</Link></li>
          <li><Link to="/clases" onClick={() => setMenuOpen(false)}>Clases 1 a 1</Link></li>
          <li><Link to="/comunidad" onClick={() => setMenuOpen(false)}>Comunidad</Link></li>
          <li><Link to="/recursos" onClick={() => setMenuOpen(false)}>Recursos</Link></li>
          <li><Link to="/sobre-mi" onClick={() => setMenuOpen(false)}>Sobre Mí</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
