import React, { useEffect, useRef } from 'react';
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './SectionTapas.css';

// Imported user-provided cuisine images
import cuisineImg1 from '../assets/cuisine/cuisine_01.png';
import cuisineImg2 from '../assets/cuisine/cuisine_02.png';
import cuisineImg3 from '../assets/cuisine/cuisine_03.png';
import cuisineImg4 from '../assets/cuisine/cuisine_04.png';
import cuisineImg5 from '../assets/cuisine/cuisine_05.png';
import vibeImg2 from '../assets/vibe/vibe_02.png';

const SectionTapas = () => {
    const { language } = useLanguage();

    // Data for the feed
    const menuItems = [
        { id: 1, img: cuisineImg1, nameEn: "Seasonal Delicacy", ingredients: "Chef's Special", desc: "" },
        { id: 2, img: cuisineImg2, nameEn: "Signature Dish", ingredients: "Premium Ingredients", desc: "" },
        { id: 3, img: cuisineImg3, nameEn: "Korean Artisan Tapas", ingredients: "Authentic Flavor", desc: "" },
        { id: 4, img: cuisineImg4, nameEn: "Innovative Plate", ingredients: "Modern Touch", desc: "" },
        { id: 5, img: cuisineImg5, nameEn: "Traditional Taste", ingredients: "Classic Recipe", desc: "" }
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
