import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import Logo from '../assets/Group.png'
import Footer from './Footer';

export default function WebsiteFooter() {
  const footerLinks = {
    product: ['Features', 'Integrations', 'Updates', 'FAQ', 'Pricing'],
    company: ['About', 'Blog', 'Careers', 'Manifesto', 'Press', 'Contact'],
    resources: ['Examples', 'Community', 'Guides', 'Docs'],
    legal: ['Privacy', 'Terms', 'Security']
  };

  return (
    <div className="w-full overflow-hidden" style={{padding: 0}}>
      <div className="w-full relative" style={{ height: '472px', background: 'linear-gradient(180deg, #FFFFFF 27.96%, #D2DCFF 102.93%)' }}>
        <div className="container mx-auto px-4 relative h-full flex items-center justify-center">
          {/* Left decorative element with responsive positioning */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 
                          lg:translate-x-0 
                          md:translate-x-[-30%] 
                          sm:translate-x-[-50%] 
                          max-md:hidden">
             <img src={image1} alt="Decorative element" width={362} height={362} /> 
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 
                          lg:translate-x-0 
                          md:translate-x-[30%] 
                          sm:translate-x-[50%] 
                          max-md:hidden">
             <img src={image2} alt="Decorative element" width={363} height={363} />
          </div>
          
          {/* Sign-up content */}
          <div className="max-w-xl mx-auto text-center relative z-10 px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" 
                style={{
                  background: 'linear-gradient(180deg, #000000 0%, #001354 100%)', 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: '#001354'
                }}>
              Sign up for free today
            </h2>
            <p className="text-gray-700 mb-8">
              Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                Get for free
              </button>
              <button className="bg-transparent text-black px-6 py-2 flex items-center justify-center hover:underline">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
