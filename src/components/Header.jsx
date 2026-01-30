import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './Header.css';

const Header = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <header className="global-header">
            <div className="header-content">
                <div className="logo">
                    <img src="/src/assets/logo_white.png" alt="Anssi Makgeolli" className="logo-img" />
                </div>

                <nav className="lang-switcher">
                    <button
                        className={`lang-btn ${language === LANGUAGES.EN ? 'active' : ''}`}
                        onClick={() => setLanguage(LANGUAGES.EN)}
                        aria-label="English"
                    >
                        🇺🇸
                    </button>
                    <button
                        className={`lang-btn ${language === LANGUAGES.CN ? 'active' : ''}`}
                        onClick={() => setLanguage(LANGUAGES.CN)}
                        aria-label="Chinese"
                    >
                        🇨🇳
                    </button>
                    <button
                        className={`lang-btn ${language === LANGUAGES.JP ? 'active' : ''}`}
                        onClick={() => setLanguage(LANGUAGES.JP)}
                        aria-label="Japanese"
                    >
                        🇯🇵
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
