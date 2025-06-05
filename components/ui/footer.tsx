import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <nav className="flex justify-center items-center">
        <ul className="flex flex-wrap justify-center">
          <li>
            <a 
              href="/other-assets/resume_2024_figma.pdf"
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
              href="mailto:therobChatterjee @gmail.com"
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              MAIL
            </a>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <Link 
              href="#"
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              PHOTOS
            </Link>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <a 
              href="https://twitter.com/RomeetkChatterjee "
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              TWITTER
            </a>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <a 
              href="https://www.linkedin.com/in/RomeetkChatterjee /" 
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <a 
              href="https://github.com/robkChatterjee " 
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB 
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
