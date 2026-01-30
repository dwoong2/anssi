import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LANGUAGES = {
    EN: 'en',
    CN: 'cn',
    JP: 'jp',
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(LANGUAGES.EN);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
