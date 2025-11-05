import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './LeadershipSection.css';

interface Leader {
  id: number;
  name: string;
  role: string;
  description: string;
  imagePlaceholder?: string;
  society: 'conselho' | 'uph' | 'saf' | 'ump';
  photo?: string | null;
  cdtipopessoa?: number | null;
}

// sample data grouped by society (fallback)
const fallbackLeaders: Leader[] = [
  // Conselho
  {
    id: 1,
    name: 'Rev. João Silva',
    role: 'Pastor Titular',
    description: 'Servo de Deus dedicado à pregação da Palavra.',
    society: 'conselho',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 2,
    name: 'Pb. Carlos Oliveira',
    role: 'Presbítero',
    description: 'Líder espiritual dedicado ao serviço.',
    society: 'conselho',
    imagePlaceholder: 'FOTO',
  },

  // UPH
  {
    id: 10,
    name: 'Irmã Maria Costa',
    role: 'Líder UPH',
    description: 'Coordenadora da UPH.',
    society: 'uph',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 11,
    name: 'Irmã Ana Pereira',
    role: 'Membro UPH',
    description: 'Ativa na pastoral feminina.',
    society: 'uph',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 12,
    name: 'Irmã Carla Souza',
    role: 'Membro UPH',
    description: 'Serviço e apoio à comunidade.',
    society: 'uph',
    imagePlaceholder: 'FOTO',
  },

  // SAF
  {
    id: 20,
    name: 'Irmã Joana Lima',
    role: 'Presidente SAF',
    description: 'Coordena as atividades sociais.',
    society: 'saf',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 21,
    name: 'Irmã Rita Gomes',
    role: 'Membro SAF',
    description: 'Participa das ações comunitárias.',
    society: 'saf',
    imagePlaceholder: 'FOTO',
  },

  // UMP
  {
    id: 30,
    name: 'Ir. Pedro Nunes',
    role: 'Líder UMP',
    description: 'Coordenador dos jovens.',
    society: 'ump',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 31,
    name: 'Ir. Marcos Silva',
    role: 'Membro UMP',
    description: 'Voluntário em ministérios de jovens.',
    society: 'ump',
    imagePlaceholder: 'FOTO',
  },
  {
    id: 32,
    name: 'Ir. Lucas Ferreira',
    role: 'Membro UMP',
    description: 'Música e louvor.',
    society: 'ump',
    imagePlaceholder: 'FOTO',
  },
];

const LeadershipSection = () => {
  const itemsPerPage = 3;

  const societies: Array<'conselho' | 'uph' | 'saf' | 'ump'> = [
    'conselho',
    'uph',
    'saf',
    'ump',
  ];

  // build initial groups from fallback data
  const initialGroups = societies.reduce((acc: Record<string, Leader[]>, s) => {
    acc[s] = fallbackLeaders.filter((l) => l.society === s);
    return acc;
  }, {} as Record<string, Leader[]>);

  const [groups, setGroups] = useState<Record<string, Leader[]>>(initialGroups);

  const [selectedFilter, setSelectedFilter] = useState<
    'todos' | (typeof societies)[number]
  >('todos');
  const [currentSocIndex, setCurrentSocIndex] = useState(0);
  // pagination removed for specific-filter view

  // load people -> society mapping from DB (if available)
  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const { getPessoasSociedades } = await import('../../services/people');
        const rows = await getPessoasSociedades();

        if (!mounted || !rows || rows.length === 0) return;

        // build new groups strictly by your rules
        const newGroups: Record<string, Leader[]> = {
          conselho: [],
          uph: [],
          saf: [],
          ump: [],
        };

        for (const r of rows) {
          const pessoa = (r as any).pessoa;
          const sociedade = (r as any).sociedade;
          if (!pessoa) continue;

          if (sociedade && sociedade.cdsociedade === 5) {
            newGroups['conselho'].push({
              id: pessoa.cdpessoa ?? Math.floor(Math.random() * 100000),
              name: pessoa.nmpessoa ?? 'Nome',
              role:
                (r as any).pessoatiposociedade?.nmcargo ||
                (r as any).cargo ||
                '',
              description: '',
              society: 'conselho',
              imagePlaceholder: pessoa.fotopessoa ?? undefined,
              photo: pessoa.fotopessoa ?? undefined,
              cdtipopessoa: pessoa.cdtipopessoa ?? undefined,
            });
          }

          // UPH: cdsociedade = 2
          if (sociedade && sociedade.cdsociedade === 2) {
            newGroups['uph'].push({
              id: pessoa.cdpessoa ?? Math.floor(Math.random() * 100000),
              name: pessoa.nmpessoa ?? 'Nome',
              role:
                (r as any).pessoatiposociedade?.nmcargo ||
                (r as any).cargo ||
                '',
              description: '',
              society: 'uph',
              imagePlaceholder: pessoa.fotopessoa ?? undefined,
              photo: pessoa.fotopessoa ?? undefined,
              cdtipopessoa: pessoa.cdtipopessoa ?? undefined,
            });
          }

          // SAF: cdsociedade = 1
          if (sociedade && sociedade.cdsociedade === 1) {
            newGroups['saf'].push({
              id: pessoa.cdpessoa ?? Math.floor(Math.random() * 100000),
              name: pessoa.nmpessoa ?? 'Nome',
              role:
                (r as any).pessoatiposociedade?.nmcargo ||
                (r as any).cargo ||
                '',
              description: '',
              society: 'saf',
              imagePlaceholder: pessoa.fotopessoa ?? undefined,
              photo: pessoa.fotopessoa ?? undefined,
              cdtipopessoa: pessoa.cdtipopessoa ?? undefined,
            });
          }

          // UMP: cdsociedade = 3
          if (sociedade && sociedade.cdsociedade === 3) {
            newGroups['ump'].push({
              id: pessoa.cdpessoa ?? Math.floor(Math.random() * 100000),
              name: pessoa.nmpessoa ?? 'Nome',
              role:
                (r as any).pessoatiposociedade?.nmcargo ||
                (r as any).cargo ||
                '',
              description: '',
              society: 'ump',
              imagePlaceholder: pessoa.fotopessoa ?? undefined,
              photo: pessoa.fotopessoa ?? undefined,
              cdtipopessoa: pessoa.cdtipopessoa ?? undefined,
            });
          }
        }

        // Deduplica por pessoa em cada grupo
        for (const soc of Object.keys(newGroups)) {
          const seen = new Set();
          newGroups[soc] = newGroups[soc].filter((l) => {
            if (seen.has(l.id)) return false;
            seen.add(l.id);
            return true;
          });
        }

        // debug: count how many leaders per society we found
        if (mounted) {
          const counts = Object.fromEntries(
            Object.entries(newGroups).map(([k, v]) => [k, v.length])
          );
          // small debug output to help trace why some entries may be missing
          console.debug('LeadershipSection: loaded groups counts:', counts);

          setGroups((prev) => ({ ...prev, ...newGroups }));
        }
      } catch (err) {
        // ignore — keep fallback
        console.warn(
          'LeadershipSection: não foi possível carregar lideranças do DB',
          err
        );
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const goToPrevious = () => {
    setCurrentSocIndex((i) => (i === 0 ? societies.length - 1 : i - 1));
  };

  const goToNext = () => {
    setCurrentSocIndex((i) => (i === societies.length - 1 ? 0 : i + 1));
  };

  const getCurrentLeaders = () => {
    if (selectedFilter === 'todos') {
      const soc = societies[currentSocIndex];
      const arr = groups[soc] || [];
      return arr.slice(0, itemsPerPage);
    }

    // when a specific filter is selected, return all leaders for that society
    const arr = (groups[selectedFilter] || []).slice();

    // ordering priority for common cargos: Presidente, Vice, 1 Secretario, 2 Secretario, Tesoureiro
    const normalize = (s?: string) =>
      (s || '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/[\u2018\u2019\u201c\u201d]/g, '')
        .replace(/[^a-z0-9 ]/g, '')
        .trim();

    const priorityOf = (role?: string) => {
      const r = normalize(role);
      if (!r) return 99;
      if (r.includes('presidente')) return 0;
      // vice or vice-presidente
      if (r.includes('vice')) return 1;
      // 1 secretario variants: '1 secretario', 'primeiro secretario', 'secretario 1', 'secretario primeiro'
      if (
        (r.includes('secretario') || r.includes('secretaria')) &&
        /(^| )1( |$)|primeir/.test(r)
      )
        return 2;
      // 2 secretario variants
      if (
        (r.includes('secretario') || r.includes('secretaria')) &&
        /(^| )2( |$)|segund/.test(r)
      )
        return 3;
      if (r.includes('tesour') || r.includes('tesoureiro')) return 4;
      return 50; // neutral for other cargos
    };

    // stable sort by priority, keep original order for ties
    const withIndex = arr.map((l, idx) => ({ l, idx, p: priorityOf(l.role) }));
    withIndex.sort((a, b) => a.p - b.p || a.idx - b.idx);
    return withIndex.map((x) => x.l);
  };

  // autoplay removed — slider will only change via manual controls or filters
  // If you want to re-enable autoplay later, add a setInterval here and clear it on cleanup.

  // helper to format leader name with prefix based on cdtipopessoa
  const formatLeaderName = (leader: Leader) => {
    const name = leader.name || '';
    // mapping according to the schema provided by the user:
    // presbítero = 2 => 'Pb.'
    // pastor     = 3 => 'Rev.'
    // diácono    = 4 => 'Diac.'
    // If your codes differ, tell me and I'll update.
    const prefixMap: Record<number, string> = {
      2: 'Pb.',
      3: 'Rev.',
      4: 'Diac.',
    };

    const prefix = leader.cdtipopessoa
      ? prefixMap[leader.cdtipopessoa]
      : undefined;

    // if name already contains a common prefix, don't duplicate
    if (/^(Rev\.|Pb\.|Diac\.|Presb|Pastor)/i.test(name)) return name;

    return prefix ? `${prefix} ${name}` : name;
  };

  return (
    <section className='leadership-section section'>
      <div className='container'>
        <h2 className='section-title'>Nossa Liderança</h2>
        <p className='section-subtitle'>
          Pastores e líderes por sociedade — escolha um filtro para ver os
          membros
        </p>

        <div className='leadership-slider'>
          {/* Filters */}
          <div className='leadership-filters'>
            <button
              className={`filter-btn ${
                selectedFilter === 'todos' ? 'active' : ''
              }`}
              onClick={() => {
                setSelectedFilter('todos');
                setCurrentSocIndex(0);
              }}
            >
              Todos
            </button>
            <button
              className={`filter-btn ${
                selectedFilter === 'conselho' ? 'active' : ''
              }`}
              onClick={() => {
                setSelectedFilter('conselho');
              }}
            >
              Conselho
            </button>
            <button
              className={`filter-btn ${
                selectedFilter === 'uph' ? 'active' : ''
              }`}
              onClick={() => {
                setSelectedFilter('uph');
              }}
            >
              UPH
            </button>
            <button
              className={`filter-btn ${
                selectedFilter === 'saf' ? 'active' : ''
              }`}
              onClick={() => {
                setSelectedFilter('saf');
              }}
            >
              SAF
            </button>
            <button
              className={`filter-btn ${
                selectedFilter === 'ump' ? 'active' : ''
              }`}
              onClick={() => {
                setSelectedFilter('ump');
              }}
            >
              UMP
            </button>
          </div>

          <div
            className={`leadership-grid ${
              selectedFilter === 'todos' ? '' : 'single-column'
            }`}
          >
            {getCurrentLeaders().map((leader) => (
              <div key={leader.id} className='leader-card'>
                {leader.photo ? (
                  <div className='leader-image'>
                    <img src={leader.photo} alt={leader.name} />
                  </div>
                ) : (
                  <div className='leader-image-placeholder'>
                    {leader.imagePlaceholder || 'FOTO'}
                  </div>
                )}
                <div className='leader-info'>
                  <h3>{formatLeaderName(leader)}</h3>
                  <span className='leader-role'>{leader.role}</span>
                  <p>{leader.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls (only show in 'todos' mode) */}
          {selectedFilter === 'todos' && (
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

              <div className='leadership-indicators'>
                {societies.map((_, idx) => (
                  <button
                    key={idx}
                    className={`indicator ${
                      idx === currentSocIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentSocIndex(idx)}
                    aria-label={`Sociedade ${idx + 1}`}
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
