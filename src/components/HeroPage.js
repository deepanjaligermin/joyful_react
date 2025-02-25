import React from 'react';
import { Link } from 'react-router-dom';
import gear from '../assets/visual.png';
import Logo from '../assets/Logo.png';
import Navbar from './Navbar';
import BrandScroll from './BrandScroll';
import next from '../assets/next.svg';


const HeroPage = () => {
  const partners = [
    next, 'Quantum', 'Echo Valley', 'Celestial', 'PULSE', 'APEX',
    next, 'Quantum', 'Echo Valley', 'Celestial', 'PULSE', 'APEX'
  ];

  return (
    <div className="min-h-[84vh] md:h-[84vh] flex flex-col">
      {/* Hero Section */}
      <main className="relative flex-grow">
        <div
          className="min-h-[70vh] md:h-[70vh]"
          style={{ background: 'linear-gradient(201.28deg, #EAEEFE 45.21%, #183EC2 97.31%)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center h-full px-4 sm:px-6">
            {/* Content */}
            <div className="w-full md:w-1/2 text-left pl-5 md:pl-0">
              <p
                className="text-sm px-4 py-1 rounded-lg border border-black text-black text-center inline-block mb-5"
              >
                Version 2.0 is here
              </p>
              <div
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                style={{
                  fontWeight: 700,
                  lineHeight: '1.1',
                  letterSpacing: '-6.5%',
                  background: 'linear-gradient(180deg, #000000 0%, #001354 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Pathway to productivity
              </div>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
                Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
              </p>
              <div className="flex space-x-4">
                <Link to="/joyful/login" className="bg-black text-white px-6 py-3 rounded-lg">
                  Get for free
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-full max-w-[511px] h-auto md:h-[448px]">
                <img
                  src={gear}
                  alt="Productivity visualization"
                  className="w-full h-auto max-h-[448px] md:absolute md:top-0 md:left-0 md:w-full md:h-full md:object-contain"
                />
              </div>
            </div>
          </div>

          {/* Partner Logos Section with Infinite Scroll */}
          <div className="h-[15vh] bg-white relative overflow-hidden w-full">
            <div className="absolute w-full h-full flex items-center">
              {/* Gradient Overlay for fade effect */}
              <div className="absolute left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

              {/* Scrolling container */}
              <div className="flex animate-scroll whitespace-nowrap">
                {partners.map((partner, index) => (
                  <div
                    key={`${partner}-${index}`}
                    className="flex items-center justify-center mx-6 sm:mx-12 min-w-[100px] sm:min-w-[120px]"
                  >
                    <img
                      src={partner}
                      className="h-6 sm:h-8 w-auto "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroPage;