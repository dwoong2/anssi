import React from 'react';
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './SectionExperience.css';

const SectionExperience = () => {
    const { language } = useLanguage();

    const heading = {
        [LANGUAGES.EN]: "The Experience",
        [LANGUAGES.CN]: "The Experience",
        [LANGUAGES.JP]: "The Experience"
    };

    const sub = {
        [LANGUAGES.EN]: "It’s a Cultural Immersion.",
        [LANGUAGES.CN]: "这是一场文化沉浸之旅。",
        [LANGUAGES.JP]: "それは文化への没入です。"
    };

    return (
        <section className="narrative-section experience-section">
            <div className="experience-content">
                <h2 className="section-heading-serif">{heading[language]}</h2>
                <p className="section-subtext-sans">{sub[language]}</p>
                <div className="experience-quote">
                    "Traditional alcohol is not just a drink,<br />it is the spirit of our ancestors."
                </div>
            </div>
        </section>
    );
};

export default SectionExperience;
