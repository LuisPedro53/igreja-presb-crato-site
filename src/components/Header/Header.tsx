import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          {/* Logo */}
          <div className='header-logo'>
            <Link to='/' onClick={closeMenu}>
              <img
                src='/logo-saca.png'
                alt='Igreja Presbiteriana do Crato'
                className='logo-image'
              />
              <div className='logo-text'>
                <h1>Igreja Presbiteriana</h1>
                <p>do Crato</p>
              </div>
            </Link>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className='menu-toggle'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navegação */}
          <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to='/' className={isActive('/')} onClick={closeMenu}>
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to='/dizimos-ofertas'
                  className={isActive('/dizimos-ofertas')}
                  onClick={closeMenu}
                >
                  Dízimos e Ofertas
                </Link>
              </li>
              <li>
                <Link
                  to='/agenda'
                  className={isActive('/agenda')}
                  onClick={closeMenu}
                >
                  Agenda
                </Link>
              </li>
              <li>
                <Link
                  to='/contato'
                  className={isActive('/contato')}
                  onClick={closeMenu}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to='/sociedades'
                  className={isActive('/sociedades')}
                  onClick={closeMenu}
                >
                  Sociedades Internas
                </Link>
              </li>
              <li>
                <Link
                  to='/sobre'
                  className={isActive('/sobre')}
                  onClick={closeMenu}
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
