import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="mt-5 pt-4 border-t-0.8 border-tertiary-color">
      <div className="flex justify-center">
        <nav className="flex items-center">
          <ul className="flex">
            <li>
              <a 
                href="/other-assets/resume_2024.pdf" 
                className="b_mono text-primary-color hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </a>
            </li>
            <li className="mx-0 text-primary-color">/</li>
            <li>
              <a href="mailto:therobkan@gmail.com"
                 className="b_mono text-primary-color hover:underline"
              >
                EMAIL
              </a>
            </li>
            <li className="mx-0 text-primary-color">/</li>
            <li>
              <Link href="#"
                className="b_mono text-primary-color hover:underline"
              >
                PHOTOS
              </Link>
            </li>
            <li className="mx-0 text-primary-color">/</li>
            <li>
              <a href="https://twitter.com/robertkkan"
                 className="b_mono text-primary-color hover:underline"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                TWITTER
              </a>
            </li>
            <li className="mx-0 text-primary-color">/</li>
            <li>
              <a href="https://www.cosmos.so/robertkkan" 
                 className="b_mono text-primary-color hover:underline"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                COSMOS
              </a>
            </li>
            <li className="mx-0 text-primary-color">/</li>
            <li>
              <a 
                href="https://read.cv/robertkkan" 
                className="b_mono text-primary-color hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ.CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
