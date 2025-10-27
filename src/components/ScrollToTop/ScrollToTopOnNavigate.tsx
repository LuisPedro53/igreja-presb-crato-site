import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que força o scroll para o topo da página
 * sempre que a rota mudar (ao clicar em um menu)
 */
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll imediato para o topo quando a rota mudar
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnNavigate;
