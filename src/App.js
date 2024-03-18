import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Layout from './pages/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='about' element={<About/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
