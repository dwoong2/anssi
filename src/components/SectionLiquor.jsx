import React from 'react';
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './SectionLiquor.css';

const SectionLiquor = () => {
    const { language } = useLanguage();

    const heading = {
        [LANGUAGES.EN]: "The Liquor",
        [LANGUAGES.CN]: "The Liquor",
        [LANGUAGES.JP]: "The Liquor"
    };

    const sub = {
        [LANGUAGES.EN]: "Curated for the Curious Soul",
        [LANGUAGES.CN]: "为好奇的灵魂甄选",
        [LANGUAGES.JP]: "好奇心旺盛な魂のために"
    };

    return (
        <section className="narrative-section liquor-section">
            <div className="liquor-fog"></div>
            <div className="liquor-content">
                <h2 className="section-heading-serif">{heading[language]}</h2>
                <p className="section-subtext-sans">{sub[language]}</p>

                <div className="liquor-grid">
                    <div className="liquor-item">
                        <div className="liquor-circle red"></div>
                        <span className="liquor-name">Red Monkey</span>
                    </div>
                    <div className="liquor-item">
                        <div className="liquor-circle white"></div>
                        <span className="liquor-name">White Lotus</span>
                    </div>
                    <div className="liquor-item">
                        <div className="liquor-circle house"></div>
                        <span className="liquor-name">House Special</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionLiquor;
