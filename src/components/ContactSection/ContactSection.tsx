import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';
import churchData from '../../data';
import './ContactSection.css';

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
  subject?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validação do nome
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    }

    // Validação do email
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Validação do assunto
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }

    // Validação da mensagem
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpa o erro do campo ao digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulação de envio (futuramente integrar com backend)
    setTimeout(() => {
      console.log('Formulário enviado:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);

      // Limpa o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Remove mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className='contact-section section'>
      <div className='container'>
        <h2 className='section-title'>Entre em Contato</h2>
        <p className='section-subtitle'>
          Estamos aqui para ouvir você. Envie sua mensagem ou dúvida!
        </p>

        <div className='contact-content'>
          {/* Informações de Contato */}
          <div className='contact-info'>
            <h3>Nossas Informações</h3>
            <p className='contact-intro'>
              Você pode entrar em contato conosco através dos canais abaixo ou
              preencher o formulário ao lado.
            </p>

            <div className='contact-details'>
              <div className='contact-item'>
                <div className='contact-icon'>
                  <FaMapMarkerAlt />
                </div>
                <div className='contact-text'>
                  <h4>Endereço</h4>
                  <p>
                    {churchData.address.street} -{' '}
                    {churchData.address.neighborhood}
                    <br />
                    {churchData.address.city} - {churchData.address.state},{' '}
                    {churchData.address.zipCode}
                  </p>
                </div>
              </div>

              <div className='contact-item'>
                <div className='contact-icon'>
                  <FaPhone />
                </div>
                <div className='contact-text'>
                  <h4>Contatos</h4>
                  <p>
                    <strong>{churchData.contact.pastor.title}:</strong>
                    <br />
                    <a href={`tel:+${churchData.contact.pastor.phoneRaw}`}>
                      {churchData.contact.pastor.phone}
                    </a>
                  </p>
                  <p>
                    <strong>{churchData.contact.vicePresident.title}:</strong>
                    <br />
                    <a
                      href={`tel:+${churchData.contact.vicePresident.phoneRaw}`}
                    >
                      {churchData.contact.vicePresident.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className='contact-item'>
                <div className='contact-icon'>
                  <FaEnvelope />
                </div>
                <div className='contact-text'>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${churchData.contact.email}`}>
                      {churchData.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa do Google */}
            <div className='map-container'>
              <iframe
                src={churchData.maps.embedUrl}
                width='100%'
                height='300'
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Localização da Igreja Presbiteriana do Crato'
              ></iframe>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className='contact-form-wrapper'>
            {submitSuccess && (
              <div className='success-message'>
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>
                  Nome Completo <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder='Digite seu nome completo'
                />
                {errors.name && (
                  <span className='error-message'>{errors.name}</span>
                )}
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='email'>
                    Email <span className='required'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder='seu@email.com'
                  />
                  {errors.email && (
                    <span className='error-message'>{errors.email}</span>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>Telefone (Opcional)</label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='(88) 99999-9999'
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='subject'>
                  Assunto <span className='required'>*</span>
                </label>
                <select
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                >
                  <option value=''>Selecione um assunto</option>
                  <option value='informacoes'>Informações Gerais</option>
                  <option value='visita'>Quero Visitar a Igreja</option>
                  <option value='oracao'>Pedido de Oração</option>
                  <option value='dizimos'>Dízimos e Ofertas</option>
                  <option value='eventos'>Eventos</option>
                  <option value='outro'>Outro</option>
                </select>
                {errors.subject && (
                  <span className='error-message'>{errors.subject}</span>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor='message'>
                  Mensagem <span className='required'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder='Digite sua mensagem...'
                  rows={6}
                />
                {errors.message && (
                  <span className='error-message'>{errors.message}</span>
                )}
              </div>

              <button
                type='submit'
                className='btn btn-primary btn-submit'
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
