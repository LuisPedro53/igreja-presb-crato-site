import { useState } from 'react';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaFilter,
} from 'react-icons/fa';
import SEO from '../components/SEO';
import './AgendaPage.css';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'culto' | 'estudo' | 'evento' | 'reuniao';
  description: string;
}

const AgendaPage = () => {
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  const events: Event[] = [
    {
      id: 1,
      title: 'Culto Dominical Matutino',
      date: '2025-11-02',
      time: '09:00',
      location: 'Templo Principal',
      category: 'culto',
      description: 'Culto de adoração e pregação da Palavra',
    },
    {
      id: 2,
      title: 'Culto Dominical Vespertino',
      date: '2025-11-02',
      time: '19:00',
      location: 'Templo Principal',
      category: 'culto',
      description: 'Culto de louvor e edificação',
    },
    {
      id: 3,
      title: 'Estudo Bíblico',
      date: '2025-11-05',
      time: '19:30',
      location: 'Salão de Estudos',
      category: 'estudo',
      description: 'Estudo do livro de Romanos - Capítulo 8',
    },
    {
      id: 4,
      title: 'Reunião de Oração',
      date: '2025-11-06',
      time: '19:00',
      location: 'Templo Principal',
      category: 'reuniao',
      description: 'Momento de intercessão e busca a Deus',
    },
    {
      id: 5,
      title: 'Encontro da SAF',
      date: '2025-11-08',
      time: '15:00',
      location: 'Salão Social',
      category: 'reuniao',
      description: 'Reunião da Sociedade Auxiliadora Feminina',
    },
    {
      id: 6,
      title: 'Culto de Jovens',
      date: '2025-11-09',
      time: '19:30',
      location: 'Templo Principal',
      category: 'culto',
      description: 'Culto especial para juventude',
    },
    {
      id: 7,
      title: 'Seminário de Missões',
      date: '2025-11-15',
      time: '14:00',
      location: 'Auditório',
      category: 'evento',
      description: 'Palestras sobre missões nacionais e transculturais',
    },
    {
      id: 8,
      title: 'Encontro da UMP',
      date: '2025-11-16',
      time: '16:00',
      location: 'Salão Social',
      category: 'reuniao',
      description: 'Reunião da União de Homens Presbiterianos',
    },
    {
      id: 9,
      title: 'Culto de Ação de Graças',
      date: '2025-11-23',
      time: '19:00',
      location: 'Templo Principal',
      category: 'culto',
      description: 'Culto especial de gratidão a Deus',
    },
    {
      id: 10,
      title: 'Retiro Espiritual',
      date: '2025-11-29',
      time: '08:00',
      location: 'Sítio Maranata',
      category: 'evento',
      description: 'Retiro de final de semana para toda igreja',
    },
  ];

  const categories = [
    { value: 'todos', label: 'Todos os Eventos', color: '#44916f' },
    { value: 'culto', label: 'Cultos', color: '#2563eb' },
    { value: 'estudo', label: 'Estudos Bíblicos', color: '#9333ea' },
    { value: 'evento', label: 'Eventos Especiais', color: '#ea580c' },
    { value: 'reuniao', label: 'Reuniões', color: '#0891b2' },
  ];

  const filteredEvents =
    filterCategory === 'todos'
      ? events
      : events.filter((event) => event.category === filterCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find((c) => c.value === category);
    return cat?.color || '#44916f';
  };

  const getCategoryLabel = (category: string) => {
    const cat = categories.find((c) => c.value === category);
    return cat?.label || category;
  };

  return (
    <>
      <SEO
        title='Agenda de Eventos - Cultos e Atividades'
        description='Confira a agenda completa de eventos, cultos e atividades da Igreja Presbiteriana do Crato. Estudo bíblico, reuniões de oração, eventos especiais e muito mais.'
        keywords='agenda igreja crato, eventos igreja, cultos crato, programação IPB, atividades igreja'
      />
      <div className='agenda-page'>
        {/* Hero Section */}
        <section className='agenda-hero'>
          <div className='container'>
            <FaCalendarAlt className='hero-icon' />
            <h1>Agenda de Eventos</h1>
            <p className='hero-subtitle'>
              Fique por dentro de todos os eventos, cultos e atividades da nossa
              igreja
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className='container section filter-section'>
          <div className='filter-header'>
            <FaFilter className='filter-icon' />
            <h2>Filtrar por Categoria</h2>
          </div>
          <div className='filter-buttons'>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${
                  filterCategory === cat.value ? 'active' : ''
                }`}
                style={{
                  borderColor:
                    filterCategory === cat.value ? cat.color : '#ddd',
                  color: filterCategory === cat.value ? cat.color : '#666',
                }}
                onClick={() => setFilterCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Events List */}
        <section className='container section events-list'>
          <div className='events-count'>
            <p>
              Exibindo <strong>{filteredEvents.length}</strong> evento(s)
            </p>
          </div>

          <div className='events-grid'>
            {filteredEvents.map((event) => (
              <div key={event.id} className='event-card'>
                <div
                  className='event-category-badge'
                  style={{ backgroundColor: getCategoryColor(event.category) }}
                >
                  {getCategoryLabel(event.category)}
                </div>

                <h3 className='event-title'>{event.title}</h3>

                <div className='event-details'>
                  <div className='event-detail'>
                    <FaCalendarAlt className='detail-icon' />
                    <span>{formatDate(event.date)}</span>
                  </div>

                  <div className='event-detail'>
                    <FaClock className='detail-icon' />
                    <span>{event.time}</span>
                  </div>

                  <div className='event-detail'>
                    <FaMapMarkerAlt className='detail-icon' />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className='event-description'>{event.description}</p>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className='no-events'>
              <p>Nenhum evento encontrado nesta categoria.</p>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className='container section cta-section'>
          <div className='cta-card'>
            <h2>Participe Conosco!</h2>
            <p>
              Toda a igreja é bem-vinda em nossos eventos. Venha fazer parte da
              nossa comunhão e crescer na fé junto com irmãos em Cristo.
            </p>
            <p className='cta-verse'>
              "Não deixemos de congregar-nos, como é costume de alguns; antes,
              façamos admoestações e tanto mais quanto vedes que o Dia se
              aproxima."
            </p>
            <p className='cta-reference'>Hebreus 10:25</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AgendaPage;
