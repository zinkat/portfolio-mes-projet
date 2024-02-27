import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../src/components/Header'
import Home from '../src/pages/Home'
import Footer from './components/Footer';
import FicheProjet from './pages/FicheProjet';
import Apropos from './pages/Apropos'

function App() {
  return (
    <BrowserRouter>
  <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Apropos" element={<Apropos />} />
    <Route path="/FicheProjet/:id" element={<FicheProjet />} />
    {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  < Footer />
  </BrowserRouter>

  );
}

export default App;
