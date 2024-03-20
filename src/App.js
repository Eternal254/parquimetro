import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Register/>}></Route>
          <Route path='about' element={<About/>}></Route>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
