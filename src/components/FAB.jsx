import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './FAB.css';
import { useState, useEffect } from 'react'; // Added useState and useEffect

const FAB = () => {
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false); // State for visibility

    // Effect to handle scroll visibility
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) { // Show after scrolling 300px
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const labels = {
        [LANGUAGES.EN]: "Claim Your Spot Before It's Gone",
        [LANGUAGES.CN]: "席位抢手，预订从速",
        [LANGUAGES.JP]: "お席がなくなる前に予約を"
    };

    return (
        <a
            href="https://app.catchtable.co.kr/ct/shop/anssi_makgeolli"
            target="_blank"
            rel="noopener noreferrer"
            className={`fab-container ${isVisible ? 'visible' : ''}`}
        >
            <span className="fab-text">{labels[language]}</span>
        </a>
    );
};

export default FAB;
