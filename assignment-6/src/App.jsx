import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './HomePage';
import Mern from './Mern';
import Python from './Python';
import Javascript from './Javascript';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Mern" element={<Mern />} />
        <Route path="/Python" element={<Python />} />
        <Route path="/Javascript" element={<Javascript />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App
