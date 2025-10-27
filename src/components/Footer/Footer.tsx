import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          {/* Sobre */}
          <div className='footer-section'>
            <h3>Igreja Presbiteriana do Crato</h3>
            <p>
              Uma igreja comprometida com a Palavra de Deus, servindo a
              comunidade e proclamando o evangelho de Jesus Cristo.
            </p>
            <div className='footer-social'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <FaFacebook />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FaInstagram />
              </a>
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='YouTube'
              >
                <FaYoutube />
              </a>
              <a
                href='https://wa.me/5588999999999'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='WhatsApp'
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className='footer-section'>
            <h3>Contato</h3>
            <ul className='footer-contact'>
              <li>
                <FaMapMarkerAlt />
                <span>
                  Rua Exemplo, 123 - Centro
                  <br />
                  Crato - CE, 63100-000
                </span>
              </li>
              <li>
                <FaPhone />
                <a href='tel:+5588999999999'>(88) 99999-9999</a>
              </li>
              <li>
                <FaEnvelope />
                <a href='mailto:contato@ipcrato.com.br'>
                  contato@ipcrato.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div className='footer-section'>
            <h3>Horários</h3>
            <ul className='footer-schedule'>
              <li>
                <FaClock />
                <div>
                  <strong>Culto Dominical</strong>
                  <span>Domingo - 09h e 19h</span>
                </div>
              </li>
              <li>
                <FaClock />
                <div>
                  <strong>EBD</strong>
                  <span>Domingo - 09h</span>
                </div>
              </li>
              <li>
                <FaClock />
                <div>
                  <strong>Culto de Oração</strong>
                  <span>Quarta-feira - 19h30</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div className='footer-section'>
            <h3>Links Rápidos</h3>
            <ul className='footer-links'>
              <li>
                <a href='/'>Início</a>
              </li>
              <li>
                <a href='/dizimos-ofertas'>Dízimos e Ofertas</a>
              </li>
              <li>
                <a href='/agenda'>Agenda</a>
              </li>
              <li>
                <a href='/sociedades'>Sociedades</a>
              </li>
              <li>
                <a href='/sobre'>Sobre Nós</a>
              </li>
              <li>
                <a href='/contato'>Contato</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='footer-bottom'>
          <p>
            &copy; {currentYear} Igreja Presbiteriana do Crato. Todos os
            direitos reservados.
          </p>
          <p className='footer-verse'>
            "Tudo quanto te vier à mão para fazer, faze-o conforme as tuas
            forças." - Eclesiastes 9:10
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
