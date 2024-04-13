import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Cuadros from './pages/Cuadros';
import Exit from './pages/Exit';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Cuadros/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path="Register" element={<Register/>}></Route>
          <Route path="Exit" element={<Exit/>}></Route>
        </Route>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
