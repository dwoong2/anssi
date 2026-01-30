import React from 'react';
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './SectionStaff.css';
import staffBg from '../assets/staff_background.png';

const SectionStaff = () => {
    const { language } = useLanguage();

    const heading = {
        [LANGUAGES.EN]: "The Staff",
        [LANGUAGES.CN]: "The Staff",
        [LANGUAGES.JP]: "The Staff"
    };

    return (
        <section className="narrative-section staff-section" style={{ backgroundImage: `url(${staffBg})` }}>
            <div className="staff-overlay"></div>
            <div className="staff-content">
                <h2 className="section-heading-serif">{heading[language]}</h2>

                <div className="staff-language-container">
                    <p className="staff-main-text">
                        Catch the Korean vibe,<br />
                        enjoy the bite,<br />
                        Level up your trip with<br />
                        some bragging right.
                    </p>
                    <p className="staff-sub-text">
                        And don't worry,<br />
                        we talk to you in your native tongue
                    </p>

                    <div className="language-badges">
                        <div className="lang-badge">
                            <span className="lang-flag">🇺🇸</span>
                            <span className="lang-name">Eng</span>
                        </div>
                        <div className="lang-badge">
                            <span className="lang-flag">🇨🇳</span>
                            <span className="lang-name">Chn</span>
                        </div>
                        <div className="lang-badge">
                            <span className="lang-flag">🇯🇵</span>
                            <span className="lang-name">Jap</span>
                        </div>
                        <div className="lang-badge">
                            <span className="lang-flag">🇫🇷</span>
                            <span className="lang-name">Fre</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionStaff;
