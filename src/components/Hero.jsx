import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './Hero.css';
import heroImage from '../assets/korean_makgeolli_pouring_hands_moody_lighting.png';
import michelinBadge from '../assets/michelin_badge.png';
import blueRibbonBadge from '../assets/blue_ribbon_badge.png';

const Hero = () => {
    const { language } = useLanguage();

    const content = {
        [LANGUAGES.EN]: {
            main: (
                <>
                    The First Traditional<br />
                    Liquor Bar<br />
                    <span className="hero-highlight">
                        Selected by<br />
                        Michelin Guide
                    </span>
                </>
            ),
            sub: "Anssi Makgeolli"
        },
        [LANGUAGES.CN]: {
            main: (
                <>
                    首家入选<br />
                    传统酒馆<br />
                    <span className="hero-highlight">
                        <span style={{ whiteSpace: 'nowrap' }}>米其林指南</span>
                    </span>
                </>
            ),
            sub: "安氏米酒"
        },
        [LANGUAGES.JP]: {
            main: (
                <>
                    初選定の<br />
                    伝統酒場<br />
                    <span className="hero-highlight">
                        <span style={{ whiteSpace: 'nowrap' }}>ミシュラン</span><br />
                        <span style={{ whiteSpace: 'nowrap' }}>ガイド</span>
                    </span>
                </>
            ),
            sub: "アン氏マッコリ"
        }
    };

    return (
        <section className="hero-section" data-language={language}>
            <div className="video-background-container">
                <img src={heroImage} alt="Traditional Korean Liquor Bar Atmosphere" className="hero-image" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="badges-container">
                    <img src={michelinBadge} alt="Michelin Guide" className="badge-img" />
                    <img src={blueRibbonBadge} alt="Blue Ribbon Survey" className="badge-img" />
                </div>

                <div className="text-container">
                    <h2 className="hero-brand-name">
                        {content[language].sub}
                    </h2>
                    <h1 className="hero-main-title">
                        {content[language].main}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
