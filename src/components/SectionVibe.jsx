import React, { useEffect, useState } from 'react';
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './SectionVibe.css';
import vibeImg1 from '../assets/vibe/vibe_carousel_1.png';
import vibeImg2 from '../assets/vibe/vibe_carousel_2.png';
import vibeImg3 from '../assets/vibe/vibe_carousel_3.png';
import vibeImg4 from '../assets/vibe/vibe_carousel_4.png';
import vibeImg5 from '../assets/vibe/vibe_carousel_5.png';

const SectionVibe = () => {
    const { language } = useLanguage();

    const carouselImages = [vibeImg1, vibeImg2, vibeImg3, vibeImg4, vibeImg5];

    const content = {
        [LANGUAGES.EN]: {
            title: "The Vibe",
            body: "Where the deep roots of Korean tradition\nentwine with global culture.\n\nA hidden sanctuary for those who seek\nthe extraordinary in every sip."
        },
        [LANGUAGES.CN]: {
            title: "The Vibe",
            body: "Where the deep roots of Korean tradition\nentwine with global culture.\n\nA hidden sanctuary for those who seek\nthe extraordinary in every sip."
        },
        [LANGUAGES.JP]: {
            title: "The Vibe",
            body: "Where the deep roots of Korean tradition\nentwine with global culture.\n\nA hidden sanctuary for those who seek\nthe extraordinary in every sip."
        }
    };

    return (
        <section className="narrative-section vibe-section">
            <div className="vibe-container">
                <div className="vibe-header">
                    <h2 className="vibe-title">{content[language].title}</h2>
                    <p className="vibe-body">
                        {content[language].body.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}<br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <div className="vibe-carousel">
                    {/* duplicate list for seamless loop */}
                    {[...carouselImages, ...carouselImages].map((img, index) => (
                        <div key={index} className="vibe-carousel-item">
                            <img src={img} alt={`Vibe ${index + 1}`} className="vibe-carousel-image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionVibe;
