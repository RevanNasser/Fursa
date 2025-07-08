import { useTranslation } from 'react-i18next';
import { Button } from './ui/Button';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"

      size="sm"
    className="px-3 py-2 rounded-md text-sm font-medium text-[#e2e2e2] hover:text-[#2b3830] hover:bg-white/70 transition-colors duration-200 cursor-pointer"

    >
      {i18n.language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;