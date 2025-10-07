import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage'; // <-- AÑADE ESTA LÍNEA e importa HomePage

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* <-- USA HomePage aquí */}
        {/* Aquí irán otras rutas en el futuro */}
      </Routes>
    </>
  );
}

export default App;
