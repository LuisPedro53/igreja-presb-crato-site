import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DizimosOfertasPage from './pages/DizimosOfertasPage';
import AgendaPage from './pages/AgendaPage';
import ContatoPage from './pages/ContatoPage';
import SociedadesPage from './pages/SociedadesPage';
import SobrePage from './pages/SobrePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dizimos-ofertas' element={<DizimosOfertasPage />} />
            <Route path='/agenda' element={<AgendaPage />} />
            <Route path='/contato' element={<ContatoPage />} />
            <Route path='/sociedades' element={<SociedadesPage />} />
            <Route path='/sobre' element={<SobrePage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
