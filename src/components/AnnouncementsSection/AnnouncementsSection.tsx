import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './AnnouncementsSection.css';
import { getEventos } from '../../services/events';
import type { EventoDB } from '../../services/events';

interface Announcement {
  id: number;
  title: string;
  description: string;
  image?: string | null;
}

// fallback static announcements when DB has none
const fallbackAnnouncements: Announcement[] = [
  {
    id: 1,
    title: 'Culto de Ação de Graças',
    description:
      'Participe do nosso culto especial de ação de graças neste domingo às 19h.',
  },
  {
    id: 2,
    title: 'Escola Bíblica Dominical',
    description:
      'Venha estudar a Palavra de Deus conosco todos os domingos às 9h.',
  },
  {
    id: 3,
    title: 'Retiro de Jovens',
    description:
      'Inscrições abertas para o retiro de jovens! Não perca essa oportunidade.',
  },
];

const AnnouncementsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [announcements, setAnnouncements] = useState<Announcement[]>(
    fallbackAnnouncements
  );

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const data = await getEventos(false);

        // filter upcoming events (date >= today)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcoming = (data || [])
          .filter((e: EventoDB) => {
            if (!e.dtevento) return false;
            const evDate = new Date(e.dtevento + 'T00:00:00');
            return evDate >= today;
          })
          .map(
            (e: EventoDB) =>
              ({
                id: e.cdevento,
                title: e.nmevento || 'Evento',
                description: e.descricao || '',
                image: e.imagemevento || null,
              } as Announcement)
          );

        if (mounted && upcoming.length > 0) {
          setAnnouncements(upcoming);
          setCurrentIndex(0);
        }
      } catch (err) {
        console.error('Erro ao carregar próximos eventos:', err);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, announcements]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className='announcements-section'>
      <div className='announcements-container'>
        <div className='announcements-slider'>
          {announcements.map((announcement, index) => (
            <div
              key={announcement.id}
              className={`announcement-slide ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              {announcement.image ? (
                // show image with a neutral white background to improve contrast
                <div className='announcement-image-wrap'>
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className='announcement-image'
                    loading='lazy'
                  />
                </div>
              ) : (
                <div className='announcement-image-placeholder'>
                  Evento sem imagem
                </div>
              )}

              <div className='announcement-content'>
                <h2>{announcement.title}</h2>
                <p>{announcement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de navegação */}
        <button
          className='slider-control prev'
          onClick={goToPrevious}
          aria-label='Anterior'
        >
          <FaChevronLeft />
        </button>
        <button
          className='slider-control next'
          onClick={goToNext}
          aria-label='Próximo'
        >
          <FaChevronRight />
        </button>

        {/* Indicadores */}
        <div className='slider-indicators'>
          {announcements.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
