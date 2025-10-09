import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // Crearemos este archivo CSS en el siguiente paso






const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Sección Hero: Imagen/Video principal, título y CTA */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>¡Tu Viaje Musical Comienza Aquí!</h1>
          <p>Aprende guitarra desde cero o lleva tu técnica al siguiente nivel con Jairo.</p>
          <Link to="/cursos" className="btn-primary">Explora Nuestros Cursos</Link>
        </div>
<video
  className="hero-video"
  src="/hero-video.mp4"
  autoPlay
  loop
  muted
  playsInline
></video>








      </section>

      {/* Sección Novedades */}
      <section className="news-section">
        <h2>Novedades y Últimos Tips</h2>
        <div className="news-grid">
          {/* Aquí irían tarjetas de noticias o videos recientes */}
          <div className="news-item">Artículo: "Un Mate, Una Frase"</div>
          <div className="news-item">Video: "Cómo tocar tu primer acorde"</div>
          <div className="news-item">Nuevo Curso: Rock Cristiano Avanzado</div>
        </div>
        <Link to="/recursos" className="btn-secondary">Ver todos los recursos</Link>
      </section>

      {/* Sección Testimonios */}
      <section className="testimonials-section">
        <h2>Lo que dicen nuestros alumnos</h2>
        <div className="testimonials-grid">
          {/* Aquí irían los testimonios reales */}
          <div className="testimonial-item">
            <p>"Jairo me ayudó a entender la guitarra de una forma que nadie más pudo." - Alumno Principiante</p>
          </div>
          <div className="testimonial-item">
            <p>"Mis solos de rock cristiano nunca sonaron tan bien. ¡Gracias, Jairo!" - Alumno Avanzado</p>
          </div>
        </div>
      </section>

      {/* Sección Información de Cursos */}
      <section className="courses-info-section">
        <h2>Nuestra Oferta Educativa</h2>
        <div className="courses-summary">
          <div className="course-summary-item">
            <h3>Cursos para Principiantes</h3>
            <p>Desde cero hasta tus primeras canciones. ¡Paso a paso!</p>
            <Link to="/cursos" className="btn-tertiary">Ver Curso</Link>
          </div>
          <div className="course-summary-item">
            <h3>Clases Personalizadas</h3>
            <p>Lleva tu técnica y musicalidad al siguiente nivel con feedback directo.</p>
            <Link to="/clases" className="btn-tertiary">Más Información</Link>
          </div>
          <div className="course-summary-item">
            <h3>Especialización en Rock Cristiano</h3>
            <p>Domina el estilo y la composición para la música de adoración.</p>
            <Link to="/cursos" className="btn-tertiary">Ver Curso</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
