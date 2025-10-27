import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO = ({
  title = 'Igreja Presbiteriana do Crato - Fé, Comunhão e Serviço',
  description = 'Bem-vindo à Igreja Presbiteriana do Crato. Uma comunidade cristã reformada que adora a Deus, estuda a Palavra e serve ao próximo.',
  keywords = 'igreja presbiteriana, crato, ceará, igreja evangélica, cultos, IPB, cristianismo reformado',
  ogImage = 'https://igrejapresbiterianadocrato.com.br/og-image.jpg',
  ogType = 'website',
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = 'https://igrejapresbiterianadocrato.com.br';
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = `${title} | IPB Crato/CE`;

    // Update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false
    ) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);

    // Twitter Card
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:url', currentUrl);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);
  }, [title, description, keywords, ogImage, ogType, currentUrl]);

  return null;
};

export default SEO;
