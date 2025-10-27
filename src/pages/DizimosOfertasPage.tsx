import { FaUniversity, FaQrcode, FaBarcode, FaHeart } from 'react-icons/fa';
import SEO from '../components/SEO';
import './DizimosOfertasPage.css';

const DizimosOfertasPage = () => {
  return (
    <>
      <SEO
        title='Dízimos e Ofertas - Como Contribuir'
        description='Contribua com a Igreja Presbiteriana do Crato através de transferência bancária, PIX ou presencialmente. Conheça as formas de ofertar e apoiar a obra de Deus.'
        keywords='dízimos igreja crato, ofertas IPB, contribuir igreja, PIX igreja, doação igreja presbiteriana'
      />
      <div className='dizimos-ofertas-page'>
        {/* Hero Section */}
        <section className='dizimos-hero'>
          <div className='container'>
            <FaHeart className='hero-icon' />
            <h1>Dízimos e Ofertas</h1>
            <p className='hero-subtitle'>
              "Cada um contribua segundo propôs no seu coração; não com
              tristeza, ou por necessidade; porque Deus ama ao que dá com
              alegria."
            </p>
            <p className='verse-reference'>2 Coríntios 9:7</p>
          </div>
        </section>

        {/* Explicação */}
        <section className='container section'>
          <div className='explanation-card'>
            <h2>Por que Contribuir?</h2>
            <div className='explanation-grid'>
              <div className='explanation-item'>
                <h3>📖 Obediência Bíblica</h3>
                <p>
                  O dízimo é um princípio bíblico estabelecido por Deus como
                  forma de reconhecermos que tudo pertence a Ele e que
                  dependemos de Sua provisão.
                </p>
              </div>
              <div className='explanation-item'>
                <h3>⛪ Manutenção da Igreja</h3>
                <p>
                  Suas contribuições mantêm a igreja funcionando, permitindo
                  cultos, programas, assistência social e a propagação do
                  evangelho.
                </p>
              </div>
              <div className='explanation-item'>
                <h3>❤️ Amor ao Reino</h3>
                <p>
                  Contribuir é uma forma prática de demonstrar amor a Deus e
                  compromisso com a obra que Ele realiza através da igreja
                  local.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formas de Contribuir */}
        <section className='container section payment-methods'>
          <h2 className='section-title'>Formas de Contribuir</h2>

          <div className='payment-cards'>
            {/* Transferência Bancária */}
            <div className='payment-card'>
              <div className='card-header'>
                <FaUniversity className='card-icon' />
                <h3>Transferência Bancária</h3>
              </div>
              <div className='card-body'>
                <div className='bank-info'>
                  <p>
                    <strong>Banco:</strong> Banco do Brasil
                  </p>
                  <p>
                    <strong>Agência:</strong> 1234-5
                  </p>
                  <p>
                    <strong>Conta Corrente:</strong> 12345-6
                  </p>
                  <p>
                    <strong>CNPJ:</strong> 00.000.000/0001-00
                  </p>
                  <p>
                    <strong>Favorecido:</strong> Igreja Presbiteriana do Crato
                  </p>
                </div>
              </div>
            </div>

            {/* PIX */}
            <div className='payment-card highlight'>
              <div className='card-header'>
                <FaQrcode className='card-icon' />
                <h3>PIX (Mais Rápido)</h3>
              </div>
              <div className='card-body'>
                <div className='pix-info'>
                  <p className='pix-label'>Chave PIX (CNPJ):</p>
                  <p className='pix-key'>00.000.000/0001-00</p>
                  <button className='btn-copy'>Copiar Chave PIX</button>

                  <div className='qrcode-placeholder'>
                    <FaBarcode size={80} />
                    <p>QR Code PIX</p>
                    <small>(Em breve disponível)</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Presencial */}
            <div className='payment-card'>
              <div className='card-header'>
                <FaHeart className='card-icon' />
                <h3>Contribuição Presencial</h3>
              </div>
              <div className='card-body'>
                <p>
                  Você também pode contribuir presencialmente durante nossos
                  cultos. Há envelopes disponíveis para dízimos e ofertas.
                </p>
                <div className='service-times'>
                  <p>
                    <strong>Domingos:</strong>
                  </p>
                  <p>☀️ Manhã: 09:00h</p>
                  <p>🌙 Noite: 19:00h</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Versículos Bíblicos */}
        <section className='container section verses-section'>
          <h2 className='section-title'>O que a Bíblia Diz</h2>
          <div className='verses-grid'>
            <div className='verse-card'>
              <p className='verse-text'>
                "Trazei todos os dízimos à casa do tesouro, para que haja
                mantimento na minha casa, e depois fazei prova de mim, diz o
                Senhor dos Exércitos, se eu não vos abrir as janelas do céu e
                não derramar sobre vós uma bênção tal, que dela vos advenha a
                maior abastança."
              </p>
              <p className='verse-reference'>Malaquias 3:10</p>
            </div>

            <div className='verse-card'>
              <p className='verse-text'>
                "Honra ao Senhor com os teus bens e com as primícias de toda a
                tua renda; e se encherão fartamente os teus celeiros, e
                transbordarão de vinho os teus lagares."
              </p>
              <p className='verse-reference'>Provérbios 3:9-10</p>
            </div>

            <div className='verse-card'>
              <p className='verse-text'>
                "Dai, e ser-vos-á dado; boa medida, recalcada, sacudida e
                transbordando vos deitarão no vosso regaço; porque com a mesma
                medida com que medirdes também vos medirão de novo."
              </p>
              <p className='verse-reference'>Lucas 6:38</p>
            </div>

            <div className='verse-card'>
              <p className='verse-text'>
                "Lembrai-vos: aquele que semeia pouco, pouco também ceifará; e o
                que semeia com fartura, com abundância também ceifará."
              </p>
              <p className='verse-reference'>2 Coríntios 9:6</p>
            </div>
          </div>
        </section>

        {/* Transparência */}
        <section className='container section transparency'>
          <div className='transparency-card'>
            <h2>Transparência e Prestação de Contas</h2>
            <p>
              Nossa igreja preza pela transparência no uso dos recursos. Todos
              os valores recebidos são aplicados na manutenção da igreja, ação
              social, missões e propagação do evangelho.
            </p>
            <p>
              Relatórios financeiros são apresentados regularmente ao Conselho e
              à Assembleia Geral.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DizimosOfertasPage;
