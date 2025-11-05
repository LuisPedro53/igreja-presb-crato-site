import { useEffect, useState } from 'react';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import SEO from '../components/SEO';
import './AgendaPage.css';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  // keep legacy category for color mapping, but also include original type code and label
  category: 'culto' | 'estudo' | 'evento' | 'reuniao';
  tipoCode: number | null;
  tipoLabel: string;
  ativo?: boolean;
  image?: string | null;
  description: string;
}

const AgendaPage = () => {
  const [filterCategory, setFilterCategory] = useState<string>('todos');
  const [activeOnly, setActiveOnly] = useState<boolean>(true); // flag: mostrar só ativos por padrão
  const [showAllTypes, setShowAllTypes] = useState<boolean>(false);
  // tipos de evento vindos do banco
  const [tipos, setTipos] = useState<
    { cdtipoevento: number; nmtipoevento: string }[]
  >([]);

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const { getEventos } = await import('../services/events');
        const data = await getEventos(!activeOnly); // if activeOnly=false, include inactive

        // Map database fields to the UI Event shape
        const mapped = data.map((e, idx) => {
          const tipoCode = e.cdtipoevento ?? null;

          const tipoLabel = ((): string => {
            // Assumptions about codes -> labels (adjust if you have a tipos table)
            if (tipoCode === 1) return 'Culto';
            if (tipoCode === 2) return 'Estudo Bíblico';
            if (tipoCode === 3) return 'Reunião';
            if (tipoCode === 4) return 'Evento Social';
            return 'Evento';
          })();

          const category = ((): Event['category'] => {
            if (tipoCode === 1) return 'culto';
            if (tipoCode === 2) return 'estudo';
            if (tipoCode === 3) return 'reuniao';
            return 'evento';
          })();

          return {
            id: e.cdevento ?? idx + 1,
            title: e.nmevento ?? 'Evento',
            date: e.dtevento ?? '',
            time: e.horaevento ?? '',
            location: e.enderecoevento ?? '',
            category,
            tipoCode,
            tipoLabel,
            ativo: !!e.ativo,
            image: e.imagemevento ?? null,
            description: e.descricao ?? '',
          } as Event;
        });

        if (mounted) setEvents(mapped);
      } catch (err: any) {
        console.error('Erro ao carregar eventos:', err);
        if (mounted) setError(err.message || 'Erro desconhecido');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchEvents();

    return () => {
      mounted = false;
    };
  }, [activeOnly]);

  // fetch tipos de evento on mount
  useEffect(() => {
    let mounted = true;
    const fetchTipos = async () => {
      try {
        const { getTiposEventos } = await import('../services/events');
        const data = await getTiposEventos();
        if (mounted) setTipos(data ?? []);
      } catch (err) {
        console.error('Erro ao carregar tipos de evento:', err);
      }
    };
    fetchTipos();
    return () => {
      mounted = false;
    };
  }, []);

  // Main filter types to show initially: Todos + specific tipoevento codes (from DB)
  const preferredTipoNames = ['Evento Social', 'Culto', 'Reuniões'];
  const preferredTipos = tipos.filter((t) =>
    preferredTipoNames.includes(t.nmtipoevento)
  );
  const mainTypes = [
    { value: 'todos', label: 'Todos os Eventos', color: '#44916f' },
    ...preferredTipos.map((t, i) => ({
      value: String(t.cdtipoevento),
      label: t.nmtipoevento,
      color: i === 0 ? '#ea580c' : i === 1 ? '#2563eb' : '#0891b2',
    })),
  ];

  // additional types come from tipos table excluding main ones
  const additionalTypes = tipos
    .filter((t) => !preferredTipoNames.includes(t.nmtipoevento))
    .map((t) => ({
      value: String(t.cdtipoevento),
      label: t.nmtipoevento,
      color: '#777',
    }));

  // apply category filter
  const byCategory =
    filterCategory === 'todos'
      ? events
      : events.filter((event) => {
          // allow matching by mapped legacy category or by tipoLabel/value
          if (filterCategory === 'evento_social')
            return (
              event.tipoLabel === 'Evento Social' || event.category === 'evento'
            );
          return (
            event.category === filterCategory ||
            event.tipoLabel === filterCategory ||
            String(event.tipoCode) === filterCategory
          );
        });

  // filtered events (no past/future filtering; active only controlled by server query)
  const filteredEvents = byCategory;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return '';
    // timeString may be '19:00:00' or '19:00'
    const parts = timeString.split(':');
    if (parts.length >= 2)
      return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}`;
    return timeString;
  };

  const getCategoryLabel = (category: string) => {
    const cat =
      mainTypes.find((c) => c.value === category) ||
      additionalTypes.find((c) => c.value === category);
    return cat?.label || category;
  };

  // color map by cdtipoevento
  const tipoColorMap: Record<string, string> = {
    '1': '#2563eb', // Culto - blue
    '2': '#7c3aed', // EBD - purple
    '3': '#10b981', // Reunião de Oração - green
    '4': '#06b6d4', // Estudo Bíblico - teal
    '5': '#ea580c', // Evento Social - orange
    '6': '#ef4444', // Reuniões - red
    '7': '#8b5cf6', // Retiro - indigo
    '8': '#f59e0b', // Aniversário - amber
    '9': '#db2777', // Casamento - pink
    '10': '#0891b2', // Batismo - cyan-ish
  };

  const getCategoryColor = (category: string) => {
    // if category is numeric (cdtipoevento), prefer tipoColorMap
    if (category && tipoColorMap[category]) return tipoColorMap[category];
    const cat =
      mainTypes.find((c) => c.value === category) ||
      additionalTypes.find((c) => c.value === category);
    return cat?.color || '#44916f';
  };

  const getTipoLabel = (event: Event) => {
    const t = tipos.find((tt) => tt.cdtipoevento === event.tipoCode);
    if (t) return t.nmtipoevento;
    return event.tipoLabel || getCategoryLabel(event.category);
  };

  // helper removed: não usamos filtro passado/futuro

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
          <div className='filter-controls'>
            <div className='filter-buttons'>
              {mainTypes.map((cat) => (
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

              {/* toggle to open dropdown with additional types */}
              <button
                className='filter-btn'
                onClick={() => setShowAllTypes((s) => !s)}
                style={{
                  borderColor: '#ddd',
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
                aria-expanded={showAllTypes}
                aria-controls='types-dropdown'
              >
                {showAllTypes ? (
                  <>
                    Ocultar
                    <FaChevronUp />
                  </>
                ) : (
                  <>
                    Mais
                    <FaChevronDown />
                  </>
                )}
              </button>
            </div>

            <div className='filter-options' style={{ marginTop: 12 }}></div>
          </div>
          {showAllTypes && (
            <div id='types-dropdown' className='types-dropdown'>
              {additionalTypes.map((t) => (
                <button
                  key={t.value}
                  className={`filter-btn ${
                    filterCategory === t.value ? 'active' : ''
                  }`}
                  style={{
                    borderColor: filterCategory === t.value ? t.color : '#ddd',
                    color: filterCategory === t.value ? t.color : '#666',
                  }}
                  onClick={() => setFilterCategory(t.value)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
          <label style={{ marginRight: 12 }}>
            <input
              type='checkbox'
              checked={activeOnly}
              onChange={(e) => setActiveOnly(e.target.checked)}
            />{' '}
            Mostrar apenas eventos ativos
          </label>
        </section>

        {/* Events List */}
        <section className='container section events-list'>
          <div className='events-count'>
            <p>
              Exibindo <strong>{filteredEvents.length}</strong> evento(s)
            </p>
          </div>

          <div className='events-grid'>
            {loading && <p>Carregando eventos...</p>}
            {error && (
              <div className='no-events'>
                <p>Falha ao carregar eventos: {error}</p>
              </div>
            )}

            {!loading &&
              !error &&
              filteredEvents.map((event) => (
                <div key={event.id} className='event-card'>
                  <div
                    className='event-category-badge'
                    style={{
                      // try to color by tipoCode first, fallback to category color
                      backgroundColor:
                        (event.tipoCode &&
                          getCategoryColor(String(event.tipoCode))) ||
                        getCategoryColor(event.category),
                    }}
                  >
                    {getTipoLabel(event)}
                  </div>

                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className='event-image'
                      loading='lazy'
                    />
                  ) : (
                    <div
                      className='event-image-placeholder'
                      role='img'
                      aria-label='Evento sem imagem'
                    >
                      Evento sem imagem
                    </div>
                  )}

                  <h3 className='event-title'>{event.title}</h3>

                  <div className='event-details'>
                    <div className='event-detail'>
                      <FaCalendarAlt className='detail-icon' />
                      <span>{formatDate(event.date)}</span>
                    </div>

                    <div className='event-detail'>
                      <FaClock className='detail-icon' />
                      <span>{formatTime(event.time)}</span>
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
