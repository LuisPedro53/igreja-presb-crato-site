import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './AnnouncementsSection.css';

interface Announcement {
  id: number;
  title: string;
  description: string;
  imagePlaceholder: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Culto de Ação de Graças',
    description:
      'Participe do nosso culto especial de ação de graças neste domingo às 19h.',
    imagePlaceholder: 'IMAGEM 1',
  },
  {
    id: 2,
    title: 'Escola Bíblica Dominical',
    description:
      'Venha estudar a Palavra de Deus conosco todos os domingos às 9h.',
    imagePlaceholder: 'IMAGEM 2',
  },
  {
    id: 3,
    title: 'Retiro de Jovens',
    description:
      'Inscrições abertas para o retiro de jovens! Não perca essa oportunidade.',
    imagePlaceholder: 'IMAGEM 3',
  },
];

const AnnouncementsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
              <div className='announcement-image-placeholder'>
                {announcement.imagePlaceholder}
              </div>
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
