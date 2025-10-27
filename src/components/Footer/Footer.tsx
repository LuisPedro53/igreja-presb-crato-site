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
import churchData from '../../data';
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
                href={churchData.social.facebook}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <FaFacebook />
              </a>
              <a
                href={churchData.social.instagram}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FaInstagram />
              </a>
              <a
                href={churchData.social.youtube}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='YouTube'
              >
                <FaYoutube />
              </a>
              <a
                href={churchData.social.whatsapp.pastor}
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
                  {churchData.address.street} -{' '}
                  {churchData.address.neighborhood}
                  <br />
                  {churchData.address.city} - {churchData.address.state},{' '}
                  {churchData.address.zipCode}
                </span>
              </li>
              <li>
                <FaPhone />
                <span>
                  <a href={`tel:+${churchData.contact.pastor.phoneRaw}`}>
                    {churchData.contact.pastor.phone}
                  </a>
                  {' | '}
                  <a href={`tel:+${churchData.contact.vicePresident.phoneRaw}`}>
                    {churchData.contact.vicePresident.phone}
                  </a>
                </span>
              </li>
              <li>
                <FaEnvelope />
                <a href={`mailto:${churchData.contact.email}`}>
                  {churchData.contact.email}
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
                  <strong>{churchData.schedule.sunday.morning.name}</strong>
                  <span>
                    Domingo - {churchData.schedule.sunday.morning.time}
                  </span>
                </div>
              </li>
              <li>
                <FaClock />
                <div>
                  <strong>{churchData.schedule.sunday.ebd.name}</strong>
                  <span>Domingo - {churchData.schedule.sunday.ebd.time}</span>
                </div>
              </li>
              <li>
                <FaClock />
                <div>
                  <strong>{churchData.schedule.sunday.evening.name}</strong>
                  <span>
                    Domingo - {churchData.schedule.sunday.evening.time}
                  </span>
                </div>
              </li>
              <li>
                <FaClock />
                <div>
                  <strong>{churchData.schedule.wednesday.name}</strong>
                  <span>
                    Quarta-feira - {churchData.schedule.wednesday.time}
                  </span>
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
