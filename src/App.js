import './App.css';
import { useState } from 'react'; // Importamos useState
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Footer from './pages/Footer';
import Cuadros from './pages/Cuadros';
import Exit from './pages/Exit';

function App() {
  const [parkingSpots, setParkingSpots] = useState(Array(28).fill(false)); // Estado para los lugares de estacionamiento

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Cuadros parkingSpots={parkingSpots} setParkingSpots={setParkingSpots} />}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path="register" element={<Register setParkingSpots={setParkingSpots} />}></Route> {/* Aquí pasamos setParkingSpots a Register */}
          <Route path="exit" element={<Exit/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
