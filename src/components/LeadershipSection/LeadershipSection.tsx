import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './LeadershipSection.css';

interface Leader {
  id: number;
  name: string;
  role: string;
  description: string;
  imagePlaceholder: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: 'Rev. João Silva',
    role: 'Pastor Titular',
    description:
      'Servo de Deus dedicado à pregação da Palavra e cuidado do rebanho.',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 2,
    name: 'Rev. Pedro Santos',
    role: 'Pastor Auxiliar',
    description: 'Comprometido com o ensino bíblico e discipulado.',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 3,
    name: 'Pb. Carlos Oliveira',
    role: 'Presbítero',
    description: 'Líder espiritual dedicado ao serviço e cuidado pastoral.',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 4,
    name: 'Pb. José Ferreira',
    role: 'Presbítero',
    description: 'Servo fiel na administração e orientação da igreja.',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 5,
    name: 'Pb. Marcos Lima',
    role: 'Presbítero',
    description: 'Dedicado ao ensino e edificação dos irmãos.',
    imagePlaceholder: 'FOTO',
  },
];

const LeadershipSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(leaders.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const getCurrentLeaders = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return leaders.slice(start, end);
  };

  return (
    <section className='leadership-section section'>
      <div className='container'>
        <h2 className='section-title'>Nossa Liderança</h2>
        <p className='section-subtitle'>
          Pastores e Presbíteros comprometidos com o cuidado e edificação da
          igreja
        </p>

        <div className='leadership-slider'>
          <div className='leadership-grid'>
            {getCurrentLeaders().map((leader) => (
              <div key={leader.id} className='leader-card'>
                <div className='leader-image-placeholder'>
                  {leader.imagePlaceholder}
                </div>
                <div className='leader-info'>
                  <h3>{leader.name}</h3>
                  <span className='leader-role'>{leader.role}</span>
                  <p>{leader.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controles */}
          {totalPages > 1 && (
            <>
              <button
                className='leadership-control prev'
                onClick={goToPrevious}
                aria-label='Anterior'
              >
                <FaChevronLeft />
              </button>
              <button
                className='leadership-control next'
                onClick={goToNext}
                aria-label='Próximo'
              >
                <FaChevronRight />
              </button>

              {/* Indicadores */}
              <div className='leadership-indicators'>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Página ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
