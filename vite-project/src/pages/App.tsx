import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import { Routes, Route } from 'react-router-dom' // <-- AÑADE ESTA LÍNEA

// Este será tu componente de la página de inicio. Por ahora, usaremos el contenido existente.
// Más adelante, crearemos un componente HomePage.tsx separado.
function HomePageContent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={( ) => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageContent />} /> {/* <-- DEFINE LA RUTA DE INICIO */}
      {/* Aquí irán otras rutas en el futuro, como /cursos, /clases, etc. */}
    </Routes>
  )
}

export default App
