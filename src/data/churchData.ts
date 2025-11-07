/**
 * Dados oficiais da Igreja Presbiteriana do Crato
 * Centraliza todas as informações institucionais para facilitar manutenção
 */

interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  full: string;
}

interface Maps {
  embedUrl: string;
  link: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface ContactPerson {
  name: string;
  title: string;
  phone: string;
  phoneRaw: string;
}

interface Contact {
  email: string;
  pastor: ContactPerson;
  vicePresident: ContactPerson;
}

interface ScheduleItem {
  name: string;
  time: string;
  description: string;
}

interface EBDSchedule extends ScheduleItem {
  classes: string[];
}

interface Schedule {
  sunday: {
    morning: ScheduleItem;
    ebd: EBDSchedule;
    evening: ScheduleItem;
  };
  wednesday: ScheduleItem;
}

interface OfficeHours {
  weekdays: {
    days: string;
    hours: string;
    morning: string;
    afternoon: string;
  };
  saturday: {
    days: string;
    status: string;
  };
  sunday: {
    days: string;
    status: string;
  };
}

interface Banking {
  pix: {
    type: string;
    key: string;
    keyRaw: string;
    name: string;
  };
  bank: {
    name: string;
    code: string;
  };
}

interface Social {
  whatsapp: {
    pastor: string;
    vicePresident: string;
  };
  instagram: string;
  youtube: string;
}

interface Society {
  id: number;
  name: string;
  acronym: string;
  description: string;
}

interface ChurchData {
  name: string;
  shortName: string;
  denomination: string;
  address: Address;
  maps: Maps;
  contact: Contact;
  schedule: Schedule;
  officeHours: OfficeHours;
  banking: Banking;
  social: Social;
  societies: Society[];
}

export const churchData: ChurchData = {
  // Informações gerais
  name: 'Igreja Presbiteriana do Crato',
  shortName: 'IPB Crato',
  denomination: 'Igreja Presbiteriana do Brasil',

  // Endereço
  address: {
    street: 'R. José Marrocos, 220',
    neighborhood: 'Pinto Madeira',
    city: 'Crato',
    state: 'CE',
    zipCode: '63101-005',
    full: 'R. José Marrocos, 220 - Pinto Madeira, Crato - CE, 63101-005',
  },

  // Google Maps
  maps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0659977066266!2d-39.41036872545462!3d-7.2333130710367515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a18483e50a145b%3A0x798c82bc28b8d461!2sIgreja%20Presbiteriana%20do%20Crato!5e0!3m2!1spt-BR!2sbr!4v1761572790476!5m2!1spt-BR!2sbr',
    link: 'https://goo.gl/maps/your-link-here',
    coordinates: {
      lat: -7.2333130710367515,
      lng: -39.41036872545462,
    },
  },

  // Contatos
  contact: {
    email: 'igrejapresbiterianacrato@gmail.com',
    pastor: {
      name: 'Rev. Bastos',
      title: 'Pastor',
      phone: '(88) 99630-8584',
      phoneRaw: '5588996308584',
    },
    vicePresident: {
      name: 'Humberto Araújo',
      title: 'Vice-Presidente do Conselho',
      phone: '(88) 99960-4943',
      phoneRaw: '5588999604943',
    },
  },

  // Horários de Cultos e Atividades
  schedule: {
    sunday: {
      morning: {
        name: 'Culto Dominical',
        time: '09:00',
        description: 'Culto de adoração e pregação da Palavra',
      },
      ebd: {
        name: 'Escola Bíblica Dominical (EBD)',
        time: '09:30',
        description: 'Logo após o culto dominical',
        classes: [
          'Sala das Crianças',
          'Sala dos Adolescentes',
          'Sala dos Jovens',
          'Sala dos Adultos',
        ],
      },
      evening: {
        name: 'Culto Vespertino',
        time: '18:30',
        description: 'Culto de adoração e comunhão',
      },
    },
    wednesday: {
      name: 'Culto de Oração e Doutrina',
      time: '18:30',
      description: 'Momento de oração e intercessão',
    },
  },

  // Horário de funcionamento da secretaria
  officeHours: {
    weekdays: {
      days: 'Segunda a Sexta',
      hours: '08:00 - 12:00 / 14:00 - 17:00',
      morning: '08:00 - 12:00',
      afternoon: '14:00 - 17:00',
    },
    saturday: {
      days: 'Sábado',
      status: 'Fechado',
    },
    sunday: {
      days: 'Domingo',
      status: 'Aberto para cultos',
    },
  },

  // Dados bancários para dízimos e ofertas
  banking: {
    pix: {
      type: 'CNPJ',
      key: '05.621.305/0001-34',
      keyRaw: '05621305000134',
      name: 'Igreja Presbiteriana do Crato',
    },
    bank: {
      name: 'Sicredi',
      code: '748',
    },
  },

  // Redes sociais
  social: {
    whatsapp: {
      pastor: 'https://wa.me/5588996308584',
      vicePresident: 'https://wa.me/5588999604943',
    },
    instagram: 'https://www.instagram.com/ipbcrato/',
    youtube: 'https://www.youtube.com/@IgrejaPresbiterianadoCrato',
  },

  // Sociedades Internas
  societies: [
    {
      id: 1,
      name: 'Sociedade Auxiliadora Feminina',
      acronym: 'SAF',
      description:
        'Organização que reúne as mulheres da igreja para comunhão, estudo bíblico e ação social.',
    },
    {
      id: 2,
      name: 'União de Homens Presbiterianos',
      acronym: 'UPH',
      description:
        'Reúne os homens da igreja para fortalecer a fé masculina e desenvolver liderança cristã.',
    },
    {
      id: 3,
      name: 'União da Mocidade Presbiteriana',
      acronym: 'UMP',
      description:
        'Voltada para jovens, proporcionando ensino bíblico, comunhão e atividades que fortalecem a fé.',
    },
    {
      id: 4,
      name: 'Sociedade Infantil',
      acronym: 'SI',
      description:
        'Dedicada ao ensino bíblico das crianças através de atividades lúdicas e educativas.',
    },
  ],
};

// Funções auxiliares para formatar dados
export const formatters = {
  formatPhone: (phone: string): string => phone,

  getFullAddress: (): string => churchData.address.full,

  getWhatsAppLink: (phoneRaw: string, message = ''): string => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneRaw}${
      message ? `?text=${encodedMessage}` : ''
    }`;
  },

  formatPix: (): string => churchData.banking.pix.key,

  getScheduleText: (
    day: 'sunday' | 'wednesday',
    period?: 'morning' | 'ebd' | 'evening'
  ): string => {
    if (day === 'sunday' && period) {
      const schedule = churchData.schedule.sunday[period];
      return `${schedule.name} - ${schedule.time}`;
    }
    if (day === 'wednesday') {
      return `${churchData.schedule.wednesday.name} - ${churchData.schedule.wednesday.time}`;
    }
    return '';
  },
};

export default churchData;
