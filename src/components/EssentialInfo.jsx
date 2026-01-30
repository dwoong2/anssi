import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './EssentialInfo.css';
import menuImage from '../assets/korean_artisanal_tapas_high_end_plating.png'; // To be generated

const EssentialInfo = () => {
    const { language } = useLanguage();

    const content = {
        [LANGUAGES.EN]: {
            menuTitle: "Korean Artisanal Tapas",
            policyTitle: "Essential Information",
            policy1: "No Vegan / No Gluten-Free",
            policy2: "15-min Late Policy",
            reserveTitle: "Monthly Reservation Open",
            reserveText: "Opens 1st of every month"
        },
        [LANGUAGES.CN]: {
            menuTitle: "韩式手工小吃",
            policyTitle: "重要信息",
            policy1: "无素食 / 无无麸质菜单",
            policy2: "迟到15分钟取消预订",
            reserveTitle: "每月预订开启",
            reserveText: "每月1日开放"
        },
        [LANGUAGES.JP]: {
            menuTitle: "韓国式職人タパス",
            policyTitle: "重要なお知らせ",
            policy1: "ビーガン/グルテンフリー対応不可",
            policy2: "15分遅刻でキャンセル規定",
            reserveTitle: "毎月の予約開始",
            reserveText: "毎月1日オープン"
        }
    };

    const t = content[language];

    return (
        <section className="essential-info-section">
            <div className="scroll-container">
                {/* Card 1: Menu */}
                <div className="info-card menu-card">
                    <img src={menuImage} alt="Menu" className="card-image" />
                    <div className="card-overlay">
                        <h3>{t.menuTitle}</h3>
                    </div>
                </div>

                {/* Card 2: Policy */}
                <div className="info-card policy-card">
                    <div className="card-header">
                        <h3>{t.policyTitle}</h3>
                    </div>
                    <ul className="policy-list">
                        <li>
                            <span className="icon">⚠️</span>
                            <span>{t.policy1}</span>
                        </li>
                        <li>
                            <span className="icon">⏰</span>
                            <span>{t.policy2}</span>
                        </li>
                    </ul>
                </div>

                {/* Card 3: Reserve */}
                <div className="info-card reserve-card">
                    <div className="card-icon">📅</div>
                    <h3>{t.reserveTitle}</h3>
                    <p>{t.reserveText}</p>
                </div>
            </div>
        </section>
    );
};

export default EssentialInfo;
