import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <nav className="flex justify-center items-center">
        <ul className="flex flex-wrap justify-center">
          <li>
            <a 
              href="/other-assets/design_resume_romeet_2025.pdf"
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <a 
              href="mailto:chatterjeeromeet9@gmail.com"
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              MAIL
            </a>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <a 
              href="https://www.linkedin.com/in/romeet-in/" 
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
