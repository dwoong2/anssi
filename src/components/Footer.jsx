import React from 'react';
import EssentialInfo from './EssentialInfo'; // Reuse existing logic for policies/hours
import { useLanguage, LANGUAGES } from '../hooks/useLanguage';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="global-footer">
            {/* We reuse the EssentialInfo component content here but styled for footer if needed */}
            {/* For MVP, let's just embed the EssentialInfo inside the footprint 
                or recreate a simpler version for the footer. 
                The user requested "Policies to Footer". 
                Let's use EssentialInfo but ensuring it looks like a footer section. */}
            <EssentialInfo />

            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Anssi Makgeolli. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
