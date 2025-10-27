import { useState } from 'react';
import './GallerySection.css';

interface GalleryImage {
  id: number;
  placeholder: string;
  title: string;
}

const images: GalleryImage[] = [
  { id: 1, placeholder: 'IMAGEM 1', title: 'Culto Dominical' },
  { id: 2, placeholder: 'IMAGEM 2', title: 'EBD' },
  { id: 3, placeholder: 'IMAGEM 3', title: 'Louvor' },
  { id: 4, placeholder: 'IMAGEM 4', title: 'Comunhão' },
  { id: 5, placeholder: 'IMAGEM 5', title: 'Eventos' },
  { id: 6, placeholder: 'IMAGEM 6', title: 'Celebrações' },
];

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? images : images.slice(0, 6);

  return (
    <section className='gallery-section section'>
      <div className='container'>
        <h2 className='section-title'>Galeria de Fotos</h2>
        <p className='section-subtitle'>
          Momentos especiais da nossa comunidade
        </p>

        <div className='gallery-grid'>
          {displayedImages.map((image) => (
            <div key={image.id} className='gallery-item'>
              <div className='gallery-image-placeholder'>
                {image.placeholder}
              </div>
              <div className='gallery-overlay'>
                <h4>{image.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {images.length > 6 && (
          <div className='gallery-actions'>
            <button
              className='btn btn-primary'
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Ver Menos' : 'Ver Mais Fotos'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
