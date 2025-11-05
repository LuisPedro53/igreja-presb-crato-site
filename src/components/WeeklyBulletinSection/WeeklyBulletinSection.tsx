import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './WeeklyBulletinSection.css';
import { getEventos } from '../../services/events';
import type { EventoDB } from '../../services/events';

const WeeklyBulletinSection = () => {
  const [nextEvent, setNextEvent] = useState<{
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image?: string | null;
  } | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadNext = async () => {
      try {
        const data = await getEventos(false);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcoming = (data || [])
          .filter((e: EventoDB) => {
            if (!e.dtevento) return false;
            const d = new Date(e.dtevento + 'T00:00:00');
            return d >= today;
          })
          .sort((a: EventoDB, b: EventoDB) => {
            const da = new Date((a.dtevento || '') + 'T00:00:00').getTime();
            const db = new Date((b.dtevento || '') + 'T00:00:00').getTime();
            return da - db;
          });

        if (mounted && upcoming.length > 0) {
          const e = upcoming[0];
          setNextEvent({
            title: e.nmevento || 'Evento',
            date: e.dtevento || '',
            time: e.horaevento || '',
            location: e.enderecoevento || '',
            description: e.descricao || '',
            image: e.imagemevento || null,
          });
        }
      } catch (err) {
        console.error('Erro ao carregar próximo evento:', err);
      }
    };

    loadNext();
    return () => {
      mounted = false;
    };
  }, []);

  if (!nextEvent) return null; // esconder a seção se não houver próximo evento

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return '';
    const parts = timeString.split(':');
    if (parts.length >= 2)
      return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}`;
    return timeString;
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
            {nextEvent.image ? (
              <div className='bulletin-image-wrap'>
                <img
                  src={nextEvent.image}
                  alt={nextEvent.title}
                  className='bulletin-image'
                  loading='lazy'
                />
              </div>
            ) : (
              'IMAGEM DO EVENTO'
            )}
          </div>

          <div className='bulletin-info'>
            <h3>{nextEvent.title}</h3>
            <p className='bulletin-description'>{nextEvent.description}</p>

            <div className='bulletin-details'>
              <div className='detail-item'>
                <FaCalendarAlt />
                <div>
                  <strong>Data</strong>
                  <span>{formatDate(nextEvent.date)}</span>
                </div>
              </div>

              <div className='detail-item'>
                <FaClock />
                <div>
                  <strong>Horário</strong>
                  <span>{formatTime(nextEvent.time)}</span>
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
