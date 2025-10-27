import {
  FaChurch,
  FaCross,
  FaBook,
  FaHeart,
  FaUsers,
  FaGlobe,
} from 'react-icons/fa';
import SEO from '../components/SEO';
import './SobrePage.css';

const SobrePage = () => {
  const history = [
    {
      year: '1950',
      title: 'Fundação',
      description:
        'A Igreja Presbiteriana do Crato foi fundada por um grupo de missionários e fiéis presbiterianos.',
    },
    {
      year: '1965',
      title: 'Construção do Templo',
      description:
        'Após 15 anos de reuniões em casas, foi inaugurado o primeiro templo próprio.',
    },
    {
      year: '1980',
      title: 'Expansão',
      description:
        'Início dos trabalhos de evangelização em bairros periféricos, plantando novas congregações.',
    },
    {
      year: '2000',
      title: 'Reforma e Ampliação',
      description:
        'O templo passou por grande reforma e ampliação para acomodar o crescimento da igreja.',
    },
    {
      year: '2025',
      title: 'Igreja do Presente',
      description:
        'Hoje somos uma comunidade vibrante, comprometida com o evangelho e transformação de vidas.',
    },
  ];

  const beliefs = [
    {
      icon: <FaBook />,
      title: 'Autoridade das Escrituras',
      description:
        'Cremos que a Bíblia é a Palavra de Deus, inerrante e infalível, nossa única regra de fé e prática.',
    },
    {
      icon: <FaCross />,
      title: 'Salvação pela Graça',
      description:
        'Cremos que a salvação é pela graça mediante a fé em Jesus Cristo, não por obras humanas.',
    },
    {
      icon: <FaChurch />,
      title: 'Igreja de Cristo',
      description:
        'Cremos que a igreja é o corpo de Cristo, composta por todos os verdadeiros crentes em Jesus.',
    },
    {
      icon: <FaHeart />,
      title: 'Santificação',
      description:
        'Cremos que o Espírito Santo opera a santificação progressiva na vida dos salvos.',
    },
    {
      icon: <FaGlobe />,
      title: 'Grande Comissão',
      description:
        'Cremos que somos chamados a pregar o evangelho a todas as nações até aos confins da terra.',
    },
    {
      icon: <FaUsers />,
      title: 'Sacerdócio Universal',
      description:
        'Cremos que todos os crentes são sacerdotes diante de Deus, com acesso direto a Ele.',
    },
  ];

  return (
    <>
      <SEO
        title='Sobre Nós - Nossa História e Missão'
        description='Conheça a história da Igreja Presbiteriana do Crato, nossa missão, visão, valores e declaração de fé. Mais de 70 anos servindo a Deus e ao próximo.'
        keywords='história IPB crato, missão igreja, valores cristãos, declaração de fé, igreja reformada'
      />
      <div className='sobre-page'>
        {/* Hero Section */}
        <section className='sobre-hero'>
          <div className='container'>
            <FaChurch className='hero-icon' />
            <h1>Sobre Nós</h1>
            <p className='hero-subtitle'>
              Conheça nossa história, missão e valores que nos guiam como igreja
              de Cristo
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className='container section mission-section'>
          <div className='mission-grid'>
            <div className='mission-card'>
              <div className='mission-icon vision'>
                <FaGlobe />
              </div>
              <h2>Nossa Visão</h2>
              <p>
                Ser uma igreja relevante e impactante na sociedade, formando
                discípulos maduros em Cristo que glorifiquem a Deus em todas as
                áreas da vida.
              </p>
            </div>

            <div className='mission-card'>
              <div className='mission-icon mission'>
                <FaCross />
              </div>
              <h2>Nossa Missão</h2>
              <p>
                Proclamar o evangelho de Jesus Cristo, edificar os santos na fé,
                promover adoração genuína e servir ao próximo com amor.
              </p>
            </div>

            <div className='mission-card'>
              <div className='mission-icon values'>
                <FaHeart />
              </div>
              <h2>Nossos Valores</h2>
              <ul>
                <li>Fidelidade à Palavra de Deus</li>
                <li>Comunhão verdadeira</li>
                <li>Santidade de vida</li>
                <li>Evangelização e missões</li>
                <li>Amor ao próximo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className='history-section'>
          <div className='container'>
            <h2 className='section-title'>Nossa História</h2>
            <p className='section-subtitle'>
              Mais de 70 anos de história, fidelidade e serviço ao Reino de Deus
            </p>

            <div className='timeline'>
              {history.map((item, index) => (
                <div key={index} className='timeline-item'>
                  <div className='timeline-marker'></div>
                  <div className='timeline-content'>
                    <span className='timeline-year'>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className='container section beliefs-section'>
          <h2 className='section-title'>Nossa Declaração de Fé</h2>
          <p className='section-subtitle'>
            Princípios fundamentais da fé cristã reformada que norteiam nossa
            igreja
          </p>

          <div className='beliefs-grid'>
            {beliefs.map((belief, index) => (
              <div key={index} className='belief-card'>
                <div className='belief-icon'>{belief.icon}</div>
                <h3>{belief.title}</h3>
                <p>{belief.description}</p>
              </div>
            ))}
          </div>

          <div className='confession-note'>
            <p>
              <strong>
                Nossa igreja subscreve os seguintes documentos confessionais:
              </strong>
            </p>
            <ul>
              <li>Confissão de Fé de Westminster</li>
              <li>Catecismo Maior de Westminster</li>
              <li>Breve Catecismo de Westminster</li>
            </ul>
            <p className='note-footer'>
              Estes documentos, elaborados no século XVII, expressam de forma
              clara e sistemática as doutrinas bíblicas da fé reformada.
            </p>
          </div>
        </section>

        {/* Affiliations Section */}
        <section className='affiliations-section'>
          <div className='container'>
            <h2 className='section-title'>Filiações e Parcerias</h2>

            <div className='affiliations-content'>
              <div className='affiliation-card'>
                <h3>Igreja Presbiteriana do Brasil</h3>
                <p>
                  Somos uma congregação filiada à Igreja Presbiteriana do Brasil
                  (IPB), denominação evangélica de confissão reformada e governo
                  presbiteriano.
                </p>
              </div>

              <div className='affiliation-card'>
                <h3>Presbitério do Cariri</h3>
                <p>
                  Fazemos parte do Presbitério do Cariri, que reúne as igrejas
                  presbiterianas da região do Cariri cearense.
                </p>
              </div>

              <div className='affiliation-card'>
                <h3>Sínodo do Nordeste</h3>
                <p>
                  Pertencemos ao Sínodo do Nordeste, órgão que coordena os
                  presbitérios da região nordeste do Brasil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='container section cta-section'>
          <div className='cta-card'>
            <h2>Venha Nos Visitar!</h2>
            <p>
              Você é muito bem-vindo para conhecer nossa igreja e participar de
              nossos cultos. Será um prazer tê-lo(a) conosco!
            </p>
            <div className='cta-info'>
              <div className='cta-info-item'>
                <strong>Domingos</strong>
                <p>09:00 - Culto Matutino</p>
                <p>19:00 - Culto Vespertino</p>
              </div>
              <div className='cta-info-item'>
                <strong>Quartas-feiras</strong>
                <p>19:30 - Culto de Oração</p>
              </div>
            </div>
            <a href='/contato' className='cta-button'>
              Entre em Contato
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default SobrePage;
