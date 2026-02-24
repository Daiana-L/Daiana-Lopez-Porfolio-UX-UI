import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Hook personalizado para obtener el nombre del archivo CV según el idioma actual
 * @returns {string} - Nombre del archivo PDF del CV
 */
export const useCVDownload = () => {
  const { language } = useLanguage();
  
  const getCVFileName = () => {
    return language === 'es' ? 'daiana-cv-español.pdf' : 'daiana-cv-english.pdf';
  };
  
  const getCVPath = () => {
    return `/${getCVFileName()}`;
  };
  
  return {
    cvFileName: getCVFileName(),
    cvPath: getCVPath(),
    getCVFileName,
    getCVPath
  };
};
