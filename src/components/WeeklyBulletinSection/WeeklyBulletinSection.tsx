import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './WeeklyBulletinSection.css';

const WeeklyBulletinSection = () => {
  // Dados do próximo evento (futuramente virá de uma API ou CMS)
  const nextEvent = {
    title: 'Culto de Ação de Graças',
    date: '05 de Novembro de 2025',
    time: '19:00',
    location: 'Templo Principal',
    description:
      'Junte-se a nós em um culto especial de ação de graças. Momento de louvor, gratidão e comunhão.',
    imagePlaceholder: 'IMAGEM DO EVENTO',
  };

  return (
    <section className='bulletin-section section'>
      <div className='container'>
        <h2 className='section-title'>Próximo Evento</h2>
        <p className='section-subtitle'>
          Não perca! Confira nosso próximo evento e participe conosco
        </p>

        <div className='bulletin-content'>
          <div className='bulletin-image-placeholder'>
            {nextEvent.imagePlaceholder}
          </div>

          <div className='bulletin-info'>
            <h3>{nextEvent.title}</h3>
            <p className='bulletin-description'>{nextEvent.description}</p>

            <div className='bulletin-details'>
              <div className='detail-item'>
                <FaCalendarAlt />
                <div>
                  <strong>Data</strong>
                  <span>{nextEvent.date}</span>
                </div>
              </div>

              <div className='detail-item'>
                <FaClock />
                <div>
                  <strong>Horário</strong>
                  <span>{nextEvent.time}</span>
                </div>
              </div>

              <div className='detail-item'>
                <FaMapMarkerAlt />
                <div>
                  <strong>Local</strong>
                  <span>{nextEvent.location}</span>
                </div>
              </div>
            </div>

            <a href='/agenda' className='btn btn-primary bulletin-btn'>
              Ver Todos os Eventos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyBulletinSection;
