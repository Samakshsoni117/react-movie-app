import React from 'react';
// Import icons from the library
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // Automatically gets the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Professional Links */}
        <div className="footer-links">
          <a href="https://github.com/samaksh117" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/samaksh-soni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://my-portfolio-samaksh.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
            <FaGlobe />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="copyright-text">
          &copy; {currentYear} Designed & Developed by Samaksh
        </p>
        
        {/* TMDb Attribution */}
        <p className="tmdb-attribution">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p>
      </div>
    </footer>
  );
};

export default Footer;