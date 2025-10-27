import { FaUsers, FaHeart, FaChild, FaBible } from 'react-icons/fa';
import SEO from '../components/SEO';
import './SociedadesPage.css';

interface Society {
  id: number;
  name: string;
  acronym: string;
  icon: React.ReactNode;
  description: string;
  objectives: string[];
  meetingDay: string;
  meetingTime: string;
  color: string;
}

const SociedadesPage = () => {
  const societies: Society[] = [
    {
      id: 1,
      name: 'Sociedade Auxiliadora Feminina',
      acronym: 'SAF',
      icon: <FaHeart />,
      description:
        'A SAF é uma organização que reúne as mulheres da igreja para comunhão, estudo bíblico e ação social.',
      objectives: [
        'Promover a comunhão entre as mulheres da igreja',
        'Desenvolver o conhecimento bíblico e espiritual',
        'Realizar trabalhos sociais e missionários',
        'Apoiar as atividades da igreja local',
      ],
      meetingDay: '',
      meetingTime: '',
      color: '#e91e63',
    },
    {
      id: 2,
      name: 'União de Homens Presbiterianos',
      acronym: 'UPH',
      description:
        'A UPH reúne os homens da igreja para fortalecer a fé masculina e desenvolver liderança cristã.',
      icon: <FaUsers />,
      objectives: [
        'Fortalecer a identidade masculina cristã',
        'Desenvolver liderança espiritual nos lares',
        'Promover evangelismo e discipulado',
        'Apoiar projetos missionários e sociais',
      ],
      meetingDay: '',
      meetingTime: '',
      color: '#2196f3',
    },
    {
      id: 3,
      name: 'União da Mocidade Presbiteriana',
      acronym: 'UMP',
      description:
        'A UMP é voltada para jovens, proporcionando ensino bíblico, comunhão e atividades que fortalecem a fé.',
      icon: <FaBible />,
      objectives: [
        'Ensinar princípios bíblicos aos jovens',
        'Promover comunhão entre a mocidade',
        'Desenvolver talentos e dons espirituais',
        'Preparar a próxima geração de líderes',
      ],
      meetingDay: '',
      meetingTime: '',
      color: '#ff9800',
    },
    {
      id: 4,
      name: 'Sociedade Infantil',
      acronym: 'SI',
      description:
        'Dedicada ao ensino bíblico das crianças através de atividades lúdicas e educativas.',
      icon: <FaChild />,
      objectives: [
        'Ensinar a Bíblia de forma criativa e lúdica',
        'Desenvolver valores cristãos desde cedo',
        'Proporcionar ambiente seguro e acolhedor',
        'Formar o caráter cristão nas crianças',
      ],
      meetingDay: '',
      meetingTime: '',
      color: '#4caf50',
    },
  ];

  return (
    <>
      <SEO
        title='Sociedades Internas - Ministérios da Igreja'
        description='Conheça as sociedades internas da IP Crato: SAF, UMP, UPA e Ministério Infantil. Encontre seu lugar na família de Deus e participe das atividades.'
        keywords='SAF crato, UMP igreja, UPA presbiteriana, ministério infantil, sociedades igreja'
      />
      <div className='sociedades-page'>
        {/* Hero Section */}
        <section className='sociedades-hero'>
          <div className='container'>
            <FaUsers className='hero-icon' />
            <h1>Sociedades Internas</h1>
            <p className='hero-subtitle'>
              Conheça os ministérios da nossa igreja e encontre seu lugar na
              família de Deus
            </p>
            <p className='hero-verse'>
              "E perseveravam na doutrina dos apóstolos, e na comunhão, e no
              partir do pão, e nas orações." - Atos 2:42
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className='container section intro-section'>
          <div className='intro-card'>
            <h2>Por que Participar?</h2>
            <p>
              As sociedades internas são grupos organizados dentro da igreja que
              proporcionam comunhão específica para diferentes faixas etárias e
              necessidades. Participar de uma sociedade é uma forma de crescer
              espiritualmente, desenvolver amizades cristãs e servir ao Reino de
              Deus.
            </p>
            <p>
              Cada sociedade tem suas características próprias, mas todas
              compartilham o mesmo propósito: glorificar a Deus e edificar o
              corpo de Cristo.
            </p>
          </div>
        </section>

        {/* Societies Cards */}
        <section className='container section societies-section'>
          <div className='societies-grid'>
            {societies.map((society) => (
              <div key={society.id} className='society-card'>
                <div
                  className='society-header'
                  style={{ background: society.color }}
                >
                  <div className='society-icon'>{society.icon}</div>
                  <h3>{society.name}</h3>
                  <span className='society-acronym'>{society.acronym}</span>
                </div>

                <div className='society-body'>
                  <p className='society-description'>{society.description}</p>

                  <div className='society-objectives'>
                    <h4>Objetivos:</h4>
                    <ul>
                      {society.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className='container section cta-section'>
          <div className='cta-card'>
            <h2>Encontre Seu Lugar!</h2>
            <p>
              Todos são bem-vindos para participar das nossas sociedades. Não
              importa sua idade ou fase da vida, há um lugar para você na
              família da Igreja Presbiteriana do Crato.
            </p>
            <p className='cta-highlight'>
              "Porque, assim como o corpo é um, e tem muitos membros, e todos os
              membros, sendo muitos, são um só corpo, assim é Cristo também." -
              1 Coríntios 12:12
            </p>
            <div className='cta-buttons'>
              <a href='/contato' className='btn-primary'>
                Entre em Contato
              </a>
              <a href='/agenda' className='btn-secondary'>
                Ver Agenda Completa
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SociedadesPage;
