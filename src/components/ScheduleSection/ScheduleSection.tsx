import { FaClock, FaSun, FaMoon, FaPray, FaBook } from 'react-icons/fa';
import churchData from '../../data';
import './ScheduleSection.css';

interface Schedule {
  id: number;
  title: string;
  day: string;
  time: string;
  icon: React.ReactNode;
  type: 'morning' | 'evening' | 'prayer';
}

const schedules: Schedule[] = [
  {
    id: 1,
    title: churchData.schedule.sunday.morning.name,
    day: 'Domingo',
    time: churchData.schedule.sunday.morning.time,
    icon: <FaSun />,
    type: 'morning',
  },
  {
    id: 2,
    title: churchData.schedule.sunday.ebd.name,
    day: 'Domingo',
    time: churchData.schedule.sunday.ebd.time,
    icon: <FaBook />,
    type: 'morning',
  },
  {
    id: 3,
    title: churchData.schedule.sunday.evening.name,
    day: 'Domingo',
    time: churchData.schedule.sunday.evening.time,
    icon: <FaMoon />,
    type: 'evening',
  },
  {
    id: 4,
    title: churchData.schedule.wednesday.name,
    day: 'Quarta-feira',
    time: churchData.schedule.wednesday.time,
    icon: <FaPray />,
    type: 'prayer',
  },
];

const ScheduleSection = () => {
  return (
    <section className='schedule-section section'>
      <div className='container'>
        <h2 className='section-title'>Nossos Horários</h2>
        <p className='section-subtitle'>
          Venha nos visitar! Você é sempre bem-vindo(a) em nossa igreja.
        </p>

        <div className='schedule-grid'>
          {schedules.map((schedule) => (
            <div key={schedule.id} className={`schedule-card ${schedule.type}`}>
              <div className='schedule-icon'>{schedule.icon}</div>
              <h3>{schedule.title}</h3>
              <div className='schedule-info'>
                <FaClock />
                <span>
                  {schedule.day} - {schedule.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className='schedule-note'>
          <p>
            📍 <strong>Endereço:</strong> {churchData.address.full}
          </p>
          <p>
            💡 <strong>Dica:</strong> Chegue alguns minutos antes para garantir
            seu lugar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
