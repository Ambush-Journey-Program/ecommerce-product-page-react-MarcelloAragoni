import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import WomenPage from './pages/women';
import MenPage from './pages/men';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="women" element={<WomenPage />} />
        <Route path="men" element={<MenPage />} />
        <Route path="*" element={'404 - not found'} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
