import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-tertiary text-white'
            : 'bg-secondary text-black hover:bg-tertiary hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('it')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          i18n.language === 'it'
            ? 'bg-tertiary text-white'
            : 'bg-secondary text-black hover:bg-tertiary hover:text-white'
        }`}
      >
        IT
      </button>
    </div>
  );
};

export default LanguageSwitcher;