import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
    {/* <footer className="w-full pt-3 shadow-line"> */}
      <nav className="flex justify-center items-center">
        <ul className="flex flex-wrap justify-center">
          <li>
            <a 
              href="/other-assets/resume_2024.pdf" 
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <a href="mailto:therobkan@gmail.com"
               className="b_mono text-primary-color link-underline link-underline-hover"
            >
              MAIL
            </a>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <Link href="#"
              className="b_mono text-primary-color link-underline link-underline-hover"
            >
              PHOTOS
            </Link>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <a href="https://twitter.com/robertkkan"
               className="b_mono text-primary-color link-underline link-underline-hover"
               target="_blank"
               rel="noopener noreferrer"
            >
              TWITTER
            </a>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <a href="https://github.com/robkkan" 
               className="b_mono text-primary-color link-underline link-underline-hover"
               target="_blank"
               rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li className="mx-0 text-primary-color">/</li>
          <li>
            <a 
              href="https://read.cv/robertkkan" 
              className="b_mono text-primary-color link-underline link-underline-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              READ.CV
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
