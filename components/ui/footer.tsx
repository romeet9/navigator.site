import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 py-4 border-t border-tertiary-color">
      <div className="page-container flex flex-col md:flex-row justify-between items-center">
        <p className="b_mono text-secondary-color mb-4 md:mb-0">
          © {new Date().getFullYear()} Robert Kan. All rights reserved.
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/privacy" className="b_mono text-secondary-color hover:text-primary-color transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="b_mono text-secondary-color hover:text-primary-color transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <a 
                href="https://twitter.com/robertkkan" 
                className="b_mono text-secondary-color hover:text-primary-color transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
