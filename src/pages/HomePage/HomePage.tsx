import SEO from '../../components/SEO';
import AnnouncementsSection from '../../components/AnnouncementsSection';
import ScheduleSection from '../../components/ScheduleSection';
import LeadershipSection from '../../components/LeadershipSection';
import WeeklyBulletinSection from '../../components/WeeklyBulletinSection';
import GallerySection from '../../components/GallerySection';
import ContactSection from '../../components/ContactSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <SEO
        title='Igreja Presbiteriana do Crato - Fé, Comunhão e Serviço'
        description='Bem-vindo à Igreja Presbiteriana do Crato. Cultos aos domingos às 9h e 19h. Venha conhecer nossa comunidade cristã reformada!'
        keywords='igreja presbiteriana crato, IPB crato, cultos crato, igreja evangélica crato, igreja protestante cariri'
      />
      <div className='home-page'>
        <AnnouncementsSection />
        <ScheduleSection />
        <LeadershipSection />
        <WeeklyBulletinSection />
        <GallerySection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
