import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import SEO from '../components/SEO';
import './ContatoPage.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContatoPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'geral',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'geral',
      message: '',
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [e.target.name]: undefined,
      });
    }
  };

  return (
    <>
      <SEO
        title='Contato - Fale Conosco'
        description='Entre em contato com a Igreja Presbiteriana do Crato. Envie sua mensagem, pedido de oração ou agende uma visita. Estamos prontos para ouvir você!'
        keywords='contato igreja crato, telefone igreja, endereço IPB crato, falar com pastor, visitar igreja'
      />
      <div className='contato-page'>
        {/* Hero Section */}
        <section className='contato-hero'>
          <div className='container'>
            <FaEnvelope className='hero-icon' />
            <h1>Entre em Contato</h1>
            <p className='hero-subtitle'>
              Estamos prontos para ouvir você. Envie sua mensagem, dúvida ou
              pedido de oração.
            </p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className='container section main-contact'>
          <div className='contact-grid'>
            {/* Contact Form */}
            <div className='contact-form-wrapper'>
              <h2>Envie sua Mensagem</h2>

              {submitSuccess && (
                <div className='success-message'>
                  <p>
                    ✓ Mensagem enviada com sucesso! Entraremos em contato em
                    breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className='contact-form'>
                <div className='form-group'>
                  <label htmlFor='name'>Nome Completo *</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder='Seu nome completo'
                  />
                  {errors.name && (
                    <span className='error-message'>{errors.name}</span>
                  )}
                </div>

                <div className='form-row'>
                  <div className='form-group'>
                    <label htmlFor='email'>E-mail *</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder='seuemail@exemplo.com'
                    />
                    {errors.email && (
                      <span className='error-message'>{errors.email}</span>
                    )}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='phone'>Telefone</label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='(88) 98765-4321'
                    />
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='subject'>Assunto</label>
                  <select
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value='geral'>Informação Geral</option>
                    <option value='visita'>Agendar Visita</option>
                    <option value='oracao'>Pedido de Oração</option>
                    <option value='batismo'>Batismo</option>
                    <option value='casamento'>Casamento</option>
                    <option value='dizimos'>Dízimos e Ofertas</option>
                    <option value='outros'>Outros</option>
                  </select>
                </div>

                <div className='form-group'>
                  <label htmlFor='message'>Mensagem *</label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder='Digite sua mensagem aqui...'
                    rows={6}
                  ></textarea>
                  {errors.message && (
                    <span className='error-message'>{errors.message}</span>
                  )}
                </div>

                <button
                  type='submit'
                  className='submit-btn'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <FaPaperPlane /> Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className='contact-info-wrapper'>
              <h2>Informações de Contato</h2>

              <div className='contact-info-cards'>
                <div className='info-card'>
                  <FaMapMarkerAlt className='info-icon' />
                  <h3>Endereço</h3>
                  <p>Rua da Igreja, 123</p>
                  <p>Centro - Crato/CE</p>
                  <p>CEP: 63100-000</p>
                </div>

                <div className='info-card'>
                  <FaPhone className='info-icon' />
                  <h3>Telefone</h3>
                  <p>(88) 3521-0000</p>
                  <p>Segunda a Sexta</p>
                  <p>08:00 - 17:00</p>
                </div>

                <div className='info-card'>
                  <FaEnvelope className='info-icon' />
                  <h3>E-mail</h3>
                  <p>contato@ipcrato.com.br</p>
                  <p>secretaria@ipcrato.com.br</p>
                </div>
              </div>

              <div className='social-media'>
                <h3>Redes Sociais</h3>
                <div className='social-icons'>
                  <a href='#' className='social-link whatsapp'>
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a href='#' className='social-link instagram'>
                    <FaInstagram /> Instagram
                  </a>
                  <a href='#' className='social-link facebook'>
                    <FaFacebook /> Facebook
                  </a>
                </div>
              </div>

              <div className='office-hours'>
                <h3>Horários de Funcionamento</h3>
                <div className='hours-list'>
                  <div className='hours-item'>
                    <strong>Segunda a Sexta:</strong>
                    <span>08:00 - 12:00 / 14:00 - 17:00</span>
                  </div>
                  <div className='hours-item'>
                    <strong>Sábado:</strong>
                    <span>Fechado</span>
                  </div>
                  <div className='hours-item'>
                    <strong>Domingo:</strong>
                    <span>Aberto para cultos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className='map-section'>
          <div className='container'>
            <h2>Nossa Localização</h2>
            <div className='map-container'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0659977066266!2d-39.41036872545462!3d-7.2333130710367515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a18483e50a145b%3A0x798c82bc28b8d461!2sIgreja%20Presbiteriana%20do%20Crato!5e0!3m2!1spt-BR!2sbr!4v1761572790476!5m2!1spt-BR!2sbr'
                width='100%'
                height='450'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Localização da Igreja Presbiteriana do Crato'
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContatoPage;
