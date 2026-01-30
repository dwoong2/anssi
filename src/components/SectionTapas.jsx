import React, { useEffect, useRef } from 'react';
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './SectionTapas.css';

// Using the same vibe images as placeholders for food if specific food images aren't available yet
// In a real scenario, we'd import specific food images
import foodImg1 from '../assets/korean_artisanal_tapas_high_end_plating.png';
import vibeImg2 from '../assets/vibe/vibe_02.png';

const SectionTapas = () => {
    const { language } = useLanguage();

    // Data for the feed
    const menuItems = [
        { id: 1, img: foodImg1, nameEn: "Korean Artisan Tapas", ingredients: "Seasonal Ingredients", desc: "" },
        { id: 2, img: foodImg1, nameEn: "Korean Artisan Tapas", ingredients: "Seasonal Ingredients", desc: "" },
        { id: 3, img: foodImg1, nameEn: "Korean Artisan Tapas", ingredients: "Seasonal Ingredients", desc: "" },
        { id: 4, img: foodImg1, nameEn: "Korean Artisan Tapas", ingredients: "Seasonal Ingredients", desc: "" }
    ];

    const heading = {
        [LANGUAGES.EN]: "The Cuisine",
        [LANGUAGES.CN]: "The Cuisine",
        [LANGUAGES.JP]: "The Cuisine"
    };

    return (
        <section className="narrative-section tapas-section">
            <h2 className="section-heading-serif">{heading[language]}</h2>

            <div className="tapas-feed">
                {menuItems.map((item) => (
                    <div key={item.id} className="tapas-card">
                        <img src={item.img} alt={item.nameEn} className="tapas-image" />
                        <div className="tapas-overlay-bar">
                            <span className="tapas-overlay-text">{item.nameEn}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionTapas;
