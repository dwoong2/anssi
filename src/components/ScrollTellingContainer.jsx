import React from 'react';
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './ScrollTelling.css';
import SectionVibe from './SectionVibe';
import SectionTapas from './SectionTapas';
import SectionLiquor from './SectionLiquor';
import SectionStaff from './SectionStaff';
import SectionExperience from './SectionExperience';
import StickyBookingButton from './StickyBookingButton';

const ScrollTellingContainer = () => {
    return (
        <div className="scroll-telling-container">
            <SectionVibe />
            <SectionTapas />
            <SectionLiquor />
            <SectionStaff />
            <SectionExperience />

            {/* StickyBookingButton removed as per request to focus on FAB */}
        </div>
    );
};

export default ScrollTellingContainer;
