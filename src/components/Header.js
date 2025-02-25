import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import gear from '../assets/visual.png';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import HeroPage from './HeroPage';
import BrandScroll from './BrandScroll';
import ArrowIcon from '../assets/signin/arrow.svg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Customers', href: '#customers' },
    { label: 'Updates', href: '#updates' },
    { label: 'Help', href: '#help' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-[16vh]" style={{ minHeight: '16vh' }}>
      {/* Webinar Banner */}
      <div
        className="w-full bg-indigo-900 text-white flex flex-col sm:flex-row justify-center items-center py-2 sm:py-3 gap-2 sm:gap-4 text-xs sm:text-sm"
        style={{ height: '7.3vh', flexShrink: 0 }}
      >
        <span>Watch out latest Product Updates Webinar</span>
        <div className='flex flex-row font-semibold items-center gap-2'>
          <span>Joyful CX Feb 2025</span>
          <img src={ArrowIcon} alt="arrow" className="w-4 h-4" />
        </div>
      </div>

      {/* Header/Navigation */}
      <header
        className="w-full z-50 h-[8.7vh] flex-shrink-0"
        style={{ backgroundColor: 'rgba(234, 238, 254, 1)', boxShadow: 'none' }}
      >
        <nav className="flex items-center justify-between px-4 py-4 lg:px-8 h-full" style={{ padding: '1.25rem', minWidth: '100vw' }}>
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 w-auto mr-2" />
          </Link>

          {isDesktop && (
            <div className="flex items-center space-x-8" style={{ fontWeight: '400', lineHeight: '23px', color: 'rgba(0, 0, 0, 0.6)' }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
              <Link to="/joyful/login" className="bg-black text-white px-4 py-2 rounded-lg">
                Get for free
              </Link>
            </div>
          )}

          {!isDesktop && (
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;