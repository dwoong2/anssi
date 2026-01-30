import React from 'react';
import './StickyBookingButton.css';
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';

const StickyBookingButton = () => {
    const { language } = useLanguage();

    const labels = {
        [LANGUAGES.EN]: "Claim Your Spot Before It's Gone",
        [LANGUAGES.CN]: "席位抢手，预订从速", // Seats are hot, book fast
        [LANGUAGES.JP]: "お席がなくなる前に予約を"  // Reserve before seats are gone
    };

    return (
        <a
            href="https://www.catchtable.net/explore/shop/Y2F0Y2hfc1craGN3TWtJM1QzQ1BqQmRvMHdtdz09"
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-booking-btn"
        >
            {labels[language]}
        </a>
    );
};

export default StickyBookingButton;
