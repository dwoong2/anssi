import { useState } from 'react';
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './Location.css';

const Location = () => {
    const { language } = useLanguage();
    const [toastMessage, setToastMessage] = useState(null);

    const ADDRESS = {
        EN: "57, Hoenamu-ro, Yongsan-gu, Seoul, Republic of Korea",
        KR: "서울 용산구 회나무로 57" // Used for Taxi
    };

    const copyToClipboard = (text, message) => {
        navigator.clipboard.writeText(text).then(() => {
            setToastMessage(message);
            setTimeout(() => setToastMessage(null), 3000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const content = {
        [LANGUAGES.EN]: {
            copyUser: "📍 Copy English Address",
            copyTaxi: "🚕 For Taxi Driver (Show Korean Address)",
            copied: "Address Copied!"
        },
        [LANGUAGES.CN]: {
            copyUser: "📍 复制英文地址",
            copyTaxi: "🚕 给出租车司机看 (复制韩文地址)",
            copied: "地址已复制!"
        },
        [LANGUAGES.JP]: {
            copyUser: "📍 英語住所コピー",
            copyTaxi: "🚕 タクシー運転手用 (韓国語住所コピー)",
            copied: "住所をコピーしました!"
        }
    };

    const t = content[language];

    return (
        <section className="location-section">
            {/* Map Container */}
            <div className="map-container">
                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=Anssi+Makgeolli&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Google Maps"
                ></iframe>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Anssi+Makgeolli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-overlay-link"
                    aria-label="Open in Google Maps"
                >
                </a>
            </div>

            {/* Copy Buttons */}
            <div className="action-buttons">
                <button
                    className="btn-copy btn-user"
                    onClick={() => copyToClipboard(ADDRESS.EN, t.copied)}
                >
                    {t.copyUser}
                </button>
                <button
                    className="btn-copy btn-taxi"
                    onClick={() => copyToClipboard(ADDRESS.KR, t.copied)}
                >
                    {t.copyTaxi}
                </button>
            </div>

            {/* Toast Notification */}
            <div className={`toast-notification ${toastMessage ? 'show' : ''}`}>
                {toastMessage}
            </div>
        </section>
    );
};

export default Location;
