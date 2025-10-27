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
import churchData from '../data';
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
                  <p>{churchData.address.street}</p>
                  <p>
                    {churchData.address.neighborhood} -{' '}
                    {churchData.address.city}/{churchData.address.state}
                  </p>
                  <p>CEP: {churchData.address.zipCode}</p>
                </div>

                <div className='info-card'>
                  <FaPhone className='info-icon' />
                  <h3>Contatos</h3>
                  <p>
                    <strong>{churchData.contact.pastor.title}:</strong>
                  </p>
                  <p>{churchData.contact.pastor.name}</p>
                  <p>{churchData.contact.pastor.phone}</p>
                  <p style={{ marginTop: '10px' }}>
                    <strong>{churchData.contact.vicePresident.title}:</strong>
                  </p>
                  <p>{churchData.contact.vicePresident.name}</p>
                  <p>{churchData.contact.vicePresident.phone}</p>
                </div>

                <div className='info-card'>
                  <FaEnvelope className='info-icon' />
                  <h3>E-mail</h3>
                  <p>{churchData.contact.email}</p>
                </div>
              </div>

              <div className='social-media'>
                <h3>Contato Direto</h3>
                <div className='social-icons'>
                  <a
                    href={churchData.social.whatsapp.pastor}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-link whatsapp'
                  >
                    <FaWhatsapp /> WhatsApp - Pastor
                  </a>
                  <a
                    href={churchData.social.whatsapp.vicePresident}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-link whatsapp'
                  >
                    <FaWhatsapp /> WhatsApp - Vice-Presidente
                  </a>
                  <a
                    href={churchData.social.instagram}
                    className='social-link instagram'
                  >
                    <FaInstagram /> Instagram
                  </a>
                  <a
                    href={churchData.social.facebook}
                    className='social-link facebook'
                  >
                    <FaFacebook /> Facebook
                  </a>
                </div>
              </div>

              <div className='office-hours'>
                <h3>Horários de Funcionamento</h3>
                <div className='hours-list'>
                  <div className='hours-item'>
                    <strong>{churchData.officeHours.weekdays.days}:</strong>
                    <span>{churchData.officeHours.weekdays.hours}</span>
                  </div>
                  <div className='hours-item'>
                    <strong>{churchData.officeHours.saturday.days}:</strong>
                    <span>{churchData.officeHours.saturday.status}</span>
                  </div>
                  <div className='hours-item'>
                    <strong>{churchData.officeHours.sunday.days}:</strong>
                    <span>{churchData.officeHours.sunday.status}</span>
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
                src={churchData.maps.embedUrl}
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
